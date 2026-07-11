import type { Metadata } from "next";
import Link from "next/link";
import StepIllustration from "@/components/StepIllustration";
import ROICalculator from "@/components/ROICalculator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import RevealStep from "@/components/motion/RevealStep";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";

export const metadata: Metadata = {
  title: "Så fungerar Sylvor",
  description:
    "Så fångar och prioriterar Sylvor dina inkommande förfrågningar och skriver ett svarsförslag — du godkänner alltid innan något skickas.",
};

const steps = [
  {
    variant: "inbox" as const,
    title: "Förfrågningar kommer in som vanligt.",
    body: "Formulär på hemsidan, vidarebefordrad e-post, DM — inga nya verktyg att lära dig. Ett säkert autosvar går ut direkt, och varje förfrågan hamnar på ett ställe så inget blir liggande.",
    rotate: -3,
  },
  {
    variant: "price" as const,
    title: "AI läser och förbereder varje förfrågan.",
    body: "Ett pris-utkast tas fram utifrån din prislista, och förfrågan prioriteras så att de mest brådskande hamnar överst.",
    rotate: 2,
  },
  {
    variant: "draft" as const,
    title: "Ett svarsförslag skrivs i din ton.",
    body: "Saknad information flaggas, och ett svarsförslag skrivs utifrån den ursprungliga förfrågan — du redigerar, du skriver inte från noll.",
    rotate: -2,
  },
  {
    variant: "approve" as const,
    title: "Du granskar och skickar.",
    body: "Inget når kunden utan ditt godkännande. Justera priset, ändra tonen, eller skicka som det är — ingen risk att AI:n anger fel belopp eller skickar ett missvisande meddelande i ditt namn.",
    rotate: 3,
  },
];

const faqs = [
  {
    q: "Ersätter detta mitt offertprogram?",
    a: "Nej. Sylvor ersätter inte ditt offertverktyg — det är ett komplement som fångar och prioriterar förfrågan innan du ens öppnat ditt offertprogram. Du fortsätter använda samma verktyg för själva offerten.",
  },
  {
    q: "Skickar AI:n meddelanden automatiskt?",
    a: "Bara ett säkert första autosvar skickas automatiskt. Allt annat — offert, pris och fortsatta svar — kräver ditt godkännande. Du är alltid sista kollen innan något som kan tolkas som ett löfte når kunden.",
  },
  {
    q: "Vad kostar det?",
    a: (
      <>
        Ingen startavgift — 449–1 499 kr/mån beroende på volym och behov,
        ingen bindningstid. Se hela prislistan under{" "}
        <Link href="/#pricing" className="text-navy underline">
          Priser
        </Link>
        .
      </>
    ),
  },
  {
    q: "Hur snabbt kan jag komma igång?",
    a: "Fyll i dina uppgifter i registreringsflödet (hur du tar emot förfrågningar idag, samt din prissättning), så skapas ditt konto direkt — igång på några minuter. Inget kreditkort krävs förrän du är live och nöjd.",
  },
  {
    q: "Passar det mitt yrke?",
    a: "Sylvor fungerar för de flesta lead-drivna serviceföretag. Hantverkare, städfirmor och flyttfirmor använder Sylvor mest idag, men det funkar lika bra för kliniker, jurister, mäklare och andra branscher där kunden hör sig för hos flera samtidigt.",
  },
];

export default function LeadConversionAutomation() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Reveal>
          <section className="mx-auto max-w-4xl px-6 pb-8 pt-16">
            <Link
              href="/"
              className="text-sm font-medium text-ink/50 hover:text-ink"
            >
              ← Tillbaka till Sylvor
            </Link>
            <h1 className="mt-6 font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              Så fungerar Sylvor
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
              Varje inkommande förfrågan läses, prissätts utifrån din
              prislista, kontrolleras för saknad information, prioriteras
              och blir ett svarsförslag redo att skickas — med dig som
              godkänner sista ordet innan något når kunden.
            </p>
          </section>
        </Reveal>

        <section className="px-6 pb-8">
          <ROICalculator />
        </section>

        <section className="mx-auto max-w-5xl space-y-28 px-6 py-16 sm:space-y-36">
          {steps.map((s, i) => {
            const imageFirst = i % 2 === 1;
            return (
              <div
                key={s.title}
                className="grid items-center gap-14 sm:grid-cols-2 sm:gap-16"
              >
                <RevealStep
                  fromRight={imageFirst}
                  className={imageFirst ? "sm:order-2" : "sm:order-1"}
                >
                  <h2 className="text-2xl font-semibold leading-snug">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-md leading-relaxed text-ink/70">
                    {s.body}
                  </p>
                </RevealStep>
                <RevealStep
                  fromRight={!imageFirst}
                  className={`flex justify-center ${
                    imageFirst ? "sm:order-1" : "sm:order-2"
                  }`}
                >
                  <StepIllustration variant={s.variant} rotate={s.rotate} />
                </RevealStep>
              </div>
            );
          })}
        </section>

        <Reveal>
          <section className="mx-auto max-w-4xl px-6">
            <div className="rounded-2xl border border-navy/30 bg-navy/[0.06] px-8 py-6">
              <p className="text-center font-serif text-lg italic sm:text-xl">
                Människogranskat från grunden — du är alltid sista kollen
                innan något skickas.
              </p>
            </div>
          </section>
        </Reveal>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
            <RevealStep>
              <h3 className="font-serif text-2xl font-medium">
                Följ resultatet i realtid
              </h3>
              <p className="mt-3 leading-relaxed text-ink/70">
                En löpande överblick över aktiva förfrågningar, svarstider
                och potentiellt värde — så du alltid vet vad som väntar och
                vad det är värt.
              </p>
            </RevealStep>
            <RevealStep fromRight className="flex justify-center">
              <StepIllustration variant="insights" rotate={-1.5} />
            </RevealStep>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20">
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

        <Reveal>
          <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Redo att sluta förlora jobb till långsamma svar?
            </h2>
            <Link
              href="/#kom-igang"
              className="mt-6 inline-block rounded-full bg-navy px-7 py-3.5 text-base font-medium text-white shadow-[0_0_25px_-6px_rgba(74,108,247,0.7)] transition hover:bg-navy-dark"
            >
              Starta 7 dagar gratis
            </Link>
          </section>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
