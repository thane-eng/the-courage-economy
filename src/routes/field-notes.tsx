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
    title: "Why companies keep buying harmony",
    excerpt:
      "Most organizations do not have a strategy problem. They have a courage problem. The system quietly rewards the opposite of what leaders say they want.",
    href: "#",
  },
  {
    date: "October 2026",
    title: "Management debt is real",
    excerpt:
      "Comfortable lies buy short-term harmony. What they create is cynicism, disengagement, and weak accountability that compounds over time.",
    href: "#",
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
              >
                Read
              </a>
            </article>
          ))}
          <p className="pt-4 text-sm text-muted">
            More notes coming. In the meantime, the longer essays live on{" "}
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
