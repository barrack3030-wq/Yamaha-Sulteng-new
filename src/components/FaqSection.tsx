import React, { useState } from 'react';
import { FAQS } from '../data/regions';
import { ChevronDown, MessageSquareQuote, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
            Informasi Tanya Jawab Penting
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Pertanyaan Calon Pembeli (FAQ)
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Jawaban langsung dan akurat seputar proses pembelian, pengiriman unit ke Toili, Luwuk, &amp; Morowali, serta ketentuan kredit.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-50"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 bg-white rounded-xl border border-slate-200 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div>
            <h3 className="text-base font-bold text-slate-950">
              Punya Pertanyaan Lain yang Belum Terjawab?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Konsultasikan langsung bersama Mas Aji secara gratis dan ramah.
            </p>
          </div>

          <a
            href="https://wa.me/6285820830530?text=Halo%20Mas%20Aji,%20saya%20punya%20pertanyaan%20seputar%20pembelian%20motor%20Yamaha."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg whitespace-nowrap shrink-0 transition-colors"
          >
            <MessageSquareQuote className="w-4 h-4" />
            <span>Chat Langsung Mas Aji</span>
          </a>
        </div>
      </div>
    </section>
  );
};
