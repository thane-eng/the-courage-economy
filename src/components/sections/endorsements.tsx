import { Reveal } from "@/components/reveal";
import { ENDORSEMENTS } from "@/lib/endorsements";

type Tone = "navy" | "paper";

export function Endorsements({
  tone = "navy",
  kicker = "Early readers",
}: {
  tone?: Tone;
  kicker?: string;
}) {
  const dark = tone === "navy";
  return (
    <section
      id="endorsements"
      className={dark ? "bg-navy px-5 py-20 sm:px-8 sm:py-24" : "bg-paper px-5 py-20 sm:px-8 sm:py-24"}
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">{kicker}</p>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
          {ENDORSEMENTS.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <blockquote>
                <p className={`font-display text-xl leading-snug tracking-display sm:text-2xl ${
                  dark ? "text-paper" : "text-ink"
                }`}>
                  \u201c{item.quote}\u201d
                </p>
                <footer className="mt-6">
                  <cite className={`not-italic text-sm font-semibold tracking-wide ${
                    dark ? "text-gold" : "text-ink"
                  }`}>
                    {item.name}
                  </cite>
                  <p className={`mt-1 text-sm ${
                    dark ? "text-paper-dim" : "text-ink-soft"
                  }`}>
                    {item.credit}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
