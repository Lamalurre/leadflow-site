import Link from "next/link";
import {
  Hammer,
  SprayCan,
  Truck,
  Wrench,
  Stethoscope,
  Scale,
  Briefcase,
  Home,
  Car,
  PartyPopper,
} from "lucide-react";
import Reveal from "./motion/Reveal";
import { RevealGroup, RevealItem } from "./motion/RevealGroup";

const industries = [
  { icon: Hammer, label: "Hantverkare", flagship: true, slug: "hantverkare" },
  { icon: SprayCan, label: "Städfirmor", flagship: true, slug: "stadfirma" },
  { icon: Truck, label: "Flyttfirmor", flagship: true, slug: "flyttfirma" },
  { icon: Wrench, label: "Servicebolag" },
  { icon: Stethoscope, label: "Kliniker" },
  { icon: Scale, label: "Jurister" },
  { icon: Briefcase, label: "Konsulter" },
  { icon: Home, label: "Mäklare" },
  { icon: Car, label: "Bilfirmor" },
  { icon: PartyPopper, label: "Eventbolag" },
];

export default function Industries() {
  return (
    <section className="border-y border-border bg-ivory-card px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="max-w-2xl">
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Byggt för branscher där snabba svar vinner affärer
          </h2>
          <p className="mt-3 text-ink/70">
            Sylvor fungerar för alla branscher nedan. Hantverkare,
            städfirmor och flyttfirmor är de som använder Sylvor mest —
            men plattformen är lika kraftfull för resten.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const cardClass = `relative flex h-full flex-col items-center gap-3 rounded-2xl border px-4 py-6 text-center ${
              ind.flagship
                ? "border-navy/40 bg-ivory shadow-[0_0_24px_-10px_rgba(74,108,247,0.5)]"
                : "border-border bg-ivory"
            } ${ind.slug ? "transition hover:border-navy hover:shadow-[0_0_30px_-8px_rgba(74,108,247,0.65)]" : ""}`;
            const inner = (
              <>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full border ${
                    ind.flagship
                      ? "border-navy/40 bg-navy text-white"
                      : "border-navy/30 bg-ivory-card text-navy"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium">{ind.label}</span>
              </>
            );
            return (
              <RevealItem key={ind.label}>
                {ind.slug ? (
                  <Link href={`/branscher/${ind.slug}`} className={cardClass}>
                    {inner}
                  </Link>
                ) : (
                  <div className={cardClass}>{inner}</div>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
