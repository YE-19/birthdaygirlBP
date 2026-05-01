import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-zinc-950 overflow-hidden">

      {/* ── Ambient Glow Orbs ── */}
      <div className="absolute top-[-15%] left-[-5%] w-96 h-96 bg-pink-600 rounded-full blur-[140px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-fuchsia-500 rounded-full blur-[120px] opacity-15 pointer-events-none" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-900 rounded-full blur-[160px] opacity-10 pointer-events-none" />

      {/* ── Decorative Grid Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Top Edge Bar ── */}
      <div className="absolute top-0 left-0 w-full flex items-center gap-0">
        <div className="h-[3px] flex-1 bg-gradient-to-r from-transparent via-pink-500 to-fuchsia-500" />
        <div className="h-[3px] w-8 bg-pink-400" />
      </div>

      {/* ── Corner Ornaments ── */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-pink-500/60 rounded-tl-sm" />
      <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-pink-500/60 rounded-tr-sm" />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-pink-500/60 rounded-bl-sm" />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-pink-500/60 rounded-br-sm" />

      {/* ── Floating Particles ── */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.7, 0],
              y: [0, -(30 + Math.random() * 50)],
              x: [(Math.random() - 0.5) * 20],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeOut',
            }}
            className="absolute rounded-full"
            style={{
              top: `${20 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: i % 3 === 0 ? '#f472b6' : i % 3 === 1 ? '#e879f9' : '#fb7185',
            }}
          />
        ))}
      </div>

      {/* ── Main Content Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center text-center px-8 py-16 mx-4 max-w-lg w-full"
      >
        {/* Thin decorative line above */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent mb-8"
        />

        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.05em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-pink-400 text-xs font-semibold uppercase tracking-[0.3em] mb-5"
        >
          ✦ Something Special Is Waiting ✦
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="font-serif text-white text-5xl md:text-6xl leading-[1.1] mb-3 tracking-tight"
        >
          A Gift
          <br />
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-rose-400">
            Just For You
          </span>
        </motion.h1>

        {/* Crown ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.75, type: 'spring' }}
          className="mt-5 mb-6 text-3xl select-none"
        >
          👑
        </motion.div>

        {/* Divider with dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="flex items-center gap-3 mb-7"
        >
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-zinc-600" />
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
          <span className="w-1 h-1 rounded-full bg-fuchsia-400 opacity-60" />
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
          <div className="h-px w-14 bg-gradient-to-l from-transparent to-zinc-600" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="text-zinc-400 text-sm font-light leading-relaxed max-w-xs mb-12 italic"
        >
          "Today is a day as beautiful as you are. I've prepared a little digital
          surprise to celebrate your special moment."
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          whileHover={{
            scale: 1.04,
            boxShadow: '0 0 40px rgba(236, 72, 153, 0.45)',
          }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate('/BirthdayCake')}
          className="relative group inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-400 text-white px-12 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-300 shadow-lg shadow-pink-500/30 overflow-hidden"
        >
          {/* Shimmer sweep */}
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          <span className="relative">Open Your Surprise</span>
          <span className="relative text-lg">🎀</span>
        </motion.button>

        {/* Thin decorative line below */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent mt-12"
        />
      </motion.div>

      {/* ── Bottom Edge Bar ── */}
      <div className="absolute bottom-0 left-0 w-full flex items-center">
        <div className="h-[3px] flex-1 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-transparent" />
        <div className="h-[3px] w-8 bg-pink-400" />
      </div>

      {/* ── Side Roman Numerals / Decorative Text ── */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 select-none pointer-events-none hidden md:flex">
        <div className="h-20 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
        <p
          className="text-zinc-700 text-xs tracking-[0.3em] font-light"
          style={{ writingMode: 'vertical-rl' }}
        >
          BIRTHDAY • CELEBRATION
        </p>
        <div className="h-20 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
      </div>

      <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 select-none pointer-events-none hidden md:flex">
        <div className="h-20 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
        <p
          className="text-zinc-700 text-xs tracking-[0.3em] font-light"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          WITH LOVE • FOR YOU
        </p>
        <div className="h-20 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
      </div>
    </div>
  );
};

export default Home;