"use client";

import { motion } from "framer-motion";
import Reveal from "./motion/Reveal";

const CONTACT_EMAIL = "Hello.leadflow1@outlook.com";

const streaks = Array.from({ length: 16 }, (_, i) => i * (360 / 16));

export default function DiveInCta() {
  return (
    <section id="contact" className="px-6 pt-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-ivory-card px-6 py-20 text-center"
      >
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          aria-hidden="true"
        >
          {streaks.map((deg) => (
            <span
              key={deg}
              className="absolute left-1/2 top-1/2 h-px w-1/2 origin-left"
              style={{
                transform: `rotate(${deg}deg)`,
                background:
                  deg % 32 === 0
                    ? "linear-gradient(90deg, rgba(74,108,247,0.55), transparent 70%)"
                    : "linear-gradient(90deg, rgba(217,146,42,0.28), transparent 60%)",
              }}
            />
          ))}
        </motion.div>
        <span
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(74,108,247,0.25), transparent 70%)",
            filter: "blur(30px)",
          }}
          aria-hidden="true"
        />

        <Reveal delay={0.15} className="relative">
          <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Redo att sluta förlora jobb till långsamma svar?
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-block rounded-full border border-ink/20 bg-ivory px-7 py-3.5 text-base font-medium text-ink transition hover:border-ink/40"
          >
            Boka ett gratis samtal
          </a>
        </Reveal>
      </motion.div>
    </section>
  );
}
