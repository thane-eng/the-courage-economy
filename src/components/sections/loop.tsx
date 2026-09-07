import { FormEvent, useState } from "react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/site";

export function Loop() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    window.localStorage.setItem("ce-loop-email", email.trim());
    setDone(true);
  }

  return (
    <section id="loop" className="bg-navy-deep px-5 py-24 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-xl text-center">
        <p className="eyebrow">Stay in the work</p>
        <h2 className="font-display mt-4 text-section tracking-display text-paper">
          One list. The idea, the book, nothing else.
        </h2>
        <div className="rule-gold mx-auto my-8" />
        <p className="text-body leading-relaxed text-paper-dim">
          Launch dates, an excerpt, and the essays that matter. No theater.
        </p>

        {done ? (
          <div className="mt-10 border border-goldline bg-navy px-6 py-8">
            <p className="font-display text-xl text-paper">You’re on the list.</p>
            <p className="mt-3 text-sm leading-relaxed text-paper-dim">
              The essays live on Substack. That’s where the work continues between
              the book and the rooms.
            </p>
            <Button asChild className="mt-6">
              <a href={LINKS.substack} target="_blank" rel="noreferrer">
                Open Substack
              </a>
            </Button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <label className="sr-only" htmlFor="loop-email">
              Email
            </label>
            <input
              id="loop-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="h-12 min-w-0 flex-1 rounded-sm border border-hairline bg-navy px-4 text-base text-paper outline-none placeholder:text-muted focus:border-gold"
            />
            <Button type="submit" className="h-12 shrink-0">
              Subscribe
            </Button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
