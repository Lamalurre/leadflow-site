import { RevealGroup, RevealItem } from "./motion/RevealGroup";
import Reveal from "./motion/Reveal";

const problems = [
  "Förfrågningar blir liggande i timmar eller dagar",
  "Varje förfrågan får samma generiska svar — eller inget alls",
  "Svårt att hålla koll på vad som kommit in via mejl, formulär och SMS när du är ute på jobb",
  "Uppföljningar glöms bort i stressen",
];

export default function Problem() {
  return (
    <section className="border-y border-border bg-ivory-card">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <RevealGroup className="grid gap-6 sm:grid-cols-2">
          {problems.map((p) => (
            <RevealItem key={p} className="flex gap-3 text-lg leading-snug">
              <span className="mt-1 text-navy">—</span>
              <span>{p}</span>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal delay={0.3}>
          <p className="mt-12 font-serif text-xl italic leading-relaxed text-ink/80 sm:text-2xl">
            Varje obesvarad förfrågan är ett jobb som går till den som
            svarade först — oftast en konkurrent.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
