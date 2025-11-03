"use client";
import { motion } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";

const OfferBanner = () => {
  return (
    <section className="relative w-full py-24 px-6 text-center overflow-hidden bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] border-t border-orange-900/30">
      
      {/* 🔥 Animated background orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <div className="absolute -top-32 left-10 w-64 h-64 bg-orange-600 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl opacity-20 animate-pulse" />
      </motion.div>

      {/* ✨ Floating spark particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"
      />

      {/* 🧡 Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* 🎁 Icon Animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-6"
        >
          <Gift className="text-orange-500 w-14 h-14 drop-shadow-[0_0_12px_rgba(255,120,0,0.6)]" />
        </motion.div>

        {/* 🏆 Main Title */}
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-white tracking-wide"
        >
          Unlock <span className="text-orange-500 text-glow">Exclusive Offers</span>
        </motion.h2>

        {/* 🧾 Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-8"
        >
          Every purchase brings a chance to <span className="text-orange-400 font-semibold">win premium gifts</span> —
          <span className="text-white font-semibold"> TVs, Fans, Irons, Cashback</span>, and more!  
          Scratch your surprise card & celebrate with <span className="text-orange-400">Buy2Hand 🎉</span>
        </motion.p>

        {/* ✨ Button */}
        <motion.a
          href="https://wa.me/919114116168"
          target="_blank"
          whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(255,120,0,0.6)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-full shadow-[0_0_25px_rgba(255,100,0,0.4)] transition-all"
        >
          <Sparkles className="w-5 h-5 animate-spin-slow" />
          Know More on WhatsApp
        </motion.a>
      </motion.div>

      {/* 🌟 Bottom glow line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80%" }}
        transition={{ duration: 1.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="h-[2px] mt-14 mx-auto bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full shadow-[0_0_15px_rgba(255,120,0,0.6)]"
      />
    </section>
  );
};

export default OfferBanner;
