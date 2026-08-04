'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { SiteContent } from '@/content';
import type { Locale } from '@/lib/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useMotion } from './MotionProvider';

const links = [
  { hash: '#philosophy', key: 'philosophy' },
  { hash: '#services', key: 'services' },
  { hash: '#method', key: 'method' },
  { hash: '#contact', key: 'contact' }
] as const;

export function Header({ content, locale }: { content: SiteContent; locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollTo, scrolled } = useMotion();

  // Keep the page from scrolling behind the open overlay.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const go = (hash: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuOpen(false);
    scrollTo(hash);
  };

  return (
    <>
      <a className="skip-link" href="#philosophy" onClick={go('#philosophy')}>
        {content.nav.skipToContent}
      </a>

      <header className={`nav ${scrolled ? 'is-solid' : ''}`}>
        <a className="brand" href="#hero" onClick={go('#hero')}>
          Private Office <i>Consulting</i>
        </a>

        <nav className="desktop-nav" aria-label={content.nav.philosophy}>
          {links.map(({ hash, key }) => (
            <a key={hash} href={hash} onClick={go(hash)}>
              {content.nav[key]}
            </a>
          ))}
          <LanguageSwitcher current={locale} label={content.nav.languageLabel} />
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-label={content.nav.openMenu}
        >
          {content.nav.openMenu}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            role="dialog"
            aria-modal="true"
          >
            <button className="menu-close" onClick={() => setMenuOpen(false)}>
              {content.nav.closeMenu}
            </button>

            <nav className="menu-links">
              {links.map(({ hash, key }) => (
                <a key={hash} href={hash} onClick={go(hash)}>
                  {content.nav[key]}
                </a>
              ))}
            </nav>

            <LanguageSwitcher
              current={locale}
              label={content.nav.languageLabel}
              variant="stacked"
              onSwitch={() => setMenuOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
