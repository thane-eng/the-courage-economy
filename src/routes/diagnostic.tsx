import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { LINKS, TOOLS } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/diagnostic")({
  component: DiagnosticPage,
  head: () =>
    pageHead({
      title: "Courage Economy Diagnostic",
      description:
        "Free 35-question Courage Economy Diagnostic and 37-statement Lie Economy Inventory. See where your organization actually stands.",
      path: "/diagnostic",
    }),
});

function DiagnosticPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Public tools" title="See it. Then you cannot unsee it.">
        <p>
          Two instruments anyone can use. The diagnostic is the organization.
          The inventory is you. Client instruments stay off this page.
        </p>
      </PageHero>
      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
          {TOOLS.map((tool) => (
            <article key={tool.name} className="flex flex-col border border-rule bg-navy p-8">
              <p className="eyebrow">{tool.kicker}</p>
              <h2 className="font-display mt-4 text-2xl text-paper">{tool.name}</h2>
              <p className="mt-4 flex-1 text-body leading-relaxed text-paper-dim">{tool.body}</p>
              <Button asChild className="mt-8 self-start">
                <a href={tool.href} target="_blank" rel="noreferrer">
                  {tool.cta}
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-sm leading-relaxed text-ink-soft">
          After you finish, you get scores across the five elements and a narrative of where the Lie Economy has taken hold. Then read{" "}
          <a href="/elements" className="underline decoration-gold">the map</a>{" "}or{" "}
          <a href="/work" className="underline decoration-gold">start the work</a>.
        </p>
      </section>
    </PageShell>
  );
}
