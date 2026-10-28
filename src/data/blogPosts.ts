export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  targetRegion: string;
  content: string[];
  keyPoints: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'nmax-turbo-vs-aerox-luwuk',
    title: 'Yamaha NMAX atau Aerox untuk Mobilitas di Luwuk? Cara Membandingkannya',
    category: 'Ulasan & Rekomendasi',
    date: '24 Oktober 2026',
    readTime: '4 menit baca',
    targetRegion: 'Luwuk',
    excerpt: 'Bandingkan kebutuhan berkendara, kenyamanan, karakter model, anggaran, dan fitur sebelum memilih motor untuk aktivitas sehari-hari di Luwuk.'
    content: [
      'Topografi Kota Luwuk memiliki perpaduan unik antara jalan raya pesisir pantai Teluk Lalong yang rata dan jalur perbukitan curam seperti kawasan Keles, Hanga-Hanga, dan arah Luwuk Utara. Karakter jalan ini menuntut motor matic yang memiliki torsi kuat pada putaran bawah dan menengah.',
      'Yamaha NMAX Turbo hadir dengan inovasi YECVT (Yamaha Electric Continuous Variable Transmission) yang menawarkan dua mode berkendara: T-Mode (Town Commuting) untuk kelancaran berkendara santai dan hemat bahan bakar, serta S-Mode (Sport Touring) yang memberikan hentakan tenaga instan saat menanjak.',
      'Sementara itu, Yamaha All New Aerox 155 Connected menawarkan Power-to-Weight Ratio terbaik di kelasnya. Desain bodi aerodinamis dan posisi setang sporty menjadikannya sangat lincah saat bermanuver di jalan raya perkotaan Luwuk dan kawasan padat Simpong.',
      'Bagi Anda yang mengutamakan kenyamanan touring santai dan bagasi ekstra lega untuk belanja atau perlengkapan kantor, NMAX Turbo adalah pilihan utama. Namun bagi yang menyukai akselerasi gesit dan gaya sporty agresif, Aerox 155 Connected adalah favorit tak tertandingi.'
    ],
    keyPoints: [
      'NMAX Turbo unggul di kenyamanan posisi riding santai dan fitur navigasi TFT Garmin.',
      'Aerox 155 unggul dalam akselerasi instan dan kelincahan manuver harian.',
      'Keduanya sama-sama dibekali mesin 155cc VVA berpendingin cairan yang teruji tangguh di cuaca pesisir Luwuk.'
    ]
  },
  {
    id: 'blog-2',
    slug: 'motor-karyawan-tambang-morowali-bahodopi',
    title: 'Memilih Motor untuk Kebutuhan Kerja dan Harian di Morowali dan Bahodopi',
    category: 'Panduan Lapangan',
    date: '18 Oktober 2026',
    readTime: '5 menit baca',
    targetRegion: 'Morowali',
    excerpt: 'Pertimbangkan jarak perjalanan, kondisi rute, biaya perawatan, kenyamanan, dan anggaran sebelum memilih motor untuk kerja atau kebutuhan harian.'
    content: [
      'Kawasan industri nikel di Bahodopi dan Bungku, Morowali, memiliki ritme kerja yang sangat intens dengan mobilitas jam masuk dan pulang shift kerja yang padat. Kondisi jalan yang sering dilalui kendaraan proyek serta cuaca tropis berdebu membutuhkan motor yang tangguh.',
      'Yamaha WR 155 R menjadi primadona pekerja proyek lapangan dan supervisor area tambang. Suspensi teleskopik panjang 41mm serta ground clearance tinggi membuatnya mampu melibas lubang, genangan lumpur, dan jalan berbatu tanpa khawatir benturan kolong.',
      'Untuk kebutuhan perjalanan harian dari kos atau kontrakan di Bahodopi menuju pabrik, Yamaha Gear 125 dan Aerox 155 Connected menjadi alternatif favorit. Gear 125 memiliki bodi kokoh dengan pelindung bodi samping dan dek pijakan kaki yang luas, sedangkan Aerox memberikan kecepatan tiba di tempat kerja tepat waktu.',
      'Karyawan dengan KTP luar daerah tidak perlu cemas. Kami bekerja sama dengan leasing rekanan untuk memproses verifikasi berkas cukup menggunakan KTP asli, ID Card karyawan, dan slip gaji resmi.'
    ],
    keyPoints: [
      'WR 155 R: Pilihan terbaik untuk jalan bebatuan dan mobilitas proyek lapangan tambang.',
      'Gear 125: Pilihan ekonomis, bandel, dan sangat irit untuk antar jemput rekan kerja atau belanja harian.',
      'Pengantaran unit langsung ke mess atau kosan karyawan di Bahodopi, Labota, hingga Fatufia.'
    ]
  },
  {
    id: 'blog-3',
    slug: 'tips-kredit-motor-yamaha-toili-moilong',
    title: 'Sebelum Mengajukan Kredit Motor Yamaha di Toili dan Moilong, Periksa 7 Hal Ini',
    category: 'Tips Pembiayaan',
    date: '10 Oktober 2026',
    readTime: '3 menit baca',
    targetRegion: 'Toili',
    excerpt: 'Siapkan pertanyaan tentang DP, tenor, angsuran, total pembayaran, biaya tambahan, dan dokumen yang diminta sebelum mengajukan kredit.'
    content: [
      'Dataran Toili dan Kecamatan Moilong merupakan lumbung padi dan perkebunan kelapa sawit terbesar di Kabupaten Banggai. Banyak warga yang berprofesi sebagai petani sawit mandiri atau pedagang hasil bumi yang tidak memiliki slip gaji formal dari perusahaan.',
      'Kabar baiknya, leasing rekanan resmi Yamaha (seperti BAF dan Adira) di wilayah Banggai memiliki skema kredit khusus sektor pertanian dan agribisnis lokal.',
      'Cukup siapkan nota timbangan Tandan Buah Segar (TBS) sawit dari RAM / timbangan setempat atau bukti hasil panen, disertai KTP dan Kartu Keluarga (KK). Tim leasing akan melakukan verifikasi ringan di lokasi kebun atau rumah Anda.',
      'Lebih aman lagi, uang muka (DP) tidak perlu ditransfer sebelum unit tiba. Motor diantar langsung menggunakan mobil pick-up khusus ke alamat rumah Anda di Toili, baru kemudian DP diserahkan.'
    ],
    keyPoints: [
      'Nota timbangan sawit dan surat keterangan usaha desa diakui sebagai bukti penghasilan.',
      'Sistem pembayaran DP Cash On Delivery (COD) saat motor sampai di halaman rumah Anda.',
      'Proses survey mengutamakan fleksibilitas waktu agar tidak mengganggu aktivitas bertani.'
    ]
  }
];
