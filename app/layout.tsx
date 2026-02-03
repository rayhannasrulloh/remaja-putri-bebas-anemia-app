import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      <body className={inter.className}>
        
        {/* --- UPDATED NAVBAR START --- */}
        <nav className="bg-purple-700 text-white p-4 shadow-lg sticky top-0 z-50">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold flex items-center gap-2 mb-4 md:mb-0">
              ✨ <span className="tracking-wide">Bebas Anemia</span>
            </Link>

            {/* Menu Links - Matching our Folder Structure */}
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium">
              <Link href="/about" className="hover:text-purple-200 transition">
                Tentang
              </Link>
              <Link href="/ttd" className="hover:text-purple-200 transition">
                Info TTD
              </Link>
              <Link href="/usage" className="hover:text-purple-200 transition">
                Cara Minum
              </Link>
              <Link href="/video" className="hover:text-purple-200 transition">
                Video
              </Link>
              <Link href="/quiz" className="bg-white text-purple-700 px-3 py-1 rounded-full hover:bg-purple-100 transition">
                Kuis
              </Link>
            </div>
          </div>
        </nav>
        {/* --- UPDATED NAVBAR END --- */}

        <main className="min-h-screen bg-purple-50">
          {children}
        </main>

        <footer className="bg-purple-800 text-white p-6 text-center mt-10">
          <p>© 2026 Remaja Putri Bebas Anemia</p>
        </footer>
      </body>
    </html>
  );
}