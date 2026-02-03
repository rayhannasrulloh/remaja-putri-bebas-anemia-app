import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { HeartPulse } from "lucide-react"; // Icon for logo

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remaja Putri Bebas Anemia",
  description: "Edukasi kesehatan untuk remaja putri Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-purple-50 text-slate-800`}>
        
        {/* Floating Glass Navbar */}
        <div className="fixed top-0 w-full z-50 px-4 py-4 flex justify-center">
        <nav className="glass rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-brand-main p-2 rounded-full text-white group-hover:scale-110 transition-transform shadow-lg shadow-brand-main/30">
              <HeartPulse size={20} />
            </div>
            <span className="font-bold text-lg tracking-tight text-brand-main">
              Bebas Anemia
            </span>
          </Link>

          {/* Desktop Menu - Update Hover Colors */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/about" label="Tentang" />
            <NavLink href="/ttd" label="Info TTD" />
            <NavLink href="/usage" label="Cara Minum" />
            <NavLink href="/video" label="Video" />
            
            {/* Tombol Kuis dengan Gradient Pink Palette */}
            <Link href="/quiz" className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-brand-main to-brand-soft text-white font-medium hover:shadow-lg hover:shadow-brand-main/40 transition-all transform hover:-translate-y-0.5 text-sm">
              Kuis
            </Link>
          </div>
        </nav>
      </div>

        {/* Main Content with Padding for fixed header */}
        <main className="pt-28 min-h-screen pb-20">
          {children}
        </main>

        <footer className="bg-white/50 border-t border-brand-soft py-8 text-center text-sm text-brand-main font-medium">
          <p>© 2026 Healthcare Project • Health Education</p>
        </footer>
      </body>
    </html>
  );
}

// Micro-component for Links
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link 
      href={href} 
      className="px-4 py-2 rounded-full text-sm font-medium text-slate-500 hover:text-brand-main hover:bg-brand-bg transition-colors"
    >
      {label}
    </Link>
  );
}