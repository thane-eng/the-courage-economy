import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download } from "lucide-react";
import { PageHero, PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/stress-test")({
  component: StressTestPage,
  head: () =>
    pageHead({
      title: "Scorecard Stress Test",
      description:
        "A test of your incentive logic. We simulate your own reporting chain and scorecard under a slow-developing problem and show where bad news stalls on its way up, and why.",
      path: "/stress-test",
    }),
});

const RESULTS = [
  {
    label: "Scorecard rewards a clean board",
    value: "Week 2.8",
    note: "Failing press taken out of service, while leaders kept calling the plant green.",
  },
  {
    label: "Scorecard rewards finding and resolving",
    value: "Week 1.2",
    note: "Failing press taken out of service.",
  },
] as const;

const FINDINGS = [
  {
    title: "Awareness was never the issue; action was.",
    body: "Every plant manager knew about the problem in week 1, under both scorecards. The scorecard decided what they did with it.",
  },
  {
    title: "A good scorecard can be gamed.",
    body: "When two people in the chain cared more about their next promotion, the resolution scorecard's lead almost disappeared: week 3.2 against 3.4. They reported early and often, then avoided the one action that cost their own numbers: the work order.",
  },
  {
    title: "The fix is specific.",
    body: "Credit has to follow resolution, not reporting. That is a design change a leadership team can make.",
  },
] as const;

const PHASES = [
  {
    weeks: "Weeks 1–2",
    title: "Kickoff and documents",
    body: "Confirm scope with the executive sponsor. Gather the org chart, scorecard, corrective action and escalation rules, and the standing meeting schedule. Pick one past event to validate against.",
  },
  {
    weeks: "Weeks 2–4",
    title: "Anonymous survey",
    body: "A 12–15 minute survey for everyone in scope: what actually gets rewarded, what happens to people who raise problems, and the unwritten rules.",
  },
  {
    weeks: "Weeks 4–6",
    title: "Build and validate",
    body: "We build the site model and replay the past event. If it doesn't reproduce roughly where news stalled, we adjust before any results are shared.",
  },
  {
    weeks: "Weeks 6–7",
    title: "Stress test",
    body: "A slow-developing problem runs through the model under your current scorecard and one or two redesigns, several times each.",
  },
  {
    weeks: "Week 8",
    title: "Readout and redesign",
    body: "A preview with the sponsor, then a half-day working session where the leadership team reviews the findings and redesigns the scorecard.",
  },
] as const;

const DELIVERABLES = [
  ["Stall map", "Where bad news stalls in your reporting chain, layer by layer."],
  ["Your lived scorecard", "What your people say actually earns credit, set beside the official one."],
  ["Design comparison", "Time to act, and how much of what people knew reached leadership, under your current design and the alternatives."],
  ["The agents' own words", "The reasoning your incentives produce, at the moments that matter."],
  ["Level-by-level report", "Where leaders and the frontline describe the same situations differently."],
  ["Redesign session", "A half-day working session, one follow-up run of the redesign you choose, and a written report."],
] as const;

const IS_ISNT = [
  ["A test of the system's design", "An evaluation of individuals"],
  ["Built from your scorecard, org chart and an anonymous survey", "Built from personality tests or personnel files"],
  ["A way to compare scorecard designs before changing the real one", "A prediction of what a specific person will do"],
  ["A starting point for a leadership redesign session", "A finding of fault, or a compliance assessment"],
] as const;

function StressTestPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Scorecard Stress Test" title="Test your scorecard before an event does.">
        <p>
          After an event, the question is rarely "did anyone know?" It's "why didn't it reach the
          people who could act, in time?"
        </p>
        <p>
          The Scorecard Stress Test is a test of your incentive logic. We rebuild your site as a
          simulation, using your real reporting chain, your real scorecard and the unwritten rules
          your people describe. Then we run a slow-developing problem through it and show where bad
          news softens or stops on its way up, and why.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <a href={LINKS.calendly} target="_blank" rel="noreferrer">
              Book a 30-minute call
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#evidence">See the evidence</a>
          </Button>
        </div>
      </PageHero>

      {/* The problem */}
      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-body leading-relaxed text-ink-soft">
          <p className="text-sm tracking-wide text-gold uppercase">The problem</p>
          <h2 className="font-display text-section leading-[1.1] tracking-display text-balance text-ink">
            The scorecard teaches people which news is safe to send up.
          </h2>
          <p>
            The usual explanations point at people: a supervisor who sat on it, a culture that needs
            fixing. The more useful answer is often the system. Scorecards, recognition and
            reporting rules quietly teach people what gets rewarded. When a green board earns more
            credit than a true one, good people learn to manage the board. Nobody decides to hide
            anything. The incentive logic does it for them.
          </p>
          <p>
            That is a design problem, and design problems can be tested before they cause an event.
            You already stress-test equipment, procedures and emergency plans. This applies the same
            discipline to the incentive system.
          </p>
        </div>
      </section>

      {/* The evidence */}
      <section id="evidence" className="bg-navy px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">What the simulation has shown so far</p>
            <h2 className="font-display mt-4 text-section leading-[1.1] tracking-display text-balance text-paper">
              The scorecard alone more than doubled the time to act.
            </h2>
            <p className="mt-6 text-body leading-relaxed text-paper-dim">
              A simulated plant staffed by 20 AI agents, with job titles, a reporting chain and a
              scorecard, was run 20 times through the same slow equipment failure. Only the
              scorecard changed, and in a second experiment, the ambitions of two people in the
              chain.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {RESULTS.map((r) => (
              <div key={r.label} className="rounded-lg border border-goldline p-8">
                <p className="text-sm tracking-wide text-gold uppercase">{r.label}</p>
                <p className="font-display mt-3 text-5xl tracking-display text-paper sm:text-6xl">
                  {r.value}
                </p>
                <p className="mt-4 text-body leading-relaxed text-paper-dim">{r.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Averages across five runs per scorecard, ordinary workforce.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {FINDINGS.map((f) => (
              <div key={f.title} className="border-t border-gold pt-6">
                <h3 className="font-display text-xl text-paper">{f.title}</h3>
                <p className="mt-3 text-body leading-relaxed text-paper-dim">{f.body}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-lg border-l-4 border-gold bg-navy-mid p-6 text-body leading-relaxed text-paper-dim">
            <strong className="text-paper">What this does and doesn't show:</strong> the employees
            were AI agents, and five runs per condition is a small sample. The results show the
            incentive logic holds together as a system. They are not a prediction of how any
            specific person will behave. Running the test on your own system, and checking it
            against a past event you already understand, is what moves it from illustration toward
            evidence.
          </div>

          <div className="mx-auto mt-8 max-w-3xl flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <a href="/downloads/The_Scorecard_and_the_Climbers.pdf" download>
                <Download className="size-4" />
                Download sample readout
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/downloads">
                <Download className="size-4" />
                More field tools
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm tracking-wide text-gold uppercase">What it is</p>
            <h2 className="font-display mt-4 text-section leading-[1.1] tracking-display text-balance text-ink">
              A test of the system, not the people.
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-lg border border-rule">
            <div className="grid grid-cols-2 bg-ink text-sm font-semibold tracking-wide text-paper uppercase">
              <div className="p-4">It is</div>
              <div className="p-4">It isn't</div>
            </div>
            {IS_ISNT.map(([is, isnt], i) => (
              <div
                key={is}
                className={`grid grid-cols-2 text-body leading-snug ${i % 2 ? "bg-stone-100" : "bg-white/60"}`}
              >
                <div className="p-4 text-ink">{is}</div>
                <div className="p-4 text-ink-soft">{isnt}</div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm tracking-wide text-gold uppercase">How it works</p>
              <h2 className="font-display mt-4 text-section leading-[1.1] tracking-display text-balance text-ink">
                Eight weeks, five phases.
              </h2>
              <p className="mt-6 text-body leading-relaxed text-ink-soft">
                The ask of your site is small: about 15 minutes for most people, and about half a
                day each for the leadership team.
              </p>
            </div>
            <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PHASES.map((p, i) => (
                <li
                  key={p.title}
                  className={`rounded-lg border border-rule p-6 ${i === PHASES.length - 1 ? "bg-ink text-paper" : "bg-stone-100"}`}
                >
                  <p className="text-sm font-semibold tracking-wide text-gold uppercase">{p.weeks}</p>
                  <h3
                    className={`font-display mt-2 text-xl ${i === PHASES.length - 1 ? "text-paper" : "text-ink"}`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`mt-3 text-[0.95rem] leading-relaxed ${i === PHASES.length - 1 ? "text-paper-dim" : "text-ink-soft"}`}
                  >
                    {p.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-20">
            <div className="mx-auto max-w-3xl">
              <p className="text-sm tracking-wide text-gold uppercase">What you get</p>
              <h2 className="font-display mt-4 text-section leading-[1.1] tracking-display text-balance text-ink">
                Findings your leadership team can act on.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DELIVERABLES.map(([title, body]) => (
                <div key={title} className="rounded-lg border border-rule border-l-4 border-l-gold bg-white/60 p-6">
                  <h3 className="font-display text-xl text-ink">{title}</h3>
                  <p className="mt-2 text-body leading-relaxed text-ink-soft">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Confidentiality + pilot */}
      <section className="bg-navy px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Confidentiality</p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-display text-paper">
              It models the system, so no one can be identified.
            </h2>
            <ul className="mt-6 space-y-4 text-body leading-relaxed text-paper-dim">
              <li>
                <strong className="text-paper">No personnel data.</strong> No names, personnel files
                or personality assessments. Roles in the model are positions, not people.
              </li>
              <li>
                <strong className="text-paper">Anonymous survey.</strong> Collected by a neutral
                party. No group with fewer than five responses is reported separately.
              </li>
              <li>
                <strong className="text-paper">Your documents stay yours.</strong> Used only for
                this engagement, under a mutual NDA, and returned or destroyed on request.
              </li>
              <li>
                <strong className="text-paper">De-identified AI processing.</strong> Only the site
                model and survey themes reach the AI model, never raw responses or personal data.
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-goldline p-8">
            <p className="eyebrow">Pilot sites</p>
            <h2 className="font-display mt-4 text-3xl leading-tight tracking-display text-paper">
              Now accepting two or three pilot sites.
            </h2>
            <p className="mt-6 text-body leading-relaxed text-paper-dim">
              Pilot sites receive the full engagement at a reduced fee, one extra follow-up run of
              the redesign they choose, and a voice in how the product is shaped. In return, they
              supply one past event to validate against, give candid feedback, and allow a
              de-identified case study, with their approval before anything is published.
            </p>
            <p className="mt-4 text-body leading-relaxed text-paper-dim">
              Built for nuclear and energy operations, where the cost of a problem surfacing late is
              not abstract.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href={LINKS.calendly} target="_blank" rel="noreferrer">
                  Book a 30-minute call
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="ghost">
                <a href={LINKS.contact} target="_blank" rel="noreferrer">
                  Start a conversation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
