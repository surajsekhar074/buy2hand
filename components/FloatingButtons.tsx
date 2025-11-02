"use client";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/+9114116168" // 👉 yahan apna WhatsApp number daalna (with country code)
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919556970609" // 👉 yahan apna calling number daalna
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-orange-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <FaPhoneAlt size={22} />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
