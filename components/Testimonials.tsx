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
    <section className="py-16 bg-black text-white" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10"
        >
          What Our Customers Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg"
            >
              <div className="flex justify-center mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-400 mx-1" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-4">{t.review}</p>
              <h4 className="font-semibold text-lg text-blue-400">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
