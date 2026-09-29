import { useEffect, useState } from "react";
import { ENDORSEMENTS } from "@/lib/endorsements";

const DWELL_MS = 7000;

export function EndorsementRotator() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || ENDORSEMENTS.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % ENDORSEMENTS.length);
    }, DWELL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const item = ENDORSEMENTS[index];

  return (
    <div
      className="relative min-h-[220px] border border-hairline bg-paper-dim/20 px-5 py-5 sm:min-h-[240px] sm:px-6 sm:py-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="eyebrow">Early readers</p>
      <blockquote className="mt-4">
        <p className="font-display text-lg leading-snug tracking-display text-ink sm:text-xl">
          "{item.quote}"
        </p>
        <footer className="mt-4">
          <cite className="not-italic text-sm font-semibold text-ink">{item.name}</cite>
          <p className="mt-1 text-sm text-ink-soft">{item.credit}</p>
        </footer>
      </blockquote>
      {ENDORSEMENTS.length > 1 ? (
        <div className="mt-5 flex gap-2" role="tablist" aria-label="Endorsements">
          {ENDORSEMENTS.map((entry, i) => (
            <button
              key={entry.name}
              type="button"
              aria-label={`Show endorsement from ${entry.name}`}
              aria-selected={i === index}
              className={`h-1.5 w-6 ${i === index ? "bg-gold" : "bg-ink/20"}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
