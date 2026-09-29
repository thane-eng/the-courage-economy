import { CompassMark } from "@/components/compass";
import { LINKS, SITE } from "@/lib/site";

const FOOTER = [
  { href: "/diagnostic", label: "Diagnostic" },
  { href: LINKS.inventory, label: "Lie Inventory" },
  { href: "/lie-economy", label: "Lie Economy" },
  { href: "/elements", label: "Five elements" },
  { href: "/book", label: "Book" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: LINKS.substack, label: "Substack" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-navy-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-paper">
          <CompassMark className="size-6" />
          <div>
            <p className="font-display text-base leading-none">{SITE.name}</p>
            <p className="mt-1 max-w-xs text-xs leading-relaxed text-muted">
              By {SITE.author}. © {new Date().getFullYear()} {SITE.org}. All
              rights reserved.
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          {FOOTER.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-gold"
              {...(item.href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
