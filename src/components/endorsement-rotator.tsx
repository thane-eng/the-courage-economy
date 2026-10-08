import { useEffect, useState } from "react";
import { ENDORSEMENTS } from "@/lib/endorsements";

const DWELL_MS = 7000;

function useEndorsementIndex() {
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

  return { index, setIndex, setPaused };
}

function Dots({ index, setIndex, tone }: { index: number; setIndex: (i: number) => void; tone: "ink" | "paper" }) {
  if (ENDORSEMENTS.length < 2) return null;
  return (
    <div className="mt-4 flex gap-2" role="tablist" aria-label="Endorsements">
      {ENDORSEMENTS.map((entry, i) => (
        <button
          key={entry.name}
          type="button"
          aria-label={`Show endorsement from ${entry.name}`}
          aria-selected={i === index}
          className={`h-1.5 w-6 ${i === index ? "bg-gold" : tone === "paper" ? "bg-paper/30" : "bg-ink/20"}`}
          onClick={() => setIndex(i)}
        />
      ))}
    </div>
  );
}

export function EndorsementRotator() {
  const { index, setIndex, setPaused } = useEndorsementIndex();
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
      <Dots index={index} setIndex={setIndex} tone="ink" />
    </div>
  );
}

export function HeroProof() {
  const { index, setIndex, setPaused } = useEndorsementIndex();
  const item = ENDORSEMENTS[index];

  return (
    <figure
      className="mt-8 max-w-xl border-l-2 border-gold pl-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <blockquote>
        <p className="text-base leading-relaxed text-paper">“{item.line}”</p>
      </blockquote>
      <figcaption className="mt-2 text-sm text-muted">
        <cite className="not-italic text-paper">{item.name}</cite>
        <span> · {item.credit.split(".")[0]}</span>
      </figcaption>
      <Dots index={index} setIndex={setIndex} tone="paper" />
    </figure>
  );
}
