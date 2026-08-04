'use client';

import Lenis from 'lenis';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type MotionApi = {
  /** Smoothly scrolls to a `#section` id through Lenis. */
  scrollTo: (hash: string) => void;
  /** True once the page has moved off the hero — used to solidify the header. */
  scrolled: boolean;
};

const MotionContext = createContext<MotionApi>({ scrollTo: () => {}, scrolled: false });

export const useMotion = () => useContext(MotionContext);

/**
 * Owns the page's scroll behaviour: Lenis smooth scrolling, the GSAP context
 * for every `[data-reveal]` element, and the hero parallax. Everything is torn
 * down on unmount so switching language never leaves stale ScrollTriggers.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.registerPlugin(ScrollTrigger);

    let frame = 0;
    if (!reduced) {
      const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
      lenisRef.current = lenis;
      const loop = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
      lenis.on('scroll', ScrollTrigger.update);
    }

    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set('[data-reveal]', { opacity: 1, y: 0 });
        return;
      }

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) =>
        gsap.fromTo(
          el,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 84%' }
          }
        )
      );

      gsap.to('.hero-media', {
        scale: 1.12,
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true }
      });

      gsap.to('.gold-orbit', {
        rotate: 190,
        ease: 'none',
        scrollTrigger: { trigger: '#services', start: 'top bottom', end: 'bottom top', scrub: 1 }
      });
    }, root);

    // Fonts and images settle after hydration; re-measure once they have.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const settle = window.setTimeout(refresh, 600);

    return () => {
      window.clearTimeout(settle);
      window.removeEventListener('load', refresh);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
      lenisRef.current?.destroy();
      lenisRef.current = null;
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const scrollTo = useCallback((hash: string) => {
    const target = document.querySelector(hash);
    if (!target) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target as HTMLElement, { duration: 1.4 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <MotionContext.Provider value={{ scrollTo, scrolled }}>
      <div ref={root}>{children}</div>
    </MotionContext.Provider>
  );
}
