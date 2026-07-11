import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-ink/50 sm:flex-row">
        <span>© {new Date().getFullYear()} Sylvor</span>
        <span>Människogranskad automation för snabbare kundsvar.</span>
        <nav className="flex items-center gap-4">
          <Link href="/integritetspolicy" className="hover:text-ink/80">
            Integritetspolicy
          </Link>
          <Link href="/villkor" className="hover:text-ink/80">
            Villkor
          </Link>
          <Link href="/cookies" className="hover:text-ink/80">
            Cookies
          </Link>
        </nav>
      </div>
    </footer>
  );
}
