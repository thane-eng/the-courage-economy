import { ArrowUpRight } from "lucide-react";
import { BookObject } from "@/components/book-object";
import { HeroProof } from "@/components/endorsement-rotator";
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
          <p className="eyebrow">For nuclear and energy leadership teams</p>
          <h1 className="font-display mt-5 text-4xl leading-[1.1] tracking-tight text-balance text-paper sm:text-5xl">
            Most leadership teams discover the real problem after it has already cost them time, money, or people.
          </h1>
          <div className="rule-gold my-7" />
          <p className="max-w-xl text-lg leading-relaxed text-pretty text-paper-dim sm:text-xl">
            I help them get that information into the room while they can still do something about it.
          </p>
          <div className="rule-gold my-7" />
          <p className="max-w-xl text-base leading-relaxed text-paper-dim sm:text-lg">
            The <strong className="font-semibold text-paper">Scorecard Stress Test</strong> simulates your own reporting chain and scorecard under a slow-developing problem, and shows where bad news stalls on its way up. In a simulated plant, every plant manager knew in week 1. The scorecard decided whether the failing press came out in week 1.2 or week 2.8.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild>
              <a href="/stress-test">
                See the Scorecard Stress Test
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/downloads/Scorecard_Stress_Test_Sample_Readout.pdf" download>
                Download a sample report
              </a>
            </Button>
          </div>
          <p className="mt-5 text-sm text-paper-dim">
            Or start smaller:{" "}
            <a href={LINKS.diagnostic} target="_blank" rel="noreferrer" className="text-gold underline-offset-4 hover:underline">
              take the free diagnostic
            </a>{" "}
            or{" "}
            <a href={LINKS.amazon} target="_blank" rel="noreferrer" className="text-gold underline-offset-4 hover:underline">
              read the book
            </a>
            .
          </p>
          <HeroProof />
          <p className="mt-8 text-sm tracking-wide text-muted">{SITE.sequence}</p>
        </div>
        <BookObject />
      </div>
      <dl className="relative mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-sm border border-hairline bg-hairline sm:grid-cols-4">
        {[
          ["25+", "years in the work"],
          ["Nuclear", "safety rooms"],
          ["C-suite", "and the floor"],
          ["INPO 15-005", "team competencies author"],
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
