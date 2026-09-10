import { ArrowUpRight } from "lucide-react";
import { BookObject } from "@/components/book-object";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/site";

export function Book() {
  return (
    <section id="book" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.42fr_1fr] lg:gap-20">
        <Reveal>
          <BookObject size="inline" />
        </Reveal>
        <Reveal delay={80}>
          <p className="eyebrow">The book · 05</p>
          <h2 className="font-display mt-4 text-section tracking-display text-ink">
            The Courage Economy
          </h2>
          <div className="rule-gold my-8" />
          <p className="max-w-xl text-body leading-relaxed text-pretty text-ink-soft">
            How Comfortable Lies Are Bankrupting Your Organization — and How to
            Build One That Runs on Truth. The field guide. Not a culture campaign
            in hardcover.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild>
              <a href={LINKS.amazon} target="_blank" rel="noreferrer">
                Pre-order
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#loop">Get launch updates</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
