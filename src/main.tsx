import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

// Build produksi sudah berisi HTML hasil prerender (lihat scripts/prerender.mjs),
// jadi cukup di-hydrate. Saat "npm run dev" belum ada prerender, render biasa.
if (container.hasAttribute('data-prerendered')) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
