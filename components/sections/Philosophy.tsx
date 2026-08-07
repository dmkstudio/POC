import Image from 'next/image';
import type { SiteContent } from '@/content';

export function Philosophy({ content }: { content: SiteContent }) {
  const { philosophy } = content;

  return (
    <section id="philosophy" className="statement section-pad" data-snap>
      {/* Full-bleed photograph with the copy laid over a scrim — the same
          treatment as the cinema block, rather than a masked fragment. */}
      <div className="statement-media" aria-hidden>
        <Image src="/images/private-study.webp" alt="" fill priority quality={86} sizes="100vw" />
      </div>
      <div className="statement-overlay" aria-hidden />

      <div className="statement-copy">
        <p className="eyebrow" data-reveal>
          {philosophy.eyebrow}
        </p>
        <h2 data-reveal>
          {philosophy.title.lead}
          <br />
          <em>{philosophy.title.accent}</em>
        </h2>
        <div className="statement-grid">
          {philosophy.columns.map((column) => (
            <p key={column} data-reveal>
              {column}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
