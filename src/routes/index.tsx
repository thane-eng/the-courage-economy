import { createFileRoute } from "@tanstack/react-router";
import { Book } from "@/components/sections/book";
import { Elements } from "@/components/sections/elements";
import { Hero } from "@/components/sections/hero";
import { Idea } from "@/components/sections/idea";
import { Loop } from "@/components/sections/loop";
import { Notes } from "@/components/sections/notes";
import { Tools } from "@/components/sections/tools";
import { Work } from "@/components/sections/work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="relative min-h-dvh bg-navy text-paper">
      <div className="grain" aria-hidden="true" />
      <a
        href="#idea"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Idea />
        <Elements />
        <Tools />
        <Notes />
        <Book />
        <Work />
        <Loop />
      </main>
      <SiteFooter />
    </div>
  );
}
