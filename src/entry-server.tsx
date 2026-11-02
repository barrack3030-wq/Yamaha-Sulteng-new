import {renderToString} from 'react-dom/server';
import App from './App.tsx';

// Dipanggil oleh scripts/prerender.mjs saat build untuk menghasilkan HTML statis beranda.
export function render(): string {
  return renderToString(<App />);
}
