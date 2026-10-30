import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/field-notes")({
  component: FieldNotesPage,
  head: () =>
    pageHead({
      title: "Field Notes",
      description:
        "Essays and field observations on the Courage Economy — why organizations lie, and what leaders can do about it.",
      path: "/field-notes",
    }),
});

const NOTES = [
  {
    date: "October 2026",
    title: "The Struggle Is the Point",
    excerpt:
      "Why do some groups accomplish extraordinary things together while most never do? A story from the Adirondacks at 17, and what it revealed about designing organizations where the struggle itself creates trust, community, and truth.",
    href: "/downloads/The_Struggle_Is_the_Point.pdf",
  },
  {
    date: "October 2026",
    title: "AI and the Struggle",
    excerpt:
      "The central question is not whether AI will remove suffering. It will. The question is how much struggle we need to retain so that purpose, pride, and contentment remain possible. Designed productive struggle is one answer.",
    href: "/downloads/AI_and_the_Struggle.pdf",
  },
  {
    date: "May 2026",
    title: "The Meeting After the Meeting",
    excerpt:
      "Every organization has a meeting after the meeting. Productive disagreement is the practice that moves the real conversation into the room where decisions are made.",
    href: "/downloads/Productive_Disagreement.pdf",
  },
  {
    date: "June 2026",
    title: "Honoring the Work That Actually Matters",
    excerpt:
      "Calling everything important is not leadership. It is noise. Honoring important work means funding it, measuring it, talking about it, and refusing to lie about it.",
    href: "/downloads/Honoring_Important_Work.pdf",
  },
  {
    date: "June 2026",
    title: "Important Work Isn’t About What You Make",
    excerpt:
      "Windows are important. But when leaders define important work only through their own lens, the people doing the work notice. Importance that excludes them creates a hollow organization.",
    href: "/downloads/Important_Work_Isnt_About_What_You_Make.pdf",
  },
  {
    date: "July 2026",
    title: "You Must Design the Struggle",
    excerpt:
      "Most leaders try to remove obstacles. Struggle is a resource. If you do not design it, it will design you. Important + Difficult is where trust and truth become rational.",
    href: "/downloads/You_Must_Design_the_Struggle.pdf",
  },
  {
    date: "July 2026",
    title: "Challenge the Crap Out of Each Other",
    excerpt:
      "Challenge is the pillar that demolishes the Lie Economy. Silence in the room is a verdict about the work. Reward the person who says “I don’t agree,” or you will get an organization that never does.",
    href: "/downloads/Challenge_the_Crap_Out_of_Each_Other.pdf",
  },
  {
    date: "August 2026",
    title: "Trust",
    excerpt:
      "Trust is an outcome, not a product. It comes through struggle and consistent action under pressure, not team-building exercises. If you want teamwork, give the team work.",
    href: "/downloads/Trust.pdf",
  },
  {
    date: "October 2026",
    title: "How Important Work Drives Truth",
    excerpt:
      "A discussion of incentives reveals the Lie Economy in real time. The only thing that short-circuits self-protection is work important enough that people will defer their interests to it.",
    href: "/downloads/How_Important_Work_Drives_Truth.pdf",
  },
] as const;

function FieldNotesPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Field notes" title="The thinking, as it develops.">
        <p>
          Essays, frameworks, and observations from the work. Same paradigm as
          the book. This is where a reader stays in the conversation without
          having to hire anyone yet.
        </p>
      </PageHero>
      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-10">
          {NOTES.map((note) => (
            <article key={note.title} className="border-b border-rule pb-10 last:border-0">
              <p className="text-sm tracking-wide text-muted uppercase">{note.date}</p>
              <h2 className="font-display mt-2 text-2xl tracking-display text-ink">
                {note.title}
              </h2>
              <p className="mt-3 text-body leading-relaxed text-ink-soft">{note.excerpt}</p>
              <a
                href={note.href}
                className="mt-4 inline-block text-sm font-semibold tracking-wide text-gold uppercase hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Read PDF
              </a>
            </article>
          ))}
          <p className="pt-4 text-sm text-muted">
            More notes coming. Longer essays also live on{" "}
            <a href="https://thane.substack.com" className="underline decoration-gold" target="_blank" rel="noreferrer">
              Substack
            </a>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
