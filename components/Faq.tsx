import Link from "next/link";
import Reveal from "./motion/Reveal";
import { RevealGroup, RevealItem } from "./motion/RevealGroup";

const faqs = [
  {
    q: "Skickar Sylvor automatiskt?",
    a: "Sylvor skickar endast ett säkert första autosvar automatiskt. Allt annat — offert, pris och fortsatta svar — kräver ditt godkännande.",
  },
  {
    q: "Vad skickas automatiskt?",
    a: "Bara en trygg bekräftelse på att ni tagit emot förfrågan, t.ex. \"Tack för ditt meddelande, vi återkommer inom kort.\" Aldrig pris eller löften.",
  },
  {
    q: "Skickas offert automatiskt?",
    a: "Nej. Offert och pris kräver alltid ditt godkännande innan något skickas till kunden.",
  },
  {
    q: "Vad händer om kunden svarar tillbaka?",
    a: "Sylvor läser svaret och tar fram ett nytt svarsförslag — men inget skickas automatiskt. Du godkänner varje gång, precis som första gången.",
  },
  {
    q: "Fungerar det med email?",
    a: "Ja, e-post är ett av de vanligaste sätten att ta emot leads på och stöds fullt ut från start.",
  },
  {
    q: "Kommer SMS stödjas?",
    a: "Ja, SMS som intagskanal är på väg. Redan idag kan du välja SMS som föredragen notis-kanal.",
  },
  {
    q: "Behöver vi byta system?",
    a: "Nej. Sylvor kopplas till kanalerna ni redan använder — inga nya verktyg att lära er.",
  },
  {
    q: "Kan vi ändra svaren?",
    a: "Ja. Du kan redigera pris, ton och innehåll i varje svarsförslag innan du godkänner och skickar.",
  },
  {
    q: "Vad räknas som ett lead?",
    a: "Varje ny förfrågan som kommer in via en ansluten kanal — e-post, formulär eller DM — räknas som ett lead.",
  },
  {
    q: "Hur fungerar trial?",
    a: "Du testar Sylvor gratis i 7 dagar med full funktionalitet. Inget kreditkort krävs för att komma igång.",
  },
  {
    q: "Finns bindningstid?",
    a: "Nej, ingen bindningstid. Avsluta när du vill.",
  },
  {
    q: "Hur hanteras kunddata?",
    a: (
      <>
        Data lagras säkert hos våra underleverantörer (bland annat
        Supabase, OpenAI och Resend) och används bara för att driva
        tjänsten — den säljs eller delas aldrig i marknadsföringssyfte. Du
        äger alltid din data. Läs mer i vår{" "}
        <Link href="/integritetspolicy" className="text-navy underline">
          integritetspolicy
        </Link>
        .
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <Reveal>
        <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
          Vanliga frågor
        </h2>
      </Reveal>
      <RevealGroup className="mt-8 space-y-3">
        {faqs.map((f) => (
          <RevealItem key={f.q}>
            <details className="group rounded-xl border border-border bg-ivory-card px-6 py-5 transition open:border-navy/40 open:shadow-[0_0_30px_-14px_rgba(74,108,247,0.6)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium marker:content-none">
                {f.q}
                <span className="shrink-0 text-ink/40 transition group-open:rotate-45 group-open:text-navy">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink/70">{f.a}</p>
            </details>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
