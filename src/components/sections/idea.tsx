import { Reveal } from "@/components/reveal";

export function Idea() {
  return (
    <section id="idea" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-3xl">
        <p className="eyebrow">The idea · 01</p>
        <h2 className="font-display mt-4 text-section tracking-display text-balance text-ink">
          Most organizations run on a hidden economy.
        </h2>
        <div className="rule-gold my-8" />
        <blockquote className="font-display text-2xl leading-snug text-ink italic sm:text-3xl">
          Comfort is cheap. Honesty is expensive.
        </blockquote>
        <div className="mt-10 space-y-6 text-body leading-relaxed text-pretty text-ink-soft">
          <p>
            Small, comfortable lies function as currency — “We value your input,”
            “This is really important work,” “We promote on merit.” They buy
            short-term harmony. What they create is management debt: cynicism,
            disengagement, fake work, and weak accountability.
          </p>
          <p>
            This is not another culture initiative. It is designed productive
            struggle — a way to make truth cheaper than lying, on purpose. Five
            elements make honesty the rational choice, not the brave exception.
          </p>
        </div>
        <p className="font-display mt-12 max-w-xl text-xl leading-snug text-ink italic">
          “The Lie Economy doesn’t feel dishonest. It feels professional. That’s
          what makes it so hard to escape.”
        </p>
        <p className="mt-3 text-xs tracking-eyebrow text-muted uppercase">
          Thane Bellomo
        </p>
      </Reveal>
    </section>
  );
}
