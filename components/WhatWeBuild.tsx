const alsoAvailable = [
  { name: "Chatbots", desc: "Website chat that qualifies and routes visitors." },
  { name: "Support Automation", desc: "AI-drafted responses to repeat support questions." },
  { name: "Reception Agents", desc: "AI phone/chat reception for missed calls and after hours." },
];

export default function WhatWeBuild() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
        What we build
      </h2>
      <div className="mt-10 rounded-2xl border border-border bg-ivory-card p-8">
        <span className="text-xs font-semibold uppercase tracking-wide text-bronze">
          Flagship
        </span>
        <h3 className="mt-2 font-serif text-2xl font-medium">
          Lead Conversion Automation
        </h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-ink/70">
          The system shown above — every inbound inquiry read, priced against
          your rates, checked for missing details, ranked by priority, and
          turned into a ready-to-send reply, with you approving the final
          message before it ever reaches a customer.
        </p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {alsoAvailable.map((item) => (
          <div key={item.name}>
            <h4 className="font-semibold">{item.name}</h4>
            <p className="mt-1 text-sm leading-relaxed text-ink/60">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
