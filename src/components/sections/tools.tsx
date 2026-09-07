import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { TOOLS } from "@/lib/site";

export function Tools() {
  return (
    <section id="tools" className="bg-navy-deep px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Public tools · 03</p>
          <h2 className="font-display mt-4 text-section tracking-display text-paper">
            See it. Then you can’t unsee it.
          </h2>
          <div className="rule-gold my-8" />
          <p className="text-body leading-relaxed text-pretty text-paper-dim">
            Two instruments anyone can use. The diagnostic is the place. The
            inventory is you. Client work — the OCI and Followers’ View — is not
            on this page. You get those when we work together.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {TOOLS.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 80}>
              <article className="flex h-full flex-col border border-hairline bg-navy/40 p-7 sm:p-9">
                <p className="eyebrow">{tool.kicker}</p>
                <h3 className="font-display mt-4 text-2xl text-paper sm:text-3xl">
                  {tool.name}
                </h3>
                <p className="mt-4 flex-1 text-body leading-relaxed text-paper-dim">
                  {tool.body}
                </p>
                <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-hairline pt-6">
                  {tool.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="font-display text-xl text-gold sm:text-2xl">
                        {stat.value}
                      </dt>
                      <dd className="mt-1 text-xs tracking-wide text-muted uppercase">
                        {stat.label}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Button asChild className="mt-8 self-start">
                  <a href={tool.href} target="_blank" rel="noreferrer">
                    {tool.cta}
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
