import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Användarvillkor — Sylvor",
  description: "Villkoren för att använda Sylvors provperiod och betaltjänst.",
};

export default function Villkor() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
            Användarvillkor
          </h1>
          <p className="mt-4 text-sm text-ink/50">Senast uppdaterad: 11 juli 2026</p>

          <div className="prose-legal mt-10 space-y-8 leading-relaxed text-ink/75">
            <section>
              <h2 className="font-serif text-xl font-medium text-ink">1. Om tjänsten</h2>
              <p className="mt-3">
                Sylvor tillhandahålls av Lukas Planstedt (enskild
                näringsidkare, under registrering). Genom att registrera dig
                för en provperiod eller ett betalt paket godkänner du dessa
                villkor.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-ink">2. Provperiod</h2>
              <p className="mt-3">
                Nya konton får normalt 7 dagars gratis provperiod med full
                funktionalitet. Inget kreditkort krävs för att starta
                provperioden. Vi förbehåller oss rätten att neka eller
                begränsa upprepade provperioder för samma företag, telefonnummer
                eller e-postadress för att förhindra missbruk.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-ink">3. Vad Sylvor gör — och inte gör</h2>
              <p className="mt-3">
                Sylvor skickar endast ett säkert, standardiserat första
                autosvar automatiskt vid inkommande leads. Prisförslag,
                offerter och alla övriga svar skapas som utkast och skickas
                aldrig till din kund utan att du aktivt godkänner dem. Du
                ansvarar själv för innehållet i alla meddelanden du väljer
                att godkänna och skicka.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-ink">4. Priser och betalning</h2>
              <p className="mt-3">
                Aktuella priser och paket visas på{" "}
                <Link href="/#pricing" className="text-navy underline">
                  sylvor.se/#pricing
                </Link>
                . Ingen bindningstid — du kan avsluta ditt abonnemang när du
                vill. Priser kan komma att ändras; befintliga kunder
                informeras i rimlig tid innan en prisändring börjar gälla.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-ink">5. Ditt ansvar</h2>
              <p className="mt-3">
                Du ansvarar för att uppgifter du lämnar är korrekta, att du
                har rätt att använda den information (t.ex. prislistor eller
                text från din hemsida) du laddar upp i tjänsten, och att din
                användning av Sylvor följer tillämplig lag, inklusive
                marknadsföringslagen och GDPR gentemot dina egna kunder.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-ink">6. Ansvarsbegränsning</h2>
              <p className="mt-3">
                Sylvor tillhandahålls i befintligt skick. Vi ansvarar inte
                för indirekta skador eller förlorad affär till följd av
                driftstörningar, felaktiga AI-genererade utkast som du valt
                att godkänna, eller tredjepartstjänster vi är beroende av.
                Räkneexempel och kalkylatorer på sylvor.se är uppskattningar,
                inte garantier.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-medium text-ink">7. Ändringar och uppsägning</h2>
              <p className="mt-3">
                Vi kan uppdatera dessa villkor löpande; väsentliga ändringar
                meddelas på sidan. Du kan säga upp ditt konto när du vill.
                Vi förbehåller oss rätten att stänga av konton som missbrukar
                tjänsten eller bryter mot dessa villkor.
              </p>
            </section>

            <p className="text-sm text-ink/50">
              Se även vår{" "}
              <Link href="/integritetspolicy" className="text-navy underline">
                integritetspolicy
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
