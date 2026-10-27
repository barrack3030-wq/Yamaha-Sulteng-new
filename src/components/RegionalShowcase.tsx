import React, { useState } from 'react';
import { REGIONS } from '../data/regions';
import { MapPin, MessageSquareQuote, CheckCircle2, ChevronRight, Navigation, Sparkles } from 'lucide-react';

export const RegionalShowcase: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<'toili' | 'luwuk' | 'morowali'>('toili');
  const activeRegion = REGIONS.find((r) => r.id === selectedRegionId) || REGIONS[0];

  return (
    <section id="area-penjualan" className="py-14 sm:py-20 bg-slate-100/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
            Wilayah Jangkauan Khusus Sulawesi Tengah
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Area Penjualan: Toili, Luwuk &amp; Morowali
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Layanan pengantaran unit langsung ke lokasi dan pendampingan berkas disesuaikan dengan kondisi lapangan dan profesi Anda di setiap wilayah.
          </p>
        </div>

        {/* 3 Core Regional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {REGIONS.map((region) => {
            const isSelected = selectedRegionId === region.id;
            const waUrl = `https://wa.me/6285820830530?text=${encodeURIComponent(region.whatsappMessage)}`;

            return (
              <div
                key={region.id}
                id={`area-${region.id}`}
                className={`bg-white rounded-xl p-6 sm:p-7 border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-600 ring-2 ring-blue-600/10 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                      {region.district}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedRegionId(region.id)}
                      className={`text-xs px-2.5 py-1 rounded font-medium transition-colors ${
                        isSelected
                          ? 'bg-blue-50 text-blue-800'
                          : 'text-slate-500 hover:text-slate-900 bg-slate-100'
                      }`}
                    >
                      {isSelected ? 'Area Aktif' : 'Lihat Detail'}
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 mb-2">
                    {region.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {region.description}
                  </p>

                  <div className="border-t border-slate-100 pt-4 mb-5 space-y-2">
                    <div className="text-xs font-semibold text-slate-900">Model Rekomendasi:</div>
                    <div className="flex flex-wrap gap-1.5 text-xs text-slate-600">
                      {region.popularModels.map((m, idx) => (
                        <span key={m}>
                          {m}
                          {idx < region.popularModels.length - 1 && (
                            <span aria-hidden="true" className="text-slate-300 ml-1.5">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-100 text-xs text-slate-700 leading-normal mb-6">
                    <span className="font-semibold text-slate-900">Keunggulan Layanan: </span>
                    {region.keyHighlight}
                  </div>
                </div>

                {/* Direct WhatsApp Button with pre-filled message for this region */}
                <div className="pt-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg transition-colors text-center shadow-xs"
                  >
                    <MessageSquareQuote className="w-4 h-4 shrink-0" />
                    <span>WhatsApp Khusus {region.name.split(' ')[0]}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Regional Landing Tab / Content Explorer */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider mb-1">
                <Navigation className="w-3.5 h-3.5" />
                <span>Informasi Pengiriman &amp; Berkas</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                Layanan Khusus Wilayah: {activeRegion.name}
              </h3>
            </div>

            {/* Segmented control tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg shrink-0">
              {REGIONS.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setSelectedRegionId(r.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                    selectedRegionId === r.id
                      ? 'bg-white text-blue-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {r.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Cakupan Desa/Kecamatan */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-700" />
                <span>Titik Pengantaran &amp; Cakupan Area {activeRegion.name}</span>
              </h4>
              <ul className="space-y-2.5">
                {activeRegion.coverage.map((area) => (
                  <li key={area} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                Unit dikirim langsung dari armada distribusi menggunakan penutup pelindung cuaca agar motor tiba dalam kondisi 100% mulus dan siap pakai.
              </p>
            </div>

            {/* Right Column: Panduan Pengajuan Berkas Lokal */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-700" />
                <span>Kemudahan Berkas Wilayah Ini</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {activeRegion.keyHighlight}
              </p>
              <div className="text-xs space-y-1.5 text-slate-700">
                <div className="font-semibold text-slate-900">Alur Konsultasi WhatsApp:</div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-700 font-bold">1.</span>
                  <span>Kirim nama model motor pilihan &amp; domisili Anda di {activeRegion.name}.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-700 font-bold">2.</span>
                  <span>Mas Aji mengirimkan rincian promo DP dan opsi cicilan resmi terupdate.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-700 font-bold">3.</span>
                  <span>Survey &amp; verifikasi dibantu cepat, unit siap diantar.</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200">
                <a
                  href={`https://wa.me/6285820830530?text=${encodeURIComponent(activeRegion.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 hover:underline"
                >
                  <span>Chat Mas Aji Sekarang untuk Wilayah {activeRegion.name}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
