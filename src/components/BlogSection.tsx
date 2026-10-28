import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogPosts';
import { BookOpen, ChevronRight, X, MessageSquareQuote, CheckCircle2, User, Calendar, Clock } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const getWaLinkForArticle = (title: string, region: string) => {
    const text = `Halo Mas Aji, saya membaca artikel di website Anda: "${title}". Saya ingin konsultasi lebih lanjut terkait rekomendasi motor Yamaha untuk wilayah ${region}.`;
    return `https://wa.me/6285820830530?text=${encodeURIComponent(text)}`;
  };

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

        {/* Article Reading Modal */}
        {activeArticle && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
              {/* Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-blue-700">{activeArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>Fokus Wilayah {activeArticle.targetRegion}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="p-2 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="Tutup artikel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 leading-tight">
                    {activeArticle.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-2.5">
                    <span>Oleh Mas Aji</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeArticle.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeArticle.readTime}</span>
                  </div>
                </div>

                {/* Article Prose */}
                <div className="space-y-4 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-5">
                  {activeArticle.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Key Takeaways */}
                <div className="bg-blue-50/70 p-5 rounded-xl border border-blue-100 space-y-2.5">
                  <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                    Poin Penting untuk Pembeli di {activeArticle.targetRegion}:
                  </h4>
                  <ul className="space-y-1.5">
                    {activeArticle.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Ingin info lebih lengkap seputar topik ini?
                </span>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setActiveArticle(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100"
                  >
                    Tutup
                  </button>
                  <a
                    href={getWaLinkForArticle(activeArticle.title, activeArticle.targetRegion)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-center"
                  >
                    <MessageSquareQuote className="w-3.5 h-3.5" />
                    <span>Tanya Mas Aji via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
