import React from 'react';
import { MessageSquareQuote, MapPin, ShieldCheck, Truck, Phone, Facebook } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const regions = [
    {
      name: 'Toili & Moilong',
      areaPath: 'area/toili/',
      desc: 'Pengantaran langsung ke alamat rumah & berkas dibantu sampai disetujui.',
      message: 'Halo Mas Aji, saya di wilayah Toili / Moilong. Saya ingin konsultasi harga OTR dan pemesanan motor Yamaha.'
    },
    {
      name: 'Kota Luwuk',
      areaPath: 'area/luwuk/',
      desc: 'Proses survey kilat, prioritas unit, serta plat & STNK diantar langsung.',
      message: 'Halo Mas Aji, saya di Luwuk. Saya mau menanyakan harga OTR terbaru dan promo angsuran motor Yamaha.'
    },
    {
      name: 'Morowali & Bahodopi',
      areaPath: 'area/morowali/',
      desc: 'Siap kirim unit ke alamat Anda & kemudahan proses pengajuan kredit.',
      message: 'Halo Mas Aji, saya di Morowali (Bahodopi/Bungku). Mau tanya syarat kredit dan jadwal kirim unit motor Yamaha.'
    }
  ];

  return (
    <section id="kontak-cta" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">
            Konsultasi Ramah &amp; Respon Cepat
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Pesan Motor Yamaha Impian Anda Sekarang
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Pilih wilayah domisili Anda di bawah ini untuk terhubung langsung dengan <strong className="text-white">Mas Aji</strong> via WhatsApp. Dapatkan informasi harga OTR terkini, promo uang muka, dan kemudahan berkas.
          </p>
        </div>

        {/* 3 Region Selection Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
          {regions.map((reg) => (
            <a
              key={reg.name}
              href={`https://wa.me/6285820830530?text=${encodeURIComponent(reg.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500 rounded-xl p-5 sm:p-6 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{reg.name}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-1.5">
                  Chat Wilayah {reg.name.split(' ')[0]}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {reg.desc}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2">
                <a
                  href={`${import.meta.env.BASE_URL}${reg.areaPath}`}
                  className="inline-flex items-center justify-center w-full py-2 px-3 border border-slate-600 text-slate-100 hover:bg-slate-700 rounded-lg text-xs font-bold transition-colors"
                >
                  Info layanan wilayah
                </a>
                <span className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-blue-600 group-hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors">
                  <MessageSquareQuote className="w-4 h-4 shrink-0" />
                  Buka WhatsApp {reg.name.split(' ')[0]}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Direct Contact, Office Address & Facebook Card */}
        <div className="max-w-3xl mx-auto bg-slate-950/80 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pb-5 border-b border-slate-800 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-xs text-slate-400">Konsultan Marketing:</span>
              <div className="text-xl sm:text-2xl font-bold text-white">
                Mas Aji · <a href="tel:085820830530" className="text-blue-400 hover:underline">0858-2083-0530</a>
              </div>
            </div>

            {/* Facebook Button with Logo */}
            <a
              href="https://www.facebook.com/share/1CBunSxP7G/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white rounded-lg text-xs font-bold shadow-sm transition-colors whitespace-nowrap shrink-0"
            >
              <Facebook className="w-4 h-4 fill-current shrink-0" />
              <span>Facebook Resmi Mas Aji</span>
            </a>
          </div>

          {/* Full Office Address */}
          <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800/80 flex items-start gap-3 text-left">
            <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white block text-sm font-semibold mb-0.5">Alamat Kantor Pemasaran:</strong>
              <span>Jl. Trans Sulawesi (Sebelah Kantor Desa Singkoyo), Desa Singkoyo, Kecamatan Toili, Kabupaten Banggai, Sulawesi Tengah, 94765</span>
            </div>
          </div>

          {/* Trust strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300 text-center">
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Unit Diantar Sampai Rumah/Mess</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>DP Dibayar Aman saat Unit Tiba</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MessageSquareQuote className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Konsultasi Gratis Setiap Hari</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
