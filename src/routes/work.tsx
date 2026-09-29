import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () =>
    pageHead({
      title: "Work with Thane Bellomo",
      description:
        "Executive coaching and organizational work for leaders building a Courage Economy. Start with the diagnostic, then the conversation.",
      path: "/work",
    }),
});

function WorkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The work"
        title="If the diagnostic named something you cannot unsee, this is the next conversation."
      >
        <p>
          Executive coaching and organizational work for leaders who are done
          buying harmony with comfortable lies.
        </p>
      </PageHero>
      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-body leading-relaxed text-ink-soft">
          <p>
            The public tools show you the gap. Client work — the Organizational
            Courage Index and the Individual Courage Index — is how we measure
            it with the people who already know.
          </p>
          <p>
            Twenty-five years in rooms where the cost of silence is not
            metaphorical: nuclear safety, healthcare, manufacturing, the
            C-suite.
          </p>
          <p>This is not a workshop series. It is not a certification track.</p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild>
              <a href={LINKS.calendly} target="_blank" rel="noreferrer">
                Book a call
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={LINKS.contact} target="_blank" rel="noreferrer">
                Start a conversation
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href={LINKS.diagnostic} target="_blank" rel="noreferrer">
                Take the diagnostic first
              </a>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
