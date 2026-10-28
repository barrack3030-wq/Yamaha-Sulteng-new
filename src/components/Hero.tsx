import React from 'react';
import { MessageSquareQuote, ShieldCheck, Truck, FileText, ChevronRight } from 'lucide-react';
import heroImg from '../assets/images/hero_yamaha_showroom_1793097235199.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="beranda" className="relative bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Context kicker: clean unboxed text */}
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 tracking-wider uppercase">
              <span>Wilayah Toili</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Luwuk</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Morowali</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] text-balance">
              Pilihan Motor Yamaha Terbaik &amp; Konsultasi Kredit Tepercaya
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Dapatkan informasi harga OTR dan promo terbaru, bandingkan pilihan model, serta konsultasikan simulasi DP dan angsuran. Untuk alamat pengantaran di <strong className="text-slate-900 font-semibold">Toili</strong>, <strong className="text-slate-900 font-semibold">Luwuk</strong>, atau <strong className="text-slate-900 font-semibold">Morowali</strong>, tanyakan jangkauan layanan dan biayanya terlebih dahulu.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="https://wa.me/6285820830530?text=Halo%20Mas%20Aji,%20saya%20tertarik%20dengan%20motor%20Yamaha.%20Boleh%20minta%20info%20harga%20OTR%20dan%20promo%20terbaru?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg shadow-sm transition-colors text-center"
              >
                <MessageSquareQuote className="w-5 h-5 shrink-0" />
                <span>Konsultasi WhatsApp Mas Aji</span>
              </a>

              <a
                href="#pilihan-motor"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center"
              >
                <span>Lihat Katalog Motor</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

            {/* Direct Contact Callout */}
            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-slate-500">
              <span className="font-semibold text-slate-900">Marketing Support:</span>
              <span>Mas Aji</span>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <a href="tel:085820830530" className="hover:text-blue-700 font-medium">0858-2083-0530</a>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <span>Respon Cepat Setiap Hari</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-950 aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] group">
              <img
                src={heroImg}
                alt="Showroom Motor Yamaha Maxi Series Sulawesi Tengah"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">
                  Yamaha Maxi &amp; Sport Flagship
                </p>
                <p className="text-sm sm:text-base font-bold text-white">
                  Teknologi Blue Core VVA, Turbo &amp; Connected
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Proof & Trust Strip below Hero */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Kirim Sampai Alamat</h2>
              <p className="text-xs text-slate-500 mt-0.5">Jangkau Toili, Luwuk Kota, hingga mess Morowali.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Transaksi Aman</h2>
              <p className="text-xs text-slate-500 mt-0.5">DP dibayarkan saat motor tiba (COD) atau saat ACC.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Berkas Dibantu</h2>
              <p className="text-xs text-slate-500 mt-0.5">Pendampingan pengajuan kredit hingga disetujui leasing.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-blue-50 text-blue-700 shrink-0">
              <MessageSquareQuote className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-slate-900">Konsultasi Ramah</h2>
              <p className="text-xs text-slate-500 mt-0.5">Tanya estimasi angsuran &amp; warna unit via WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
