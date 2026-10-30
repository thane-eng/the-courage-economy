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
