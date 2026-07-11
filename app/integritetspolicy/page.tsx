import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Integritetspolicy — Sylvor",
  description: "Hur Sylvor samlar in, använder och skyddar dina och dina kunders personuppgifter.",
};

export default function Integritetspolicy() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Integritetspolicy
          </h1>
          <p className="mt-4 text-sm text-ink/50">Senast uppdaterad: 11 juli 2026</p>

          <div className="prose-legal mt-10 space-y-8 leading-relaxed text-ink/75">
            <section>
              <h2 className="font-serif text-xl font-medium text-ink">1. Personuppgiftsansvarig</h2>
              <p className="mt-3">
                Personuppgiftsansvarig för behandling av personuppgifter via
                sylvor.se och Sylvor-tjänsten är Lukas Planstedt, som driver
                Sylvor som enskild näringsidkare. Enskild firma är i skrivande
                stund inte formellt registrerad hos Bolagsverket/Skatteverket
                — organisationsnummer uppdateras här så snart registrering
                skett.
              </p>
              <p className="mt-3">
                Kontakt i integritetsfrågor:{" "}
                <a href="mailto:Kontakt.sylvor@outlook.com" className="text-navy underline">
                  Kontakt.sylvor@outlook.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-ink">2. Vilka uppgifter vi samlar in</h2>
              <p className="mt-3">Beroende på hur du använder sylvor.se kan vi samla in:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Kontaktuppgifter du själv anger: namn, e-post, telefonnummer, företagsnamn.</li>
                <li>Verksamhetsinformation du anger eller som hämtas från din angivna hemsideadress när du använder autofyll-funktionen i registreringsflödet (t.ex. bransch, tjänster, prisinformation).</li>
                <li>Teknisk information som IP-adress och grundläggande besöksdata, för att driva och skydda tjänsten.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-ink">3. Varför vi behandlar uppgifterna</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>För att skapa och konfigurera ditt Sylvor-konto och din provperiod.</li>
                <li>För att kunna kontakta dig om din förfrågan eller ditt konto.</li>
                <li>För att driva och förbättra Sylvor-tjänsten, inklusive AI-baserad analys av inkommande leads i din verksamhet.</li>
                <li>För att förhindra missbruk av gratis provperioder.</li>
              </ul>
              <p className="mt-3">
                Rättslig grund är i huvudsak fullgörande av avtal (när du
                registrerar dig) samt berättigat intresse (t.ex. för att
                förhindra missbruk och förbättra tjänsten).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-ink">4. Vilka vi delar uppgifter med</h2>
              <p className="mt-3">
                Vi säljer aldrig dina uppgifter. Uppgifter delas endast med
                underleverantörer som krävs för att driva tjänsten:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li><strong>Supabase</strong> — databaslagring.</li>
                <li><strong>OpenAI</strong> — AI-bearbetning av leadinformation och innehållsanalys.</li>
                <li><strong>Resend</strong> — utskick av transaktionsmail (t.ex. inbjudningar och bekräftelser).</li>
                <li><strong>Vercel</strong> — hosting av sylvor.se.</li>
                <li><strong>Railway</strong> — hosting av Sylvor-applikationens serverdel.</li>
              </ul>
              <p className="mt-3">
                Dessa leverantörer behandlar uppgifter på våra vägnar och får
                endast använda dem för att leverera sin tjänst till oss.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-ink">5. Hur länge vi sparar uppgifter</h2>
              <p className="mt-3">
                Vi sparar uppgifter så länge du är kund hos oss, samt en
                rimlig tid därefter för bokföring, uppföljning och för att
                uppfylla rättsliga skyldigheter. Uppgifter från intresseanmälningar
                som aldrig blir kunder sparas för uppföljning i upp till 12
                månader, om du inte begär att de raderas tidigare.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-ink">6. Dina rättigheter</h2>
              <p className="mt-3">
                Du har rätt att begära tillgång till, rättelse av eller
                radering av dina personuppgifter, samt rätt att invända mot
                eller begränsa viss behandling. Kontakta oss på{" "}
                <a href="mailto:Kontakt.sylvor@outlook.com" className="text-navy underline">
                  Kontakt.sylvor@outlook.com
                </a>{" "}
                för att utöva dina rättigheter. Du har också rätt att klaga
                till Integritetsskyddsmyndigheten (IMY).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-ink">7. Ändringar</h2>
              <p className="mt-3">
                Vi kan komma att uppdatera denna policy, till exempel när
                Sylvor formellt registreras som företag eller när nya
                underleverantörer tillkommer. Väsentliga ändringar meddelas
                här på sidan.
              </p>
            </section>

            <p className="text-sm text-ink/50">
              Se även vår{" "}
              <Link href="/villkor" className="text-navy underline">
                användarvillkor
              </Link>{" "}
              och{" "}
              <Link href="/cookies" className="text-navy underline">
                cookiepolicy
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
