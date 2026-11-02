import React from 'react';
import { MessageSquareQuote, MapPin, ShieldCheck, Truck, Facebook } from 'lucide-react';

export const CtaSection: React.FC = () => {
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
