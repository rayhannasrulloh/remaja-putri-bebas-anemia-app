import React from 'react';
import Image from 'next/image';

export default function TTDInfoPage() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* 1. Hero Section: Definition */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10 flex flex-col md:flex-row items-center">
        <div className="p-8 md:w-2/3">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            💊 Apa itu TTD?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>Tablet Tambah Darah (TTD)</strong> adalah suplemen zat besi dan asam folat yang diberikan khusus untuk mencegah dan mengatasi anemia.
          </p>
        </div>
        {/* Visual placeholder - in a real app, you would put an image here */}
        <div className="bg-purple-200 h-48 w-full md:w-1/3 flex items-center justify-center">
          <span className="text-purple-500 text-6xl">🩸</span>
        </div>
      </div>

      {/* 2. Benefits Section (Grid Layout) */}
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Kenapa Kamu Harus Minum TTD?
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <BenefitCard 
          title="Mencegah Anemia" 
          desc="Menjaga kadar Hemoglobin (Hb) tetap normal agar tubuh bugar."
          icon="🛡️"
        />
        <BenefitCard 
          title="Fokus Belajar" 
          desc="Meningkatkan konsentrasi di sekolah sehingga prestasi meningkat."
          icon="🧠"
        />
        <BenefitCard 
          title="Kesehatan Remaja" 
          desc="Mengganti darah yang hilang saat menstruasi setiap bulan."
          icon="💪"
        />
        <BenefitCard 
          title="Investasi Masa Depan" 
          desc="Mempersiapkan tubuh untuk kehamilan yang sehat saat dewasa nanti."
          icon="👶"
        />
      </div>

      {/* 3. Dosage Info (Highlight Box) */}
      <div className="bg-purple-600 text-white rounded-xl p-8 text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-bold mb-4">Dosis Remaja Putri</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold text-lg">
            💊 1 Tablet per Minggu
          </div>
          <div className="text-purple-200 text-sm md:text-base">
            Diminum rutin sepanjang tahun (52 tablet setahun)
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Component for Cards (Clean Code Practice)
function BenefitCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-xl font-bold text-purple-800 mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}