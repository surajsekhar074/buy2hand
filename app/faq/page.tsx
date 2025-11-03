"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Instagram, Facebook, Youtube } from "lucide-react";

export default function FAQ() {
  const router = useRouter();

  const faqs = [
    {
      q: "Buy2Hand kya hai?",
      a: "Buy2Hand ek trusted pre-owned mobile store hai (A Unit of Laxmi Mobile) jahan aapko verified second-hand phones milte hain premium condition me.",
    },
    {
      q: "Kya phones warranty ke saath milte hain?",
      a: "Haan bhai! Har phone ke saath 4-month warranty milti hai, taaki aap bina tension use kar sako.",
    },
    {
      q: "Agar phone pasand nahi aaya toh return ho sakta hai kya?",
      a: "Bilkul. Buy2Hand deta hai 15-day cash return policy — full transparency ke saath.",
    },
    {
      q: "Kya EMI ya online payment option available hai?",
      a: "Abhi ke liye cash aur UPI payment accepted hai, lekin jaldi hi EMI option bhi add hoga.",
    },
    {
      q: "Aapke store kahan hain?",
      a: "Hamaare 2 branches hain — Bapuji Nagar aur Saheed Nagar, Bhubaneswar.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a] text-gray-100 py-24 px-6 flex flex-col items-center">
      {/* 🔙 Back Button - Top Left */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-xl font-semibold text-sm md:text-base shadow-[0_0_20px_rgba(255,120,0,0.5)] transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </motion.button>

      {/* 🧾 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 mt-12"
      >
        Frequently Asked{" "}
        <span className="text-orange-500 drop-shadow-[0_0_12px_rgba(255,120,0,0.8)]">
          Questions
        </span>
      </motion.h1>

      {/* ❓FAQ Cards */}
      <div className="max-w-3xl mx-auto space-y-6 w-full">
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border border-gray-800 rounded-2xl p-6 bg-gradient-to-br from-[#111] to-[#1c1c1c] hover:shadow-[0_0_15px_rgba(255,120,0,0.2)] transition-all duration-300"
          >
            <h2 className="text-lg md:text-xl font-semibold text-orange-400 mb-2">
              {item.q}
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🌐 Social / News Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h2 className="text-xl md:text-2xl font-bold text-orange-400 mb-3">
          Stay Updated with{" "}
          <span className="text-white">Buy2Hand</span>
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          Follow us on social media for latest offers, product drops & store news 🔥
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/buy2hand_bbsr"
            target="_blank"
            className="text-orange-500 hover:text-orange-400 transition-all"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="text-orange-500 hover:text-orange-400 transition-all"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="text-orange-500 hover:text-orange-400 transition-all"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
