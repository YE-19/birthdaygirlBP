import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';

const Memories = () => {
  const [selected, setSelected] = useState(null);

  const photos = [
    {
      id: 1,
      url: photo1,
      rotation: -5,
      x: -90,
      y: -40,
      message: "Every time I look at this photo, I remember exactly how happy we were in that moment. You have a smile that could light up the darkest room — and you did, that day.",
      date: "A day worth remembering 🌸",
    },
    {
      id: 2,
      url: photo2,
      rotation: 8,
      x: 60,
      y: -70,
      message: "This one is my favorite. You weren't even trying to look beautiful, and yet here you are — effortlessly stunning. That's just who you are.",
      date: "Caught in a perfect moment ✨",
    },
    {
      id: 3,
      url: photo3,
      rotation: -12,
      x: -70,
      y: 120,
      message: "I keep coming back to this photo whenever I need a reminder of the kind of joy you bring into my life. Pure, genuine, and real. Just like you.",
      date: "Joy looks good on you 💖",
    },
    {
      id: 4,
      url: photo4,
      rotation: 5,
      x: 70,
      y: 100,
      message: "Years from now, when I look back at the best chapters of my life — you'll be in every single one. Thank you for being you. Happy Birthday, beautiful.",
      date: "Forever in my heart 👑",
    },
  ];

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-zinc-950 overflow-hidden">

      {/* ── Ambient Glow Orbs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-12%] left-[-8%] w-96 h-96 bg-pink-600 rounded-full blur-[150px] opacity-15" />
        <div className="absolute bottom-[-10%] right-[-8%] w-96 h-96 bg-fuchsia-700 rounded-full blur-[150px] opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-900 rounded-full blur-[180px] opacity-10" />
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
      <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-pink-500/50" />
      <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-pink-500/50" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-pink-500/50" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-pink-500/50" />

      {/* ── Fairy Lights ── */}
      <div className="absolute top-0 left-0 w-full flex justify-around px-6 pt-5 z-20 pointer-events-none">
        <div className="absolute top-[22px] left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-px h-3 bg-zinc-600" />
            <motion.div
              animate={{ opacity: [0.35, 1, 0.35], scale: [0.92, 1.08, 0.92] }}
              transition={{ duration: 1.8 + i * 0.15, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute w-5 h-5 rounded-full bg-pink-400 blur-md opacity-60" />
              <div className="relative w-2.5 h-2.5 rounded-full bg-pink-300 shadow-[0_0_8px_#f9a8d4,0_0_20px_#ec4899]" />
            </motion.div>
          </div>
        ))}
      </div>

      {/* ── Page Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-1 mb-5 z-10"
      >
        <p className="text-pink-400 text-xs font-semibold uppercase tracking-[0.35em]">
          ✦ Our Gallery of Happiness ✦
        </p>
        <h2 className="font-serif italic text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-300 to-rose-400">
          Captured Moments
        </h2>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent mt-1" />
        <p className="text-zinc-600 text-xs tracking-widest mt-1">tap a photo to reveal its story</p>
      </motion.div>

      {/* ── 2×2 Photo Grid ── */}
      <div className="grid grid-cols-2 gap-4 z-10 px-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2, type: 'spring', stiffness: 90 }}
            whileHover={{ scale: 1.05, zIndex: 50 }}
            onClick={() => setSelected(photo)}
            className="relative cursor-pointer group"
          >
            {/* Outer glow on hover */}
            <div className="absolute -inset-[3px] rounded-lg bg-gradient-to-br from-pink-500/0 via-fuchsia-500/0 to-rose-500/0 group-hover:from-pink-500/50 group-hover:via-fuchsia-400/30 group-hover:to-rose-500/50 blur-sm transition-all duration-500" />

            {/* Card */}
            <div className="relative bg-zinc-900 p-2 pb-8 border border-zinc-700 group-hover:border-pink-500/60 transition-colors duration-400 rounded-lg shadow-2xl shadow-black/60">

              {/* Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-zinc-700/60 border border-zinc-600/40 group-hover:bg-pink-500/20 group-hover:border-pink-400/30 transition-all duration-400 rounded-sm z-10" />

              {/* Image */}
              <div className="w-full h-40 md:h-48 overflow-hidden rounded-sm bg-zinc-800 relative">
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-pink-500/0 to-fuchsia-500/0 group-hover:from-pink-500/10 group-hover:to-fuchsia-500/10 transition-all duration-500" />
                <img
                  src={photo.url}
                  alt={`Memory ${photo.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Bottom caption strip */}
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-center gap-1">
                <div className="h-px flex-1 bg-zinc-700 group-hover:bg-pink-500/40 transition-colors duration-400" />
                <span className="text-zinc-600 group-hover:text-pink-400 text-xs transition-colors duration-400">✦</span>
                <div className="h-px flex-1 bg-zinc-700 group-hover:bg-pink-500/40 transition-colors duration-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Closing Quote ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-col items-center gap-2 mt-5 z-10"
      >
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-pink-500/50" />
          <span className="text-pink-500/50 text-xs">✦</span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-pink-500/50" />
        </div>
        <p className="font-serif italic text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-300 to-rose-400">
          "One of the best memories we've ever shared..."
        </p>
      </motion.div>

      {/* ════════════════════════════════
          LIGHTBOX MODAL
          ════════════════════════════════ */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            {/* Modal Card — stop propagation so clicking inside doesn't close */}
            <motion.div
              key="lightbox-card"
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 24 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl shadow-black/80"
            >
              {/* Outer gradient glow border */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-pink-500/40 via-fuchsia-500/20 to-rose-500/40 blur-sm" />

              {/* Inner card */}
              <div className="relative bg-zinc-900 border border-zinc-700/80 rounded-2xl overflow-hidden">

                {/* Top bar */}
                <div className="w-full h-[3px] bg-gradient-to-r from-fuchsia-500 via-pink-400 to-rose-500" />

                {/* Image — full width */}
                <div className="w-full h-64 md:h-72 overflow-hidden relative">
                  <img
                    src={selected.url}
                    alt={`Memory ${selected.id}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient fade into card body */}
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-zinc-900 to-transparent" />
                </div>

                {/* Content */}
                <div className="px-7 pb-8 pt-3">

                  {/* Date tag */}
                  <p className="text-pink-400 text-xs uppercase tracking-[0.3em] mb-4">
                    {selected.date}
                  </p>

                  {/* Divider */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-px flex-1 bg-gradient-to-r from-pink-500/60 to-transparent" />
                    <span className="text-pink-400 text-sm">💌</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-pink-500/60 to-transparent" />
                  </div>

                  {/* Message */}
                  <p className="font-serif italic text-zinc-300 text-base leading-relaxed text-center">
                    "{selected.message}"
                  </p>

                  {/* Close button */}
                  <div className="mt-7 flex justify-center">
                    <button
                      onClick={() => setSelected(null)}
                      className="relative group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-zinc-800 hover:bg-pink-500 border border-zinc-700 hover:border-pink-400 text-zinc-400 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 overflow-hidden"
                    >
                      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                      <span className="relative">Close</span>
                      <span className="relative text-base">✕</span>
                    </button>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Memories;