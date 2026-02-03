import React from 'react';
import NextButton from "../components/NextButton";

export default function TTDInfoPage() {
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      
      {/* Hero Section */}
      <div className="glass-card p-8 md:p-12 rounded-[2.5rem] mb-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        {/* Background Blob Animation */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        
        <div className="relative z-10 md:w-2/3">
          <span className="text-purple-600 font-bold tracking-wider text-sm uppercase">Suplemen Remaja</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4 mt-2">
            Tablet Tambah Darah
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Suplemen zat besi dan asam folat yang didesain khusus untuk mengganti darah yang hilang dan mencegah anemia pada remaja putri.
          </p>
        </div>
        
        {/* Visual Element */}
        <div className="relative z-10 md:w-1/3 flex justify-center">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-32 h-32 rounded-full flex items-center justify-center text-5xl shadow-2xl shadow-purple-300">
            💊
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <h3 className="text-2xl font-bold text-center text-slate-700 mb-8">Kenapa Harus Minum?</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <BenefitCard icon="🛡️" title="Cegah Anemia" desc="Jaga Hb tetap normal." />
        <BenefitCard icon="🧠" title="Fokus Belajar" desc="Konsentrasi meningkat." />
        <BenefitCard icon="⚡" title="Bebas Lemas" desc="Tubuh lebih bugar." />
        <BenefitCard icon="✨" title="Kulit Sehat" desc="Wajah tidak pucat." />
      </div>

      <NextButton href="/usage" label="Lanjut: Cara Minum Benar" />
    </div>
  );
}

function BenefitCard({ title, desc, icon }: any) {
  return (
    <div className="glass-card p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="font-bold text-slate-800 mb-1">{title}</h4>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  );
}