import React from 'react';
import { ArrowUpRight, BookOpen, Clock3 } from 'lucide-react';

const articles = [
  {
    category: 'Panduan harga · Toili',
    title: 'Cara Mengecek Harga Motor Yamaha di Toili Sebelum Membeli',
    excerpt: 'Pahami harga tunai, DP, cicilan, dan total pembayaran sebelum meminta penawaran.',
    date: '29 Okt 2026',
    href: '/blog/harga-motor-yamaha-toili/',
  },
  {
    category: 'Pilihan model · Toili',
    title: 'Yamaha GEAR ULTIMA: Fitur yang Perlu Dicek Sebelum Membeli',
    excerpt: 'Kenali varian, fitur, kenyamanan, dan biaya kepemilikan untuk kebutuhan harian.',
    date: '29 Okt 2026',
    href: '/blog/yamaha-gear-ultima-toili/',
  },
  {
    category: 'Panduan kredit · Toili',
    title: 'Sebelum Mengajukan Kredit Motor, Periksa 7 Hal Ini',
    excerpt: 'Checklist anggaran, uang muka, tenor, dokumen, dan total pembayaran.',
    date: '28 Okt 2026',
    href: '/blog/tips-kredit-motor-yamaha-toili-moilong/',
  },
];

export const BlogTeaser: React.FC = () => (
  <section className="ys-blog-teaser" aria-labelledby="ys-blog-title">
    <div className="ys-blog-inner">
      <div className="ys-blog-heading">
        <div>
          <p className="ys-eyebrow"><BookOpen size={15} /> Wawasan & panduan pembeli</p>
          <h2 id="ys-blog-title">Baca sebelum memilih motor</h2>
          <p>Panduan ringkas agar Anda bisa membandingkan pilihan dengan lebih yakin.</p>
        </div>
        <a className="ys-all-articles" href="/blog/">Lihat semua artikel <ArrowUpRight size={17} /></a>
      </div>
      <div className="ys-blog-grid">
        {articles.map((article) => (
          <article className="ys-blog-card" key={article.href}>
            <span className="ys-blog-category">{article.category}</span>
            <h3><a href={article.href}>{article.title}</a></h3>
            <p>{article.excerpt}</p>
            <div className="ys-blog-meta"><span>{article.date}</span><span><Clock3 size={13} /> 5 menit baca</span></div>
            <a className="ys-read-link" href={article.href}>Baca artikel <ArrowUpRight size={16} /></a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
