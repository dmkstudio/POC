/**
 * Converts the source PNG photography in public/images to WebP.
 *
 *   node scripts/optimize-images.mjs
 *
 * Originals are moved to assets/source-images — outside public/, so they are
 * never deployed — and kept there so the photography can be re-encoded at a
 * different quality without going back to the design files.
 */
import { mkdir, readdir, rename, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES = path.join(process.cwd(), 'public', 'images');
const SOURCE = path.join(process.cwd(), 'assets', 'source-images');
const QUALITY = 82;

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

const pngs = (await readdir(IMAGES)).filter((f) => f.endsWith('.png'));
if (pngs.length === 0) {
  console.log('Nothing to convert — no PNG files left in public/images.');
  process.exit(0);
}

await mkdir(SOURCE, { recursive: true });

let before = 0;
let after = 0;

for (const file of pngs) {
  const from = path.join(IMAGES, file);
  const to = path.join(IMAGES, file.replace(/\.png$/, '.webp'));

  const originalSize = (await stat(from)).size;
  await sharp(from).webp({ quality: QUALITY, effort: 6 }).toFile(to);
  const newSize = (await stat(to)).size;

  await rename(from, path.join(SOURCE, file));

  before += originalSize;
  after += newSize;
  console.log(`${file}  ${kb(originalSize)} → ${kb(newSize)}`);
}

const saved = Math.round((1 - after / before) * 100);
console.log(`\nTotal ${kb(before)} → ${kb(after)}  (−${saved}%)`);
