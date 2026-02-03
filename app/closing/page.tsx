import Link from "next/link";
import { Heart, Star, Home } from "lucide-react";

export default function ClosingPage() {
  return (
    <div className="container mx-auto px-4 min-h-[80vh] flex flex-col items-center justify-center text-center max-w-2xl">
      
      <div className="glass-card p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse" />

        <div className="relative z-10 space-y-6">
          <div className="inline-block p-4 bg-pink-100 rounded-full text-pink-600 mb-2">
            <Heart size={48} fill="currentColor" />
          </div>

          <h2 className="text-4xl font-extrabold text-slate-800">
            Terima Kasih, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Remaja Sehat!
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            "Remaja putri yang patuh minum Tablet Tambah Darah akan tumbuh menjadi perempuan yang <strong>sehat, aktif, dan berprestasi</strong>."
          </p>

          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
            <p className="font-semibold text-purple-800 mb-2 flex items-center justify-center gap-2">
              <Star className="text-yellow-500" fill="currentColor" /> Misi Kamu:
            </p>
            <p className="text-slate-600 italic">
              Ajak 1 temanmu untuk minum TTD minggu ini ya!
            </p>
          </div>

          <div className="pt-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all hover:scale-105 shadow-xl"
            >
              <Home size={20} /> Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-slate-400 text-sm">
        💖 Ayo minum TTD secara rutin demi masa depan yang sehat!
      </p>
    </div>
  );
}