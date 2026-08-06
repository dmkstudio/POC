import Image from 'next/image';
import type { SiteContent } from '@/content';

export function Method({ content }: { content: SiteContent }) {
  const { method } = content;

  return (
    <section id="method" className="method">
      <div className="method-image">
        <Image
          src="/images/planning-desk.webp"
          alt=""
          fill
          quality={88}
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>

      <div className="method-copy">
        <p className="eyebrow" data-reveal>
          {method.eyebrow}
        </p>
        <h2 data-reveal>
          {method.title.lead}
          <br />
          <em>{method.title.accent}</em>
        </h2>

        {method.steps.map((step) => (
          <div className="method-step" key={step.n} data-reveal>
            <span>{step.n}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
