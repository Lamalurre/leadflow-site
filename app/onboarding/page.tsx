import type { Metadata } from "next";
import Link from "next/link";
import StepIllustration from "@/components/StepIllustration";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import RevealStep from "@/components/motion/RevealStep";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";

export const metadata: Metadata = {
  title: "Såhär funkar onboarding",
  description:
    "Från konto till första automatiska leadet — vad som faktiskt händer när ni kommer igång med Sylvor, steg för steg.",
};

const steps = [
  {
    variant: "inbox" as const,
    title: "Skapa konto på några minuter.",
    body: "Berätta hur ni jobbar idag — bransch, prissättning och hur automatiskt ni vill att Sylvor ska svara. Ingen betalning krävs för att komma igång, 7 dagar fri provperiod direkt.",
    rotate: -3,
  },
  {
    variant: "address" as const,
    title: "Ni får en egen Sylvor-adress.",
    body: "Varje mejl som når den adressen blir automatiskt ett lead i Sylvor. Formulärnotiser, direktmejl — vidarebefordra dit, inget mer att koppla.",
    rotate: 2,
  },
  {
    variant: "verified" as const,
    title: "Koppla vidarebefordran hos er e-postleverantör.",
    body: "Två minuter i Gmail eller Outlooks inställningar. Sylvor bekräftar kopplingen automatiskt så fort er leverantör godkänt den — ni ser det direkt i appen.",
    rotate: -2,
  },
  {
    variant: "approve" as const,
    title: "Testa, och sätt igång.",
    body: "Skicka ett påhittat lead till er själva och se det dyka upp i dashboarden. Fungerar det — ni är live. Riktiga förfrågningar börjar landa automatiskt från och med nu.",
    rotate: 3,
  },
];

export default function OnboardingPage() {
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
              Såhär funkar onboarding
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
              Inget tekniskt jobb, inga uppföljningsmejl att vänta på. Fyra
              steg från konto till att förfrågningar börjar landa
              automatiskt — här är precis vad som händer.
            </p>
          </section>
        </Reveal>

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
                  <span className="text-sm font-semibold text-navy/60">
                    Steg {i + 1}
                  </span>
                  <h2 className="mt-1 text-2xl font-semibold leading-snug">
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
                Inget kreditkort krävs förrän ni är live och nöjda.
              </p>
            </div>
          </section>
        </Reveal>

        <section className="mx-auto max-w-3xl px-6 py-20">
          <Reveal>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Vanliga frågor om onboarding
            </h2>
          </Reveal>
          <RevealGroup className="mt-8 space-y-3">
            {[
              {
                q: "Måste jag byta e-postleverantör eller system?",
                a: "Nej. Sylvor kopplas till mejlen ni redan använder via en vidarebefordringsregel — inga nya verktyg att lära er.",
              },
              {
                q: "Vad om vidarebefordran inte funkar direkt?",
                a: "Sylvor bekräftar kopplingen automatiskt och visar tydligt i appen om något inte gått igenom än — ni behöver aldrig gissa.",
              },
              {
                q: "Ser Sylvor all min vanliga e-post?",
                a: "Bara det som faktiskt vidarebefordras till er unika Sylvor-adress, och bara riktiga kundförfrågningar blir leads — nyhetsbrev och kvitton som råkar hamna där ignoreras.",
              },
            ].map((f) => (
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
              Redo att komma igång?
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
