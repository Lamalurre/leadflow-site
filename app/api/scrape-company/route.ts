import { NextRequest, NextResponse } from "next/server";
import { safeFetchText, htmlToText } from "@/lib/safeFetch";

export const maxDuration = 30;

const ALLOWED_BUSINESS_AREAS = [
  "cleaning",
  "hantverkare",
  "flyttfirma",
  "bilfirma",
  "klinik",
  "jurist",
  "konsult",
  "maklare",
  "servicebolag",
  "other",
] as const;

const SYSTEM_PROMPT = `Du är en assistent som läser text från ett svenskt företags hemsida och extraherar strukturerad information för att förifylla ett registreringsformulär.

Svara ENDAST med giltig JSON, exakt enligt detta format (inga extra fält, inga kommentarer):

{
  "company_name": string,
  "business_areas": string[] (välj en eller flera EXAKT från: ${ALLOWED_BUSINESS_AREAS.join(", ")}),
  "trades": string[] (endast om "hantverkare" är valt: fritextlista av yrken, t.ex. ["Bygg","VVS","El","Målare","Snickare"], annars tom lista),
  "services": string[] (korta tjänstenamn, max 6 st),
  "area": string (geografiskt område de verkar i, tom sträng om okänt),
  "tone": string (kort beskrivning av tonläget på sidan, t.ex. "Professionellt men personligt"),
  "contact_email": string | null,
  "contact_phone": string | null,
  "pricing_hint": string | null (fritext om prissättning om det nämns, annars null),
  "rut_or_rot_relevant": boolean (true om städ/bygg/hantverkstjänster som troligen kan omfattas av RUT/ROT),
  "guarantee_text": string | null (garanti/trygghetslöfte om det nämns),
  "example_lead_text": string (en realistisk, påhittad kundförfrågan som en typisk kund till detta företag skulle kunna skicka in, 1-3 meningar, på svenska),
  "example_summary": string (en kort AI-sammanfattning av exempelförfrågan ovan, en mening),
  "example_missing_info": string[] (1-3 korta saker som skulle saknas i exempelförfrågan för att kunna ge en offert, t.ex. "Kvadratmeter", "Önskat datum"),
  "example_draft_reply": string (ett kort utkast till svar på exempelförfrågan, i den ton du identifierat, 2-4 meningar, som INTE anger ett exakt pris utan hänvisar till att en offert tas fram)
}

Om informationen inte finns i texten, gissa inte — använd tom sträng, tom lista eller null. Hitta aldrig på kontaktuppgifter.`;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const url = body?.url;

  if (typeof url !== "string" || !url.trim()) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  let parsed: URL;
  try {
    parsed = new URL(url.trim().match(/^https?:\/\//) ? url.trim() : `https://${url.trim()}`);
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  let pageText: string;
  try {
    const html = await safeFetchText(parsed.toString());
    pageText = htmlToText(html);
  } catch (err) {
    console.error("safeFetchText error:", err);
    return NextResponse.json(
      { error: "Kunde inte hämta sidan. Kontrollera adressen eller fyll i manuellt." },
      { status: 422 }
    );
  }

  if (pageText.length < 50) {
    return NextResponse.json(
      { error: "Sidan innehöll för lite text. Fyll i manuellt istället." },
      { status: 422 }
    );
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("OPENAI_API_KEY missing");
    return NextResponse.json(
      { error: "Autofyll är inte tillgängligt just nu. Fyll i manuellt." },
      { status: 500 }
    );
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);

  try {
    const aiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        response_format: { type: "json_object" },
        temperature: 0.4,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: `Webbadress: ${parsed.toString()}\n\nText från sidan:\n${pageText}`,
          },
        ],
      }),
    });

    if (!aiRes.ok) {
      const errText = await aiRes.text().catch(() => "");
      console.error("OpenAI error:", aiRes.status, errText);
      return NextResponse.json(
        { error: "Kunde inte analysera sidan just nu. Fyll i manuellt." },
        { status: 502 }
      );
    }

    const data = await aiRes.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) {
      return NextResponse.json(
        { error: "Kunde inte tolka svaret. Fyll i manuellt." },
        { status: 502 }
      );
    }

    let extracted: Record<string, unknown>;
    try {
      extracted = JSON.parse(content);
    } catch {
      return NextResponse.json(
        { error: "Kunde inte tolka svaret. Fyll i manuellt." },
        { status: 502 }
      );
    }

    const businessAreas = Array.isArray(extracted.business_areas)
      ? (extracted.business_areas as unknown[]).filter(
          (a): a is string =>
            typeof a === "string" &&
            (ALLOWED_BUSINESS_AREAS as readonly string[]).includes(a)
        )
      : [];

    return NextResponse.json({
      company_name: typeof extracted.company_name === "string" ? extracted.company_name : "",
      business_areas: businessAreas,
      trades: Array.isArray(extracted.trades) ? extracted.trades : [],
      services: Array.isArray(extracted.services) ? extracted.services : [],
      area: typeof extracted.area === "string" ? extracted.area : "",
      tone: typeof extracted.tone === "string" ? extracted.tone : "",
      contact_email: typeof extracted.contact_email === "string" ? extracted.contact_email : null,
      contact_phone: typeof extracted.contact_phone === "string" ? extracted.contact_phone : null,
      pricing_hint: typeof extracted.pricing_hint === "string" ? extracted.pricing_hint : null,
      rut_or_rot_relevant: Boolean(extracted.rut_or_rot_relevant),
      guarantee_text: typeof extracted.guarantee_text === "string" ? extracted.guarantee_text : null,
      example_lead_text: typeof extracted.example_lead_text === "string" ? extracted.example_lead_text : "",
      example_summary: typeof extracted.example_summary === "string" ? extracted.example_summary : "",
      example_missing_info: Array.isArray(extracted.example_missing_info) ? extracted.example_missing_info : [],
      example_draft_reply: typeof extracted.example_draft_reply === "string" ? extracted.example_draft_reply : "",
    });
  } catch (err) {
    console.error("scrape-company error:", err);
    return NextResponse.json(
      { error: "Något gick fel. Fyll i manuellt." },
      { status: 500 }
    );
  } finally {
    clearTimeout(timer);
  }
}
