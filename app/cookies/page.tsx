import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookiepolicy — Sylvor",
  description: "Vilka cookies sylvor.se använder.",
};

export default function Cookies() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Cookiepolicy
          </h1>
          <p className="mt-4 text-sm text-ink/50">Senast uppdaterad: 11 juli 2026</p>

          <div className="prose-legal mt-10 space-y-8 leading-relaxed text-ink/75">
            <section>
              <h2 className="font-serif text-xl font-medium text-ink">Vad vi använder idag</h2>
              <p className="mt-3">
                sylvor.se använder i dagsläget inga marknadsförings- eller
                analyscookies. De enda cookies som kan förekomma är sådana
                som är nödvändiga för att sidan och vårt hosting-verktyg
                (Vercel) ska fungera tekniskt.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-ink">Om detta ändras</h2>
              <p className="mt-3">
                Om vi i framtiden lägger till analys- eller
                marknadsföringscookies (till exempel för att mäta hur
                annonser presterar) uppdaterar vi denna sida och ber om ditt
                samtycke där det krävs enligt lag.
              </p>
            </section>

            <p className="text-sm text-ink/50">
              Frågor? Mejla{" "}
              <a href="mailto:Kontakt.sylvor@outlook.com" className="text-navy underline">
                Kontakt.sylvor@outlook.com
              </a>
              . Se även vår{" "}
              <Link href="/integritetspolicy" className="text-navy underline">
                integritetspolicy
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
