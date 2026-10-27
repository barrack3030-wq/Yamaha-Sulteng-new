import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromoSection } from './components/PromoSection';
import { MotorcycleCatalog } from './components/MotorcycleCatalog';
import { CreditCalculator } from './components/CreditCalculator';
import { CtaSection } from './components/CtaSection';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [showBlogModal, setShowBlogModal] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation with Blog trigger */}
      <Navbar onOpenBlog={() => setShowBlogModal(true)} />

      {/* Main Content Sections: Perkenalan -> Bagan Promo -> Produk (NMAX & Fazzio + Lihat Motor Lainnya) -> Simulasi Kredit -> CTA */}
      <main className="flex-1">
        {/* 1. Perkenalan / Hero */}
        <Hero />

        {/* 2. Bagan Promo */}
        <PromoSection />

        {/* 3. Pilihan Motor (NMAX & Fazzio + Tombol Lihat Motor Lainnya) */}
        <MotorcycleCatalog />

        {/* 4. Langsung ke Simulasi Kredit */}
        <CreditCalculator />

        {/* 5. Kemudian Call To Action (CTA) & Area Penjualan */}
        <CtaSection />
      </main>

      {/* Footer with Blog trigger */}
      <Footer onOpenBlog={() => setShowBlogModal(true)} />

      {/* Floating Quick WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Blog Reading Modal (terbuka saat menu Blog diklik) */}
      {showBlogModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <div className="sticky top-0 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
              <span className="text-sm font-bold text-slate-950 uppercase tracking-wider">
                Blog &amp; Panduan Otomotif Lokal
              </span>
              <button
                type="button"
                onClick={() => setShowBlogModal(false)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Tutup Blog
              </button>
            </div>
            <div className="p-4 sm:p-6">
              <BlogSection />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
