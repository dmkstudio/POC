import Image from 'next/image';
import type { SiteContent } from '@/content';

export function Territory({ content }: { content: SiteContent }) {
  const { territory } = content;

  return (
    <section className="territory section-pad">
      {/* A Riviera bay at dusk — the coastline the city list is anchored to. */}
      <div className="territory-media" aria-hidden>
        <Image src="/images/riviera-bay.webp" alt="" fill quality={80} sizes="100vw" />
      </div>

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
