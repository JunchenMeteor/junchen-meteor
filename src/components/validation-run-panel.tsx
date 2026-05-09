import { CheckCircle2 } from "lucide-react";
import { validationRunCopy, type Locale } from "@/content/site";

export function ValidationRunPanel({ locale }: { locale: Locale }) {
  const copy = validationRunCopy[locale];

  return (
    <section className="validation-run-section">
      <div className="validation-run-heading">
        <span>{copy.eyebrow}</span>
        <h2>{copy.title}</h2>
        <p>{copy.summary}</p>
      </div>

      <div className="validation-run-stats">
        {copy.stats.map((item) => (
          <div key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <div className="validation-run-detail">
        <div>
          <h3>{copy.detailsTitle}</h3>
          <ul>
            {copy.details.map((item) => (
              <li key={item}>
                <CheckCircle2 size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p>{copy.note}</p>
      </div>
    </section>
  );
}
