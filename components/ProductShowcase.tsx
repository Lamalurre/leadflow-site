"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import StepIllustration from "./StepIllustration";
import Reveal from "./motion/Reveal";

const tabs = [
  { label: "Inkorg", variant: "inbox" as const },
  { label: "Prioritet & pris", variant: "price" as const },
  { label: "Svarsutkast", variant: "draft" as const },
  { label: "Godkänn & skicka", variant: "approve" as const },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="demo"
      className="border-y border-border bg-ivory-card px-6 py-24"
    >
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Se det i praktiken
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            En förfrågan som prioriteras, prissätts och besvaras — från
            start till mål. Varje steg granskas av dig innan något når
            kunden.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 inline-flex flex-wrap justify-center gap-1 rounded-full border border-border bg-ivory p-1">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === i ? "text-white" : "text-ink/60 hover:text-ink"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="showcase-tab-pill"
                    className="absolute inset-0 rounded-full bg-navy shadow-[0_0_16px_-4px_rgba(74,108,247,0.7)]"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative mt-14 flex justify-center py-10">
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="h-72 w-72 rounded-full border border-navy/15" />
              <span className="absolute h-96 w-96 rounded-full border border-navy/10" />
              <span
                className="absolute h-56 w-56 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(74,108,247,0.18), transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={tabs[active].variant}
                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <StepIllustration
                  variant={tabs[active].variant}
                  rotate={0}
                  className="max-w-sm"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <Link
            href="/lead-conversion-automation"
            className="inline-flex items-center gap-1 font-medium text-navy hover:text-navy-dark"
          >
            Se hela flödet →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
