"use client";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rakesh Kumar",
    review:
      "Buy 2 Hand se iPhone liya tha — product bilkul new jaisa tha! Staff bhi friendly tha 🔥",
    rating: 5,
  },
  {
    name: "Priya Sahoo",
    review:
      "4 months warranty aur 15 days return policy ne mujhe impress kar diya. Must visit store!",
    rating: 5,
  },
  {
    name: "Amit Nayak",
    review:
      "Scratch & Win offer me fan jeeta! Bahut genuine shop hai Bhubaneswar me ❤️",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] text-white overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-black to-transparent blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 drop-shadow-[0_0_15px_rgba(255,120,0,0.5)]"
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255,120,0,0.6)",
                borderColor: "rgba(255,120,0,0.9)",
              }}
              className="group relative p-8 bg-[#141414]/90 border border-gray-800 rounded-2xl shadow-[0_0_20px_rgba(255,100,0,0.05)] transition-all duration-300 hover:bg-[#1a1a1a]/90"
            >
              {/* ✨ Star Row */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.2 }}
                className="flex justify-center mb-4"
              >
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <motion.div
                    key={idx}
                    animate={{
                      opacity: [0.7, 1, 0.7],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                  >
                    <FaStar className="text-yellow-400 mx-1 drop-shadow-[0_0_8px_rgba(255,200,0,0.6)]" />
                  </motion.div>
                ))}
              </motion.div>

              {/* 💬 Review Text */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.2 }}
                className="text-gray-300 italic mb-6 leading-relaxed"
              >
                “{t.review}”
              </motion.p>

              {/* 👤 Name */}
              <motion.h4
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.2 }}
                className="font-semibold text-lg text-orange-400 drop-shadow-[0_0_10px_rgba(255,100,0,0.6)]"
              >
                — {t.name}
              </motion.h4>

              {/* 🔥 Hover Glow Animation */}
              <div className="absolute inset-0 rounded-2xl border border-orange-600/10 group-hover:border-orange-500/40 transition-all duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-orange-600/10 via-transparent to-yellow-500/10 rounded-2xl blur-2xl transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
