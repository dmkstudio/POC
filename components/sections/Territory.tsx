import type { SiteContent } from '@/content';

export function Territory({ content }: { content: SiteContent }) {
  const { territory } = content;

  return (
    <section className="territory section-pad">
      <div>
        <p className="eyebrow" data-reveal>
          {territory.eyebrow}
        </p>
        <h2 data-reveal>
          {territory.title.lead}
          <br />
          <em>{territory.title.accent}</em>
        </h2>
      </div>

      <div className="cities" data-reveal>
        {territory.cities.map((city, index) => (
          <span key={city}>
            {String(index + 1).padStart(2, '0')} — {city}
          </span>
        ))}
      </div>
    </section>
  );
}
