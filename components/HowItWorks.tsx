const steps = [
  {
    n: "01",
    title: "Leads come in the way they already do.",
    body: "Website form, forwarded email, DM — no new tools to learn.",
  },
  {
    n: "02",
    title: "AI reads and prepares each one.",
    body: "Estimated price based on your rates, missing info flagged, priority ranked, and a ready-to-send reply drafted in your voice.",
  },
  {
    n: "03",
    title: "You review and send.",
    body: "Nothing reaches a customer without your approval — no risk of the AI quoting the wrong price or sending an off-tone message.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
        How it works
      </h2>
      <div className="mt-14 grid gap-10 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n}>
            <span className="font-serif text-4xl text-bronze">{s.n}</span>
            <h3 className="mt-4 text-lg font-semibold leading-snug">
              {s.title}
            </h3>
            <p className="mt-2 leading-relaxed text-ink/70">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-14 rounded-2xl border border-bronze/30 bg-bronze/[0.06] px-8 py-6">
        <p className="text-center font-serif text-lg italic sm:text-xl">
          Human-approved by design — you&apos;re always the last check before
          anything is sent.
        </p>
      </div>
    </section>
  );
}
