import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { ELEMENTS, LINKS } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/elements")({
  component: ElementsPage,
  head: () =>
    pageHead({
      title: "The five elements of a Courage Economy",
      description:
        "Important Work, Curiosity, Challenge, Trust, and Community — the five operating elements that make honesty the rational choice.",
      path: "/elements",
    }),
});

function ElementsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="The map" title="The five elements">
        <p>
          A Courage Economy is not a personality trait. It is designed
          conditions. These five make honesty cheaper than lying.
        </p>
      </PageHero>
      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-14">
          {ELEMENTS.map((el) => (
            <article key={el.num} id={el.slug}>
              <p className="eyebrow">
                {el.num} · {el.role}
              </p>
              <h2 className="font-display mt-3 text-3xl tracking-display text-ink">
                {el.name}
              </h2>
              <p className="mt-4 text-body leading-relaxed text-ink-soft italic">
                {el.line}
              </p>
              <p className="mt-4 text-body leading-relaxed text-ink-soft">
                <strong className="text-ink">When it is missing. </strong>
                {el.missing}
              </p>
              <p className="mt-4 text-body leading-relaxed text-ink-soft">
                <strong className="text-ink">Monday. </strong>
                {el.monday}
              </p>
            </article>
          ))}
          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild>
              <a href={LINKS.diagnostic} target="_blank" rel="noreferrer">
                Score your organization
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/book">Read the book</a>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
