import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromoSection } from './components/PromoSection';
import { MotorcycleCatalog } from './components/MotorcycleCatalog';
import { CreditCalculator } from './components/CreditCalculator';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BlogTeaser } from './components/BlogTeaser';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation with Blog trigger */}
      <Navbar />

      {/* Main Content Sections: Perkenalan -> Bagan Promo -> Produk (NMAX & Fazzio + Lihat Motor Lainnya) -> Simulasi Kredit -> CTA */}
      <main className="flex-1">
        {/* 1. Perkenalan / Hero */}
        <Hero />

        {/* 2. Bagan Promo */}
        <PromoSection />

        {/* 3. Pilihan Motor (NMAX & Fazzio + Tombol Lihat Motor Lainnya) */}
        <MotorcycleCatalog />

        {/* Editorial blog preview */}
        <BlogTeaser />

        {/* 4. Langsung ke Simulasi Kredit */}
        <CreditCalculator />

        {/* 5. Kemudian Call To Action (CTA) & Area Penjualan */}
        <CtaSection />
      </main>

      {/* Footer with Blog trigger */}
      <Footer />

      {/* Floating Quick WhatsApp Action */}
      <FloatingWhatsApp />

    </div>
  );
}
