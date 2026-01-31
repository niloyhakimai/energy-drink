"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#101010] pt-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/20 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="max-w-2xl">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 font-bold uppercase tracking-widest text-sm mb-6"
            >
                <Zap size={16} fill="currentColor" /> Zero Sugar
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-9xl font-black text-white italic uppercase leading-[0.9] mb-8"
            >
                Voltage <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                    Surge
                </span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-xl max-w-md mb-10 leading-relaxed font-medium"
            >
                Ignite your senses. The first energy drink powered by quantum caffeine technology. 100% Focus. 0% Crash.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-6"
            >
                <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-black uppercase tracking-wider rounded-full transition-all shadow-[0_0_40px_rgba(234,88,12,0.4)] flex items-center gap-2 group">
                    Grab a Pack <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white font-bold uppercase tracking-wider rounded-full transition-all">
                    Nutritional Info
                </button>
            </motion.div>
        </div>

        {/* Right: Realistic Energy Drink Image */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[600px] flex items-center justify-center"
        >
            {/* Main Can Image */}
            <motion.img 
                animate={{ y: [-20, 20, -20], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                // একটি রিয়ালিস্টিক ক্যানের ইমেজ
                src="https://i.ibb.co.com/cKQLHk7s/112605-removebg-preview.png" 
                alt="Voltage Energy Drink"
                className="w-full h-full object-contain drop-shadow-[0_0_60px_rgba(234,88,12,0.5)] z-20"
            />
            
            {/* Decorative Elements around Can */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-white/5 rounded-full border-dashed z-10 scale-125"
            />
        </motion.div>

      </div>
    </section>
  );
}