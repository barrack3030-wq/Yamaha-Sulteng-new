import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromoSection } from './components/PromoSection';
import { MotorcycleCatalog } from './components/MotorcycleCatalog';
import { CreditCalculator } from './components/CreditCalculator';
import { BlogSection } from './components/BlogSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content Sections: Perkenalan -> Bagan Promo -> List Produk -> Fitur Menu Lainnya (Simulasi Kredit & Blog) -> CTA */}
      <main className="flex-1">
        {/* 1. Perkenalan / Hero */}
        <Hero />

        {/* 2. Bagan Promo & Penawaran Spesial */}
        <PromoSection />

        {/* 3. List Produk / Pilihan Motor Yamaha */}
        <MotorcycleCatalog />

        {/* 4. Fitur Simulasi Kredit & Angsuran */}
        <CreditCalculator />

        {/* 5. Fitur Blog & Panduan Otomotif Lokal */}
        <BlogSection />

        {/* 6. Call To Action (CTA) & Area Penjualan */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
