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
              <div className="bg-purple-600 p-2 rounded-full text-white group-hover:scale-110 transition-transform">
                <HeartPulse size={20} />
              </div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                Bebas Anemia
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink href="/about" label="Tentang" />
              <NavLink href="/ttd" label="Info TTD" />
              <NavLink href="/usage" label="Cara Minum" />
              <NavLink href="/video" label="Video" />
              
              <Link href="/quiz" className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all transform hover:-translate-y-0.5 text-sm">
                Kuis
              </Link>
            </div>
          </nav>
        </div>

        {/* Main Content with Padding for fixed header */}
        <main className="pt-28 min-h-screen pb-20">
          {children}
        </main>

        <footer className="bg-white border-t border-purple-100 py-8 text-center text-sm text-purple-400">
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
      className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-purple-700 hover:bg-purple-50 transition-colors"
    >
      {label}
    </Link>
  );
}