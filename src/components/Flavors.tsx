"use client";
import React from "react";
import { motion } from "framer-motion";

const flavors = [
  { name: "CYBER LIME", color: "from-lime-400 to-green-600", img: "https://s2.wine.style/images_gen/216/216287/0_1_orig.webp" },
  { name: "NEON BERRY", color: "from-purple-400 to-pink-600", img: "https://cdn.dribbble.com/userupload/14361799/file/original-c0ba0afc4ca270fc75ede03e6acb9b69.jpg?crop" },
  { name: "SOLAR FLARE", color: "from-orange-400 to-red-600", img: "https://www.sostav.ru/blogs/images/feeds/57/112604.jpg" },
];

export function Flavors() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase mb-16 text-center">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Fuel</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {flavors.map((item, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ y: -20 }}
                    className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer text-center"
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                    
                    <img src={item.img} alt={item.name} className="h-[300px] mx-auto object-contain mb-8 group-hover:scale-110 transition-transform duration-500 drop-shadow-xl" />
                    
                    <h3 className="text-3xl font-black text-white italic uppercase mb-2">{item.name}</h3>
                    <button className="text-sm font-bold text-gray-400 group-hover:text-white uppercase tracking-widest border-b border-transparent group-hover:border-white transition-all pb-1">
                        View Stats
                    </button>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}