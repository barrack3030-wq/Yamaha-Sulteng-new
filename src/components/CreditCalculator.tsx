import React, { useState } from 'react';
import { MOTORCYCLES } from '../data/motorcycles';
import { Calculator, MessageSquareQuote, CheckCircle2, ShieldAlert, Sparkles, Building2 } from 'lucide-react';

export const CreditCalculator: React.FC = () => {
  const [selectedMotorId, setSelectedMotorId] = useState<string>(MOTORCYCLES[0].id);
  const [selectedRegion, setSelectedRegion] = useState<string>('Luwuk');
  const [dpPercentage, setDpPercentage] = useState<number>(20);
  const [tenorMonths, setTenorMonths] = useState<number>(35);

  const selectedMotor = MOTORCYCLES.find((m) => m.id === selectedMotorId) || MOTORCYCLES[0];

  // Base illustrative calculation for planning, clearly framed as an estimate
  // Reference estimated base brackets:
  // Matic Praktis (Gear): ~20-22jt
  // Classy (Fazzio): ~24-26jt
  // Maxi (Aerox/Nmax): ~31-40jt
  // Sport (WR155): ~42jt
  const getEstimatedBasePrice = (series: string, id: string) => {
    if (id === 'gear-125') return 21500000;
    if (id === 'fazzio-hybrid') return 25500000;
    if (id === 'grand-filano') return 30500000;
    if (id === 'aerox-155') return 31500000;
    if (id === 'nmax-turbo') return 36500000;
    if (id === 'wr-155-r') return 42500000;
    return 28000000;
  };

  const estimatedPrice = getEstimatedBasePrice(selectedMotor.series, selectedMotor.id);
  const estimatedDpNominal = Math.round((estimatedPrice * dpPercentage) / 100);
  const principalDebt = estimatedPrice - estimatedDpNominal;

  // Indonesian motorcycle leasing typical annual flat factor ~18-22% per year
  const years = tenorMonths / 12;
  const totalInterest = principalDebt * (0.19 * years);
  const totalToPay = principalDebt + totalInterest;
  const estimatedMonthlyInstallment = Math.round(totalToPay / tenorMonths / 1000) * 1000;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const generateWaMessage = () => {
    const text = `Halo Mas Aji, saya ingin konsultasi simulasi kredit motor Yamaha:
- Model: ${selectedMotor.name}
- Wilayah Pengiriman: ${selectedRegion}
- Rencana DP: ${dpPercentage}% (${formatRupiah(estimatedDpNominal)})
- Rencana Tenor: ${tenorMonths} Bulan (Estimasi Angsuran ~${formatRupiah(estimatedMonthlyInstallment)}/bln)

Mohon dibantu rincian tabel angsuran resmi OTR dan promo potongan DP yang berlaku hari ini. Terima kasih.`;
    return `https://wa.me/6285820830530?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="simulasi-kredit" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
            Perencanaan Pembiayaan &amp; Cicilan
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
            Simulasi Kredit &amp; Konsultasi Angsuran
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Ketahui perkiraan uang muka dan angsuran bulanan yang sesuai dengan kemampuan anggaran Anda di Toili, Luwuk, maupun Morowali.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form: Calculator Inputs */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
            {/* Step 1: Motor Selection */}
            <div>
              <label htmlFor="motor-select" className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                1. Pilih Model Motor Yamaha
              </label>
              <select
                id="motor-select"
                value={selectedMotorId}
                onChange={(e) => setSelectedMotorId(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              >
                {MOTORCYCLES.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.series})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Regional Market Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                2. Pilih Wilayah Domisili / Pengantaran
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {['Toili', 'Luwuk', 'Morowali'].map((reg) => (
                  <button
                    key={reg}
                    type="button"
                    onClick={() => setSelectedRegion(reg)}
                    className={`py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-lg border text-center transition-all ${
                      selectedRegion === reg
                        ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {reg}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: DP Selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  3. Rencana Uang Muka (DP)
                </label>
                <span className="text-xs font-bold text-blue-700 font-mono">
                  {dpPercentage}% ({formatRupiah(estimatedDpNominal)})
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {[10, 15, 20, 30].map((dp) => (
                  <button
                    key={dp}
                    type="button"
                    onClick={() => setDpPercentage(dp)}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                      dpPercentage === dp
                        ? 'bg-blue-50 text-blue-700 border-blue-600'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {dp}%
                  </button>
                ))}
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={dpPercentage}
                onChange={(e) => setDpPercentage(Number(e.target.value))}
                className="w-full accent-blue-700 cursor-pointer"
              />
            </div>

            {/* Step 4: Tenor Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                4. Pilihan Jangka Waktu (Tenor)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { months: 11, label: '11 Bulan' },
                  { months: 23, label: '23 Bulan' },
                  { months: 29, label: '29 Bulan' },
                  { months: 35, label: '35 Bulan' }
                ].map((t) => (
                  <button
                    key={t.months}
                    type="button"
                    onClick={() => setTenorMonths(t.months)}
                    className={`py-2.5 px-2 text-xs sm:text-sm font-semibold rounded-lg border text-center transition-all ${
                      tenorMonths === t.months
                        ? 'bg-blue-700 text-white border-blue-700 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Leasing Partners Mention */}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
              <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Mitra Pembiayaan Resmi: BAF · Adira Finance · FIFGROUP · OTO Multiartha</span>
            </div>
          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider block">
                Hasil Rangkuman Simulasi
              </span>
              <h3 className="text-xl font-bold text-slate-950 mt-1">
                {selectedMotor.name}
              </h3>
              <p className="text-xs text-slate-500">
                Tujuan Pengantaran Unit: <strong>Wilayah {selectedRegion}</strong>
              </p>
            </div>

            {/* Big Figure Display */}
            <div className="bg-blue-50/70 rounded-xl p-5 border border-blue-100 text-center">
              <span className="text-xs text-slate-600 block mb-1">
                Perkiraan Angsuran Bulanan
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-800 font-mono tracking-tight">
                {formatRupiah(estimatedMonthlyInstallment)}
                <span className="text-xs font-normal text-slate-500 font-sans ml-1">/bulan</span>
              </div>
              <div className="text-xs text-slate-500 mt-2 font-medium">
                Tenor: {tenorMonths} Bulan · Estimasi DP: {formatRupiah(estimatedDpNominal)} ({dpPercentage}%)
              </div>
            </div>

            {/* Clarity notes */}
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Tanpa biaya terselubung. Pengantaran unit dapat diatur sesuai kesepakatan.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span>Tersedia promo cashback uang muka atau potongan tenor tertentu setiap bulan.</span>
              </div>
            </div>

            {/* Disclaimer & Validation Note */}
            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/80 text-[11px] text-slate-500 leading-normal">
              <div className="font-semibold text-slate-800 mb-0.5 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Keterangan Transparansi:</span>
              </div>
              Angka di atas merupakan estimasi perhitungan kalkulator. Besaran pasti uang muka dan cicilan resmi mengacu pada approval leasing, program subsidi bulanan, serta harga OTR terkini di wilayah Banggai / Morowali.
            </div>

            {/* Send Simulation to WhatsApp Button */}
            <div>
              <a
                href={generateWaMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-lg transition-colors text-center shadow-xs"
              >
                <MessageSquareQuote className="w-4 h-4 shrink-0" />
                <span>Kirim Hasil Simulasi ke Mas Aji</span>
              </a>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Mas Aji akan mengirimkan tabel angsuran resmi &amp; syarat berkasnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
