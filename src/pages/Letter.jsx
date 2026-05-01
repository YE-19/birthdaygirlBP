import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Letter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-zinc-950 overflow-hidden p-4">

      {/* ── Ambient Glow Orbs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-12%] right-[-6%] w-96 h-96 bg-pink-600 rounded-full blur-[140px] opacity-15" />
        <div className="absolute bottom-[-12%] left-[-6%] w-96 h-96 bg-fuchsia-700 rounded-full blur-[140px] opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-900 rounded-full blur-[160px] opacity-10" />
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

      {/* ── Top & Bottom Edge Bars ── */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500" />
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-rose-500 via-pink-500 to-fuchsia-500" />

      {/* ── Corner Ornaments ── */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-pink-500/50 rounded-tl-sm" />
      <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-pink-500/50 rounded-tr-sm" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-pink-500/50 rounded-bl-sm" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-pink-500/50 rounded-br-sm" />

      {/* ── Floating Particles ── */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.5, 0], y: [0, -(40 + Math.random() * 60)] }}
            transition={{ duration: 5 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 7, ease: 'easeOut' }}
            className="absolute rounded-full"
            style={{
              top: `${20 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: i % 2 === 0 ? '#f472b6' : '#e879f9',
            }}
          />
        ))}
      </div>

      {/* ── Main Content ── */}
      <AnimatePresence mode="wait">

        {/* ════════════════════════════════
            STAGE 1 — The Sealed Envelope
            ════════════════════════════════ */}
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.06, filter: 'blur(10px)' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            onClick={() => setIsOpen(true)}
            className="relative z-10 cursor-pointer group flex flex-col items-center"
          >
            {/* Outer glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-pink-500 blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 scale-110" />

            {/* Envelope Body */}
            <div className="relative w-80 md:w-96 h-60 rounded-b-2xl border border-zinc-700 group-hover:border-pink-500/60 transition-colors duration-500 overflow-hidden shadow-2xl shadow-black/60">

              {/* Envelope back face — dark linen texture via stripes */}
              <div className="absolute inset-0 bg-zinc-900" />
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 4px)',
                }}
              />

              {/* Bottom V-fold */}
              <div
                className="absolute bottom-0 left-0 w-full h-full bg-zinc-800 border-t border-zinc-700/60"
                style={{ clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)' }}
              />

              {/* Left side fold */}
              <div
                className="absolute left-0 top-0 w-full h-full bg-zinc-900/80"
                style={{ clipPath: 'polygon(0 0, 0 100%, 50% 55%)' }}
              />

              {/* Right side fold */}
              <div
                className="absolute right-0 top-0 w-full h-full bg-zinc-900/60"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 50% 55%)' }}
              />

              {/* Top flap — dark, slightly lighter */}
              <div
                className="absolute top-0 left-0 w-full h-full bg-zinc-800 z-30 border-b border-zinc-700/50"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 55%)' }}
              />

              {/* Pink glow edge along flap crease */}
              <div
                className="absolute top-0 left-0 w-full h-[2px] z-40 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"
                style={{ top: '54%' }}
              />

              {/* Wax Seal */}
              <div className="absolute inset-0 flex items-center justify-center z-50">
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
                  className="relative flex items-center justify-center"
                >
                  {/* Glow ring */}
                  <div className="absolute w-16 h-16 rounded-full bg-pink-500 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  {/* Seal disc */}
                  <div className="relative w-14 h-14 rounded-full bg-zinc-950 border-2 border-pink-500/70 shadow-lg shadow-pink-900/50 flex items-center justify-center group-hover:border-pink-400 transition-colors duration-300">
                    <span className="text-2xl select-none">💖</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Pink ribbon strip under envelope */}
            <div className="w-80 md:w-96 h-[3px] bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

            {/* CTA label */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
              className="mt-8 text-xs text-pink-400 font-medium tracking-[0.35em] uppercase"
            >
              ✦ Click to open your letter ✦
            </motion.p>
          </motion.div>

        ) : (

          /* ════════════════════════════════
              STAGE 2 — The Opened Letter
              ════════════════════════════════ */
          <motion.div
            key="paper"
            initial={{ y: 60, opacity: 0, scale: 0.93 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.2 }}
            className="relative z-50 w-full max-w-2xl"
          >
            {/* Outer pink glow frame */}
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-pink-500/30 via-fuchsia-500/10 to-rose-500/30 blur-sm" />

            {/* Card */}
            <div className="relative bg-zinc-900 border border-zinc-700/80 rounded-2xl overflow-hidden shadow-2xl shadow-black/70">

              {/* Top accent bar */}
              <div className="w-full h-[3px] bg-gradient-to-r from-fuchsia-500 via-pink-400 to-rose-500" />

              {/* Inner content */}
              <div className="px-8 md:px-14 py-12 md:py-14">

                {/* Header row */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="flex-1 h-px bg-gradient-to-r from-pink-500/60 to-transparent" />
                  <span className="text-pink-400 text-lg select-none">💌</span>
                  <div className="flex-1 h-px bg-gradient-to-l from-pink-500/60 to-transparent" />
                </div>

                {/* Salutation */}
                <h3 className="font-serif italic text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-400 mb-8 tracking-tight">
                  To my favorite person,
                </h3>

                {/* Letter body */}
                <div className="font-serif italic space-y-5 text-zinc-400 text-lg leading-relaxed">
                  <p>
                    I wanted to take a moment on your special day to tell you how much you
                    mean to me. You bring so much joy and light into my life every single day.
                  </p>
                  <p>
                    May this year be filled with laughter, love, and all the magic you deserve.
                    Always remember how special and loved you are.
                  </p>
                </div>

                {/* Divider */}
                <div className="my-10 flex items-center gap-4">
                  <div className="flex-1 h-px bg-zinc-800" />
                  <span className="text-pink-500/40 text-xs">✦</span>
                  <div className="flex-1 h-px bg-zinc-800" />
                </div>

                {/* Signature */}
                <div className="text-right">
                  <span className="block text-xs text-zinc-600 not-italic uppercase tracking-[0.3em] mb-2 font-sans">
                    With all my love,
                  </span>
                  <span className="font-serif italic text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-400">
                    Name ✨
                  </span>
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="pt-10 flex justify-center"
                >
                  <button
                    onClick={() => navigate('/memories')}
                    className="relative group inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-400 text-white px-10 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-300 shadow-lg shadow-pink-900/50 overflow-hidden"
                    style={{ boxShadow: '0 0 0 0 rgba(236,72,153,0.4)' }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 28px rgba(236,72,153,0.45)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 0 rgba(236,72,153,0.4)'}
                  >
                    {/* Shimmer */}
                    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    <span className="relative">See the next surprise</span>
                    <span className="relative text-lg transition-transform group-hover:translate-x-1 duration-300">→</span>
                  </button>
                </motion.div>

              </div>

              {/* Bottom accent bar */}
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Letter;