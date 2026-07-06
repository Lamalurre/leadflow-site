export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-serif text-xl font-medium tracking-tight">
          LeadFlow
        </span>
        <nav className="hidden gap-8 text-sm text-ink/70 sm:flex">
          <a href="#how-it-works" className="hover:text-ink">
            How it works
          </a>
          <a href="#pricing" className="hover:text-ink">
            Pricing
          </a>
          <a href="#contact" className="hover:text-ink">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-bronze px-4 py-2 text-sm font-medium text-white transition hover:bg-bronze-dark"
        >
          Book a free call
        </a>
      </div>
    </header>
  );
}
