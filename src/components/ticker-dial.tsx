"use client";

import { useEffect, useState } from "react";

type TickerDialProps = {
  label: string;
  value: string;
  caption: string;
};

/**
 * Instrument dial: a tick ring with a sweeping highlight and a live readout.
 * The readout is the visitor's local time, so nothing is simulated.
 */
export function TickerDial({ label, value, caption }: TickerDialProps) {
  const [now, setNow] = useState<Date | null>(null);
  const [sweep, setSweep] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tick = () => setNow(new Date());
    const first = window.setTimeout(tick, 0);
    const clock = window.setInterval(tick, 1000);
    if (reduced) {
      return () => {
        window.clearTimeout(first);
        window.clearInterval(clock);
      };
    }

    const timer = window.setInterval(() => {
      if (document.documentElement.dataset.motion === "off") return;
      setSweep((current) => (current + 1) % 60);
    }, 1000);

    return () => {
      window.clearTimeout(first);
      window.clearInterval(clock);
      window.clearInterval(timer);
    };
  }, []);

  const time = now
    ? `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`
    : "--:--";

  const seconds = now ? now.getSeconds() : 0;
  const date = now
    ? `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")}`
    : "";

  const ticks = Array.from({ length: 60 }, (_, index) => index);

  return (
    <div className="dial">
      <svg className="dial-ring" viewBox="0 0 200 200" aria-hidden="true">
        {ticks.map((tick) => {
          const angle = (tick / 60) * 360;
          const major = tick % 5 === 0;
          const active = tick <= (sweep || seconds);
          return (
            <line
              key={tick}
              x1="100"
              y1={major ? 12 : 16}
              x2="100"
              y2={major ? 26 : 22}
              transform={`rotate(${angle} 100 100)`}
              className={active ? "dial-tick dial-tick-active" : "dial-tick"}
            />
          );
        })}
      </svg>
      <div className="dial-core">
        <span className="dial-label">{label}</span>
        <strong>{time}</strong>
        <span className="dial-caption">
          {date}
          {caption ? ` · ${caption}` : ""}
        </span>
        <span className="dial-value">{value}</span>
      </div>
    </div>
  );
}
