import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromoSection } from './components/PromoSection';
import { MotorcycleCatalog } from './components/MotorcycleCatalog';
import { CreditCalculator } from './components/CreditCalculator';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.scroll-reveal:not(.is-visible)');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

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

        {/* 4. Langsung ke Simulasi Kredit */}
        <CreditCalculator />
      </main>

      {/* Footer with Blog trigger */}
      <Footer />

      {/* Floating Quick WhatsApp Action */}
      <FloatingWhatsApp />

    </div>
  );
}
