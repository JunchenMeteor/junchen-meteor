type GalleryItem = {
  src: string;
  title: string;
  caption: string;
};

type ScreenGalleryProps = {
  label: string;
  title: string;
  note: string;
  items: GalleryItem[];
};

export function ScreenGallery({ label, title, note, items }: ScreenGalleryProps) {
  return (
    <section className="gallery-section">
      <div className="section-heading">
        <span>{label}</span>
        <h2>{title}</h2>
        <p>{note}</p>
      </div>

      <div className="gallery-grid">
        {items.map((item) => (
          <figure className="gallery-item" key={item.src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.title} loading="lazy" />
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.caption}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
