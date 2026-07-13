import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Hammer, Truck, SprayCan, type LucideIcon } from "lucide-react";
import StepIllustration from "@/components/StepIllustration";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/motion/Reveal";
import RevealStep from "@/components/motion/RevealStep";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";

type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  heroBody: string;
  painPoints: string[];
  leadText: string;
  missing: string[];
  price: string;
  priorityLabel: string;
};

const industries: Industry[] = [
  {
    slug: "hantverkare",
    name: "Hantverkare",
    icon: Hammer,
    heroBody:
      "Golvläggning, badrumsrenovering, målning — kunder som hör sig för hos flera hantverkare samtidigt väljer oftast den som svarar först. Sylvor läser varje förfrågan, räknar ut ett pris utifrån din prislista och har ett svarsförslag redo innan du ens hunnit öppna mejlen.",
    painPoints: [
      "Förfrågningar kommer in via mejl, formulär och telefon — svårt att hålla koll när du är ute på jobb.",
      "Prisuppskattningar tar tid att räkna för hand för varje ny förfrågan.",
      "Uppföljning glöms bort i stressen mellan jobb.",
    ],
    leadText:
      "Hej! Jag vill gärna ha en offert på ny golvläggning i vardagsrummet, det är 27 kvadratmeter, helst innan 20 juli. Mvh Cilla",
    missing: ["Vilken typ av golv", "Bekräftat datum för besök"],
    price: "~5 120 kr",
    priorityLabel: "Hög prioritet",
  },
  {
    slug: "flyttfirma",
    name: "Flyttfirmor",
    icon: Truck,
    heroBody:
      "Flytthjälp bokas ofta med kort varsel — den flyttfirma som svarar snabbast med ett tydligt pris vinner jobbet. Sylvor fångar varje förfrågan direkt och räknar fram en offert utifrån antal rum, avstånd och datum.",
    painPoints: [
      "Många förfrågningar kommer sent på kvällen eller helger, utanför kontorstid.",
      "Priset beror på flera faktorer — rum, våning, hiss, avstånd — tidskrävande att räkna manuellt varje gång.",
      "Svårt att prioritera vilka förfrågningar som är mest brådskande.",
    ],
    leadText:
      "Hej, vi ska flytta från en 3:a i Solna till Söderort i september och behöver en offert. Har ni möjlighet?",
    missing: ["Våningsplan och hiss", "Exakt flyttdatum"],
    price: "~8 900 kr",
    priorityLabel: "Hög prioritet",
  },
  {
    slug: "stadfirma",
    name: "Städfirmor",
    icon: SprayCan,
    heroBody:
      "Städuppdrag — engångsstäd eller återkommande — är ofta priskänsliga och snabbrörliga affärer. Sylvor svarar direkt, räknar pris utifrån kvadratmeter och städtyp, och håller koll på återkommande kunder separat från engångsjobb.",
    painPoints: [
      "Skillnad mellan engångsstäd och återkommande avtal kräver olika uppföljning.",
      "Kunder jämför pris hos flera städfirmor samtidigt — svarstid avgör.",
      "Manuell prissättning per kvadratmeter tar tid mellan städjobb.",
    ],
    leadText:
      "Hej! Söker återkommande hemstädning varannan vecka, lägenhet på 65 kvm i city. Vad skulle det kosta?",
    missing: ["Antal rum och badrum", "Önskat startdatum"],
    price: "~1 450 kr",
    priorityLabel: "Medel prioritet",
  },
];

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: `Sylvor för ${industry.name.toLowerCase()}`,
    description: industry.heroBody,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const Icon = industry.icon;

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
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/40 bg-navy text-white">
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
                Sylvor för {industry.name.toLowerCase()}
              </h1>
            </div>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
              {industry.heroBody}
            </p>
          </section>
        </Reveal>

        <section className="mx-auto max-w-5xl px-6 py-8">
          <RevealGroup className="grid gap-4 sm:grid-cols-3">
            {industry.painPoints.map((p) => (
              <RevealItem key={p}>
                <div className="h-full rounded-2xl border border-border bg-ivory-card p-5">
                  <p className="text-sm leading-relaxed text-ink/70">{p}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </section>

        <section className="mx-auto max-w-5xl space-y-24 px-6 py-16 sm:space-y-32">
          <div className="grid items-center gap-14 sm:grid-cols-2 sm:gap-16">
            <RevealStep>
              <span className="text-sm font-semibold text-navy/60">
                Steg 1
              </span>
              <h2 className="mt-1 text-2xl font-semibold leading-snug">
                Förfrågan kommer in.
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-ink/70">
                Ett exempel på hur en riktig förfrågan för{" "}
                {industry.name.toLowerCase()} kan se ut.
              </p>
            </RevealStep>
            <RevealStep fromRight className="flex justify-center">
              <StepIllustration
                variant="customerlead"
                rotate={-2}
                data={{ text: industry.leadText }}
              />
            </RevealStep>
          </div>

          <div className="grid items-center gap-14 sm:grid-cols-2 sm:gap-16">
            <RevealStep fromRight className="sm:order-2">
              <span className="text-sm font-semibold text-navy/60">
                Steg 2
              </span>
              <h2 className="mt-1 text-2xl font-semibold leading-snug">
                Saknad information flaggas.
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-ink/70">
                Sylvor läser förfrågan och märker direkt vad som saknas
                innan ett svar kan skickas.
              </p>
            </RevealStep>
            <RevealStep className="flex justify-center sm:order-1">
              <StepIllustration
                variant="missing"
                rotate={2}
                data={{ missing: industry.missing }}
              />
            </RevealStep>
          </div>

          <div className="grid items-center gap-14 sm:grid-cols-2 sm:gap-16">
            <RevealStep>
              <span className="text-sm font-semibold text-navy/60">
                Steg 3
              </span>
              <h2 className="mt-1 text-2xl font-semibold leading-snug">
                Priset räknas fram.
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-ink/70">
                Utifrån din egen prislista — aldrig en AI-gissning — och
                prioriteras efter hur brådskande förfrågan är.
              </p>
            </RevealStep>
            <RevealStep fromRight className="flex justify-center">
              <StepIllustration
                variant="price"
                rotate={-2}
                data={{ price: industry.price, priorityLabel: industry.priorityLabel }}
              />
            </RevealStep>
          </div>
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
