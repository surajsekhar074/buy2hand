"use client";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";
import OfferBanner from "../components/OfferBanner";
import FloatingButtons from "../components/FloatingButtons";
import VideoSection from "../components/VideoSection";
import ThreeHero from "@/components/Hero3D";
import Hero3D from "@/components/Hero3D";











export default function Home() {
  return (
    
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6">
     {/* 🔥 Responsive Navbar (mobile + desktop both) */}
<motion.nav
  initial={{ y: -40, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-orange-900/20 flex justify-between items-center px-6 md:px-16 py-4"
>
  {/* 🔸 Logo */}
  <div className="flex items-center gap-2">
    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-100 tracking-wide">
      Buy
      <span className="text-orange-600 drop-shadow-[0_0_8px_rgba(255,100,0,0.8)]">
        2
      </span>
      Hand
    </h1>
  </div>

  {/* 🔹 Desktop Nav Links */}
  <div className="hidden md:flex items-center gap-10 text-gray-300 text-sm font-medium">
    <a href="#about" className="hover:text-orange-500 transition-all">
      About
    </a>
    <a href="#collection" className="hover:text-orange-500 transition-all">
      Collection
    </a>
    <a href="/faq" className="hover:text-orange-500 transition-all">
      FAQ
    </a>
  </div>

  {/* 🔸 Contact Button (Desktop) */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="hidden md:block px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-xl shadow-[0_0_20px_rgba(255,100,0,0.4)]"
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
  >
    Contact Us
  </motion.button>

  {/* 🔸 Mobile Menu Button */}
  <button
    onClick={() =>
      document
        .getElementById("mobileMenu")
        ?.classList.toggle("hidden")
    }
    className="md:hidden text-gray-200"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  </button>
</motion.nav>

{/* 🔹 Mobile Menu (Hidden by default) */}
<div
  id="mobileMenu"
  className="hidden md:hidden fixed top-[70px] left-0 w-full bg-black/90 backdrop-blur-md border-t border-orange-900/30 flex flex-col items-center py-6 gap-6 text-gray-300 text-base z-40"
>
  <a
    href="#about"
    onClick={() =>
      document.getElementById("mobileMenu")?.classList.add("hidden")
    }
    className="hover:text-orange-500 transition-all"
  >
    About
  </a>
  <a
    href="#collection"
    onClick={() =>
      document.getElementById("mobileMenu")?.classList.add("hidden")
    }
    className="hover:text-orange-500 transition-all"
  >
    Collection
  </a>
  <a
    href="/faq"
    onClick={() =>
      document.getElementById("mobileMenu")?.classList.add("hidden")
    }
    className="hover:text-orange-500 transition-all"
  >
    FAQ
  </a>
  <button
    className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-xl shadow-[0_0_20px_rgba(255,100,0,0.4)]"
    onClick={() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      document.getElementById("mobileMenu")?.classList.add("hidden");
    }}
  >
    Contact Us
  </button>
</div>


<Hero3D />



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

{/* 🌟 Responsive Collection Section */}
<section
  id="collection"
  className="relative w-full bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] py-20 md:py-24 px-4 sm:px-6 lg:px-10 flex flex-col items-center overflow-hidden"
>
  {/* 🔥 Animated orange glow background */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.25 }}
    transition={{ duration: 2 }}
    className="absolute inset-0 pointer-events-none"
  >
    <div className="absolute top-10 left-5 sm:left-10 w-40 sm:w-56 h-40 sm:h-56 bg-orange-600/30 blur-[100px] animate-pulse" />
    <div className="absolute bottom-0 right-5 sm:right-10 w-52 sm:w-72 h-52 sm:h-72 bg-orange-400/20 blur-[100px] animate-pulse" />
  </motion.div>

  {/* 🧡 Title */}
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center mb-10 sm:mb-14 text-white tracking-wide relative z-10"
  >
    Our <span className="text-orange-500 drop-shadow-[0_0_12px_rgba(255,100,0,0.6)]">Collection</span>
  </motion.h2>

  {/* 📱 Phones Grid */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-[90vw] sm:max-w-5xl lg:max-w-6xl relative z-10"
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
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        whileHover={{
          scale: 1.06,
          boxShadow: "0 0 20px rgba(255,120,0,0.4)",
          rotateY: 4,
        }}
        className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-orange-900/30 bg-[#141414]/70 backdrop-blur-md cursor-pointer group transition-all duration-500"
      >
        {/* 📸 Image */}
        <img
          src={src}
          alt={`Phone ${index + 1}`}
          className="w-full h-40 sm:h-52 md:h-64 object-cover rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:opacity-90"
        />

        {/* ✨ Reflection Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

        {/* 🔸 Hover Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-2 sm:bottom-3 left-2 sm:left-4 text-[10px] sm:text-sm text-orange-400 font-semibold drop-shadow-[0_0_8px_rgba(255,100,0,0.6)]"
        >
          Tap to Explore 🔥
        </motion.p>
      </motion.div>
    ))}
  </motion.div>

  {/* 🧾 Footer Note */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 1 }}
    viewport={{ once: true }}
    className="mt-8 sm:mt-10 md:mt-14 text-gray-400 text-xs sm:text-sm text-center relative z-10 px-4"
  >
    *Images shown are for display purposes — visit our store for the latest offers.
  </motion.p>

  {/* ✨ Divider Line */}
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "70%" }}
    transition={{ duration: 1.5, delay: 0.3 }}
    viewport={{ once: true }}
    className="h-[1.5px] mt-8 sm:mt-10 mx-auto bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full shadow-[0_0_12px_rgba(255,120,0,0.6)]"
  />
</section>

{/* Contact / Visit Section */}
<section
id="contact"
className="w-full bg-[#0e0e0e] py-20 px-6 flex flex-col items-center text-center">
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

{/* Map Section - Stylish Two Boxes */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.7, duration: 1 }}
  viewport={{ once: true }}
  className="w-full max-w-4xl mt-16 grid md:grid-cols-2 gap-6"
>
  {/* 🔸 Bapuji Nagar Location Box */}
  <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 text-center hover:border-orange-500 transition-all shadow-[0_0_15px_rgba(255,120,0,0.1)]">
    <h3 className="text-lg font-semibold text-orange-500 mb-2">📍 Bapuji Nagar</h3>
    <p className="text-sm text-gray-400 mb-4">
      Main Shop, Lane 11, Near Durga Mandir, Bhubaneswar – 751008
    </p>
    <motion.a
      href="https://maps.app.goo.gl/kxZTQMN22pHznvy29"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-xs font-medium px-5 py-2 rounded-lg shadow-[0_0_10px_rgba(255,120,0,0.4)] transition-all"
    >
      View on Map →
    </motion.a>
  </div>

  {/* 🔸 Saheed Nagar Location Box */}
  <div className="bg-[#141414] border border-gray-800 rounded-2xl p-6 text-center hover:border-orange-500 transition-all shadow-[0_0_15px_rgba(255,120,0,0.1)]">
    <h3 className="text-lg font-semibold text-orange-500 mb-2">📍 Saheed Nagar</h3>
    <p className="text-sm text-gray-400 mb-4">
      Near Vani Vihar Square, Saheed Nagar, Bhubaneswar – 751007
    </p>
    <motion.a
      href="https://maps.app.goo.gl/e1TZRwukatByq5Na6"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-xs font-medium px-5 py-2 rounded-lg shadow-[0_0_10px_rgba(255,120,0,0.4)] transition-all"
    >
      View on Map →
    </motion.a>
  </div>
</motion.div>

  
</section>
<div className="h-24"></div> {/* Floating buttons ke liye space */}



{/* Footer Section */}
<footer  id="footer"
  className=" pb-24 w-full bg-black border-t border-gray-800 text-gray-400 py-8 md:py-10 px-4 md:px-6 mt-16 md:mt-20 text-center relative"
>
  {/* Scroll to top button */}
  <motion.button
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="absolute right-4 top-4 md:right-6 md:top-6 bg-orange-600 hover:bg-orange-700 text-white px-2.5 md:px-3 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold"
  >
    ↑ Top
  </motion.button>

  <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
    Buy<span className="text-orange-500">2</span>Hand
  </h2>
  <p className="text-xs md:text-sm mb-3 md:mb-4">(A Unit of Laxmi Mobile)</p>

  <div className="flex justify-center gap-5 md:gap-8 mb-5 md:mb-6">
    {/* Instagram */}
    <a
      href="https://www.instagram.com/buy2hand_bbsr"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 md:gap-2 hover:text-pink-500 transition-all text-xs md:text-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 md:w-5 md:h-5"
      >
        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm4.5 3.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2A3 3 0 1 0 12 16a3 3 0 0 0 0-6zm5.75-.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z" />
      </svg>
      Instagram
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/919114116168"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 md:gap-2 hover:text-green-500 transition-all text-xs md:text-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 md:w-5 md:h-5"
      >
        <path d="M16.75 14.3c-.25-.12-1.48-.73-1.71-.82-.23-.09-.4-.12-.57.12-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.01-1.23-.74-.65-1.23-1.46-1.38-1.71-.14-.25-.02-.39.11-.52.12-.12.25-.31.37-.46.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.57-1.36-.79-1.86-.21-.5-.42-.43-.57-.44-.15-.01-.31-.01-.48-.01a.92.92 0 0 0-.67.31c-.23.25-.89.87-.89 2.12s.91 2.46 1.03 2.63c.12.17 1.8 2.76 4.35 3.87.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.48-.61 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.12-.23-.19-.48-.31zM12 2C6.48 2 2 6.23 2 11.2c0 1.8.48 3.48 1.39 4.98L2 22l6.07-1.93c1.56.85 3.34 1.3 5.15 1.3 5.52 0 10-4.23 10-9.2S17.52 2 12 2z" />
      </svg>
      WhatsApp
    </a>

    {/* Call */}
    <a
      href="tel:+919114116168"
      className="flex items-center gap-1.5 md:gap-2 hover:text-blue-500 transition-all text-xs md:text-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-4 h-4 md:w-5 md:h-5"
      >
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.48a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
      </svg>
      Call Now
    </a>
  </div>

  <p className="text-[10px] md:text-xs text-gray-600">
    © {new Date().getFullYear()} Buy 2 Hand — All Rights Reserved.
  </p>
</footer>
<FloatingButtons /> 





    </main>
  );
}
