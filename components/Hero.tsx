"use client";

import { motion } from "framer-motion";
import { Sparkles, Tag, PenLine, CheckCircle2 } from "lucide-react";
import RevealWords from "./motion/RevealWords";

const chips = [
  { label: "Prissatt", icon: Tag, className: "left-2 top-6 -rotate-6 sm:left-4 sm:top-10" },
  { label: "Utkast", icon: PenLine, className: "right-0 top-0 rotate-6 sm:right-2 sm:top-4" },
  { label: "Godkänt", icon: CheckCircle2, className: "bottom-2 left-1/2 -translate-x-1/2 rotate-3" },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-16 pt-16 text-center sm:pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mb-6 flex h-52 w-52 items-center justify-center sm:h-60 sm:w-60"
      >
        <div
          className="pulse-glow absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(74,108,247,0.35), rgba(74,108,247,0.08) 55%, transparent 75%)",
            filter: "blur(18px)",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-6 rounded-full border border-navy/30" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-navy/40 bg-ivory-card text-navy shadow-[0_0_30px_-4px_rgba(74,108,247,0.6)]">
            <Sparkles size={30} strokeWidth={1.5} />
          </span>
        </div>
        {chips.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.span
              key={c.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute inline-flex items-center gap-1.5 rounded-full border border-border bg-ivory-card px-3 py-1.5 text-xs font-medium text-ink/80 shadow-lg ${c.className}`}
            >
              <Icon size={13} strokeWidth={1.75} className="text-navy" />
              {c.label}
            </motion.span>
          );
        })}
      </motion.div>

      <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
        <RevealWords text="Sluta förlora jobb till långsamma svar." />
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl"
      >
        Sylvor fångar upp kundernas förfrågningar, prioriterar dem, tar fram
        ett snabbt pris-utkast och skriver ett svarsförslag — innan du ens
        hunnit öppna ditt offertverktyg. Du godkänner alltid innan något
        skickas.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <a
          href="#demo"
          className="w-full rounded-full bg-navy px-7 py-3.5 text-base font-medium text-white shadow-[0_0_25px_-6px_rgba(74,108,247,0.7)] transition hover:bg-navy-dark sm:w-auto"
        >
          Se hur det funkar
        </a>
        <a
          href="#contact"
          className="w-full rounded-full border border-ink/20 px-7 py-3.5 text-base font-medium text-ink transition hover:border-ink/40 hover:bg-ink/5 sm:w-auto"
        >
          Boka ett gratis samtal
        </a>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="mt-14 flex items-center justify-center gap-2 text-xs uppercase tracking-wide text-ink/35"
      >
        Scrolla vidare
        <motion.span
          aria-hidden="true"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.p>
      <div className="grid-floor mt-4" aria-hidden="true" />
    </section>
  );
}
