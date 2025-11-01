"use client";
import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    title: "Customer Reaction 1",
    url: "https://www.youtube.com/embed/izbydia9jz4", // 👈 Yahan apna YouTube ya reel link embed karo
  },
  {
    id: 2,
    title: "Customer Reaction 2",
    url: "https://www.youtube.com/embed/JjOe5aRnjL8",
  },
  {
    id: 3,
    title: "Customer Reaction 3",
    url: "https://www.youtube.com/embed/2Vv-BfVoq4g",
  },
];

const VideoSection = () => {
  return (
    <section className="w-full bg-[#0a0a0a] py-20 px-6 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-10"
      >
        Customer <span className="text-red-500">Reactions</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl"
      >
        {videos.map((vid) => (
          <motion.div
            key={vid.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-xl border border-gray-800 shadow-md"
          >
            <iframe
              src={vid.url}
              title={vid.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 rounded-xl"
            ></iframe>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default VideoSection;
