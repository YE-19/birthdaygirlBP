import React from 'react';
import { motion } from 'framer-motion';
import video1 from '../assets/video1.mp4';

const Video = () => {
  return (
      // منع السكرول نهائياً وتثبيت الشاشة
      <div className="fixed inset-0 h-[100dvh] w-full flex flex-col items-center justify-center bg-zinc-950 overflow-hidden touch-none p-4">
  
        {/* ── Ambient Glow Orbs ── */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-12%] left-[-8%] w-72 h-72 md:w-96 md:h-96 bg-pink-600 rounded-full blur-[70px] md:blur-[150px] opacity-15" />
          <div className="absolute bottom-[-10%] right-[-8%] w-72 h-72 md:w-96 md:h-96 bg-fuchsia-700 rounded-full blur-[70px] md:blur-[150px] opacity-15" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-rose-900 rounded-full blur-[80px] md:blur-[180px] opacity-10" />
        </div>
  
        {/* ── Grid Overlay ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
  
        {/* ── Edge Bars ── */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500" />
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500" />
  
        {/* ── Corner Ornaments ── */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-8 md:w-10 md:h-10 border-t-2 border-l-2 border-pink-500/50" />
        <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 border-t-2 border-r-2 border-pink-500/50" />
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-8 h-8 md:w-10 md:h-10 border-b-2 border-l-2 border-pink-500/50" />
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-8 h-8 md:w-10 md:h-10 border-b-2 border-r-2 border-pink-500/50" />
  
        {/* ── Fairy Lights ── */}
        <div className="absolute top-0 left-0 w-full flex justify-around px-6 pt-3 md:pt-5 z-20 pointer-events-none">
          <div className="absolute top-[14px] md:top-[22px] left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-px h-2 md:h-3 bg-zinc-600" />
              <motion.div
                animate={{ opacity: [0.35, 1, 0.35], scale: [0.92, 1.08, 0.92] }}
                transition={{ duration: 1.8 + i * 0.15, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
                className="relative flex items-center justify-center will-change-transform"
              >
                <div className="absolute w-4 h-4 md:w-5 md:h-5 rounded-full bg-pink-400 blur-md opacity-60" />
                <div className="relative w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-pink-300 shadow-[0_0_8px_#f9a8d4,0_0_20px_#ec4899]" />
              </motion.div>
            </div>
          ))}
        </div>
  
        {/* ── Page Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-1 mb-6 md:mb-8 z-10 mt-6 md:mt-0"
        >
          <p className="text-pink-400 text-[10px] md:text-xs font-semibold uppercase tracking-[0.35em]">
            ✦ A Special Memory ✦
          </p>
          <h2 className="font-serif italic text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-300 to-rose-400">
            Press Play
          </h2>
          <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent mt-1" />
        </motion.div>
  
      {/* ── Single Video Container ── */}
      <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 90 }}
          // قللنا العرض الأقصى (max-w) شوية عشان لما نزود الطول الفيديو مايخرجش برا الشاشة
          className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] group"
        >
          {/* Glow behind the video */}
          <div className="absolute -inset-[2px] md:-inset-[3px] rounded-xl bg-gradient-to-br from-pink-500/30 via-fuchsia-500/20 to-rose-500/30 group-hover:from-pink-500/50 group-hover:via-fuchsia-400/40 group-hover:to-rose-500/50 blur-md transition-all duration-500 -z-10" />
  
          <div className="relative bg-zinc-900 p-2 md:p-3 border border-zinc-700 group-hover:border-pink-500/60 transition-colors duration-400 rounded-xl shadow-2xl shadow-black/80">
            
            {/* Top Tape Ornament */}
            <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-10 h-4 md:w-16 md:h-6 bg-zinc-700/60 border border-zinc-600/40 group-hover:bg-pink-500/20 group-hover:border-pink-400/30 transition-all duration-400 rounded-sm z-20" />
  
            {/* Video Element */}
            {/* خلينا الأبعاد 9/16 عشان تناسب فيديوهات الموبايل الطولية */}
            <div className="w-full aspect-[9/16] overflow-hidden rounded-lg bg-black relative max-h-[65vh]">
              <video 
                controls 
                // غيرنا cover لـ contain عشان الفيديو يظهر بالكامل من غير قص
                className="w-full h-full object-contain"
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
  
            <div className="absolute bottom-2 md:bottom-3 left-4 right-4 flex items-center justify-center gap-2 z-10 pointer-events-none">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-pink-500/50" />
              <span className="text-pink-400 text-[10px] md:text-xs">✦</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-pink-500/50" />
            </div>
          </div>
        </motion.div>
  
        {/* ── Closing Quote ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="flex flex-col items-center gap-1.5 md:gap-2 mt-6 md:mt-8 z-10"
        >
          <p className="font-serif italic text-sm md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-300 to-rose-400 text-center px-4">
            "A moment I'll cherish forever..."
          </p>
        </motion.div>
  
      </div>
    );
}

export default Video