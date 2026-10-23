import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const outputDirectory = new URL('../public/social/', import.meta.url);
const logo = new URL('../public/android-chrome-512x512.png', import.meta.url);
const artwork = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="84%" cy="42%" r="75%">
      <stop offset="0" stop-color="#48351e"/>
      <stop offset="1" stop-color="#0b0a08"/>
    </radialGradient>
    <linearGradient id="sand" x2="1" y2="1">
      <stop stop-color="#caa255" stop-opacity=".15"/>
      <stop offset="1" stop-color="#caa255" stop-opacity=".02"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#0b0a08"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <path d="M660 576 895 340 1130 576Z" fill="url(#sand)" stroke="#caa255" stroke-opacity=".14"/>
  <path d="M820 576 1040 412 1260 576Z" fill="url(#sand)" stroke="#caa255" stroke-opacity=".12"/>
  <rect x="28" y="28" width="1144" height="574" rx="3" fill="none" stroke="#caa255" stroke-opacity=".3"/>
  <path d="M76 158H144" stroke="#caa255" stroke-width="3"/>
  <text x="76" y="120" fill="#d7b98a" font-family="Segoe UI, Arial, sans-serif" font-size="16" letter-spacing="4">INDEPENDENT GAME STUDIO</text>
  <text x="72" y="256" fill="#f8f6f2" font-family="Georgia, serif" font-size="76">First Fragment</text>
  <text x="78" y="304" fill="#d7b98a" font-family="Segoe UI, Arial, sans-serif" font-size="20" letter-spacing="8">STUDIO</text>
  <text x="76" y="394" fill="#e6ded1" font-family="Georgia, serif" font-size="32">Unearth lost worlds.</text>
  <text x="76" y="440" fill="#e6ded1" font-family="Georgia, serif" font-size="32">Reveal forgotten histories.</text>
  <path d="M76 502H1124" stroke="#caa255" stroke-opacity=".25"/>
  <text x="76" y="552" fill="#d7b98a" font-family="Segoe UI, Arial, sans-serif" font-size="18" letter-spacing="1">firstfragmentstudio.com</text>
  <text x="1124" y="552" text-anchor="end" fill="#c9c0b2" font-family="Segoe UI, Arial, sans-serif" font-size="14" letter-spacing="3">EXPLORATION / EXCAVATION / DISCOVERY</text>
</svg>`;

await mkdir(outputDirectory, { recursive: true });
const emblem = await sharp(fileURLToPath(logo)).resize(340, 340).toBuffer();
await sharp(Buffer.from(artwork))
  .composite([{ input: emblem, left: 802, top: 134 }])
  .png()
  .toFile(fileURLToPath(new URL('first-fragment.png', outputDirectory)));

console.log('Generated public/social/first-fragment.png (1200 x 630).');
