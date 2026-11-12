import React, { useEffect, useRef } from 'react';
import { MessageSquareQuote, ShieldCheck, Truck, FileText, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { MOTORCYCLES } from '../data/motorcycles';
import { ScrollReveal } from './ScrollReveal';

const showcase = MOTORCYCLES.filter((motor) => motor.image).slice(0, 4);

const features = [
  { icon: Truck, title: 'Pengantaran Unit', desc: 'Jangkauan layanan Toili, Luwuk, dan Morowali.' },
  { icon: ShieldCheck, title: 'Informasi Transparan', desc: 'Konfirmasi harga, promo, dan biaya sebelum transaksi.' },
  { icon: FileText, title: 'Bantuan Pengajuan', desc: 'Pendampingan proses pembelian dan kredit.' },
  { icon: MessageSquareQuote, title: 'Konsultasi Personal', desc: 'Tanyakan warna, stok, DP, dan angsuran via WhatsApp.' },
];

export const Hero: React.FC = () => {
  const items = [...showcase, ...showcase];
  const sectionRef = useRef<HTMLElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  // Efek interaktif hanya dipasang di klien (setelah hydrate) agar aman untuk prerender.
  useEffect(() => {
    const section = sectionRef.current;
    const tilt = tiltRef.current;
    if (!section || !tilt) return;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reduce) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        tilt.style.setProperty('--rx', `${(-py * 7).toFixed(2)}deg`);
        tilt.style.setProperty('--ry', `${(px * 9).toFixed(2)}deg`);
        section.style.setProperty('--mx', `${((px + 0.5) * 100).toFixed(1)}%`);
        section.style.setProperty('--my', `${((py + 0.5) * 100).toFixed(1)}%`);
      });
    };
    const onLeave = () => {
      tilt.style.setProperty('--rx', '0deg');
      tilt.style.setProperty('--ry', '0deg');
    };
    section.addEventListener('pointermove', onMove);
    section.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener('pointermove', onMove);
      section.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} id="beranda" className="hero-premium relative isolate overflow-hidden bg-[#040a1c] text-white pt-12 pb-14 sm:pt-20 sm:pb-20">
      {/* Latar: aurora, grid, dan sorotan mengikuti kursor */}
      <div aria-hidden="true" className="hero-aurora absolute inset-0 -z-10 pointer-events-none">
        <span className="hero-blob hero-blob-a" />
        <span className="hero-blob hero-blob-b" />
        <span className="hero-blob hero-blob-c" />
      </div>
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10 pointer-events-none" />
      <div aria-hidden="true" className="hero-spotlight absolute inset-0 -z-10 pointer-events-none" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-32 -z-10 bg-gradient-to-t from-[#040a1c] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left home-reveal">
            <div className="home-reveal-item inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold text-blue-100 tracking-[.18em] uppercase backdrop-blur">
              <span className="hero-dot relative flex h-2 w-2"><span className="hero-dot-ping absolute inline-flex h-full w-full rounded-full bg-red-500" /><span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" /></span>
              Yamaha Motor · Sulawesi Tengah
            </div>

            <h1 className="home-reveal-item home-title mx-auto lg:mx-0 max-w-3xl text-[2.4rem] sm:text-6xl lg:text-[4.1rem] font-extrabold text-white tracking-[-.045em] leading-[1.05] text-balance">
              Temukan Motor Yamaha yang <span className="hero-gradient-text">Sesuai Gaya Anda.</span>
            </h1>

            <p className="home-reveal-item mx-auto lg:mx-0 max-w-xl text-sm sm:text-lg text-slate-300 leading-relaxed">
              Temukan motor yang cocok, lalu konsultasikan harga, promo, dan pilihan kredit bersama Mas Aji.
            </p>

            <div className="home-reveal-item flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-1">
              <a href="https://wa.me/6285820830530?text=Halo%20Mas%20Aji%2C%20saya%20ingin%20konsultasi%20pilihan%20motor%20Yamaha." target="_blank" rel="noopener noreferrer" className="hero-cta group relative inline-flex items-center justify-center gap-2 overflow-hidden px-7 py-4 text-sm font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_10px_40px_-8px_rgba(37,99,235,.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-8px_rgba(59,130,246,.9)]">
                <MessageSquareQuote className="w-4 h-4" /> Konsultasi dengan Mas Aji
              </a>
              <a href="#pilihan-motor" className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white rounded-full border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                Jelajahi Katalog <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="home-reveal-item flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 pt-1 text-xs text-slate-400">
              <span className="font-semibold text-white">Mas Aji · Sales Consultant</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-blue-400" /> Toili · Luwuk · Morowali</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <a href="tel:085820830530" className="font-semibold text-blue-300 hover:text-white transition-colors">0858-2083-0530</a>
            </div>
          </div>

          <div className="lg:col-span-5 relative home-visual-reveal">
            <div ref={tiltRef} className="hero-tilt relative">
              {/* Cincin dekoratif berputar */}
              <div aria-hidden="true" className="hero-ring hero-ring-a" />
              <div aria-hidden="true" className="hero-ring hero-ring-b" />

              <div className="hero-float relative overflow-hidden rounded-[28px] border border-white/15 bg-slate-950 shadow-[0_40px_90px_-30px_rgba(37,99,235,.55)]">
                <img src={showcase[0]?.image} alt="Pilihan motor Yamaha NMAX" width={620} height={420} fetchPriority="high" className="hero-photo block w-full h-[300px] sm:h-[420px] object-cover" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#040a1c] via-[#040a1c]/25 to-transparent" />
                <div aria-hidden="true" className="hero-sheen absolute inset-0" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-[10px] font-bold uppercase tracking-[.22em] text-white/80">
                  <span className="rounded-full bg-black/35 px-3 py-1 backdrop-blur">Move with confidence</span>
                  <span className="hidden sm:inline text-white/55">Yamaha Sulteng</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                  <div>
                    <p className="text-[11px] text-blue-300 font-semibold uppercase tracking-[.2em]">Pilihan unggulan</p>
                    <p className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Ride Your Way.</p>
                    <p className="text-xs text-slate-300 mt-1">Temukan model yang cocok untuk Anda.</p>
                  </div>
                  <a href="#pilihan-motor" aria-label="Lihat katalog motor" className="group w-12 h-12 shrink-0 rounded-full bg-white text-blue-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"><ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" /></a>
                </div>
              </div>

              {/* Chip melayang */}
              <div className="hero-chip hero-chip-a hidden sm:flex items-center gap-2.5 rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 backdrop-blur-xl shadow-xl">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/90"><Sparkles className="w-4 h-4" /></span>
                <span className="leading-tight"><span className="block text-[10px] uppercase tracking-widest text-slate-400">Model</span><span className="block text-sm font-bold">{MOTORCYCLES.length}+ pilihan</span></span>
              </div>
              <div className="hero-chip hero-chip-b hidden sm:flex items-center gap-2.5 rounded-2xl border border-white/15 bg-slate-900/70 px-4 py-3 backdrop-blur-xl shadow-xl">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500/90"><MapPin className="w-4 h-4" /></span>
                <span className="leading-tight"><span className="block text-[10px] uppercase tracking-widest text-slate-400">Area layanan</span><span className="block text-sm font-bold">Toili · Luwuk · Morowali</span></span>
              </div>
            </div>
          </div>
        </div>

        <ScrollReveal className="mt-16 sm:mt-24">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.24em] text-blue-400">Explore the lineup</p>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1.5">Kenali lini motor Yamaha</h2>
            </div>
            <span className="hidden sm:block text-xs text-slate-500">Pilihan bergerak · Arahkan kursor untuk berhenti</span>
          </div>
          <div className="product-marquee product-marquee-dark relative overflow-hidden" aria-label="Galeri motor Yamaha bergerak">
            <div className="product-marquee-track flex w-max gap-4 sm:gap-5">
              {items.map((motor, index) => (
                <a href="#pilihan-motor" key={motor.id + '-' + index} className="hero-card group relative flex flex-col w-[220px] sm:w-[270px] h-[200px] sm:h-[230px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[.04] backdrop-blur transition-all duration-500 hover:border-blue-400/50 hover:bg-white/[.08] hover:-translate-y-1">
                  <div className="relative h-[140px] sm:h-[165px] overflow-hidden">
                    <img src={motor.image} alt={'Yamaha ' + motor.name} loading="lazy" width={600} height={420} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0a1230] to-transparent opacity-80" />
                  </div>
                  <div className="mt-auto px-4 pb-3 pt-2 text-left">
                    <p className="text-[10px] text-blue-300 font-bold uppercase tracking-widest">{motor.series}</p>
                    <p className="text-sm font-bold text-white">{motor.name.replace('Yamaha ', '').split(' ').slice(0, 3).join(' ')}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <p className="text-[11px] text-slate-500 mt-3 sm:hidden">Galeri motor bergerak otomatis. Pilih katalog untuk melihat detail model.</p>
        </ScrollReveal>

        <ScrollReveal className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-5 home-features">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="home-feature group flex flex-col sm:flex-row items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[.03] p-4 backdrop-blur transition-all duration-500 hover:border-blue-400/40 hover:bg-white/[.07] hover:-translate-y-1">
              <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-300 shrink-0 ring-1 ring-blue-400/20"><Icon className="w-5 h-5" /></div>
              <div><h2 className="text-sm font-semibold text-white">{title}</h2><p className="text-xs text-slate-400 mt-1 leading-relaxed">{desc}</p></div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};
