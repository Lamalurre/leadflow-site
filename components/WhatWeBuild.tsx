import Link from "next/link";
import Reveal from "./motion/Reveal";

export default function WhatWeBuild() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
        Djupdykning i flödet
      </h2>
      <Reveal delay={0.1}>
        <Link
          href="/lead-conversion-automation"
          className="mt-10 block rounded-2xl border border-border bg-ivory-card p-8 transition hover:border-navy/40 hover:shadow-sm"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-navy">
            Flaggskepp
          </span>
          <h3 className="mt-2 font-serif text-2xl font-medium">
            Första svaret
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-ink/70">
            Så läses varje inkommande förfrågan, kontrolleras för saknad
            information, prissätts utifrån din prislista, prioriteras och
            blir ett svarsförslag redo att skickas — med dig som godkänner
            sista ordet. Ett komplement till ditt befintliga offertverktyg —
            Sylvor äger det första svaret, inte hela offertprocessen.
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy">
            Se hur det funkar →
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
