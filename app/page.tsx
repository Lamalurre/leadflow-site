import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Demo from "@/components/Demo";
import WhatWeBuild from "@/components/WhatWeBuild";
import WhoItsFor from "@/components/WhoItsFor";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <Demo />
        <WhatWeBuild />
        <WhoItsFor />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
