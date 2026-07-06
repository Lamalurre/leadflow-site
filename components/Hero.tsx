export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20 pt-16 text-center sm:pt-24">
      <h1 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
        Stop losing leads to slow replies.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl">
        LeadFlow reads your incoming inquiries, estimates pricing, flags
        what&apos;s missing, and drafts a ready-to-send reply — you stay in
        control of every message that goes out.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="#demo"
          className="w-full rounded-full bg-ink px-7 py-3.5 text-base font-medium text-ivory transition hover:bg-ink/85 sm:w-auto"
        >
          See how it works
        </a>
        <a
          href="#contact"
          className="w-full rounded-full border border-ink/20 px-7 py-3.5 text-base font-medium text-ink transition hover:border-ink/40 hover:bg-ink/5 sm:w-auto"
        >
          Book a free call
        </a>
      </div>
    </section>
  );
}
