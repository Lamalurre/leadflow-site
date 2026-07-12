import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

type ServiceEntry = { name: string };

type SignupPayload = {
  email: string;
  full_name?: string;
  company_name: string;
  contact_person?: string;
  contact_phone?: string;
  website?: string;
  country?: string;
  business_areas?: string[];
  services?: ServiceEntry[];
  pricing_info_text?: string;
  tax_config?: {
    rut_eligible?: boolean;
    rot_eligible?: boolean;
    show_price_directly?: boolean;
  };
  preferred_tone?: string;
  notify_preference?: "none" | "email" | "sms";
  automation_level?: "utkast" | "trygg" | "autosvar_foljdfragor";
  pricing_mode?: "no_auto_price" | "approx_range" | "price_list";
  lead_sources?: string[];
  documents?: { kind: string; title: string; content: string }[];
  test_lead_text?: string;
  intended_plan?: string;
  onboarding_source?: string;
};

async function saveBackupToSupabase(payload: SignupPayload, appSyncFailed: boolean) {
  const notes = [
    payload.website ? `Hemsida: ${payload.website}` : null,
    payload.pricing_info_text ? `Prisinfo: ${payload.pricing_info_text}` : null,
    payload.test_lead_text ? `Exempellead: ${payload.test_lead_text}` : null,
    appSyncFailed ? "OBS: kunde inte synkas till Sylvor-appen automatiskt, hantera manuellt." : null,
  ]
    .filter(Boolean)
    .join(" | ");

  const { error } = await getSupabaseAdmin().from("leadflow_contacts").insert({
    name: payload.contact_person || payload.full_name || "",
    email: payload.email,
    phone: payload.contact_phone || "",
    company_name: payload.company_name,
    business_type: (payload.business_areas || []).join(", "),
    channels: (payload.lead_sources || []).join(", "),
    pricing_info: payload.pricing_info_text || "",
    notify_channel: payload.notify_preference || "",
    message: notes,
    selected_plan: payload.intended_plan || "",
  });

  if (error) console.error("Supabase backup insert error:", error);
}

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as SignupPayload | null;

  if (!body || typeof body.email !== "string" || !body.email.trim()) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }
  if (typeof body.company_name !== "string" || !body.company_name.trim()) {
    return NextResponse.json({ error: "Missing company_name" }, { status: 400 });
  }

  const payload: SignupPayload = {
    ...body,
    country: body.country || "SE",
    onboarding_source: "website",
  };

  const appApiUrl = process.env.SYLVOR_APP_API_URL;

  if (!appApiUrl) {
    // App backend not configured — save as a lead for manual follow-up.
    await saveBackupToSupabase(payload, true);
    return NextResponse.json({ ok: true, appSyncFailed: true });
  }

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    const appRes = await fetch(`${appApiUrl}/api/auth/signup`, {
      method: "POST",
      signal: controller.signal,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).finally(() => clearTimeout(timer));

    if (appRes.status === 201) {
      const data = await appRes.json().catch(() => ({}));
      await saveBackupToSupabase(payload, false);
      return NextResponse.json({
        ok: true,
        workspaceId: data.workspace_id,
        trialBlocked: Boolean(data.trialBlocked),
        needsPasswordSetup: Boolean(data.needsPasswordSetup),
      });
    }

    if (appRes.status === 400) {
      console.error("Sylvor App signup 400:", await appRes.text().catch(() => ""));
      await saveBackupToSupabase(payload, true);
      // Genuinely rejected signup (e.g. email already registered) — must not
      // return 200. The wizard only checks res.ok, not the response body, so
      // a 200 here previously made a FAILED signup show the "you're all
      // set!" success screen with no account or invite ever created.
      return NextResponse.json(
        { error: "Kunde inte slutföra registreringen automatiskt. Vi hör av oss manuellt." },
        { status: 400 }
      );
    }

    console.error("Sylvor App signup unexpected status:", appRes.status);
    await saveBackupToSupabase(payload, true);
    return NextResponse.json({ ok: true, appSyncFailed: true });
  } catch (err) {
    console.error("Sylvor App signup request failed:", err);
    await saveBackupToSupabase(payload, true);
    return NextResponse.json({ ok: true, appSyncFailed: true });
  }
}
