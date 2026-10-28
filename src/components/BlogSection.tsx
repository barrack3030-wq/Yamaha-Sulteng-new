import React from 'react';
import { BLOG_POSTS } from '../data/blogPosts';
import { ChevronRight } from 'lucide-react';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
            Pusat Edukasi &amp; Tips Otomotif Lokal
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Blog &amp; Panduan Motor Yamaha
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Informasi pilihan motor yang cocok dengan medan jalan di Luwuk, Morowali, dan Toili, serta tips pengajuan kredit yang aman dan praktis.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-6 group"
            >
              <div>
                {/* Zero-Pill Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-blue-700">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.targetRegion}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-950 leading-snug group-hover:text-blue-700 transition-colors mb-3">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {post.date}
                </span>

                <a
                  href={`/Yamaha-Sulteng-new/blog/${post.slug}/`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 group-hover:text-blue-800 transition-colors"
                >
                  <span>Baca Artikel Lengkap</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Featured model pages: crawlable internal links */}
        <div className="mt-12">
          <div className="max-w-3xl mb-6">
            <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2">
              Panduan Pilih Model
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
              Cari Informasi Model Yamaha
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Kenali fitur dan varian, lalu tanyakan harga lokal serta simulasi kredit terbaru sesuai wilayah Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <article className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors">
              <h4 className="text-lg font-bold text-slate-950">Yamaha GEAR ULTIMA</h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Pelajari fitur praktis, perbedaan varian, dan hal yang perlu ditanyakan sebelum membeli Gear Ultima.
              </p>
              <a href="/Yamaha-Sulteng-new/motor-yamaha-gear-ultima-sulteng/"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-700 hover:text-blue-800">
                Panduan Gear Ultima <ChevronRight className="w-4 h-4" />
              </a>
            </article>
            <article className="border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-colors">
              <h4 className="text-lg font-bold text-slate-950">Yamaha Fazzio</h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Kenali pilihan varian dan fitur Fazzio, serta cara meminta penawaran harga dan angsuran yang sesuai.
              </p>
              <a href="/Yamaha-Sulteng-new/motor-yamaha-fazzio-sulteng/"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-700 hover:text-blue-800">
                Panduan Fazzio <ChevronRight className="w-4 h-4" />
              </a>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
};
