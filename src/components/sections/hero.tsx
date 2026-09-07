import { ArrowUpRight } from "lucide-react";
import { BookObject } from "@/components/book-object";
import { Button } from "@/components/ui/button";
import { LINKS, SITE } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-16 lg:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 size-96 rounded-full bg-navy-mid/50 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">{SITE.tagline}</p>
          <h1 className="font-display mt-5 text-display leading-[0.95] tracking-display text-balance text-paper">
            The Courage
            <span className="block italic text-gold-bright">Economy</span>
          </h1>
          <div className="rule-gold my-7" />
          <p className="max-w-xl text-lg leading-relaxed text-pretty text-paper-dim sm:text-xl">
            {SITE.subtitle}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild>
              <a href={LINKS.diagnostic} target="_blank" rel="noreferrer">
                See the place
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={LINKS.inventory} target="_blank" rel="noreferrer">
                See it in yourself
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href={LINKS.substack} target="_blank" rel="noreferrer">
                Read
              </a>
            </Button>
          </div>
          <p className="mt-8 text-sm tracking-wide text-muted">{SITE.sequence}</p>
        </div>
        <BookObject />
      </div>
      <dl className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-4">
        {[
          ["25+", "years in the work"],
          ["Nuclear", "safety rooms"],
          ["C-suite", "and the floor"],
          ["Five", "operating elements"],
        ].map(([k, v]) => (
          <div key={k} className="bg-navy px-4 py-5 sm:px-6">
            <dt className="font-display text-2xl text-paper sm:text-3xl">{k}</dt>
            <dd className="mt-1 text-xs tracking-wide text-muted uppercase">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
