import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>
        Cette page n’existe pas.
        <br />
        <em>This page does not exist.</em>
      </h1>
      <p className="not-found-copy">Эта страница не найдена.</p>
      <Link className="circle-link not-found-link" href="/">
        <span>Retour</span>↗
      </Link>
    </main>
  );
}
