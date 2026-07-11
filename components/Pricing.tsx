"use client";

import { motion } from "framer-motion";
import Reveal from "./motion/Reveal";

const plans = [
  {
    tier: "Bas",
    price: "449 kr",
    suffix: "/mån",
    period: "50 leads/mån · 1 användare",
    desc: "E-post- och formulärintag, med grundläggande AI-svarsförslag för varje lead.",
    rotate: -2,
    highlight: false,
  },
  {
    tier: "Standard",
    price: "799 kr",
    suffix: "/mån",
    period: "200 leads/mån · 3 användare",
    desc: "SMS-notiser, snabbare svarstider och upp till 3 användare.",
    rotate: 0,
    highlight: true,
  },
  {
    tier: "Firma",
    price: "1 499 kr",
    suffix: "/mån",
    period: "högre volym (fair use) · fler användare",
    desc: "Obegränsade användare, prioriterad support och anpassade arbetsflöden för ditt team.",
    rotate: 2,
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
        Priser
      </h2>
      <p className="mt-3 max-w-2xl text-ink/60">
        Samma paket oavsett bransch — prissättningen styrs av volym och
        antal användare, inte vilken typ av verksamhet du driver.
      </p>
      <div className="relative mt-16">
        <svg
          className="pointer-events-none absolute left-0 top-1/2 hidden w-full -translate-y-1/2 sm:block"
          height="2"
          aria-hidden="true"
        >
          <line
            x1="16%"
            x2="84%"
            y1="1"
            y2="1"
            stroke="var(--color-navy)"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        </svg>
        <div className="relative grid gap-8 pt-4 sm:grid-cols-3">
          {plans.map((p, i) => (
            <div key={p.tier} className="relative">
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-[0_0_16px_-2px_rgba(217,146,42,0.7)]">
                  Mest populär
                </span>
              )}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`rounded-2xl border p-8 shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)] ${
                  p.highlight
                    ? "border-navy bg-ivory-card shadow-[0_0_35px_-8px_rgba(74,108,247,0.45)]"
                    : "border-border bg-ivory-card"
                }`}
              >
                <span
                  className={`text-xs font-semibold uppercase tracking-wide ${
                    p.highlight ? "text-navy" : "text-ink/50"
                  }`}
                >
                  {p.tier}
                </span>
                <p className="mt-3 font-serif text-4xl font-medium">
                  {p.price}
                  {p.suffix && (
                    <span className="text-xl text-ink/50">{p.suffix}</span>
                  )}
                </p>
                <p className="mt-1 text-sm text-ink/50">{p.period}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  {p.desc}
                </p>
                <a
                  href="#kom-igang"
                  className={`mt-6 block rounded-full px-5 py-2.5 text-center text-sm font-medium transition ${
                    p.highlight
                      ? "bg-navy text-white shadow-[0_0_20px_-6px_rgba(74,108,247,0.7)] hover:bg-navy-dark"
                      : "border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/5"
                  }`}
                >
                  Starta 7 dagar gratis
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <Reveal delay={0.3}>
        <p className="mt-10 text-sm text-ink/50">
          Ingen bindningstid. Avsluta när du vill.
        </p>
        <p className="mt-1 text-sm text-ink/50">
          Inget kreditkort krävs för att komma igång. Igång inom 24 timmar.
        </p>
      </Reveal>
    </section>
  );
}
