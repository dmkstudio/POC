import Image from 'next/image';
import type { SiteContent } from '@/content';

export function Manifesto({ content }: { content: SiteContent }) {
  return (
    <section className="manifesto">
      <Image src="/images/handshake.webp" alt="" fill quality={85} sizes="100vw" />
      <div className="manifesto-shade" />
      {/* Quotation marks live in the copy so each language keeps its own convention. */}
      <blockquote data-reveal>{content.manifesto.quote}</blockquote>
    </section>
  );
}
