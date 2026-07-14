"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogCta() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-ivory/95 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
        <p className="text-sm font-medium text-ink/80">
          Sluta förlora jobb till långsamma svar.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/#kom-igang"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_20px_-6px_rgba(74,108,247,0.7)] transition hover:bg-navy-dark"
          >
            Testa 7 dagar gratis
          </Link>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Stäng"
            className="text-ink/40 hover:text-ink/70"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
