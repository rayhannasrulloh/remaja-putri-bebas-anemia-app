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
        className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
      >
        <span>{label}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}