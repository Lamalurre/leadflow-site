import Reveal from "./motion/Reveal";

export default function WhoItsFor() {
  return (
    <section className="border-y border-border bg-ivory-card px-6 py-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
          Vem det är för
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">
          Byggd för hantverkare och byggfirmor — bygg, VVS, el, målare,
          snickare — som får förfrågningar löpande och inte alltid hinner
          svara lika snabbt som de vill mitt i arbetsdagen.
        </p>
        <p className="mt-3 text-sm text-ink/50">
          Fungerar även för städ- och flyttfirmor och andra servicebolag med
          liknande behov av snabb kundrespons.
        </p>
      </Reveal>
    </section>
  );
}
