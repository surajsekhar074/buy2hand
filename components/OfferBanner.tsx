"use client";
import { motion } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";

const OfferBanner = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-red-600 to-black py-16 px-6 text-center overflow-hidden">
      {/* Floating sparkles background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="flex justify-center mb-4">
          <Gift className="text-yellow-400 w-10 h-10 animate-bounce" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Exciting <span className="text-yellow-400">Offers & Gifts!</span>
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-6">
          Every phone purchase comes with a chance to win amazing rewards —
          <span className="text-yellow-400"> TVs, Fans, Irons, Cashback,</span> and more!
          Scratch your card and reveal your surprise 🎊
        </p>

        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all"
        >
          <Sparkles className="w-5 h-5" />
          Know More on WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
};

export default OfferBanner;
