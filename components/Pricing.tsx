export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
        Pricing
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-ivory-card p-8">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
            Setup
          </span>
          <p className="mt-3 font-serif text-4xl font-medium">$499</p>
          <p className="mt-1 text-sm text-ink/50">one-time</p>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            Includes build and integration with your existing intake
            (form/email forwarding).
          </p>
        </div>
        <div className="rounded-2xl border-2 border-bronze bg-ivory-card p-8">
          <span className="text-xs font-semibold uppercase tracking-wide text-bronze">
            Standard
          </span>
          <p className="mt-3 font-serif text-4xl font-medium">
            $59<span className="text-xl text-ink/50">/mo</span>
          </p>
          <p className="mt-1 text-sm text-ink/50">up to 100 leads/month</p>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            Covers API usage and minor ongoing support — small tweaks and bug
            fixes. New features quoted separately.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-ivory-card p-8">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
            Growth
          </span>
          <p className="mt-3 font-serif text-4xl font-medium">
            $79<span className="text-xl text-ink/50">/mo</span>
          </p>
          <p className="mt-1 text-sm text-ink/50">above 100 leads/month</p>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            Same coverage as Standard, scaled for higher lead volume.
          </p>
        </div>
      </div>
      <p className="mt-8 text-sm text-ink/50">
        No long-term contract. Cancel anytime.
      </p>
    </section>
  );
}
