import React from 'react';
import NextButton from "../components/NextButton";
import { CheckCircle2, XCircle } from 'lucide-react';

export default function UsagePage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <header className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Cara Minum yang Benar</h2>
        <p className="text-slate-500">Rules sederhana untuk hasil maksimal.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* DO's Card */}
        <div className="glass-card p-8 rounded-3xl border-t-4 border-t-emerald-400">
          <h3 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center gap-2">
            <CheckCircle2 /> Anjuran (Do's)
          </h3>
          <ul className="space-y-4">
            <ListItem text="Minum 1 tablet setiap minggu." color="bg-emerald-100 text-emerald-700" icon="📅" />
            <ListItem text="Minum setelah makan." color="bg-emerald-100 text-emerald-700" icon="🍽️" />
            <ListItem text="Gunakan air putih atau jus jeruk." color="bg-emerald-100 text-emerald-700" icon="🍊" />
          </ul>
        </div>

        {/* DON'Ts Card */}
        <div className="glass-card p-8 rounded-3xl border-t-4 border-t-rose-400">
          <h3 className="text-2xl font-bold text-rose-600 mb-6 flex items-center gap-2">
            <XCircle /> Larangan (Don'ts)
          </h3>
          <ul className="space-y-4">
            <ListItem text="Jangan minum dengan Teh/Kopi." color="bg-rose-100 text-rose-700" icon="☕" />
            <ListItem text="Jangan minum saat perut kosong." color="bg-rose-100 text-rose-700" icon="🚫" />
            <ListItem text="Jangan minum susu bersamaan." color="bg-rose-100 text-rose-700" icon="🥛" />
          </ul>
        </div>

      </div>

      <NextButton href="/video" label="Lanjut: Tonton Video" />
    </div>
  );
}

function ListItem({ text, color, icon }: any) {
  return (
    <li className="flex items-center gap-4 bg-white/50 p-3 rounded-xl border border-white/40">
      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${color}`}>
        {icon}
      </span>
      <span className="text-slate-700 font-medium">{text}</span>
    </li>
  );
}