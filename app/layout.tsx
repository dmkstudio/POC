/**
 * Pass-through root. The real <html>/<body> live in app/[locale]/layout.tsx,
 * because the `lang` attribute depends on the active locale.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
