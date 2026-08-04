'use client';

import Image from 'next/image';
import type { SiteContent } from '@/content';
import { useMotion } from '../MotionProvider';

export function Hero({ content }: { content: SiteContent }) {
  const { scrollTo } = useMotion();
  const { hero } = content;

  return (
    <section id="hero" className="hero">
      <div className="hero-media">
        <Image
          src="/images/harbor-executive.webp"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
        />
      </div>
      <div className="hero-shade" />

      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>

        <h1>
          <span>{hero.lines[0]}</span>
          <span>{hero.lines[1]}</span>
          <em>{hero.lines[2]}</em>
        </h1>

        <div className="hero-bottom">
          <p>{hero.intro}</p>
          <a
            className="circle-link"
            href="#philosophy"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#philosophy');
            }}
          >
            <span>{hero.cta}</span>↓
          </a>
        </div>
      </div>

      <div className="hero-index">01 / 05</div>
    </section>
  );
}
