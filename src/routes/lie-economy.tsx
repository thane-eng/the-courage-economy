import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/lie-economy")({
  component: LieEconomyPage,
  head: () =>
    pageHead({
      title: "The Lie Economy",
      description:
        "The Lie Economy is the hidden system where comfortable lies function as currency inside organizations. It does not feel dishonest. It feels professional.",
      path: "/lie-economy",
    }),
});

function LieEconomyPage() {
  return (
    <PageShell>
      <PageHero eyebrow="The diagnosis" title="The Lie Economy">
        <p>
          The Lie Economy does not feel dishonest. It feels professional. That
          is what makes it so hard to escape.
        </p>
      </PageHero>
      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-body leading-relaxed text-ink-soft">
          <p>
            Small, comfortable lies function as currency: “We value your input.”
            “This is really important work.” “We promote on merit.” “Bring your
            whole self to work.”
          </p>
          <p>
            They buy short-term harmony. What they create is management debt —
            cynicism, disengagement, fake work, and weak accountability.
          </p>
          <p>
            People are not evil. They are rational. In a Lie Economy, honesty is
            expensive and lying is cheap. The skill that gets rewarded is
            navigating the fiction, not doing the work.
          </p>
          <p>
            The alternative is not slogans. It is a Courage Economy: five
            operating elements that make honesty the rational choice instead of
            the brave exception.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild>
              <a href={LINKS.inventory} target="_blank" rel="noreferrer">
                Take the Lie Economy Inventory
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/elements">See the five elements</a>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
