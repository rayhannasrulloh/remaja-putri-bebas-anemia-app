import React from 'react';

export default function UsagePage() {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      {/* Page Header */}
      <header className="text-center mb-10">
        <h2 className="text-3xl font-bold text-purple-700 mb-2">
          💊 Cara Minum TTD yang Benar
        </h2>
        <p className="text-gray-600">
          Ikuti panduan ini agar penyerapan zat besi maksimal.
        </p>
      </header>

      {/* Main Content: Do's and Don'ts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        
        {/* Do's Section (Green Theme) */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
          <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
            <span className="text-2xl mr-2">✅</span> Anjuran (Do's)
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 p-1 rounded mr-3 text-sm font-bold">1</span>
              <span>Minum TTD <strong>1 kali seminggu</strong>.</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 p-1 rounded mr-3 text-sm font-bold">2</span>
              <span>Diminum <strong>setelah makan</strong> (perut tidak boleh kosong).</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-800 p-1 rounded mr-3 text-sm font-bold">3</span>
              <span>Minum dengan <strong>air putih</strong> atau <strong>jus jeruk</strong> (Vitamin C membantu penyerapan).</span>
            </li>
          </ul>
        </div>

        {/* Don'ts Section (Red Theme) */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500">
          <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
            <span className="text-2xl mr-2">❌</span> Larangan (Don'ts)
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="bg-red-100 text-red-800 p-1 rounded mr-3 text-sm font-bold">!</span>
              <span>Jangan diminum bersama <strong>Teh, Kopi, atau Susu</strong> (menghambat penyerapan zat besi).</span>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 text-red-800 p-1 rounded mr-3 text-sm font-bold">!</span>
              <span>Jangan lupa jadwal minumnya.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-purple-100 rounded-xl p-8 text-center border-2 border-purple-200">
        <h3 className="text-2xl font-bold text-purple-800 mb-4">💡 Tips Agar Tidak Lupa</h3>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <TipCard icon="📅" text="Tandai Kalender di HP atau dinding" />
          <TipCard icon="⏰" text="Pasang Alarm setiap minggu" />
          <TipCard icon="🗓️" text="Tetapkan hari yang sama (misal: Jumat)" />
        </div>
      </div>
    </div>
  );
}

// Reusable Component for Tips to keep code clean
function TipCard({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center w-full md:w-1/3">
      <div className="text-4xl mb-2">{icon}</div>
      <p className="font-medium text-gray-700">{text}</p>
    </div>
  );
}