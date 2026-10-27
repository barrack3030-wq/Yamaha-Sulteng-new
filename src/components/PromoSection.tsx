import React from 'react';
import { Sparkles, Gift, MessageSquareQuote, Percent, Truck, Tag } from 'lucide-react';
import promoUniversalImg from '../assets/images/promo_dp_ringan_1793101753666.jpg';

export const PromoSection: React.FC = () => {
  const universalPromos = [
    {
      icon: Percent,
      title: 'Promo Uang Muka (DP) Terjangkau & Subsidi',
      desc: 'Dapatkan penawaran uang muka ringan mulai dari 10% - 15% serta program subsidi diskon DP untuk lini skutik Maxi, Classy Hybrid, maupun matic harian Yamaha.'
    },
    {
      icon: Tag,
      title: 'Program Potongan Angsuran & Bunga Ringan',
      desc: 'Skema pembiayaan fleksibel dengan pilihan tenor 11, 23, 29, hingga 35 bulan bekerja sama dengan leasing resmi terdaftar OJK (BAF, Adira Finance, FIFGROUP).'
    },
    {
      icon: Truck,
      title: 'Pengantaran Unit Langsung & Pembayaran Aman (COD)',
      desc: 'Unit motor baru dikirim langsung ke alamat rumah atau lokasi Anda di Toili, Luwuk, dan Morowali. Uang muka (DP) aman dibayarkan setelah motor tiba di tempat.'
    }
  ];

  return (
    <section id="promo" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Program Penjualan Spesial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Bagan Promo &amp; Penawaran Bulan Ini
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Penawaran resmi unit baru motor Yamaha dengan promo uang muka bersahabat, cicilan terjangkau, dan transaksi aman untuk seluruh calon pembeli.
          </p>
        </div>

        {/* 2-Column Split: 1 Universal Photo on Left + Universal Promo Details on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-8">
          {/* Left Column: 1 Universal Promo Photo */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-950 flex-1 min-h-[300px] lg:min-h-full group">
              <img
                src={promoUniversalImg}
                alt="Promo Resmi Pembelian dan Serah Terima Motor Yamaha"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                Promo Spesial Yamaha
              </div>

              {/* Bottom Caption & Quick Action */}
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    Serah Terima Unit Cepat &amp; Aman
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Konsultasikan pilihan motor dan ketersediaan promo hari ini langsung bersama Mas Aji.
                  </p>
                </div>

                <a
                  href="https://wa.me/6285820830530?text=Halo%20Mas%20Aji,%20saya%20ingin%20tanya%20detail%20promo%20motor%20Yamaha%20terbaru%20yang%20berlaku%20bulan%20ini."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-colors text-center"
                >
                  <MessageSquareQuote className="w-4 h-4 shrink-0" />
                  <span>Klaim Promo Ini via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Universal Promo Points */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {universalPromos.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs hover:border-blue-400 transition-colors flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Bonus Box */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200/60">
                <Gift className="w-4 h-4" />
              </div>
              <div className="text-xs text-slate-600 leading-normal">
                <strong className="text-slate-900 block font-semibold mb-0.5">Hadiah Langsung Standar Resmi:</strong>
                Setiap pembelian unit baru disertai Helm SNI resmi Yamaha, jaket eksklusif, toolkit, serta kupon gratis servis berkala dan oli pertama.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
