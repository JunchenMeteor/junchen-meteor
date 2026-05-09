import Image from "next/image";
import { screenshotResultsCopy, type Locale } from "@/content/site";

export function ScreenshotResults({ locale }: { locale: Locale }) {
  const copy = screenshotResultsCopy[locale];

  return (
    <section className="screenshot-results-section">
      <div className="section-heading">
        <span>{copy.eyebrow}</span>
        <h2>{copy.title}</h2>
        <p>{copy.summary}</p>
      </div>

      <div className="screenshot-results-grid">
        {copy.items.map((item) => (
          <article className="screenshot-card" key={item.image}>
            <div className="screenshot-frame">
              <Image
                src={item.image}
                alt={item.alt}
                width={1440}
                height={1100}
                sizes="(max-width: 980px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className="screenshot-card-copy">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="screenshot-results-note">{copy.note}</p>
    </section>
  );
}
