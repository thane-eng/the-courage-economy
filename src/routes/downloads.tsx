import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PageHero, PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/downloads")({
  component: DownloadsPage,
  head: () =>
    pageHead({
      title: "Downloads",
      description:
        "Free field tools, worksheets, and resources for building a Courage Economy.",
      path: "/downloads",
    }),
});

const RESOURCES = [
  {
    title: "Courage Economy Overview",
    description: "Core ideas of the Courage Economy in a single page.",
    file: "courage-economy.pdf",
    type: "PDF",
  },
  {
    title: "Lie Economy Inventory",
    description: "The individual Lie Economy Inventory worksheet.",
    file: "lie-economy-inventory.pdf",
    type: "PDF",
  },
  {
    title: "Lie Catalog",
    description: "Catalog of common comfortable lies and their costs.",
    file: "lie-catalog.docx",
    type: "DOCX",
  },
  {
    title: "Lie Economy vs Courage Economy",
    description: "Slide deck comparing the two economies, with OCI context.",
    file: "lie-economy-vs-courage-economy.pptx",
    type: "PPTX",
  },
  {
    title: "Three Stages",
    description: "Visual of the three stages.",
    file: "3-stages.jpg",
    type: "Image",
  },
  {
    title: "Sine Wave",
    description: "Sine wave diagram.",
    file: "sine-wave.png",
    type: "Image",
  },
  {
    title: "Work Quadrant",
    description: "Light version of the work quadrant.",
    file: "work-quadrant-light.png",
    type: "Image",
  },
] as const;

function DownloadsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Downloads"
        title="Field tools and resources"
      >
        <p>
          Worksheets, overviews, and visuals you can use with your team.
          Everything here is free.
        </p>
      </PageHero>
      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-4">
          {RESOURCES.map((item) => (
            <div
              key={item.file}
              className="flex flex-col gap-3 border border-rule bg-cream p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <h2 className="font-display text-lg text-ink">{item.title}</h2>
                  <span className="text-xs uppercase tracking-wider text-ink-soft">
                    {item.type}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
              <Button asChild size="sm" variant="outline" className="shrink-0">
                <a href={`/downloads/${item.file}`} download>
                  <Download className="size-4" />
                  Download
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
