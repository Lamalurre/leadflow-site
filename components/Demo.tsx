const frames = [
  {
    label: "1. Lead comes in",
    caption: "Screenshot: raw inquiry as received (form/email/DM)",
  },
  {
    label: "2. Priority + price flagged",
    caption: "Screenshot: lead ranked, price estimated, missing info flagged",
  },
  {
    label: "3. Reply drafted",
    caption: "Screenshot: ready-to-send reply drafted in your voice",
  },
  {
    label: "4. You approve and send",
    caption: "Screenshot: one-click review and send",
  },
];

export default function Demo() {
  return (
    <section
      id="demo"
      className="border-y border-border bg-ivory-card px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
          See it in action
        </h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          A lead being triaged, priced, and drafted — start to finish.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {frames.map((f) => (
            <div
              key={f.label}
              className="flex aspect-[9/16] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-ink/20 bg-ivory p-6 text-center"
            >
              <span className="text-sm font-semibold text-ink/50">
                {f.label}
              </span>
              <span className="text-xs leading-relaxed text-ink/40">
                {f.caption}
              </span>
              <span className="mt-2 rounded-full border border-ink/15 px-3 py-1 text-[11px] uppercase tracking-wide text-ink/40">
                Placeholder
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
