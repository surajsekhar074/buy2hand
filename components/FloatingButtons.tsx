"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: isFooterVisible ? -50 : 0, // slides up when footer visible
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed right-6 flex flex-col gap-4 z-50 transition-all duration-500 ${
        isFooterVisible ? "bottom-32" : "bottom-6"
      }`}
    >
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/+9114116168"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-transform"
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919556970609"
        whileHover={{ scale: 1.15, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        className="bg-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-transform"
      >
        <FaPhoneAlt size={22} />
      </motion.a>
    </motion.div>
  );
};

export default FloatingButtons;
