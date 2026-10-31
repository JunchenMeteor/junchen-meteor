type MarqueeProps = {
  label: string;
  items: string[];
};

/**
 * Continuously scrolling stack strip. Pure CSS so it keeps running without
 * JavaScript; pauses on hover and under prefers-reduced-motion.
 */
export function Marquee({ label, items }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="marquee" aria-label={label}>
      <span className="marquee-label">{label}</span>
      <div className="marquee-window">
        <div className="marquee-track">
          {track.map((item, index) => (
            <span key={`${item}-${index}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
