'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sceneImages, type SiteContent } from '@/content';

/**
 * The sticky story block: the imagery stays fixed while the copy scrolls past,
 * and each passing scene cross-fades the photograph behind it.
 */
export function Cinema({ content }: { content: SiteContent }) {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.cinema-scene').forEach((el, index) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActive(index),
          onEnterBack: () => setActive(index)
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const total = String(content.scenes.length).padStart(2, '0');

  return (
    <section className="cinema" ref={root} aria-label={content.scenes[0].kicker}>
      <div className="cinema-sticky">
        {content.scenes.map((scene, index) => (
          <div
            className={`cinema-image ${active === index ? 'active' : ''}`}
            key={sceneImages[index]}
            aria-hidden={active !== index}
          >
            <Image
              src={sceneImages[index]}
              alt=""
              fill
              quality={88}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        ))}
        <div className="cinema-overlay" />
        <div className="cinema-counter">
          {String(active + 1).padStart(2, '0')}
          <span>/{total}</span>
        </div>
      </div>

      <div className="cinema-copy-track">
        {content.scenes.map((scene) => (
          <article className="cinema-scene" key={scene.title.lead}>
            <div>
              <p className="eyebrow">{scene.kicker}</p>
              <h3>
                {scene.title.lead}
                <br />
                <em>{scene.title.accent}</em>
              </h3>
              <p>{scene.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
