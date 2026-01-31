"use client";
import React from "react";
import { Zap, Activity, Brain } from "lucide-react";

export function Ingredients() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Stats */}
        <div>
            <span className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm">Formula X-99</span>
            <h2 className="text-5xl md:text-7xl font-black text-white mt-4 mb-10 italic uppercase leading-none">
                Pure <br />
                <span className="text-white/20">Energy</span>
            </h2>

            <div className="space-y-8">
                <Ingredient icon={<Zap />} title="Quantum Caffeine" desc="200mg of rapid-release energy without the jitters." />
                <Ingredient icon={<Brain />} title="Nootropic Blend" desc="L-Theanine and Alpha-GPC for laser-sharp focus." />
                <Ingredient icon={<Activity />} title="Electrolytes" desc="Hydration matrix to keep you performing at peak." />
            </div>
        </div>

        {/* Right: Visual */}
        <div className="relative h-[500px] bg-gradient-to-tr from-orange-900/20 to-transparent rounded-full border border-orange-500/20 flex items-center justify-center">
            <div className="absolute inset-0 animate-pulse bg-orange-500/5 rounded-full blur-3xl" />
            <div className="text-center">
                <p className="text-9xl font-black text-white">0g</p>
                <p className="text-2xl font-bold text-orange-500 uppercase tracking-widest">Sugar</p>
            </div>
        </div>

      </div>
    </section>
  );
}

function Ingredient({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-colors">
            <div className="text-orange-500">{icon}</div>
            <div>
                <h4 className="text-xl font-bold text-white uppercase italic mb-2">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}