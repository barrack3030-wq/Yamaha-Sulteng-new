import React, { useState } from 'react';
import { Menu, X, MessageSquareQuote } from 'lucide-react';

interface NavbarProps {
  onSelectNav?: (target: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Promo', href: '#promo' },
    { label: 'Pilihan Motor', href: '#pilihan-motor' },
    { label: 'Simulasi Kredit', href: '#simulasi-kredit' },
    { label: 'Blog', href: '#blog' },
    { label: 'Kontak & Area', href: '#kontak-cta' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand wordmark with uploaded official logo */}
          <a
            href="#beranda"
            className="flex items-center gap-3 text-slate-950 whitespace-nowrap shrink-0 group"
          >
            <img
              src="/assets/aistudio/Yamaha-Logo_70519f9d.png"
              alt="Logo Resmi Yamaha Motor"
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-lg sm:text-xl tracking-tight leading-none">
              <span className="font-extrabold text-slate-950 tracking-tight">YAMAHA</span>{' '}
              <span className="font-black text-blue-700 tracking-wider">SULTENG</span>
            </span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/6285820830530?text=Halo%20Mas%20Aji,%20saya%20ingin%20konsultasi%20pembelian%20motor%20Yamaha."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>Hubungi Mas Aji</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Buka menu navigasi"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block px-3 py-2.5 text-base font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50/50 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="https://wa.me/6285820830530?text=Halo%20Mas%20Aji,%20saya%20ingin%20konsultasi%20pembelian%20motor%20Yamaha."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-center"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>WhatsApp Mas Aji (0858 2083 0530)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
