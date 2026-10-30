export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  targetRegion: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  primaryKeyword: string;
  featuredImage: string;
  imageAlt: string;
  imageCredit: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'nmax-turbo-vs-aerox-luwuk',
    title: 'Yamaha NMAX atau Aerox untuk Mobilitas di Luwuk? Cara Membandingkannya',
    category: 'Ulasan & Rekomendasi',
    date: '28 Oktober 2026',
    readTime: '4 menit baca',
    targetRegion: 'Luwuk',
    author: 'Mas Aji',
    publishedAt: '2026-10-28',
    updatedAt: '2026-10-29',
    primaryKeyword: 'Yamaha NMAX atau Aerox Luwuk',
    featuredImage: 'https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023041415280991628A58578.png',
    imageAlt: 'Yamaha Aerox 155 warna biru, gambar produk resmi Yamaha Indonesia',
    imageCredit: 'Yamaha Motor Indonesia',
    excerpt: 'Bandingkan kebutuhan berkendara, kenyamanan, karakter model, anggaran, dan fitur sebelum memilih motor untuk aktivitas sehari-hari di Luwuk.'
  },
  {
    id: 'blog-2',
    slug: 'motor-karyawan-tambang-morowali-bahodopi',
    title: 'Memilih Motor untuk Kebutuhan Kerja dan Harian di Morowali dan Bahodopi',
    category: 'Panduan Lapangan',
    date: '28 Oktober 2026',
    readTime: '5 menit baca',
    targetRegion: 'Morowali',
    author: 'Mas Aji',
    publishedAt: '2026-10-28',
    updatedAt: '2026-10-29',
    primaryKeyword: 'motor Yamaha untuk kerja Morowali',
    featuredImage: 'https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026011411065945811R98632.png',
    imageAlt: 'Yamaha NMAX warna abu-abu, gambar produk resmi Yamaha Indonesia',
    imageCredit: 'Yamaha Motor Indonesia',
    excerpt: 'Pertimbangkan jarak perjalanan, kondisi rute, biaya perawatan, kenyamanan, dan anggaran sebelum memilih motor untuk kerja atau kebutuhan harian.'
  },
  {
    id: 'blog-3',
    slug: 'tips-kredit-motor-yamaha-toili-moilong',
    title: 'Sebelum Mengajukan Kredit Motor Yamaha di Toili dan Moilong, Periksa 7 Hal Ini',
    category: 'Tips Pembiayaan',
    date: '28 Oktober 2026',
    readTime: '3 menit baca',
    targetRegion: 'Toili',
    author: 'Mas Aji',
    publishedAt: '2026-10-28',
    updatedAt: '2026-10-29',
    primaryKeyword: 'kredit motor Yamaha Toili',
    featuredImage: 'https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2026012315110540976J2461.png',
    imageAlt: 'Yamaha Fazzio warna biru muda, gambar produk resmi Yamaha Indonesia',
    imageCredit: 'Yamaha Motor Indonesia',
    excerpt: 'Siapkan pertanyaan tentang DP, tenor, angsuran, total pembayaran, biaya tambahan, dan dokumen yang diminta sebelum mengajukan kredit.'
  },
  {
    id: 'blog-4',
    slug: 'harga-motor-yamaha-toili',
    title: 'Cara Mengecek Harga Motor Yamaha di Toili Sebelum Membeli',
    category: 'Panduan Pembelian',
    date: '29 Oktober 2026',
    readTime: '5 menit baca',
    targetRegion: 'Toili',
    author: 'Mas Aji',
    publishedAt: '2026-10-29',
    updatedAt: '2026-10-29',
    primaryKeyword: 'harga motor Yamaha Toili',
    featuredImage: 'https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2023041415280299726S94464.png',
    imageAlt: 'Yamaha Aerox 155 warna hitam, gambar produk resmi Yamaha Indonesia',
    imageCredit: 'Yamaha Motor Indonesia',
    excerpt: 'Panduan memeriksa harga tunai, DP, cicilan, total pembayaran, promo, dan ketersediaan unit motor Yamaha untuk pembeli di Toili.'
  },
  {
    id: 'blog-5',
    slug: 'yamaha-gear-ultima-toili',
    title: 'Yamaha GEAR ULTIMA di Toili: Fitur yang Perlu Dicek Sebelum Membeli',
    category: 'Panduan Model',
    date: '29 Oktober 2026',
    readTime: '6 menit baca',
    targetRegion: 'Toili',
    author: 'Mas Aji',
    publishedAt: '2026-10-29',
    updatedAt: '2026-10-29',
    primaryKeyword: 'Yamaha GEAR ULTIMA Toili',
    featuredImage: 'https://www.yamaha-motor.co.id/uploads/content/20260402151101_69ce2495582a9.jpg',
    imageAlt: 'Yamaha GEAR ULTIMA Hybrid dan pilihan model, gambar resmi Yamaha Indonesia',
    imageCredit: 'Yamaha Motor Indonesia',
    excerpt: 'Kenali varian, fitur, kenyamanan, dan biaya kepemilikan Yamaha GEAR ULTIMA sebelum meminta penawaran untuk wilayah Toili.'
  }
];
