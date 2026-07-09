import React from "react";
import { Phone, Mail, Globe } from "lucide-react";
import Link from "next/link";


const TopHeader = () => {
  return (
    <div className="w-full bg-[#0F172A] border-b border-slate-800 py-2 px-4 md:px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <Phone className="w-3 h-3 text-primary" />
            <span>+1 (555) MORENT-00</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <Mail className="w-3 h-3 text-primary" />
            <span>SUPPORT@MORENT.COM</span>
          </div>
        </div>
        <div className="flex items-center gap-6 text-slate-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/CarsPage" className="hover:text-white">Cars</Link>
          <Link href="/category" className="hover:text-white">Category</Link>
          <Link href="/admin" className="hover:text-white">Admin</Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <Globe className="w-3 h-3 text-primary" />
            <span>EN / USD</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">FB</span>
            <span className="hover:text-white transition-colors cursor-pointer">TW</span>
            <span className="hover:text-white transition-colors cursor-pointer">IG</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;