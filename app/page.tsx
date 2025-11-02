"use client";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";
import OfferBanner from "../components/OfferBanner";
import FloatingButtons from "../components/FloatingButtons";
import VideoSection from "../components/VideoSection";








export default function Home() {
  return (
    
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6">
      {/* Navbar */}
      
      <nav className="w-full flex justify-between items-center py-5 px-6 border-b border-gray-800 fixed top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold tracking-wide">
          Buy<span className="text-orange-500">2</span>Hand
        </h1>
        <button
  onClick={() =>
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-xl font-semibold text-sm transition-all"
>
  Contact Us
</button>
      </nav>
      

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-2"
        >
          Buy<span className="text-orange-500"> 2 </span>Hand
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-400 text-lg"
        >
          (A Unit of Laxmi Mobile)
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-gray-300 max-w-xl"
        >
          Pre-Owned Mobile Store | Best Price | 4-Month Warranty | 15-Day Return Policy
        </motion.p>

        <motion.button
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.3, duration: 0.5 }}
  onClick={() =>
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="mt-8 px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-xl font-semibold text-lg transition-all"
>
  Explore More
</motion.button>

      </section>

      {/* About Section */}
<section 
id="about"
className="w-full bg-[#0e0e0e] py-20 px-6 flex flex-col items-center">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-bold text-center mb-10"
  >
    About <span className="text-orange-500">Us</span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 1 }}
    viewport={{ once: true }}
    className="max-w-3xl text-center text-gray-400 text-lg leading-relaxed"
  >
    At <span className="text-orange-500 font-semibold">Buy 2 Hand</span>, we believe in giving every phone a
    second life. We offer high-quality, pre-owned smartphones at unbeatable prices,
    with a <span className="text-white font-semibold">4-month warranty</span> and a
    <span className="text-white font-semibold"> 15-day cash return policy</span>.
    Our goal is to make premium phones accessible and affordable for everyone.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 1 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-3 gap-6 mt-14 w-full max-w-5xl"
  >
    {/* Card 1 */}
    <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 hover:border-orange-500 transition-all">
      <h3 className="text-xl font-semibold mb-2 text-orange-500">Best Price Guarantee</h3>
      <p className="text-gray-400 text-sm">
        Get premium smartphones at the most affordable prices in the market.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 hover:border-orange-500 transition-all">
      <h3 className="text-xl font-semibold mb-2 text-orange-500">4-Month Warranty</h3>
      <p className="text-gray-400 text-sm">
        Every phone is tested and comes with a warranty for your peace of mind.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 hover:border-orange-500 transition-all">
      <h3 className="text-xl font-semibold mb-2 text-orange-500">15-Day Return Policy</h3>
      <p className="text-gray-400 text-sm">
        Didn’t like your device? Return it within 15 days — no questions asked.
      </p>
    </div>
  </motion.div>
</section>

<Testimonials />
<VideoSection />

<OfferBanner />

{/* Gallery Section */}
<section className="w-full bg-[#0a0a0a] py-20 px-6 flex flex-col items-center">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-bold text-center mb-10"
  >
    Our <span className="text-orange-500">Collection</span>
  </motion.h2>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl"
  >
    {[
      "/phones/p1.jfif",
      "/phones/p2.jfif",
      "/phones/p3.jfif",
      "/phones/p4.jfif",
      "/phones/p5.jfif",
      "/phones/p6.jfif",
      "/phones/p7.jfif",
      "/phones/p8.jfif",
    ].map((src, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="overflow-hidden rounded-2xl border border-gray-800 hover:border-red-500 cursor-pointer"
      >
        <img
          src={src}
          alt={`Phone ${index + 1}`}
          className="w-full h-56 object-cover hover:opacity-90 transition-all"
        />
      </motion.div>
    ))}
  </motion.div>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 1 }}
    viewport={{ once: true }}
    className="mt-10 text-gray-400 text-sm text-center"
  >
    *Images shown are for display purposes — visit our store for the latest offers.
  </motion.p>
</section>
{/* Contact / Visit Section */}
<section className="w-full bg-[#0e0e0e] py-20 px-6 flex flex-col items-center text-center">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-4xl md:text-5xl font-bold text-center mb-10"
  >
    Visit <span className="text-orange-500">Us</span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 1 }}
    viewport={{ once: true }}
    className="text-gray-400 max-w-2xl text-lg mb-10 leading-relaxed"
  >
    We’re located in Bhubaneswar and serve customers from all over Odisha.
    Visit our store to explore premium pre-owned mobiles or contact us directly!
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 1 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-3 gap-6 max-w-5xl w-full"
  >
    {/* Card – Address */}
    <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 hover:border-orange-500 transition-all">
      <h3 className="text-xl font-semibold mb-2 text-orange-500">Our Location</h3>
      <p className="text-gray-400 text-sm">
        Main Shop, Lane 11, Bapuji Nagar, Near Durga Mandir, Bhubaneswar – 751008, Odisha
      </p>
    </div>

    {/* Card – Call */}
    <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 hover:border-orange-500 transition-all">
      <h3 className="text-xl font-semibold mb-2 text-orange-500">Call Us</h3>
      <p className="text-gray-400 text-sm">
        📞 +91 91141 16168
        
      </p>
      <p className="text-gray-400 text-sm">
        📞 +91 95569 70609
        
      </p>
    </div>

    {/* Card – WhatsApp */}
    <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 hover:border-orange-500 transition-all">
      <h3 className="text-xl font-semibold mb-2 text-orange-500">WhatsApp Channel</h3>
      <a
        href="https://whatsapp.com/channel/0029VaAeHqe9Bb669GoLqX0J
"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 text-sm hover:underline"
      >
        Join latest update →
      </a>
    </div>
  </motion.div>

  {/* Map Placeholder */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.7, duration: 1 }}
    viewport={{ once: true }}
    className="w-full max-w-4xl mt-16 border border-gray-800 rounded-2xl overflow-hidden"
  >
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14666.546033015344!2d85.818!3d20.296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7e2b17b8a01%3A0xb55ad4e42b2d3e29!2sBhubaneswar!5e0!3m2!1sen!2sin!4v1691234567890"
  width="100%"
  height="300"
  allowFullScreen
  loading="lazy"
  className="border-0"
/>

  </motion.div>
</section>
{/* Footer Section */}
<footer 
id="contact"
className="w-full bg-black border-t border-gray-800 text-gray-400 py-10 px-6 mt-20 text-center relative">
  {/* Scroll to top button */}
  <motion.button
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="absolute right-6 top-6 bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-lg text-sm font-semibold"
  >
    ↑ Top
  </motion.button>

  <h2 className="text-2xl font-bold mb-2">
    Buy<span className="text-orange-500">2</span>Hand
  </h2>
  <p className="text-sm mb-4">(A Unit of Laxmi Mobile)</p>

  <div className="flex justify-center gap-5 mb-6">
    <a
      href="https://www.instagram.com/buy2hand_bbsr"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-red-500 transition-all"
    >
      Instagram
    </a>
    <a
      href="https://wa.me/919114116168"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-500 transition-all"
    >
      WhatsApp
    </a>
    <a
      href="tel:+919114116168"
      className="hover:text-blue-500 transition-all"
    >
      Call Now
    </a>
  </div>

  <p className="text-xs text-gray-600">
    © {new Date().getFullYear()} Buy 2 Hand — All Rights Reserved.  
  </p>
</footer>
<FloatingButtons />




    </main>
  );
}
