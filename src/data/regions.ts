import { RegionalArea, FaqItem } from '../types';

export const REGIONS: RegionalArea[] = [
  {
    id: 'toili',
    name: 'Toili & Moilong',
    district: 'Kabupaten Banggai',
    headline: 'Layanan Pengantaran Sampai Rumah di Dataran Toili & Sentra Pertanian',
    description: 'Wilayah lumbung pangan dan perkebunan kelapa sawit di Banggai membutuhkan kendaraan tangguh, hemat bahan bakar, dan nyaman untuk jalan antar desa. Kami siap mengantar unit langsung ke alamat Anda.',
    coverage: [
      'Kecamatan Toili (Sentral, Mansahang, Marga Kencana, Tirta Kencana)',
      'Kecamatan Moilong (Argakencana, Tou, Minahaki)',
      'Kecamatan Toili Barat (Sindang Sari, Mantawa, Bumi Harapan)'
    ],
    popularModels: ['Yamaha Gear 125', 'Yamaha Fazzio Hybrid', 'Yamaha WR 155 R', 'Yamaha NMAX 155'],
    keyHighlight: 'Bantuan berkas untuk pekebun sawit, petani, dan pelaku usaha lokal. DP aman dibayar saat motor tiba di rumah.',
    whatsappMessage: 'Halo Mas Aji, saya berada di wilayah Toili / Moilong. Saya ingin konsultasi harga OTR, promo diskon, dan pilihan kredit untuk motor Yamaha.'
  },
  {
    id: 'luwuk',
    name: 'Kota Luwuk & Sekitarnya',
    district: 'Pusat Ibukota Banggai',
    headline: 'Proses Cepat 1 Hari Kerja untuk Area Perkotaan & Pesisir Luwuk',
    description: 'Pusat perkantoran, perniagaan, pelabuhan, dan pendidikan di pesisir Teluk Lalong. Mobilitas aktif di rute berkontur perbukitan dan pesisir pantai sangat pas dengan lini Maxi dan Classy Yamaha.',
    coverage: [
      'Luwuk Kota (Teluk Lalong, Simpong, Keleke)',
      'Luwuk Selatan (Maahas, Jole, Hanga-Hanga)',
      'Luwuk Utara & Kintom',
      'Nambo & Batui'
    ],
    popularModels: ['Yamaha NMAX Turbo / Neo', 'Yamaha All New Aerox 155', 'Yamaha Grand Filano', 'Yamaha Fazzio'],
    keyHighlight: 'Survey cepat, prioritas stok unit, serta pengantaran STNK dan plat nomor langsung diantar ke alamat kantor atau rumah.',
    whatsappMessage: 'Halo Mas Aji, saya tinggal di area Luwuk. Saya mau menanyakan harga OTR terkini dan simulasi angsuran motor Yamaha.'
  },
  {
    id: 'morowali',
    name: 'Morowali & Bahodopi',
    district: 'Kabupaten Morowali',
    headline: 'Solusi Motor Andal untuk Karyawan Tambang & Wirausaha Morowali',
    description: 'Kawasan industri nikel terpadu dengan mobilitas shift kerja yang dinamis. Butuh motor bertenaga tinggi, suspensi kokoh, dan tahan medan kerja lapangan yang siap dikirim langsung ke mess atau kos.',
    coverage: [
      'Kawasan Industri Bahodopi (Fatufia, Labota, Kurisa, Keurea)',
      'Bungku Tengah & Bungku Barat',
      'Bungku Pesisir & Kolono',
      'Wita Ponda & Bumi Raya'
    ],
    popularModels: ['Yamaha All New Aerox 155', 'Yamaha WR 155 R', 'Yamaha NMAX Turbo', 'Yamaha Gear 125'],
    keyHighlight: 'Khusus karyawan industri & tambang: berkas dibantu dengan ID Card dan mutasi gaji. Koordinasi mudah via WhatsApp tanpa mengganggu jam kerja.',
    whatsappMessage: 'Halo Mas Aji, saya karyawan / warga di Morowali (Bahodopi/Bungku). Mau tanya persyaratan kredit dan estimasi pengiriman motor Yamaha.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'pengiriman',
    question: 'Apakah unit motor Yamaha bisa diantar langsung ke Toili atau Bahodopi Morowali?',
    answer: 'Tentu bisa. Kami melayani pengantaran unit langsung menggunakan armada ekspedisi aman hingga ke alamat rumah Anda di Toili, Moilong, maupun mess/kos karyawan di area Bahodopi dan Bungku Morowali. Unit dicek kondisinya bersama Anda sebelum serah terima.'
  },
  {
    id: 'faq-2',
    category: 'harga',
    question: 'Bagaimana cara mendapatkan daftar harga OTR terbaru?',
    answer: 'Harga On The Road (OTR) untuk wilayah Luwuk Banggai dan Morowali mengikuti ketentuan bea balik nama daerah serta program promo pabrikan yang berubah secara berkala. Anda cukup klik tombol "Tanya Harga" atau hubungi Mas Aji via WhatsApp di 0858-2083-0530 untuk menerima rincian price list resmi terupdate hari ini.'
  },
  {
    id: 'faq-3',
    category: 'kredit',
    question: 'Kapan pembayaran uang muka (DP) disetorkan?',
    answer: 'Pembayaran DP sangat aman dan transparan. Anda TIDAK perlu mentransfer DP sebelum ada kejelasan. DP baru dibayarkan setelah pengajuan kredit Anda disetujui (ACC) oleh leasing atau dibayar langsung saat unit motor tiba di tempat Anda (COD).'
  },
  {
    id: 'faq-4',
    category: 'berkas',
    question: 'Apa saja syarat kredit untuk karyawan tambang di Morowali yang ber-KTP luar daerah?',
    answer: 'Untuk rekan-rekan pekerja tambang di Morowali yang belum pindah KTP, pengajuan tetap bisa dibantu. Dokumen yang disiapkan meliputi: Foto KTP asli, Kartu Keluarga (KK), Foto ID Card perusahaan tambang/kontraktor, dan slip gaji atau mutasi rekening 3 bulan terakhir.'
  },
  {
    id: 'faq-5',
    category: 'berkas',
    question: 'Bagaimana jika pemohon berprofesi sebagai petani sawit atau pedagang di Toili?',
    answer: 'Bagi masyarakat Toili, Moilong, dan sekitarnya yang berprofesi sebagai petani, pekebun sawit, atau wirausaha, berkas kredit sangat fleksibel. Tim leasing rekanan akan membantu verifikasi melalui nota timbangan sawit, bukti panen, atau foto tempat usaha/kebun tanpa prosedur rumit.'
  },
  {
    id: 'faq-6',
    category: 'kredit',
    question: 'Lembaga pembiayaan (leasing) apa saja yang bekerja sama?',
    answer: 'Kami bermitra dengan leasing resmi dan terdaftar di OJK, di antaranya BAF (Bussan Auto Finance - spesialis Yamaha), Adira Finance, FIFGROUP, Mandiri Utama Finance (MUF), dan OTO Multiartha untuk memberikan pilihan bunga dan tenor terbaik.'
  }
];
