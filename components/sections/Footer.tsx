import type { SiteContent } from '@/content';

export function Footer({ content }: { content: SiteContent }) {
  return (
    <footer>
      <div className="brand">
        Private Office <i>Consulting</i>
      </div>
      <p>{content.footer.rights}</p>
      <p>{content.footer.tagline}</p>
    </footer>
  );
}
