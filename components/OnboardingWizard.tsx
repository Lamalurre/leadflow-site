"use client";

import { useState } from "react";
import { Check, Globe, ArrowRight, Loader2 } from "lucide-react";
import Reveal from "./motion/Reveal";
import StepIllustration from "./StepIllustration";

const CONTACT_EMAIL = "Kontakt.sylvor@outlook.com";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-border bg-ivory px-4 py-2.5 outline-none focus:border-navy";

// ── Constants matching Sylvor App's real signup contract ──────────────────

const BUSINESS_AREAS: { value: string; label: string }[] = [
  { value: "hantverkare", label: "Hantverkare / bygg" },
  { value: "cleaning", label: "Städfirma" },
  { value: "flyttfirma", label: "Flyttfirma" },
  { value: "servicebolag", label: "Servicebolag" },
  { value: "klinik", label: "Klinik" },
  { value: "jurist", label: "Jurist / advokatbyrå" },
  { value: "konsult", label: "Konsultbolag" },
  { value: "maklare", label: "Mäklare" },
  { value: "bilfirma", label: "Bilfirma" },
  { value: "event", label: "Eventbolag" },
  { value: "other", label: "Annat" },
];

const TRADES = ["Bygg", "VVS", "El", "Målare", "Snickare", "Golvläggare", "Annat"];

const LEAD_SOURCES: { value: string; label: string }[] = [
  { value: "form", label: "Formulär på hemsidan" },
  { value: "email", label: "Direkt till e-post" },
  { value: "social", label: "Facebook/Instagram" },
  { value: "phone", label: "Telefon" },
  { value: "other", label: "Annat" },
  { value: "unknown", label: "Vet inte än" },
];

const PRICING_MODES: {
  value: "no_auto_price" | "approx_range" | "price_list";
  label: string;
  desc: string;
  badge?: string;
}[] = [
  {
    value: "no_auto_price",
    label: "Ge inga priser automatiskt",
    desc: "Sylvor samlar in rätt information och skapar svarsförslag. Pris eller offert skickas inte automatiskt.",
    badge: "Rekommenderat",
  },
  {
    value: "approx_range",
    label: "Använd ungefärliga prisintervall",
    desc: "Sylvor kan ange en ungefärlig prisnivå, aldrig ett exakt belopp.",
  },
  {
    value: "price_list",
    label: "Använd prislista",
    desc: "Sylvor räknar fram och kan visa ett exakt pris utifrån din prislista.",
  },
];

const AUTOMATION_LEVELS: {
  value: "trygg" | "utkast" | "autosvar_foljdfragor";
  label: string;
  desc: string;
  badge?: string;
}[] = [
  {
    value: "trygg",
    label: "Tryggt läge",
    desc: "Sylvor får skicka ett säkert första svar direkt. Personliga svar, prisförslag och offerter skapas som utkast för ditt godkännande.",
    badge: "Rekommenderat",
  },
  {
    value: "utkast",
    label: "Endast svarsförslag",
    desc: "Sylvor skickar inget automatiskt. Du får bara svarsförslag att granska själv.",
  },
  {
    value: "autosvar_foljdfragor",
    label: "Autosvar + enkla följdfrågor",
    desc: "Sylvor kan skicka autosvar och enkla följdfrågor enligt dina regler. Just nu identiskt med Tryggt läge — den utökade automationen är inte aktiverad ännu.",
  },
];

const PLANS = [
  { value: "bas", label: "Bas", price: "449 kr/mån" },
  { value: "standard", label: "Standard", price: "799 kr/mån" },
  { value: "firma", label: "Firma", price: "1 499 kr/mån" },
  { value: "trial", label: "Bara testa", price: "14 dagar gratis, inget val ännu" },
];

const LOCAL_EXAMPLES: Record<
  string,
  { lead: string; missing: string[] }
