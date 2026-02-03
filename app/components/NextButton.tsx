import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NextButtonProps {
  href: string;
  label: string;
}

export default function NextButton({ href, label }: NextButtonProps) {
  return (
    <div className="flex justify-end mt-8 w-full">
      <Link 
        href={href} 
        // Menggunakan Gradient dari brand-main (#F47C7C) ke brand-soft (#EF9F9F)
        className="group flex items-center gap-2 bg-gradient-to-r from-brand-main to-brand-soft text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-brand-main/20 hover:shadow-brand-main/40 hover:scale-105 transition-all duration-300"
      >
        <span>{label}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}