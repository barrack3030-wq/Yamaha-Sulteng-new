import React from 'react';
import { MessageSquareQuote } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Konsultasi Cepat WhatsApp">
      <a
        href="https://wa.me/6285820830530?text=Halo%20Mas%20Aji,%20saya%20ingin%20tanya%20harga%20dan%20promo%20motor%20Yamaha."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
        aria-label="Konsultasi cepat dengan Mas Aji di WhatsApp"
      >
        <MessageSquareQuote className="w-5 h-5 shrink-0" />
        <span className="text-xs sm:text-sm font-bold whitespace-nowrap">
          Tanya Mas Aji (WhatsApp)
        </span>
      </a>
    </aside>
  );
};
