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
      title: "How We Work With You",
      description:
        "Diagnosis, incentives assessment, designing productive struggle, and monitoring progress. How the Courage Economy work actually happens.",
      path: "/work",
    }),
});

const STEPS = [
  {
    number: "01",
    title: "Diagnosis",
    color: "bg-stone-100",
    body: "We start with what is actually happening, not what the organization says is happening. The diagnostic and a short conversation surface where the real conversation is living outside the room, where important work is not being treated as important, and where silence is currently cheaper than truth.",
  },
  {
    number: "02",
    title: "Incentives Assessment",
    color: "bg-slate-100",
    body: "What an organization is, is a function of what it rewards, punishes, and tolerates. We examine the actual incentives—formal and informal—that make the current pattern rational. This is usually the hardest conversation, and the one that has to happen if anything else is going to stick.",
  },
  {
    number: "03",
    title: "Designing Productive Struggle",
    color: "bg-zinc-100",
    body: "Struggle is a resource. We design the conditions so that important work is also difficult enough that lying becomes expensive. This includes real stakes, named tension, friction by design, and scheduled moments where challenge is expected rather than exceptional. The goal is not more conflict. The goal is better information.",
  },
  {
    number: "04",
    title: "Monitoring Progress",
    color: "bg-neutral-100",
    body: "We track whether the real conversation is moving into the room and whether the incentives are actually changing. Progress is measured by observable shifts—what gets said in meetings, what gets rewarded, what gets measured—not by engagement scores or culture statements.",
  },
] as const;

function WorkPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="How we work"
        title="How we work with you."
      >
        <p>
          Four stages. No frameworks for the sake of frameworks. The work is to make truth cheaper than lying inside the rooms that already exist.
        </p>
      </PageHero>

      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className={`rounded-2xl border border-rule/60 p-8 ${step.color}`}
              >
                <p className="text-sm tracking-wide text-gold uppercase">{step.number}</p>
                <h2 className="font-display mt-2 text-2xl tracking-display text-ink">
                  {step.title}
                </h2>
                <p className="mt-4 text-body leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl space-y-6 text-body leading-relaxed text-ink-soft">
            <p>
              This is not a workshop series and it is not a certification track. It is diagnostic work followed by design work, done with the leaders who already know something is off.
            </p>
            <p>
              Twenty-five years in rooms where the cost of silence is not metaphorical: nuclear safety, healthcare, manufacturing, the C-suite.
            </p>
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
        </div>
      </section>
    </PageShell>
  );
}
