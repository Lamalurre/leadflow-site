import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl font-medium tracking-tight">
          Sylvor
        </Link>
        <nav className="hidden gap-8 text-sm text-ink/70 sm:flex">
          <Link href="/#how-it-works" className="hover:text-ink">
            Så funkar det
          </Link>
          <Link href="/onboarding" className="hover:text-ink">
            Onboarding
          </Link>
          <Link href="/#pricing" className="hover:text-ink">
            Priser
          </Link>
          <Link href="/blogg" className="hover:text-ink">
            Blogg
          </Link>
          <Link href="/#contact" className="hover:text-ink">
            Kontakt
          </Link>
        </nav>
        <Link
          href="/#kom-igang"
          className="rounded-full bg-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-navy-dark"
        >
          Starta 7 dagar gratis
        </Link>
      </div>
    </header>
  );
}
