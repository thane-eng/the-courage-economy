import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { LINKS, SITE } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    pageHead({
      title: "About Thane Bellomo",
      description:
        "Thane Bellomo is the architect of the Courage Economy. Twenty-five years in Fortune 500 consulting and nuclear safety rooms.",
      path: "/about",
    }),
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero eyebrow="About" title={`${SITE.author}, architect of the Courage Economy`}>
        <p>
          Most organizations do not have a strategy problem. They have a courage problem. Leaders say the right things about honesty, merit, and development. The system rewards the opposite.
        </p>
      </PageHero>
      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.42fr_1fr]">
          <img src="/brand/thane-portrait.jpg" alt="Thane Bellomo, founder of Bellomo Leadership" width={900} height={1100} className="w-full border border-rule object-cover" />
          <div className="space-y-6 text-body leading-relaxed text-ink-soft">
            <p>
              Thane spent 25 years watching this pattern from the inside — Fortune 500 consulting and 15 years leading organizational development in the nuclear industry, where silence is not a metaphor.
            </p>
            <p>
              He built Bellomo Leadership to work with C-suite and VP-level leaders who are done buying harmony with comfortable lies. The Courage Economy is the framework that came out of that work.
            </p>
            <p>
              He is the author of <em>Teamwork in Talent Development</em>, <em>The Courage to Lead</em>, and {SITE.fullTitle}, releasing {SITE.releaseDate}.
            </p>
            <p>
              The personal site remains <a href={LINKS.nameSite} className="underline decoration-gold">thanebellomo.com</a>. This site is the home of the work.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button asChild><a href="/work">The work</a></Button>
              <Button asChild variant="outline">
                <a href={LINKS.amazon} target="_blank" rel="noreferrer">Pre-order the book</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
