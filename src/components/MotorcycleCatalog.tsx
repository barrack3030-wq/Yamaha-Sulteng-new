import React, { useState } from 'react';
import { MOTORCYCLES } from '../data/motorcycles';
import { Motorcycle } from '../types';
import { MessageSquareQuote, Info, X, Check, Gauge, Sliders, Search, ChevronDown, ChevronUp } from 'lucide-react';

export const MotorcycleCatalog: React.FC = () => {
  const [showAllMotors, setShowAllMotors] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalMotor, setActiveModalMotor] = useState<Motorcycle | null>(null);

  const categories = ['Semua', 'Maxi Series', 'Classy Series', 'Sport & Adventure', 'Matic Praktis'];

  // If showAllMotors is false and no search active, only show NMAX and Fazzio
  const displayedMotors = React.useMemo(() => {
    if (!showAllMotors && searchQuery.trim() === '' && selectedCategory === 'Semua') {
      return MOTORCYCLES.filter((m) => m.id === 'nmax-turbo' || m.id === 'fazzio-hybrid');
    }

    return MOTORCYCLES.filter((motor) => {
      const matchesCategory = selectedCategory === 'Semua' || motor.series === selectedCategory;
      const matchesSearch =
        motor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        motor.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        motor.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [showAllMotors, searchQuery, selectedCategory]);

  const getWaLinkForMotor = (motorName: string, region: string = 'Luwuk / Toili / Morowali') => {
    const message = `Halo Mas Aji, saya tertarik dengan ${motorName}. Mohon info harga OTR terbaru, promo diskon/DP, dan ketersediaan warna untuk wilayah ${region}.`;
    return `https://wa.me/6285820830530?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="pilihan-motor" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
              Katalog Lini Motor Yamaha Terpopuler
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              Pilihan Motor Yamaha
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Model unggulan paling diminati dengan mesin Blue Core VVA teruji hemat bahan bakar, bertenaga, dan bergaransi resmi.
            </p>
          </div>

          {/* Search Box - visible when showing all or on demand */}
          {showAllMotors && (
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari Aerox, WR 155, Filano..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
              />
            </div>
          )}
        </div>

        {/* Category Tabs - shown when expanded */}
        {showAllMotors && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none animate-in fade-in duration-200">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Product Cards Grid: 2 columns when default, 3 columns when expanded */}
        <div
          className={`grid gap-6 sm:gap-8 ${
            !showAllMotors && searchQuery.trim() === '' && selectedCategory === 'Semua'
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {displayedMotors.map((motor) => (
            <div
              key={motor.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Product Image Box */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden border-b border-slate-100">
                  <img
                    src={motor.image}
                    alt={`Motor Yamaha ${motor.name} - Penjualan Toili Luwuk Morowali`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {motor.badge && (
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded">
                      {motor.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div>
                    <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
                      {motor.series}
                    </div>
                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-700 transition-colors">
                      {motor.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {motor.tagline}
                    </p>
                  </div>

                  {/* Key specs strip */}
                  <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Kapasitas Mesin</span>
                      <span className="font-semibold text-slate-800">{motor.engine.split(',')[0]}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Daya Maksimum</span>
                      <span className="font-semibold text-slate-800">{motor.power.split('/')[0]}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Sistem Bahan Bakar</span>
                      <span className="font-semibold text-slate-800">{motor.fuelSystem}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Kapasitas Tangki</span>
                      <span className="font-semibold text-slate-800">{motor.fuelCapacity.split('(')[0]}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 space-y-2">
                <a
                  href={getWaLinkForMotor(motor.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg transition-colors text-center shadow-xs"
                >
                  <MessageSquareQuote className="w-4 h-4 shrink-0" />
                  <span>Tanya Harga &amp; Promo OTR</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModalMotor(motor)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors text-center"
                >
                  <Info className="w-3.5 h-3.5 text-slate-500" />
                  <span>Spesifikasi &amp; Fitur Detail</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Button: Lihat Motor Lainnya */}
        <div className="mt-10 text-center">
          {!showAllMotors ? (
            <button
              type="button"
              onClick={() => setShowAllMotors(true)}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-all shadow-sm hover:shadow-md group"
            >
              <span>Lihat Motor Lainnya (Aerox, WR 155 R, Filano, Gear)</span>
              <ChevronDown className="w-4 h-4 text-blue-400 group-hover:translate-y-0.5 transition-transform" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setShowAllMotors(false);
                setSelectedCategory('Semua');
                setSearchQuery('');
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg transition-all"
            >
              <ChevronUp className="w-4 h-4" />
              <span>Tampilkan Hanya NMAX &amp; Fazzio</span>
            </button>
          )}
        </div>

        {/* Pricing notice box */}
        <div className="mt-10 bg-blue-50/60 border border-blue-200/80 rounded-xl p-5 text-xs text-slate-700 leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-bold text-blue-950 block text-sm mb-0.5">
              Catatan Resmi Harga &amp; Promo On The Road (OTR)
            </span>
            <span>
              Harga OTR dan program diskon uang muka untuk wilayah Luwuk, Toili, dan Morowali diperbarui secara berkala mengikuti aturan leasing dan BBN daerah. Hubungi Mas Aji langsung untuk mendapatkan price list resmi dan promo yang berlaku hari ini.
            </span>
          </div>
          <a
            href="https://wa.me/6285820830530?text=Halo%20Mas%20Aji,%20saya%20ingin%20meminta%20brosur%20dan%20daftar%20harga%20OTR%20terbaru%20motor%20Yamaha."
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg whitespace-nowrap shrink-0"
          >
            Minta Brosur &amp; Price List
          </a>
        </div>
      </div>

      {/* Specifications Modal */}
      {activeModalMotor && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block">
                  {activeModalMotor.series}
                </span>
                <h3 className="text-xl font-bold text-slate-950">
                  {activeModalMotor.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalMotor(null)}
                className="p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Image banner */}
              <div className="rounded-xl overflow-hidden aspect-[16/9] bg-slate-100 border border-slate-200">
                <img
                  src={activeModalMotor.image}
                  alt={activeModalMotor.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">Gambaran Motor</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeModalMotor.tagline}
                </p>
                <p className="text-xs text-slate-500 mt-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <strong className="text-slate-800">Kesesuaian Penggunaan: </strong>
                  {activeModalMotor.bestFor}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-blue-700" />
                  <span>Spesifikasi Teknis Mesin &amp; Rangka</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="text-slate-400 block text-[11px]">Tipe Mesin</span>
                    <span className="font-semibold text-slate-800">{activeModalMotor.engine}</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="text-slate-400 block text-[11px]">Daya Maksimum</span>
                    <span className="font-semibold text-slate-800">{activeModalMotor.power}</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="text-slate-400 block text-[11px]">Torsi Maksimum</span>
                    <span className="font-semibold text-slate-800">{activeModalMotor.torque}</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="text-slate-400 block text-[11px]">Kapasitas Tangki</span>
                    <span className="font-semibold text-slate-800">{activeModalMotor.fuelCapacity}</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="text-slate-400 block text-[11px]">Transmisi</span>
                    <span className="font-semibold text-slate-800">{activeModalMotor.transmission}</span>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="text-slate-400 block text-[11px]">Berat Isi</span>
                    <span className="font-semibold text-slate-800">{activeModalMotor.curbWeight}</span>
                  </div>
                </div>
              </div>

              {/* Features list */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-blue-700" />
                  <span>Fitur Unggulan Terkini</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalMotor.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Pengecekan unit &amp; warna via Mas Aji: <strong>0858-2083-0530</strong>
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveModalMotor(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100"
                >
                  Tutup
                </button>
                <a
                  href={getWaLinkForMotor(activeModalMotor.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg"
                >
                  <MessageSquareQuote className="w-3.5 h-3.5" />
                  <span>Tanya Harga Unit Ini</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
