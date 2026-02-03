import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold text-purple-700 mb-4">
        ✨ Remaja Putri Bebas Anemia ✨
      </h1>
      <p className="text-xl text-gray-700 mb-8 italic">
        "Sehat, Aktif, dan Percaya Diri dengan Tablet Tambah Darah"
      </p>

      {/* Navigation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <MenuButton title="➡️ Tentang Anemia" link="/about" />
        <MenuButton title="➡️ Tablet Tambah Darah" link="/ttd" />
        <MenuButton title="➡️ Cara Minum yang Benar" link="/usage" />
        <MenuButton title="➡️ Video Edukasi" link="/video" />
        <MenuButton title="➡️ Kuis Singkat" link="/quiz" />
        <MenuButton title="➡️ Reminder Minum TTD" link="/reminder" />
      </div>
    </div>
  );
}

// Reusable Component for Buttons
function MenuButton({ title, link }: { title: string; link: string }) {
  return (
    <Link 
      href={link} 
      className="bg-white border-2 border-purple-500 text-purple-700 font-semibold py-4 px-6 rounded-xl shadow-sm hover:bg-purple-500 hover:text-white transition-all duration-300"
    >
      {title}
    </Link>
  );
}