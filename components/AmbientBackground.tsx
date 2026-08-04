'use client';

import dynamic from 'next/dynamic';

/**
 * Client-side wrapper so the WebGL canvas can be loaded with `ssr: false`
 * (not allowed directly inside a Server Component).
 */
const AmbientCanvas = dynamic(() => import('./AmbientCanvas'), { ssr: false });

export function AmbientBackground() {
  return <AmbientCanvas />;
}
