import { notFound } from 'next/navigation';
import { getContent } from '@/content';
import { isLocale } from '@/lib/i18n';
import { AmbientBackground } from '@/components/AmbientBackground';
import { Header } from '@/components/Header';
import { MotionProvider } from '@/components/MotionProvider';
import { Hero } from '@/components/sections/Hero';
import { Philosophy } from '@/components/sections/Philosophy';
import { Cinema } from '@/components/sections/Cinema';
import { Services } from '@/components/sections/Services';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Page({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();

  const locale = params.locale;
  const content = getContent(locale);

  return (
    <MotionProvider>
      <AmbientBackground />
      <Header content={content} locale={locale} />

      <main>
        <Hero content={content} />
        <Philosophy content={content} />
        <Cinema content={content} />
        <Services content={content} />
        <Contact content={content} locale={locale} />
      </main>

      <Footer content={content} />
    </MotionProvider>
  );
}
