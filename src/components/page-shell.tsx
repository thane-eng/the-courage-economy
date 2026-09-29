import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-dvh bg-navy text-paper">
      <div className="grain" aria-hidden="true" />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-navy px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-20">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="font-display mt-4 text-section tracking-display text-balance text-paper">
          {title}
        </h1>
        <div className="rule-gold my-8" />
        {children ? (
          <div className="space-y-5 text-body leading-relaxed text-pretty text-paper-dim">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
