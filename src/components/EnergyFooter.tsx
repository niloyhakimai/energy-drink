"use client";
import React from "react";
import { Instagram, Twitter, Facebook } from "lucide-react";

export function EnergyFooter() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-black text-white italic uppercase mb-8">
            Don't Blink. <span className="text-orange-500">Drink Up.</span>
        </h2>

        <div className="flex justify-center gap-6 mb-12">
            <SocialBtn icon={<Instagram />} />
            <SocialBtn icon={<Twitter />} />
            <SocialBtn icon={<Facebook />} />
        </div>

        <p className="text-gray-600 text-xs uppercase tracking-widest">
            &copy; 2026 Voltage Energy Corp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialBtn({ icon }: { icon: any }) {
    return (
        <button className="p-4 rounded-full bg-white/5 text-white hover:bg-orange-600 hover:scale-110 transition-all">
            {icon}
        </button>
    )
}