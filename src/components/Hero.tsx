import React from 'react';
import { MessageSquareQuote, ShieldCheck, Truck, FileText, ArrowUpRight } from 'lucide-react';
import { MOTORCYCLES } from '../data/motorcycles';
import { ScrollReveal } from './ScrollReveal';

const showcase = MOTORCYCLES.filter((motor) => motor.image).slice(0, 4);

export const Hero: React.FC = () => {
  const items = [...showcase, ...showcase];

  return (
    <section id="beranda" className="relative overflow-hidden bg-white pt-12 pb-12 sm:pt-16 sm:pb-16">
      <div className="absolute inset-x-0 top-0 h-[440px] bg-gradient-to-br from-blue-50 via-white to-white pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center home-reveal">
            <div className="home-reveal-item inline-flex items-center justify-center gap-2 text-[11px] font-bold text-blue-800 tracking-[.2em] uppercase">
              <span className="w-7 h-px bg-blue-700" />
              Yamaha Motor · Sulawesi Tengah
            </div>
            <h1 className="home-reveal-item home-title mx-auto max-w-3xl text-[2.35rem] sm:text-5xl lg:text-[3.65rem] font-extrabold text-slate-950 tracking-[-.045em] leading-[1.08] text-balance">
              Temukan Motor Yamaha yang <span className="text-blue-700">Sesuai Gaya Anda.</span>
            </h1>
            <p className="home-reveal-item mx-auto max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed text-center">
              Temukan motor yang cocok, lalu konsultasikan harga, promo, dan pilihan kredit bersama Mas Aji.
            </p>
            <div className="home-reveal-item flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-1">
              <a href="https://wa.me/6285820830530?text=Halo%20Mas%20Aji%2C%20saya%20ingin%20konsultasi%20pilihan%20motor%20Yamaha." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 rounded-md shadow-lg shadow-blue-900/15 transition-all hover:-translate-y-0.5">
                <MessageSquareQuote className="w-4 h-4" /> Konsultasi dengan Mas Aji
              </a>
              <a href="#pilihan-motor" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-blue-700 border border-slate-300 hover:border-blue-300 rounded-md transition-colors">
                Jelajahi Katalog <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs text-slate-500">
              <span className="font-semibold text-slate-800">Mas Aji · Sales Consultant</span>
              <span className="hidden sm:inline text-slate-300">|</span>
              <span>Toili · Luwuk · Morowali</span>
              <span className="hidden sm:inline text-slate-300">|</span>
              <a href="tel:085820830530" className="font-semibold text-blue-700 hover:underline">0858-2083-0530</a>
            </div>
          </div>

          <div className="lg:col-span-5 relative home-visual-reveal">
            <div className="relative min-h-[270px] sm:min-h-[350px] rounded-2xl bg-slate-950 overflow-hidden shadow-2xl shadow-blue-950/15">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(37,99,235,.65),transparent_55%),linear-gradient(145deg,#0f172a,#172554_65%,#020617)]" />
              <div className="absolute -right-12 -top-16 w-64 h-64 rounded-full border border-white/10" />
              <div className="absolute -right-2 -top-6 w-44 h-44 rounded-full border border-white/10" />
              <div className="relative z-10 flex flex-col justify-between min-h-[270px] sm:min-h-[350px] p-6 sm:p-8">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.22em] text-blue-200">
                  <span>Move with confidence</span>
                  <span className="text-white/50">Yamaha Sulteng</span>
                </div>
                <div className="flex justify-center items-center py-3 hero-parallax-frame">
                  <img src={showcase[0]?.image} alt="Pilihan motor Yamaha NMAX" width={620} height={420} fetchPriority="high" className="hero-parallax-image w-full max-h-56 sm:max-h-64 object-contain drop-shadow-[0_22px_28px_rgba(0,0,0,.35)]" />
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-blue-200 font-semibold uppercase tracking-widest">Pilihan unggulan</p>
                    <p className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Ride Your Way.</p>
                    <p className="text-xs text-slate-300 mt-1">Temukan model yang cocok untuk Anda.</p>
                  </div>
                  <a href="#pilihan-motor" aria-label="Lihat katalog motor" className="w-11 h-11 shrink-0 rounded-full bg-white text-blue-800 flex items-center justify-center hover:bg-blue-100 transition-colors"><ArrowUpRight className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ScrollReveal className="mt-14 sm:mt-16 home-section-reveal">
          <div className="flex items-end justify-between gap-4 mb-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.22em] text-blue-700">Explore the lineup</p>
              <h2 className="text-lg sm:text-xl font-bold text-slate-950 mt-1">Kenali lini motor Yamaha</h2>
            </div>
            <span className="hidden sm:block text-xs text-slate-400">Pilihan bergerak · Geser untuk melihat</span>
          </div>
          <div className="product-marquee relative overflow-hidden" aria-label="Galeri motor Yamaha bergerak">
            <div className="product-marquee-track flex w-max gap-4 sm:gap-5">
              {items.map((motor, index) => (
                <a href="#pilihan-motor" key={motor.id + '-' + index} className="group relative w-[220px] sm:w-[270px] h-[150px] sm:h-[180px] shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 hover:border-blue-300 transition-colors">
                  <img src={motor.image} alt={'Yamaha ' + motor.name} loading="lazy" width={600} height={420} className="w-full h-full object-contain p-3 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent px-4 pt-10 pb-3">
                    <p className="text-[10px] text-blue-200 font-bold uppercase tracking-widest">{motor.series}</p>
                    <p className="text-sm font-bold text-white">{motor.name.replace('Yamaha ', '').split(' ').slice(0, 3).join(' ')}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <p className="text-[11px] text-slate-400 mt-3 sm:hidden">Galeri motor bergerak otomatis. Pilih katalog untuk melihat detail model.</p>
        </ScrollReveal>

        <ScrollReveal className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 home-features">
          <div className="home-feature flex items-start gap-3"><div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 shrink-0"><Truck className="w-5 h-5" /></div><div><h2 className="text-sm font-semibold text-slate-900">Pengantaran Unit</h2><p className="text-xs text-slate-500 mt-0.5">Jangkauan layanan Toili, Luwuk, dan Morowali.</p></div></div>
          <div className="home-feature flex items-start gap-3"><div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 shrink-0"><ShieldCheck className="w-5 h-5" /></div><div><h2 className="text-sm font-semibold text-slate-900">Informasi Transparan</h2><p className="text-xs text-slate-500 mt-0.5">Konfirmasi harga, promo, dan biaya sebelum transaksi.</p></div></div>
          <div className="home-feature flex items-start gap-3"><div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 shrink-0"><FileText className="w-5 h-5" /></div><div><h2 className="text-sm font-semibold text-slate-900">Bantuan Pengajuan</h2><p className="text-xs text-slate-500 mt-0.5">Pendampingan proses pembelian dan kredit.</p></div></div>
          <div className="home-feature flex items-start gap-3"><div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 shrink-0"><MessageSquareQuote className="w-5 h-5" /></div><div><h2 className="text-sm font-semibold text-slate-900">Konsultasi Personal</h2><p className="text-xs text-slate-500 mt-0.5">Tanyakan warna, stok, DP, dan angsuran via WhatsApp.</p></div></div>
        </ScrollReveal>
      </div>
    </section>
  );
};
