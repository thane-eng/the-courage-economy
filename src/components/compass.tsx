import { ELEMENTS } from "@/lib/site";
import { cn } from "@/lib/utils";

function round(n: number) {
  return Math.round(n * 100) / 100;
}

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: round(cx + r * Math.cos(rad)), y: round(cy + r * Math.sin(rad)) };
}

function labelProps(cx: number, cy: number, p: { x: number; y: number }) {
  const dx = p.x - cx;
  const dy = p.y - cy;
  const x = round(p.x + (dx === 0 ? 0 : dx > 0 ? 16 : -16));
  const y = round(p.y + (Math.abs(dx) < 12 ? (dy < 0 ? -14 : 18) : 4));
  const anchor = dx < -8 ? "end" : dx > 8 ? "start" : "middle";
  return { x, y, anchor };
}

export function Compass({
  active,
  onSelect,
  className,
}: {
  active: number;
  onSelect?: (index: number) => void;
  className?: string;
}) {
  const cx = 160;
  const cy = 160;
  const ticks = Array.from({ length: 60 }, (_, i) => i);

  return (
    <svg
      viewBox="0 0 320 320"
      className={cn("h-auto w-full max-w-md text-gold", className)}
      role="img"
      aria-label="The five elements arranged as a compass"
    >
      <circle cx={cx} cy={cy} r={138} fill="none" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={118} fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={72} fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={28} fill="none" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.2" />

      {ticks.map((i) => {
        const deg = i * 6 - 90;
        const major = i % 15 === 0;
        const inner = polar(cx, cy, major ? 128 : 132, deg);
        const outer = polar(cx, cy, 138, deg);
        return (
          <line
            key={i}
            x1={inner.x}
            y1={inner.y}
            x2={outer.x}
            y2={outer.y}
            stroke="currentColor"
            strokeOpacity={major ? 0.7 : 0.28}
            strokeWidth={major ? 1.4 : 0.7}
          />
        );
      })}

      <path
        d="M160 142 L178 160 L160 178 L142 160 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx={cx} cy={cy} r="3" fill="currentColor" />

      {ELEMENTS.map((el, i) => {
        const p = polar(cx, cy, 92, el.angle);
        const selected = i === active;
        const lab = labelProps(cx, cy, polar(cx, cy, 108, el.angle));
        return (
          <g
            key={el.num}
            className={cn(onSelect && "cursor-pointer")}
            onClick={() => onSelect?.(i)}
          >
            {selected && (
              <line
                x1={cx}
                y1={cy}
                x2={p.x}
                y2={p.y}
                stroke="currentColor"
                strokeWidth="1.2"
                strokeOpacity="0.85"
              />
            )}
            <circle
              cx={p.x}
              cy={p.y}
              r={selected ? 7 : 5}
              fill={selected ? "currentColor" : "#0a1f3d"}
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <text
              x={lab.x}
              y={lab.y}
              textAnchor={lab.anchor}
              fill="currentColor"
              fontSize="10"
              letterSpacing="0.14em"
              opacity={selected ? 1 : 0.55}
            >
              {el.num}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function CompassMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("text-gold", className)}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <path d="M24 14 L28 24 L24 34 L20 24 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="1.6" fill="currentColor" />
    </svg>
  );
}
