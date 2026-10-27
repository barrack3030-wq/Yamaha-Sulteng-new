import React, { useState } from 'react';
import { FileText, CheckCircle2, ShieldCheck, Truck, CreditCard, UserCheck, MessageSquareQuote } from 'lucide-react';

export const PurchaseGuide: React.FC = () => {
  const [activeProfileTab, setActiveProfileTab] = useState<'karyawan' | 'petani' | 'wiraswasta' | 'pns'>('karyawan');

  const profileRequirements = {
    karyawan: {
      title: 'Karyawan Tambang / Industri / Swasta',
      subtitle: 'Sangat cocok untuk pekerja di kawasan Morowali (Bahodopi) dan Luwuk',
      documents: [
        'KTP Asli Pemohon & Pasangan / Penjamin (bisa KTP luar daerah/daerah asal)',
        'Fotokopi atau Foto Kartu Keluarga (KK) jelas',
        'Foto ID Card / Kartu Tanda Pengenal Karyawan Perusahaan',
        'Slip Gaji bulan terakhir atau Mutasi Rekening 3 bulan',
        'Surat Keterangan Kerja atau Kontrak Kerja (bila diperlukan leasing)'
      ],
      tip: 'Bagi karyawan kontrak yang baru bekerja di Morowali, pengajuan tetap bisa diproses dengan melampirkan ID Card aktif dan mutasi buku tabungan.'
    },
    petani: {
      title: 'Petani & Pekebun Sawit / Padi',
      subtitle: 'Dirancang khusus untuk warga Toili, Moilong, dan Toili Barat',
      documents: [
        'KTP Pemohon & Pasangan / Penjamin',
        'Kartu Keluarga (KK) terbaru',
        'Nota / Slip Timbangan Hasil Panen Sawit atau Padi',
        'Surat Keterangan Usaha (SKU) dari Pemerintah Desa / Kelurahan',
        'Foto kebun / sawah / armada operasional tani'
      ],
      tip: 'Tim leasing sangat memahami karakter siklus panen warga Toili, sehingga verifikasi penghasilan disesuaikan dengan bukti hasil panen riil.'
    },
    wiraswasta: {
      title: 'Wiraswasta, Pedagang & UMKM',
      subtitle: 'Untuk pemilik kios, warung, bengkel, dan usaha mandiri',
      documents: [
        'KTP Pemohon & Pasangan / Penjamin',
        'Kartu Keluarga (KK)',
        'Surat Keterangan Usaha (SKU) dari Kantor Desa atau Kelurahan setempat',
        'Nota belanja modal usaha atau bukti transaksi harian',
        'Foto tempat usaha bersama pemilik'
      ],
      tip: 'Survey usaha dilakukan secara santai di lokasi usaha Anda tanpa mengganggu aktivitas penjualan harian.'
    },
    pns: {
      title: 'PNS, BUMN, Guru & Tenaga Medis',
      subtitle: 'Untuk aparatur sipil negara dan institusi pelayanan publik',
      documents: [
        'KTP Pemohon & Pasangan',
        'Kartu Keluarga (KK)',
        'Foto SK Pengangkatan Terakhir / Kartu Pegawai (Karpeg)',
        'Daftar Rincian Gaji dari Bendahara Dinas / Instansi'
      ],
      tip: 'Proses verifikasi paling cepat (ACC dalam 1 hari kerja) dengan plafon kredit dan bunga khusus dari leasing partner.'
    }
  };

  const steps = [
    {
      num: '01',
      title: 'Pilih Motor & Wilayah',
      desc: 'Tentukan model Yamaha incaran Anda dan sampaikan wilayah pengantaran (Toili, Luwuk, atau Morowali) kepada Mas Aji via WhatsApp.',
      icon: MessageSquareQuote
    },
    {
      num: '02',
      title: 'Kirim Foto Berkas',
      desc: 'Cukup kirimkan foto KTP, KK, dan bukti kerja/usaha melalui WhatsApp. Tim kami memproses pengajuan ke leasing partner.',
      icon: FileText
    },
    {
      num: '03',
      title: 'Survey Ringan & ACC',
      desc: 'Pihak leasing melakukan verifikasi singkat melalui telepon atau kunjungan ringan. Proses umumnya hanya 1-2 hari kerja.',
      icon: UserCheck
    },
    {
      num: '04',
      title: 'Unit Diantar & DP Dibayar',
      desc: 'Motor diantar dalam keadaan baru dan mulus langsung ke alamat Anda. Pembayaran DP dilakukan di tempat (COD) secara aman.',
      icon: Truck
    }
  ];

  return (
    <section id="panduan" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
            Transparan, Cepat, Tanpa Ribet
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Panduan Pembelian &amp; Syarat Berkas
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Pahami tahapan mudah memiliki motor Yamaha baru serta kelengkapan dokumen yang perlu Anda siapkan.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200/90 relative group hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-blue-700/80 font-mono">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-700 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-950 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Document Requirements by Profession */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="max-w-3xl mb-6">
            <h3 className="text-xl font-bold text-slate-950">
              Syarat Dokumen Kredit Sesuai Pekerjaan
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Pilih profesi Anda untuk melihat daftar berkas yang perlu disiapkan:
            </p>
          </div>

          {/* Profile Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
            {[
              { id: 'karyawan', label: 'Karyawan Tambang / Swasta' },
              { id: 'petani', label: 'Petani & Pekebun (Toili)' },
              { id: 'wiraswasta', label: 'Wiraswasta / Pedagang' },
              { id: 'pns', label: 'PNS & Tenaga Medis' }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveProfileTab(tab.id as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeProfileTab === tab.id
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="border-b border-slate-100 pb-3 mb-4">
              <h4 className="text-base font-bold text-slate-950">
                {profileRequirements[activeProfileTab].title}
              </h4>
              <p className="text-xs text-slate-500">
                {profileRequirements[activeProfileTab].subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3">
                  Kelengkapan Berkas Utama:
                </span>
                <ul className="space-y-2.5">
                  {profileRequirements[activeProfileTab].documents.map((doc) => (
                    <li key={doc} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-100 space-y-3">
                <div className="text-xs font-bold text-blue-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Tips Kelancaran ACC Leasing:</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {profileRequirements[activeProfileTab].tip}
                </p>
                <div className="pt-2 border-t border-blue-200/60">
                  <a
                    href="https://wa.me/6285820830530?text=Halo%20Mas%20Aji,%20saya%20mau%20konsultasi%20kelengkapan%20berkas%20kredit%20motor%20Yamaha."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:underline"
                  >
                    <span>Tanyakan detail berkas ke Mas Aji via WhatsApp &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
