import { ShieldCheck, Zap, Languages, Tag, Clock } from "lucide-react";
import { RevealGroup, RevealItem } from "./motion/RevealGroup";

const topRow = [
  {
    icon: Zap,
    title: "Inga nya verktyg att lära dig",
    desc: "Kopplas till formuläret eller inkorgen du redan använder.",
  },
  {
    icon: Tag,
    title: "Prissatt utifrån din egen prislista",
    desc: "Uppskattningar beräknas utifrån priser du själv anger — inga gissningar.",
  },
];

const bottomRow = [
  {
    icon: Languages,
    title: "Svarar i rätt ton",
    desc: "Utkasten matchar tonen i kundens ursprungliga förfrågan.",
  },
  {
    icon: Clock,
    title: "Alltid på vakt",
    desc: "Förfrågningar prioriteras direkt när de kommer in — dag som natt.",
  },
];

function Card({
  icon: Icon,
  title,
  desc,
}: {
  icon: typeof ShieldCheck;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-ivory p-6">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/30 bg-ivory-card text-navy shadow-[0_0_18px_-4px_rgba(74,108,247,0.5)]">
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <h3 className="mt-4 font-semibold leading-snug">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">{desc}</p>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="border-y border-border bg-ivory-card px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
          Varför Sylvor
        </h2>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {topRow.map((b) => (
            <RevealItem key={b.title}>
              <Card {...b} />
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-6 grid gap-6 sm:grid-cols-3">
          <RevealItem>
            <Card {...bottomRow[0]} />
          </RevealItem>

          <RevealItem className="relative flex flex-col items-center justify-center rounded-2xl border border-navy/40 bg-ivory p-8 text-center shadow-[0_0_40px_-14px_rgba(74,108,247,0.55)]">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-[0_0_24px_-4px_rgba(74,108,247,0.8)]">
              <ShieldCheck size={24} strokeWidth={1.75} />
            </span>
            <p className="mt-4 font-serif text-5xl font-medium text-navy">
              100%
            </p>
            <h3 className="mt-2 font-semibold">Människogranskat från grunden</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">
              Varje svar skrivs som utkast — skickas aldrig förrän du
              godkänner.
            </p>
          </RevealItem>

          <RevealItem>
            <Card {...bottomRow[1]} />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
