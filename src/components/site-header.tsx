import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CompassMark } from "@/components/compass";
import { Button } from "@/components/ui/button";
import { LINKS, NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.2, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 border-b transition-[background-color,border-color] duration-200",
        scrolled || open
          ? "border-hairline bg-navy/92 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.5rem] sm:px-8">
        <a href="#top" className="flex items-center gap-3 text-paper">
          <CompassMark className="size-7" />
          <span className="font-display text-lg leading-none tracking-tight">
            {SITE.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors duration-150",
                active === item.href
                  ? "text-gold"
                  : "text-paper-dim hover:text-paper",
              )}
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href={LINKS.contact} target="_blank" rel="noreferrer">
              Work with Thane
            </a>
          </Button>
        </nav>

        <button
          type="button"
          className="flex size-11 items-center justify-center text-paper lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          className="flex min-h-[calc(100dvh-4rem)] flex-col gap-1 border-t border-hairline bg-navy px-6 py-8"
          aria-label="Mobile"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display py-3 text-3xl text-paper"
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="mt-6 w-full">
            <a href={LINKS.contact} target="_blank" rel="noreferrer">
              Work with Thane
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
