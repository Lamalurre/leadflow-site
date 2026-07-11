import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sylvor.se"),
  title: {
    default: "Sylvor — Sluta förlora jobb till långsamma svar",
    template: "%s",
  },
  description:
    "Sylvor skickar ett säkert autosvar direkt på inkommande leads, analyserar förfrågan med AI och tar fram ett svarsförslag du godkänner innan det skickas. Byggt för hantverkare, städfirmor, flyttfirmor och andra lead-drivna serviceföretag.",
  keywords: [
    "AI leadhantering",
    "snabbare kundsvar",
    "offertautomation",
    "hantverkare AI",
    "leadrespons",
  ],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "Sylvor",
    title: "Sylvor — Sluta förlora jobb till långsamma svar",
    description:
      "Säkert autosvar direkt, AI-analys av leadet och ett svarsförslag du godkänner innan det skickas.",
    url: "https://sylvor.se",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylvor — Sluta förlora jobb till långsamma svar",
    description:
      "Säkert autosvar direkt, AI-analys av leadet och ett svarsförslag du godkänner innan det skickas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${fraunces.variable} ${inter.variable} h-full dark`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink antialiased relative">
        <div className="bg-glow-field" aria-hidden="true" />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
