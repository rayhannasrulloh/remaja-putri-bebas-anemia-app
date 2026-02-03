import { BookOpen, Activity, AlertCircle } from "lucide-react";
import NextButton from "../components/NextButton";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl space-y-8">
      
      {/* Page Header */}
      <div className="text-center space-y-2 mb-10">
        <h2 className="text-4xl font-bold text-slate-800">
          🟣 Apa Itu Anemia?
        </h2>
        <p className="text-slate-500">Memahami kondisi tubuhmu adalah langkah awal kesehatan.</p>
      </div>
      
      {/* Definition Card - Glass Effect */}
      <div className="glass-card p-8 rounded-3xl flex items-start gap-6">
        <div className="hidden md:flex bg-purple-100 p-4 rounded-2xl text-purple-600">
          <BookOpen size={40} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-700 mb-2">Pengertian</h3>
          <p className="text-slate-700 leading-relaxed text-lg">
            Anemia adalah kondisi ketika kadar <strong>hemoglobin (Hb)</strong> dalam darah lebih rendah dari normal. Akibatnya, tubuh kekurangan oksigen untuk beraktivitas.
          </p>
        </div>
      </div>

      {/* Grid Layout for Details */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Causes Section */}
        <div className="glass-card p-8 rounded-3xl border-l-8 border-l-pink-400">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="text-pink-500" />
            <h3 className="font-bold text-xl text-slate-800">Penyebab Utama</h3>
          </div>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400" /> Kehilangan darah saat menstruasi
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400" /> Kurang asupan zat besi (Fe)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400" /> Diet ketat yang salah
            </li>
          </ul>
        </div>

        {/* Symptoms Section */}
        <div className="glass-card p-8 rounded-3xl border-l-8 border-l-purple-400">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="text-purple-500" />
            <h3 className="font-bold text-xl text-slate-800">Gejala 5L</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {["Lemah", "Letih", "Lesu", "Lalai", "Lulai"].map((gejala, idx) => (
              <span key={idx} className="bg-purple-50 text-purple-700 px-3 py-2 rounded-lg font-medium text-center text-sm border border-purple-100">
                😓 {gejala}
              </span>
            ))}
          </div>
        </div>
      </div>

      <NextButton href="/ttd" label="Lanjut: Apa itu TTD?" />
    </div>
  );
}