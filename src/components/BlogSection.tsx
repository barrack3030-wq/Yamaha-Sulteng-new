import React from 'react';
import { ArrowUpRight, BookOpen, MapPin } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[.18em] text-red-700">
            Yamaha Sulteng Journal
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Panduan memilih motor. Informasi yang membantu keputusan.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Baca tips kredit, perbandingan model, dan panduan berkendara yang relevan untuk Toili, Luwuk, Morowali, dan Bahodopi.
          </p>
          <a
            href="/blog/"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 border border-slate-950 bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700 hover:border-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
          >
            Jelajahi Semua Artikel <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-xs text-slate-500">Artikel informatif · Bahasa Indonesia · Fokus wilayah Sulawesi Tengah</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <a href="/blog/" className="group flex min-h-48 flex-col justify-between border border-slate-200 bg-white p-6 transition hover:border-red-700 hover:shadow-lg sm:min-h-56">
            <BookOpen className="h-7 w-7 text-red-700" strokeWidth={1.7} />
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-slate-950">Tips & perbandingan motor</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Kenali perbedaan model dan sesuaikan pilihan dengan kebutuhan harian.</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-700">Baca panduan <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
            </div>
          </a>
          <a href="/blog/" className="group flex min-h-48 flex-col justify-between border border-slate-200 bg-white p-6 transition hover:border-red-700 hover:shadow-lg sm:mt-10 sm:min-h-56">
            <MapPin className="h-7 w-7 text-blue-800" strokeWidth={1.7} />
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-slate-950">Informasi lokal</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Pertimbangkan rute, anggaran, dan hal penting sebelum mengajukan kredit.</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-800">Lihat artikel lokal <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
