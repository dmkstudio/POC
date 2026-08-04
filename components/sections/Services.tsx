'use client';

import type { SiteContent } from '@/content';
import { SELECT_SERVICE_EVENT } from '@/lib/events';
import { useMotion } from '../MotionProvider';

export function Services({ content }: { content: SiteContent }) {
  const { scrollTo } = useMotion();
  const { services } = content;

  // Clicking a service takes the visitor to the form with it pre-selected.
  const openRequest = (key: string) => () => {
    window.dispatchEvent(new CustomEvent(SELECT_SERVICE_EVENT, { detail: key }));
    scrollTo('#contact');
  };

  return (
    <section id="services" className="services section-pad">
      <div className="gold-orbit" aria-hidden />

      <div className="services-heading">
        <p className="eyebrow" data-reveal>
          {services.eyebrow}
        </p>
        <h2 data-reveal>
          {services.title.lead}
          <br />
          <em>{services.title.accent}</em>
        </h2>
      </div>

      <div className="service-list">
        {services.items.map((item) => (
          <button
            type="button"
            className="service-row"
            key={item.key}
            data-reveal
            onClick={openRequest(item.key)}
          >
            <span>{item.n}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            <b aria-hidden>↗</b>
          </button>
        ))}
      </div>
    </section>
  );
}
