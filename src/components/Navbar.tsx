import React, { useEffect, useState } from 'react';
import { Menu, X, MessageSquareQuote } from 'lucide-react';

interface NavbarProps {
  onSelectNav?: (target: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Promo', href: '#promo' },
    { label: 'Pilihan Motor', href: '#pilihan-motor' },
    { label: 'Simulasi Kredit', href: '#simulasi-kredit' },
    { label: 'Blog', href: '/blog/' },
    { label: 'Kontak & Area', href: '#kontak-cta' },
  ];

  const handleNavClick = (href: string, label: string) => {
    setMobileMenuOpen(false);
    if (label === 'Blog') {
      window.location.assign('/blog/');
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-500 ${
        scrolled
          ? 'bg-[#040a1c]/85 border-white/10 shadow-[0_10px_40px_-18px_rgba(0,0,0,.8)]'
          : 'bg-[#040a1c]/60 border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-8 transition-all duration-500 ${scrolled ? 'h-16' : 'h-[72px]'}`}>
          {/* Zone 1: Brand wordmark with uploaded official logo */}
          <a
            href="#beranda"
            className="flex items-center gap-3 text-white whitespace-nowrap shrink-0 group"
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/aistudio/Yamaha-Logo_70519f9d.png`}
              alt="Logo Resmi Yamaha Motor"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]"
            />
            <span className="text-lg sm:text-xl tracking-tight leading-none">
              <span className="font-extrabold text-white tracking-tight">YAMAHA</span>{' '}
              <span className="font-black text-blue-400 tracking-wider">SULTENG</span>
            </span>
          </a>

          {/* Zone 2: single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.label);
                }}
                className="nav-link relative py-2 hover:text-white transition-colors whitespace-nowrap shrink-0"
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
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-full transition-all duration-300 whitespace-nowrap shrink-0 shadow-[0_8px_24px_-8px_rgba(37,99,235,.9)] hover:-translate-y-0.5"
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
              className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
        <div className="nav-drawer md:hidden border-t border-white/10 bg-[#040a1c]/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href, link.label);
              }}
              className="block px-3 py-2.5 text-base font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="https://wa.me/6285820830530?text=Halo%20Mas%20Aji,%20saya%20ingin%20konsultasi%20pembelian%20motor%20Yamaha."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-center"
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
