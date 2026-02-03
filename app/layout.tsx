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
        {/* Navigation Bar */}
        <nav className="bg-purple-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              ✨ Bebas Anemia
            </Link>
            <div className="space-x-4 hidden md:flex">
              <Link href="/about" className="hover:text-purple-200">Tentang Anemia</Link>
              <Link href="/ttd" className="hover:text-purple-200">Info TTD</Link>
              <Link href="/quiz" className="hover:text-purple-200">Kuis</Link>
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        <main className="min-h-screen bg-purple-50">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-purple-800 text-white p-6 text-center mt-10">
          <p>💖 Ayo minum TTD secara rutin demi masa depan yang sehat!</p>
        </footer>
      </body>
    </html>
  );
}