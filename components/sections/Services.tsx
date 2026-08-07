'use client';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import type { SiteContent } from '@/content';
import { SELECT_SERVICE_EVENT } from '@/lib/events';
import { useMotion } from '../MotionProvider';

type PanelProps = {
  id: string;
  isOpen: boolean;
  /** Hidden from assistive tech and skipped by Tab while folded. */
  children: React.ReactNode;
};

/**
 * Folds on an explicit pixel height, measured from the content itself and kept
 * current by a ResizeObserver — so a language with longer service names, or a
 * narrower window that rewraps the list, still opens to exactly the right size.
 */
function ServicePanel({ id, isOpen, children }: PanelProps) {
  const inner = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const el = inner.current;
    if (!el) return;

    const measure = () => setContentHeight(el.getBoundingClientRect().height);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Re-measure at the moment of opening: right after load the observer may not
  // have reported yet, and a stale zero would make the first click do nothing.
  useEffect(() => {
    if (isOpen && inner.current) {
      setContentHeight(inner.current.getBoundingClientRect().height);
    }
  }, [isOpen]);

  return (
    <div
      id={id}
      className="service-panel"
      style={{ height: isOpen ? contentHeight : 0 }}
      // The fold changes the page height, so the scroll-driven animations
      // further down the page have to re-measure once it settles.
      onTransitionEnd={(event) => {
        if (event.propertyName === 'height') ScrollTrigger.refresh();
      }}
    >
      <div className="service-panel-inner" ref={inner} aria-hidden={!isOpen}>
        {children}
      </div>
    </div>
  );
}

/**
 * The five directions, as a single-open accordion: opening one folds whatever
 * was open before, so only one list of services is ever on screen.
 */
export function Services({ content }: { content: SiteContent }) {
  const { scrollTo } = useMotion();
  const { services } = content;

  const [openKey, setOpenKey] = useState<string | null>(null);

  // Returning the new key both opens that row and closes the previous one in a
  // single update; returning null collapses the row that was clicked.
  const toggle = (key: string) => setOpenKey((current) => (current === key ? null : key));

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
        {services.items.map((item) => {
          const isOpen = openKey === item.key;
          const panelId = `service-panel-${item.key}`;

          return (
            <div className={`service-item ${isOpen ? 'is-open' : ''}`} key={item.key} data-reveal>
              <button
                type="button"
                className="service-row"
                onClick={() => toggle(item.key)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                aria-label={services.toggleLabel.replace('{name}', item.title)}
              >
                <span className="service-n">{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span className="service-toggle" aria-hidden>
                  <i />
                  <i />
                </span>
              </button>

              <ServicePanel id={panelId} isOpen={isOpen}>
                <ul>
                  {item.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="service-discuss"
                  onClick={openRequest(item.key)}
                  // Folded panels are visually clipped but still in the DOM,
                  // so keep their button out of the tab order.
                  tabIndex={isOpen ? 0 : -1}
                >
                  {services.discussLabel} <span aria-hidden>↗</span>
                </button>
              </ServicePanel>
            </div>
          );
        })}
      </div>

      {/* The catch-all: an empty subject lands on "other" in the form. */}
      <div className="service-custom" data-reveal>
        <p>{services.custom.question}</p>
        <button type="button" className="service-custom-cta" onClick={openRequest('')}>
          {services.custom.cta} <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  );
}
