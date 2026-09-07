import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { LINKS } from "@/lib/site";

const CHANNELS = [
  {
    name: "Substack",
    kicker: "Every other week",
    body: "Essays, frameworks, and field stories. Same paradigm as the book.",
    href: LINKS.substack,
    cta: "Read on Substack",
  },
  {
    name: "YouTube",
    kicker: "The podcast",
    body: "Thane talking through the Courage Economy — no panel, no theater.",
    href: LINKS.youtube,
    cta: "Watch",
  },
  {
    name: "LinkedIn",
    kicker: "The field",
    body: "Observations from rooms where the cost of silence is not metaphorical.",
    href: LINKS.linkedin,
    cta: "Follow",
  },
] as const;

export function Notes() {
  return (
    <section id="notes" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Field notes · 04</p>
          <h2 className="font-display mt-4 text-section tracking-display text-paper">
            The thinking, as it develops.
          </h2>
          <div className="rule-gold my-8" />
          <p className="text-body leading-relaxed text-pretty text-paper-dim">
            Essays, frameworks, and field stories — every other week. Same
            paradigm as the book. This is where a reader stays in the work
            without having to hire anyone yet.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-hairline bg-hairline md:grid-cols-3">
          {CHANNELS.map((ch, i) => (
            <Reveal key={ch.name} delay={i * 70}>
              <a
                href={ch.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col bg-navy p-7 transition-colors duration-200 hover:bg-navy-mid sm:p-8"
              >
                <p className="eyebrow">{ch.kicker}</p>
                <h3 className="font-display mt-5 text-2xl text-paper">{ch.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-paper-dim">
                  {ch.body}
                </p>
                <span className="mt-8 inline-flex items-center gap-1 text-sm font-semibold tracking-wide text-gold uppercase">
                  {ch.cta}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
