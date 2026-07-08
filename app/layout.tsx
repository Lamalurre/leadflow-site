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
  title: "Sylvor — Sluta förlora jobb till långsamma svar",
  description:
    "Sylvor fångar upp dina kunders förfrågningar, prioriterar dem, tar fram ett snabbt pris-utkast och skriver ett svarsförslag — du godkänner alltid innan något skickas.",
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
