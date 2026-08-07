import Image from 'next/image';
import type { SiteContent } from '@/content';

export function Philosophy({ content }: { content: SiteContent }) {
  const { philosophy } = content;

  return (
    <section id="philosophy" className="statement section-pad" data-snap>
      {/* "One call" — a phone put down on marble, held far back so it reads as
          texture behind the type rather than a picture competing with it. */}
      <div className="statement-media" aria-hidden>
        <Image src="/images/one-call.webp" alt="" fill quality={80} sizes="100vw" />
      </div>

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
    </section>
  );
}
