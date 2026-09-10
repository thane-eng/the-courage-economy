import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/site";

export function Work() {
  return (
    <section id="work" className="bg-navy px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <figure className="relative overflow-hidden rounded-sm border border-hairline">
            <img
              src="/brand/thane-portrait.jpg"
              alt="Thane Bellomo"
              width={1400}
              height={788}
              className="aspect-video w-full object-cover object-center"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-ink via-ink/70 to-transparent px-5 py-6 sm:px-8">
              <p className="font-display text-lg text-paper">Thane Bellomo</p>
              <p className="text-xs tracking-eyebrow text-gold uppercase">
                Founder, Bellomo Leadership · Architect of the Courage Economy
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="eyebrow">The work · 06</p>
            <h2 className="font-display mt-4 text-section tracking-display text-paper">
              If the diagnostic named something you can’t unsee, this is the next
              conversation.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-6 text-body leading-relaxed text-pretty text-paper-dim">
              <p>
                Executive coaching and organizational work for leaders who are
                done buying harmony with comfortable lies.
              </p>
              <p>
                Twenty-five years in rooms where the cost of silence is not
                metaphorical — nuclear safety, healthcare, manufacturing, the
                C-suite.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild>
                <a href={LINKS.contact} target="_blank" rel="noreferrer">
                  Start a conversation
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={LINKS.calendly} target="_blank" rel="noreferrer">
                  Book a call
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
