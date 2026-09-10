import { useState } from "react";
import { Compass } from "@/components/compass";
import { Reveal } from "@/components/reveal";
import { ELEMENTS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Elements() {
  const [active, setActive] = useState(0);

  return (
    <section id="map" className="bg-navy px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">The map · 02</p>
          <h2 className="font-display mt-4 max-w-xl text-section tracking-display text-paper">
            The five elements
          </h2>
          <div className="rule-gold my-8" />
        </Reveal>

        <div className="mx-auto mb-10 max-w-xs lg:hidden">
          <Compass active={active} onSelect={setActive} />
        </div>

        <div className="mt-4 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ol className="space-y-2">
            {ELEMENTS.map((el, i) => {
              const selected = i === active;
              return (
                <li key={el.num}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={cn(
                      "w-full rounded-sm border px-4 py-4 text-left transition-[border-color,background-color] duration-200 sm:px-5 sm:py-5",
                      selected
                        ? "border-goldline bg-navy-mid/60"
                        : "border-transparent hover:border-hairline",
                    )}
                    aria-pressed={selected}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-gold">{el.num}</span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <h3 className="font-display text-xl text-paper sm:text-2xl">
                            {el.name}
                          </h3>
                          <span className="text-xs tracking-eyebrow text-muted uppercase">
                            {el.role}
                          </span>
                        </div>
                        <p
                          className={cn(
                            "overflow-hidden text-sm leading-relaxed text-paper-dim transition-[max-height,opacity,margin] duration-300 sm:text-base",
                            selected
                              ? "mt-2 max-h-24 opacity-100"
                              : "mt-0 max-h-0 opacity-0",
                          )}
                        >
                          {el.line}
                        </p>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
          <div className="hidden justify-center lg:flex">
            <Compass active={active} onSelect={setActive} />
          </div>
        </div>
      </div>
    </section>
  );
}
