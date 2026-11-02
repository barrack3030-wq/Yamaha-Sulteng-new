// Prerender beranda: menyuntikkan HTML hasil render React ke dist/index.html
// supaya crawler, preview WhatsApp/Facebook, dan pengunjung dengan JS lambat
// langsung melihat konten (H1, katalog, promo, link internal), bukan kerangka kosong.
//
// Dijalankan setelah:
//   vite build
//   vite build --ssr src/entry-server.tsx --outDir dist-ssr
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

function fail(message) {
  console.error(`[prerender] GAGAL: ${message}`);
  process.exit(1);
}

const indexPath = path.join(dist, 'index.html');
if (!fs.existsSync(indexPath)) fail('dist/index.html tidak ditemukan. Jalankan "vite build" lebih dulu.');
if (!fs.existsSync(ssrDir)) fail('dist-ssr tidak ditemukan. Jalankan build SSR lebih dulu.');

const entryFile = fs
  .readdirSync(ssrDir)
  .find((name) => /^entry-server\.(m?js)$/.test(name));
if (!entryFile) fail('entry-server.js tidak ditemukan di dist-ssr.');

const {render} = await import(pathToFileURL(path.join(ssrDir, entryFile)).href);
if (typeof render !== 'function') fail('entry-server tidak mengekspor fungsi render().');

const appHtml = render();
if (!appHtml.includes('<h1')) fail('Hasil render tidak berisi <h1>. Prerender dibatalkan.');

// Pastikan setiap aset (gambar) yang dirujuk HTML hasil SSR benar-benar ada di dist/.
// Jika hash aset build SSR berbeda dari build klien, lebih baik build gagal
// daripada situs live menampilkan gambar rusak.
const assetRefs = [...appHtml.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)].map((m) => m[1]);
const missing = [...new Set(assetRefs)].filter((ref) => !fs.existsSync(path.join(dist, ref)));
if (missing.length > 0) fail(`Aset tidak ada di dist/: ${missing.join(', ')}`);

let html = fs.readFileSync(indexPath, 'utf-8');
const markers = /<!--app-html-->[\s\S]*?<!--\/app-html-->/;
if (!markers.test(html)) fail('Penanda <!--app-html--> tidak ditemukan di dist/index.html.');
if (!html.includes('<div id="root">')) fail('<div id="root"> tidak ditemukan di dist/index.html.');

html = html
  .replace(markers, () => appHtml)
  .replace('<div id="root">', '<div id="root" data-prerendered="true">');

fs.writeFileSync(indexPath, html);
fs.rmSync(ssrDir, {recursive: true, force: true});

console.log(
  `[prerender] OK: ${(appHtml.length / 1024).toFixed(1)} KB HTML disuntikkan, ` +
    `${new Set(assetRefs).size} aset diverifikasi.`
);
