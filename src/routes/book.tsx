import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { BookObject } from "@/components/book-object";
import { PageShell } from "@/components/page-shell";
import { Endorsements } from "@/components/sections/endorsements";
import { Button } from "@/components/ui/button";
import { LINKS, SITE } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () =>
    pageHead({
      title: SITE.fullTitle,
      description: `${SITE.fullTitle} by ${SITE.author}. Pre-order now. Releases ${SITE.releaseDate}.`,
      path: "/book",
    }),
});

function BookPage() {
  return (
    <PageShell>
      <section className="bg-navy px-5 pb-16 pt-16 sm:px-8 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.4fr_1fr]">
          <BookObject size="inline" />
          <div>
            <p className="eyebrow">The book</p>
            <h1 className="font-display mt-4 text-section tracking-display text-paper">{SITE.fullTitle}</h1>
            <div className="rule-gold my-8" />
            <p className="max-w-xl text-body leading-relaxed text-paper-dim">
              Most organizations run on a hidden Lie Economy. Small, comfortable lies buy short-term harmony and create management debt. This book is the field guide for building the alternative.
            </p>
            <p className="mt-4 text-sm tracking-wide text-gold">Releases {SITE.releaseDate} \u00b7 By {SITE.author}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href={LINKS.amazon} target="_blank" rel="noreferrer">
                  Pre-order on Amazon
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={LINKS.diagnostic} target="_blank" rel="noreferrer">Take the diagnostic first</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Endorsements tone="paper" kicker="Early readers" />
      <section className="bg-paper px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-body leading-relaxed text-ink-soft">
          <h2 className="font-display text-3xl tracking-display text-ink">Who it is for</h2>
          <p>C-suite and senior leaders who already know the culture is lying to itself and are done buying another initiative to postpone the reckoning.</p>
          <h2 className="font-display pt-6 text-3xl tracking-display text-ink">What it is not</h2>
          <p>It is not a culture campaign in hardcover. It is not a certification. It does not offer quadrant charts. It names the conditions that make honesty expensive, then shows how to reverse them.</p>
          <h2 className="font-display pt-6 text-3xl tracking-display text-ink">The five elements</h2>
          <p>Important Work. Curiosity. Challenge. Trust. Community. When those five are designed on purpose, telling the truth becomes cheaper than lying.</p>
          <p>
            Read the map on the <a href="/elements" className="text-ink underline decoration-gold">five elements</a> page, or start with the <a href="/lie-economy" className="text-ink underline decoration-gold">Lie Economy</a>.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
