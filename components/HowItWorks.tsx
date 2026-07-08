"use client";

import { motion } from "framer-motion";

type Align = "left" | "center" | "right";

const steps: {
  n: string;
  title: string;
  body: string;
  left: number;
  top: number;
  labelTop: boolean;
  align: Align;
}[] = [
  {
    n: "01",
    title: "Förfrågningar kommer in som vanligt.",
    body: "Formulär på hemsidan, vidarebefordrad e-post, SMS — inga nya verktyg att lära dig.",
    left: 14,
    top: 70,
    labelTop: false,
    align: "left",
  },
  {
    n: "02",
    title: "AI läser och förbereder varje förfrågan.",
    body: "Ett pris-utkast tas fram utifrån din prislista, saknad information flaggas, förfrågan prioriteras, och ett svarsförslag skrivs i din ton.",
    left: 50,
    top: 170,
    labelTop: true,
    align: "center",
  },
  {
    n: "03",
    title: "Du granskar och skickar.",
    body: "Inget når kunden utan ditt godkännande — ingen risk att AI:n anger fel pris eller skickar ett missvisande meddelande.",
    left: 86,
    top: 90,
    labelTop: false,
    align: "right",
  },
];

const VB_W = 1200;
const VB_H = 220;

const ALIGN_CLASS: Record<Align, string> = {
  left: "",
  center: "-translate-x-1/2 text-center",
  right: "text-right",
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
        Så funkar det
      </h2>

      {/* desktop: curved connecting timeline */}
      <div className="relative mt-20 hidden sm:block" style={{ height: 540 }}>
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="absolute left-0 top-24 w-full overflow-visible"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M168,70 C350,70 420,170 600,170 S850,90 1032,90"
            fill="none"
            stroke="var(--color-navy)"
            strokeOpacity="0.4"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />
          {steps.map((s, i) => (
            <motion.circle
              key={s.n}
              cx={s.left * (VB_W / 100)}
              cy={s.top}
              r="5"
              fill="var(--color-navy)"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.45 }}
            />
          ))}
        </svg>

        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: s.labelTop ? -16 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.45 }}
            className={`absolute w-64 ${ALIGN_CLASS[s.align]}`}
            style={{
              left: s.align !== "right" ? `${s.left}%` : undefined,
              right: s.align === "right" ? `${100 - s.left}%` : undefined,
              top: s.labelTop ? 0 : 96 + (s.top / VB_H) * 300,
            }}
          >
            {!s.labelTop && (
              <span
                className={`mb-3 block w-px bg-navy/30 ${
                  s.align === "center"
                    ? "mx-auto"
                    : s.align === "right"
                      ? "ml-auto"
                      : ""
                }`}
                style={{ height: 96 + (s.top / VB_H) * 300 - 24 }}
              />
            )}
            <span className="font-serif text-3xl text-navy">{s.n}</span>
            <h3 className="mt-2 text-lg font-semibold leading-snug">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              {s.body}
            </p>
            {s.labelTop && (
              <span
                className="mx-auto mt-3 block w-px bg-navy/30"
                style={{ height: 96 + (s.top / VB_H) * 300 - 100 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* mobile: simple stacked list */}
      <div className="mt-14 space-y-10 sm:hidden">
        {steps.map((s) => (
          <div key={s.n}>
            <span className="font-serif text-3xl text-navy">{s.n}</span>
            <h3 className="mt-2 text-lg font-semibold leading-snug">
              {s.title}
            </h3>
            <p className="mt-2 leading-relaxed text-ink/70">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-navy/30 bg-navy/[0.06] px-8 py-6">
        <p className="text-center font-serif text-lg italic sm:text-xl">
          Människogranskat från grunden — du är alltid sista kollen innan
          något skickas.
        </p>
      </div>
    </section>
  );
}