> = {
  hantverkare: {
    lead: "Hej! Vi ska renovera badrummet och undrar om ni kan komma och titta samt ge en offert. Vi bor i Solna.",
    missing: ["Ungefärlig yta", "Önskat startdatum"],
  },
  cleaning: {
    lead: "Hej, jag vill ha hjälp med flyttstädning av en trea, ca 75 kvm. När kan ni komma?",
    missing: ["Adress", "Önskat datum"],
  },
  flyttfirma: {
    lead: "Hej! Vi flyttar från en tvåa i city till en trea i Nacka i slutet av månaden och behöver hjälp. Vad kostar det ungefär?",
    missing: ["Antal rum/våningar", "Exakt flyttdatum"],
  },
  bilfirma: {
    lead: "Hej, jag undrar om ni har möjlighet att serva min bil den här veckan?",
    missing: ["Bilmodell", "Önskad tid"],
  },
  klinik: {
    lead: "Hej, jag skulle vilja boka en tid så snart som möjligt, gärna denna vecka.",
    missing: ["Vilken typ av besök", "Önskad tid"],
  },
  jurist: {
    lead: "Hej, jag behöver hjälp med ett avtal och undrar om ni kan ta ett kort möte.",
    missing: ["Typ av ärende", "Önskad tidpunkt för möte"],
  },
  konsult: {
    lead: "Hej, vi funderar på att ta in hjälp med ett projekt och vill höra om ni har kapacitet.",
    missing: ["Projektets omfattning", "Önskad start"],
  },
  maklare: {
    lead: "Hej, vi funderar på att sälja vår lägenhet och vill höra vad ni skulle rekommendera.",
    missing: ["Bostadens adress", "Önskad tidsram"],
  },
  servicebolag: {
    lead: "Hej, vi behöver hjälp med ett jobb så snart som möjligt — kan ni höra av er?",
    missing: ["Vad ärendet gäller", "Önskat datum"],
  },
  other: {
    lead: "Hej! Vi undrar om ni har möjlighet att hjälpa oss — kan ni höra av er?",
    missing: ["Mer detaljer om ärendet", "Önskad tidpunkt"],
  },
};

type ScrapedData = {
  company_name: string;
  business_areas: string[];
  trades: string[];
  services: string[];
  area: string;
  tone: string;
  contact_email: string | null;
  contact_phone: string | null;
  pricing_hint: string | null;
  rut_or_rot_relevant: boolean;
  guarantee_text: string | null;
  example_lead_text: string;
  example_summary: string;
  example_missing_info: string[];
  example_draft_reply: string;
};

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  website: string;
  noWebsite: boolean;
  scraping: boolean;
  scrapeError: string;
  scraped: ScrapedData | null;

  companyName: string;
  businessAreas: string[];
  trades: string[];
  services: string;
  area: string;
  tone: string;

  pricingMode: "no_auto_price" | "approx_range" | "price_list";
  pricingInfoText: string;
  rutRotEligible: boolean;

  automationLevel: "trygg" | "utkast" | "autosvar_foljdfragor";

  leadSources: string[];
  docSkipped: boolean;
  docContent: string;

  fullName: string;
  email: string;
  contactPhone: string;
  notifyPreference: "email" | "sms" | "none";
  intendedPlan: string;
  agreedToTerms: boolean;
};

const EMPTY_FORM: FormState = {
  website: "",
  noWebsite: false,
  scraping: false,
  scrapeError: "",
  scraped: null,

  companyName: "",
  businessAreas: [],
  trades: [],
  services: "",
  area: "",
  tone: "",

  pricingMode: "no_auto_price",
  pricingInfoText: "",
  rutRotEligible: false,

  automationLevel: "trygg",

  leadSources: [],
  docSkipped: false,
  docContent: "",

  fullName: "",
  email: "",
  contactPhone: "",
  notifyPreference: "email",
  intendedPlan: "",
  agreedToTerms: false,
};

const TOTAL_STEPS = 7;

