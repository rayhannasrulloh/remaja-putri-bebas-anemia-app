"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion"; // Animation library
import { BookOpen, Pill, Clock, PlayCircle, BrainCircuit, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-5xl">
      
      {/* Hero Section with Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 space-y-4"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-bold tracking-wider uppercase mb-2">
          Edukasi Kesehatan Remaja
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
          Remaja Putri <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
            Bebas Anemia
          </span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Jadilah remaja yang sehat, aktif, dan percaya diri dengan rutin mengonsumsi Tablet Tambah Darah.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 mb-12 flex justify-center"
      >
        <Link 
          href="/about" 
          className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-slate-800 hover:scale-105 transition-all"
        >
          Mulai Petualangan Sehat 🚀
        </Link>
      </motion.div> 

      {/* Bento Grid Menu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Large Card: About */}
        <MenuCard 
          href="/about" 
          title="Tentang Anemia" 
          desc="Kenali penyebab dan gejala 5L."
          icon={<BookOpen size={32} />}
          color="bg-blue-50 text-blue-600 hover:border-blue-200"
          className="md:col-span-2"
        />

        {/* Standard Card: TTD */}
        <MenuCard 
          href="/ttd" 
          title="Info TTD" 
          desc="Apa itu Tablet Tambah Darah?"
          icon={<Pill size={32} />}
          color="bg-purple-50 text-purple-600 hover:border-purple-200"
        />

        {/* Standard Card: Usage */}
        <MenuCard 
          href="/usage" 
          title="Cara Minum" 
          desc="Do's & Don'ts minum obat."
          icon={<Clock size={32} />}
          color="bg-green-50 text-green-600 hover:border-green-200"
        />

        {/* Standard Card: Video */}
        <MenuCard 
          href="/video" 
          title="Video Edukasi" 
          desc="Tonton penjelasan singkat."
          icon={<PlayCircle size={32} />}
          color="bg-red-50 text-red-600 hover:border-red-200"
        />

        {/* Large Card: Quiz */}
        <MenuCard 
          href="/quiz" 
          title="Kuis Singkat" 
          desc="Uji pemahamanmu dan dapatkan skor!"
          icon={<BrainCircuit size={32} />}
          color="bg-amber-50 text-amber-600 hover:border-amber-200"
          className="md:row-span-2"
        />

        {/* Wide Card: Reminder */}
        <MenuCard 
          href="/reminder" 
          title="Reminder" 
          desc="Jangan lupa jadwal minummu."
          icon={<Calendar size={32} />}
          color="bg-pink-50 text-pink-600 hover:border-pink-200 md:col-span-2"
        />
      </div>
    </div>
  );
}

// Reusable Modern Card Component
function MenuCard({ href, title, desc, icon, color, className = "" }: any) {
  return (
    <Link href={href} className={`block ${className}`}>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`h-full p-6 rounded-3xl border border-transparent ${color} transition-all duration-300 relative overflow-hidden group`}
      >
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-sm opacity-80 font-medium">{desc}</p>
          </div>
        </div>
        
        {/* Decoration Circle in background */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-current opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
      </motion.div>
    </Link>
  );
}