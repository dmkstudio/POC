import type { SiteContent } from '@/content';

export function Philosophy({ content }: { content: SiteContent }) {
  const { philosophy } = content;

  return (
    <section id="philosophy" className="statement section-pad">
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