function toggle(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function primaryExample(form: FormState): {
  lead: string;
  summary: string;
  missing: string[];
  draft: string;
} {
  if (form.scraped?.example_lead_text) {
    return {
      lead: form.scraped.example_lead_text,
      summary: form.scraped.example_summary || "Kunden vill komma igång snabbt.",
      missing: form.scraped.example_missing_info.length
        ? form.scraped.example_missing_info
        : ["Mer detaljer", "Önskad tidpunkt"],
      draft: form.scraped.example_draft_reply,
    };
  }
  const primary = form.businessAreas[0] || "other";
  const tmpl = LOCAL_EXAMPLES[primary] || LOCAL_EXAMPLES.other;
  return {
    lead: tmpl.lead,
    summary: "Kunden vill ha hjälp snarast och har lämnat sina kontaktuppgifter.",
    missing: tmpl.missing,
    draft: `Tack för ditt meddelande! Vi har tagit emot din förfrågan och återkommer inom kort med besked. Innan dess är det bra om du kan skicka ${tmpl.missing[0]?.toLowerCase() || "lite mer information"}.`,
  };
}

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [stepError, setStepError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function goNext() {
    setStepError("");
    if (step === 2 && form.businessAreas.length === 0) {
      setStepError("Välj minst ett verksamhetsområde.");
      return;
    }
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function goBack() {
    setStepError("");
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleFetchWebsite() {
    if (!form.website.trim()) {
      setStepError("Klistra in en webbadress, eller välj att du inte har någon hemsida.");
      return;
    }
    setStepError("");
    update("scraping", true);
    update("scrapeError", "");
    try {
      const res = await fetch("/api/scrape-company", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: form.website.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setForm((f) => ({ ...f, scraping: false, scrapeError: data.error || "Kunde inte hämta sidan." }));
        return;
      }
      setForm((f) => ({
        ...f,
        scraping: false,
        scraped: data,
        companyName: data.company_name || f.companyName,
        businessAreas: data.business_areas?.length ? data.business_areas : f.businessAreas,
        trades: data.trades?.length ? data.trades : f.trades,
        services: data.services?.length ? data.services.join(", ") : f.services,
        area: data.area || f.area,
        tone: data.tone || f.tone,
        contactPhone: data.contact_phone || f.contactPhone,
        email: data.contact_email || f.email,
        pricingInfoText: data.pricing_hint || f.pricingInfoText,
        rutRotEligible: Boolean(data.rut_or_rot_relevant),
      }));
      setStep(2);
    } catch {
      setForm((f) => ({ ...f, scraping: false, scrapeError: "Kunde inte hämta sidan. Fyll i manuellt istället." }));
    }
  }

  function skipToManual() {
    update("noWebsite", true);
    setStep(2);
  }

  async function handleSubmit() {
    if (!form.fullName || !form.email || !form.contactPhone) {
      setStepError("Fyll i namn, e-post och telefonnummer innan du går vidare.");
      return;
    }
    if (!form.intendedPlan) {
      setStepError("Välj ett paket eller testa gratis för att komma igång.");
      return;
    }
    setStepError("");
    setStatus("submitting");

    const servicesArr = form.services
      .split(/[,\n]/)
      .map((s) => s.trim())
      .filter(Boolean)
      .map((name) => ({ name }));

    const example = primaryExample(form);
    const tradeNote =
      form.businessAreas.includes("hantverkare") && form.trades.length
        ? `Inriktning: ${form.trades.join(", ")}. `
        : "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          full_name: form.fullName,
          company_name: form.companyName,
          contact_person: form.fullName,
          contact_phone: form.contactPhone,
          website: form.noWebsite ? "" : form.website,
          country: "SE",
          business_areas: form.businessAreas,
          services: servicesArr,
          pricing_info_text: `${tradeNote}${form.pricingInfoText}`.trim(),
          tax_config: {
            rut_eligible: form.rutRotEligible,
            rot_eligible: form.rutRotEligible,
            show_price_directly: form.pricingMode !== "no_auto_price",
          },
          preferred_tone: form.tone,
          notify_preference: form.notifyPreference,
          automation_level: form.automationLevel,
          pricing_mode: form.pricingMode,
          lead_sources: form.leadSources,
          documents: form.docSkipped || !form.docContent.trim()
            ? []
            : [{ kind: "prislista", title: "Från registrering", content: form.docContent.trim() }],
          test_lead_text: example.lead,
          intended_plan: form.intendedPlan,
          onboarding_source: "website",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const example = primaryExample(form);

  return (
    <section id="kom-igang" className="mx-auto max-w-3xl px-6 pb-24 pt-12">
      <Reveal className="relative">
        <div
          className="absolute inset-0 rounded-2xl border border-navy/20 bg-ivory-card/60"
          style={{ transform: "rotate(-2deg)" }}
          aria-hidden="true"
        />
        <div className="relative space-y-6 rounded-2xl border border-border bg-ivory-card p-8 shadow-[0_25px_50px_-25px_rgba(0,0,0,0.7)]">
          {status === "success" ? (
            <div className="py-8 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green text-white shadow-[0_0_24px_-4px_rgba(63,163,107,0.7)]">
                <Check size={26} strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-serif text-2xl font-medium">
                Tack! Ni är igång på några minuter.
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-ink/60">
                Kolla din inkorg på {form.email} — där väntar en länk för att
                sätta lösenord och logga in i Sylvor.
              </p>
              <p className="mx-auto mt-1 max-w-sm text-xs text-ink/40">
                Ser du inget mejl direkt? Kolla skräpposten.
              </p>
            </div>
          ) : (
            <>
              <div>
                <h3 className="font-serif text-2xl font-medium">
                  Starta 14 dagar gratis
                </h3>
                <p className="mt-1 text-sm text-ink/60">
                  Steg {step} av {TOTAL_STEPS} — mesta möjliga går att ändra
                  senare i Sylvor-appen.
                </p>
              </div>

              {/* progress dots */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((n) => (
                  <span
                    key={n}
                    className={`h-1.5 flex-1 rounded-full transition ${
                      n <= step ? "bg-navy" : "bg-border"
                    }`}
                  />
                ))}
              </div>

              {/* STEP 1: website URL */}
              {step === 1 && (
                <div className="space-y-4">
                  <p className="text-sm text-ink/70">
                    Klistra in din hemsideadress så hämtar Sylvor det mesta
                    automatiskt. Du får granska och rätta allt i nästa steg.
                  </p>
                  <div className="relative">
                    <Globe
                      size={16}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/30"
                    />
                    <input
                      value={form.website}
                      onChange={(e) => update("website", e.target.value)}
                      placeholder="dittforetag.se"
                      className={`${inputClass} pl-10`}
                      onKeyDown={(e) => e.key === "Enter" && handleFetchWebsite()}
                    />
                  </div>
                  {form.scrapeError && (
                    <p className="text-sm text-red-700">{form.scrapeError}</p>
                  )}
                  <button
                    type="button"
                    onClick={handleFetchWebsite}
                    disabled={form.scraping}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_-6px_rgba(74,108,247,0.7)] transition hover:bg-navy-dark disabled:opacity-60"
                  >
                    {form.scraping ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Hämtar information...
                      </>
                    ) : (
                      <>
                        Hämta automatiskt <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={skipToManual}
                    className="w-full text-center text-sm text-ink/50 underline hover:text-ink/70"
                  >
                    Jag har ingen hemsida
                  </button>
                </div>
              )}

              {/* STEP 2: review + business areas */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="wiz-companyName" className="block text-sm font-medium">
                      Företagsnamn
                    </label>
                    <input
                      id="wiz-companyName"
                      value={form.companyName}
                      onChange={(e) => update("companyName", e.target.value)}
                      className={inputClass}
                    />
                    <p className="mt-1 text-xs text-ink/40">
                      Detta blir en kontouppgift och kan inte ändras direkt
                      efter registrering.
                    </p>
                  </div>

                  <div>
                    <span className="block text-sm font-medium">
                      Verksamhetsområden
                    </span>
                    <p className="text-xs text-ink/40">
                      Välj alla som passar — ni kan ha flera.
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
                      {BUSINESS_AREAS.map((b) => (
                        <label
                          key={b.value}
                          className="flex items-center gap-2 text-sm text-ink/80"
                        >
                          <input
                            type="checkbox"
                            checked={form.businessAreas.includes(b.value)}
                            onChange={() => update("businessAreas", toggle(form.businessAreas, b.value))}
                            className="h-4 w-4 rounded border-border accent-navy"
                          />
                          {b.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  {form.businessAreas.includes("hantverkare") && (
                    <div>
                      <span className="block text-sm font-medium">Yrken</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {TRADES.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => update("trades", toggle(form.trades, t))}
                            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                              form.trades.includes(t)
                                ? "border-navy bg-navy/10 text-navy"
                                : "border-border text-ink/60 hover:border-navy/30"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="wiz-services" className="block text-sm font-medium">
                      Tjänster (valfritt)
                    </label>
                    <input
                      id="wiz-services"
                      value={form.services}
                      onChange={(e) => update("services", e.target.value)}
                      placeholder="t.ex. Badrumsrenovering, Målning, Golvläggning"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="wiz-area" className="block text-sm font-medium">
                      Område ni verkar i (valfritt)
                    </label>
                    <input
                      id="wiz-area"
                      value={form.area}
                      onChange={(e) => update("area", e.target.value)}
                      placeholder="t.ex. Stockholm med omnejd"
                      className={inputClass}
                    />
                  </div>

                  <p className="text-xs text-ink/40">
                    Tjänster, område och tonläge kan ändras när som helst
                    senare i Sylvor-appen.
                  </p>
                </div>
              )}

              {/* STEP 3: pricing mode */}
              {step === 3 && (
                <div className="space-y-3">
                  <span className="block text-sm font-medium">
                    Hur ska Sylvor hantera priser?
                  </span>
                  {PRICING_MODES.map((p) => (
                    <label
                      key={p.value}
                      className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm transition ${
                        form.pricingMode === p.value
                          ? "border-navy bg-navy/[0.06]"
                          : "border-border hover:border-navy/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="pricingMode"
                        checked={form.pricingMode === p.value}
                        onChange={() => update("pricingMode", p.value)}
                        className="mt-1 h-4 w-4 border-border accent-navy"
                      />
                      <span>
                        <span className="flex items-center gap-2 font-medium">
                          {p.label}
                          {p.badge && (
                            <span className="rounded-full bg-green/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-green">
                              {p.badge}
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 block text-ink/60">{p.desc}</span>
                      </span>
                    </label>
                  ))}
                  {form.pricingMode !== "no_auto_price" && (
                    <div>
                      <label htmlFor="wiz-pricingInfo" className="block text-sm font-medium">
                        Prisinformation eller prislista (valfritt)
                      </label>
                      <textarea
                        id="wiz-pricingInfo"
                        value={form.pricingInfoText}
                        onChange={(e) => update("pricingInfoText", e.target.value)}
                        rows={3}
                        placeholder="Beskriv hur ni prissätter, eller klistra in er prislista"
                        className={inputClass}
                      />
                    </div>
                  )}
                  <p className="text-xs text-ink/40">
                    Prislista och prisval kan uppdateras när som helst senare
                    i Sylvor-appen.
                  </p>
                </div>
              )}

              {/* STEP 4: automation level */}
              {step === 4 && (
                <div className="space-y-3">
                  <span className="block text-sm font-medium">
                    Vad får Sylvor skicka automatiskt?
                  </span>
                  {AUTOMATION_LEVELS.map((a) => (
                    <label
                      key={a.value}
                      className={`flex cursor-pointer items-start gap-3 rounded-lg border px-4 py-3 text-sm transition ${
                        form.automationLevel === a.value
                          ? "border-navy bg-navy/[0.06]"
                          : "border-border hover:border-navy/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="automationLevel"
                        checked={form.automationLevel === a.value}
                        onChange={() => update("automationLevel", a.value)}
                        className="mt-1 h-4 w-4 border-border accent-navy"
                      />
                      <span>
                        <span className="flex items-center gap-2 font-medium">
                          {a.label}
                          {a.badge && (
                            <span className="rounded-full bg-green/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-green">
                              {a.badge}
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 block text-ink/60">{a.desc}</span>
                      </span>
                    </label>
                  ))}
                  <p className="text-xs text-ink/40">
                    Du kan ändra detta senare i Sylvor-appen.
                  </p>
                </div>
              )}

              {/* STEP 5: lead sources + optional docs */}
              {step === 5 && (
                <div className="space-y-5">
                  <div>
                    <span className="block text-sm font-medium">
                      Hur får ni in förfrågningar idag?
                    </span>
                    <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                      {LEAD_SOURCES.map((c) => (
                        <label
                          key={c.value}
                          className="flex items-center gap-2 text-sm text-ink/80"
                        >
                          <input
                            type="checkbox"
                            checked={form.leadSources.includes(c.value)}
                            onChange={() => update("leadSources", toggle(form.leadSources, c.value))}
                            className="h-4 w-4 rounded border-border accent-navy"
                          />
                          {c.label}
                        </label>
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-ink/40">
                      Ingen teknisk koppling behövs nu — för att börja kan ni
                      vidarebefordra leads till en Sylvor-adress som ni får i
                      appen. Kan justeras senare.
                    </p>
                  </div>

                  {!form.docSkipped ? (
                    <div>
                      <label htmlFor="wiz-doc" className="block text-sm font-medium">
                        Prislista, standardsvar eller vanliga frågor (valfritt)
                      </label>
                      <textarea
                        id="wiz-doc"
                        value={form.docContent}
                        onChange={(e) => update("docContent", e.target.value)}
                        rows={3}
                        placeholder="Klistra in text — Sylvor kan börja fungera bra utan detta också"
                        className={inputClass}
                      />
                      <button
                        type="button"
                        onClick={() => update("docSkipped", true)}
                        className="mt-1.5 text-xs text-ink/50 underline hover:text-ink/70"
                      >
                        Hoppa över just nu
                      </button>
                    </div>
                  ) : (
                    <p className="text-xs text-ink/40">
                      Inget underlag tillagt — du kan lägga till det senare i
                      Sylvor-appen.{" "}
                      <button
                        type="button"
                        onClick={() => update("docSkipped", false)}
                        className="underline hover:text-ink/60"
                      >
                        Ångra
                      </button>
                    </p>
                  )}
                </div>
              )}

              {/* STEP 6: aha-moment demo */}
              {step === 6 && (
                <div className="space-y-4">
                  <p className="text-sm text-ink/70">
                    Så här skulle Sylvor hantera en förfrågan till{" "}
                    <strong>{form.companyName || "ert företag"}</strong> —
                    detta är en förhandsvisning, inte er riktiga instrumentpanel.
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <StepIllustration
                      variant="customerlead"
                      rotate={-1.5}
                      className="max-w-none"
                      data={{ text: example.lead }}
                    />
                    <StepIllustration
                      variant="summary"
                      rotate={1}
                      className="max-w-none"
                      data={{ text: example.summary }}
                    />
                    <StepIllustration
                      variant="missing"
                      rotate={-1}
                      className="max-w-none"
                      data={{ missing: example.missing }}
                    />
                    <StepIllustration
                      variant="draft"
                      rotate={1.5}
                      className="max-w-none"
                      data={{ text: example.draft }}
                    />
                  </div>
                  <p className="text-xs text-ink/40">
                    Utkastet skickas aldrig utan ert godkännande — bara det
                    säkra första autosvaret skickas automatiskt.
                  </p>
                </div>
              )}

              {/* STEP 7: account + plan */}
              {step === 7 && (
                <div className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="wiz-name" className="block text-sm font-medium">Ditt namn</label>
                      <input
                        id="wiz-name"
                        value={form.fullName}
                        onChange={(e) => update("fullName", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="wiz-phone" className="block text-sm font-medium">
                        Telefonnummer
                      </label>
                      <input
                        id="wiz-phone"
                        type="tel"
                        value={form.contactPhone}
                        onChange={(e) => update("contactPhone", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="wiz-email" className="block text-sm font-medium">
                      E-post
                    </label>
                    <input
                      id="wiz-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass}
                    />
                    <p className="mt-1 text-xs text-ink/40">
                      Blir er inloggning och kan inte ändras direkt efter
                      registrering.
                    </p>
                  </div>

                  <div>
                    <span className="block text-sm font-medium">
                      Föredragen notis-kanal
                    </span>
                    <div className="mt-2 flex gap-6">
                      {[
                        { value: "email", label: "E-post" },
                        { value: "sms", label: "SMS (kräver Standard eller Firma)" },
                      ].map((n) => (
                        <label
                          key={n.value}
                          className="flex items-center gap-2 text-sm text-ink/80"
                        >
                          <input
                            type="radio"
                            name="notifyPreference"
                            checked={form.notifyPreference === n.value}
                            onChange={() => update("notifyPreference", n.value as FormState["notifyPreference"])}
                            className="h-4 w-4 border-border accent-navy"
                          />
                          {n.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="block text-sm font-medium">
                      Välj paket eller testa gratis
                    </span>
                    {PLANS.map((p) => (
                      <label
                        key={p.value}
                        className={`flex cursor-pointer items-center justify-between rounded-lg border px-4 py-3 text-sm transition ${
                          form.intendedPlan === p.value
                            ? "border-navy bg-navy/[0.06]"
                            : "border-border hover:border-navy/30"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="intendedPlan"
                            value={p.value}
                            checked={form.intendedPlan === p.value}
                            onChange={() => update("intendedPlan", p.value)}
                            className="h-4 w-4 border-border accent-navy"
                          />
                          <span className="font-medium">{p.label}</span>
                        </span>
                        <span className="text-ink/50">{p.price}</span>
                      </label>
                    ))}
                  </div>
                  <label className="flex items-start gap-2.5 text-sm text-ink/70">
                    <input
                      type="checkbox"
                      checked={form.agreedToTerms}
                      onChange={(e) => update("agreedToTerms", e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-border accent-navy"
                    />
                    <span>
                      Jag godkänner Sylvors{" "}
                      <a href="/villkor" target="_blank" rel="noopener noreferrer" className="text-navy underline">
                        användarvillkor
                      </a>{" "}
                      och{" "}
                      <a href="/integritetspolicy" target="_blank" rel="noopener noreferrer" className="text-navy underline">
                        integritetspolicy
                      </a>
                      .
                    </span>
                  </label>
                </div>
              )}

              {stepError && (
                <p className="text-sm text-red-700">{stepError}</p>
              )}

              {step > 1 && (
                <div className="flex items-center justify-between gap-4 pt-2">
                  <button
                    type="button"
                    onClick={goBack}
                    className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-ink/40 hover:bg-ink/5"
                  >
                    Tillbaka
                  </button>
                  {step < TOTAL_STEPS ? (
                    <button
                      type="button"
                      onClick={goNext}
                      className="rounded-full bg-navy px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_-6px_rgba(74,108,247,0.7)] transition hover:bg-navy-dark"
                    >
                      Nästa
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={status === "submitting" || !form.agreedToTerms}
                      className="rounded-full bg-navy px-6 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_-6px_rgba(74,108,247,0.7)] transition hover:bg-navy-dark disabled:opacity-60"
                    >
                      {status === "submitting" ? "Skickar..." : "Starta gratis provperiod"}
                    </button>
                  )}
                </div>
              )}

              {status === "error" && (
                <p className="text-center text-sm text-red-700">
                  Något gick fel. Försök igen eller mejla oss på{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}
            </>
          )}
        </div>
      </Reveal>
    </section>
  );
}
