import React from 'react';
import { MessageSquareQuote, MapPin, Facebook, Phone, Clock, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="kontak" className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-bold text-lg">
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/Yamaha-Logo_70519f9d.png`}
                alt="Logo Yamaha Motor"
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <span className="tracking-tight text-lg">
                <span className="font-extrabold text-white">YAMAHA</span>{' '}
                <span className="font-black text-blue-400">SULTENG</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Layanan konsultasi penjualan, pemesanan unit baru, dan fasilitas kredit motor Yamaha untuk wilayah <strong className="text-white font-semibold">Toili</strong>, <strong className="text-white font-semibold">Luwuk</strong>, dan <strong className="text-white font-semibold">Morowali</strong>, Sulawesi Tengah.
            </p>

            {/* Office Address */}
            <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-0.5">Alamat Kantor:</strong>
                  <span>Jl. Trans Sulawesi (Sebelah Kantor Desa Singkoyo), Desa Singkoyo, Kec. Toili, Kab. Banggai, Sulawesi Tengah 94765</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300 pt-1">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <span className="text-slate-400">Konsultan Marketing: </span>
                  <strong className="text-white">Mas Aji</strong> ·{' '}
                  <a href="https://wa.me/6285820830530" className="text-blue-400 hover:underline">
                    0858-2083-0530
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Link: Facebook */}
            <div className="pt-2">
              <a
                href="https://www.facebook.com/share/1CBunSxP7G/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-[#1877F2]/15 hover:bg-[#1877F2]/25 text-[#1877F2] border border-[#1877F2]/30 rounded-lg text-xs font-bold transition-colors"
                aria-label="Kunjungi Halaman Facebook Resmi"
              >
                <div className="w-5 h-5 rounded-full bg-[#1877F2] text-white flex items-center justify-center shrink-0">
                  <Facebook className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="text-white">Ikuti Kami di Facebook</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#beranda" className="hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#promo" className="hover:text-white transition-colors">
                  Bagan Promo
                </a>
              </li>
              <li>
                <a href="#pilihan-motor" className="hover:text-white transition-colors">
                  Pilihan Motor
                </a>
              </li>
              <li>
                <a href="#simulasi-kredit" className="hover:text-white transition-colors">
                  Simulasi Kredit
                </a>
              </li>
              <li>
                <a href="/blog/" className="hover:text-white transition-colors">
                  Blog &amp; Panduan
                </a>
              </li>
              <li>
                <a href="#kontak-cta" className="hover:text-white transition-colors">
                  Area &amp; Kontak Pemesanan
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Area Jangkauan Lokal SEO */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Cakupan Wilayah Pengiriman
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Toili &amp; Moilong:</strong> Singkoyo, Toili Barat, Sentral, Mansahang, Marga Kencana, Argakencana.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Kota Luwuk:</strong> Luwuk Selatan, Luwuk Utara, Kintom, Nambo, Batui.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Morowali:</strong> Bahodopi (Fatufia, Labota, Keurea), Bungku Tengah, Bungku Barat.
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: WhatsApp Direct Card */}
          <div className="lg:col-span-3 bg-slate-900/90 rounded-xl p-5 border border-slate-800 space-y-4">
            <div>
              <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block">
                Konsultasi WhatsApp
              </span>
              <h5 className="text-sm font-bold text-white mt-0.5">
                Mas Aji (0858 2083 0530)
              </h5>
              <p className="text-xs text-slate-400 mt-1">
                Tanyakan simulasi uang muka, cicilan, dan ketersediaan warna motor hari ini.
              </p>
            </div>

            <a
              href="https://wa.me/6285820830530?text=Halo%20Mas%20Aji,%20saya%20ingin%20konsultasi%20pembelian%20motor%20Yamaha."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-colors"
            >
              <MessageSquareQuote className="w-4 h-4" />
              <span>Buka WhatsApp Sekarang</span>
            </a>
          </div>
        </div>

        {/* Disclaimer & Transparency Bar */}
        <div className="py-6 border-b border-slate-800/80 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400">Pemberitahuan &amp; Transparansi:</strong> Website ini merupakan sarana informasi, edukasi spesifikasi, dan konsultasi pemasaran independen yang dikelola oleh Mas Aji untuk calon pembeli motor Yamaha di wilayah Toili, Luwuk, dan Morowali (Sulawesi Tengah). Persetujuan kredit ditentukan oleh pihak pembiayaan sesuai proses dan persyaratannya. Konfirmasikan nama perusahaan pembiayaan, rincian biaya, ketersediaan unit, dokumen kendaraan, serta jangkauan dan biaya pengiriman sebelum melakukan pemesanan.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Static SEO Anchors */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Yamaha Motor Toili, Luwuk &amp; Morowali · Layanan Mas Aji.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Desa Singkoyo, Toili, Banggai, Sulteng</span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a href="https://wa.me/6285820830530" className="hover:text-slate-300">0858-2083-0530</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
