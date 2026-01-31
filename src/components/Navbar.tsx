"use client";
import React from "react";
import { Zap } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-6 z-50 flex justify-between items-center mix-blend-difference text-white">
      <div className="flex items-center gap-2 text-2xl font-black italic tracking-tighter">
        <Zap className="text-orange-500" fill="currentColor" /> VOLTAGE
      </div>

      <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
        <a href="#" className="hover:text-orange-500 transition">Flavors</a>
        <a href="#" className="hover:text-orange-500 transition">Story</a>
        <a href="#" className="hover:text-orange-500 transition">Shop</a>
      </div>

      <button className="px-6 py-2 border-2 border-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition">
        Login
      </button>
    </nav>
  );
}