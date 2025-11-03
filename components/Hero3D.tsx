"use client";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";

// 🧱 Auto-normalized iPhone Component
function IPhoneModel({ path, position, rotation }: any) {
  const { scene } = useGLTF(path);
  const ref = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!ref.current) return;
    const model = scene.clone();

    // 📦 Normalize model height
    const box = new THREE.Box3().setFromObject(model);
    const size = new THREE.Vector3();
    box.getSize(size);
    const scaleFactor = 3.7 / size.y; // target height

    model.scale.setScalar(scaleFactor);
    model.position.set(position[0], position[1], position[2]);
    model.rotation.set(rotation[0], rotation[1], rotation[2]);

    model.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.envMapIntensity = 1.2;
      }
    });

    ref.current.add(model);
  }, [scene, position, rotation]);

  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.2}>
      <group ref={ref} />
    </Float>
  );
}

// 🌟 Hero Section
export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  // ⚡ Entry Animation
  useEffect(() => {
    gsap.fromTo(
      ".hero-glass",
      { scale: 1.3, opacity: 0, rotateY: 45 },
      { scale: 1, opacity: 1, rotateY: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[100vh] overflow-hidden flex flex-col justify-between pt-20 md:pt-24 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a]"
    >
      {/* 🔥 Orange glow overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 via-transparent to-orange-700/20 blur-3xl pointer-events-none"
      />

      {/* 🧾 Text Section */}
      <div className="px-6 md:px-20 flex flex-col items-center md:items-start text-center md:text-left space-y-2 z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-100"
        >
          Buy
          <span className="text-orange-600 drop-shadow-[0_0_12px_rgba(255,100,0,0.8)]">
            2
          </span>
          Hand
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm md:text-lg text-gray-400"
        >
          (A Unit of Laxmi Mobile)
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-300 text-xs md:text-base mt-1 max-w-md leading-relaxed"
        >
          Pre-Owned Mobile Store | Best Price | 4-Month Warranty | 15-Day Return Policy
        </motion.p>
      </div>

      {/* 📱 Floating iPhones - Desktop & Mobile Optimized */}
      <div
        className="w-full mt-10 md:mt-0 md:absolute md:right-[5%] md:top-[25%] md:w-[45%] h-[45vh] md:h-[55vh] hero-glass flex justify-center items-center"
      >
        <Canvas camera={{ position: [0, 0, 7], fov: 55 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={2.5} />
          <Suspense fallback={null}>
            <IPhoneModel
              path="/models/iphone1.glb"
              position={[-1.2, 0, 0]}
              rotation={[0, 0.3, 0]}
            />
            <IPhoneModel
              path="/models/iphone2.glb"
              position={[1.2, 0, 0]}
              rotation={[0, -0.3, 0]}
            />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.3} />
        </Canvas>

        {/* ✨ Subtext below phones */}
        <p className="absolute -bottom-8 md:-bottom-14 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 text-sm md:text-xl font-extrabold tracking-wider drop-shadow-[0_0_12px_rgba(255,100,0,0.7)]">
          Pre-Owned but Premium
        </p>
      </div>

      {/* ⚡ Bottom Info */}
      <div className="mt-10 md:mt-0 md:absolute bottom-10 left-0 md:left-20 w-full flex flex-col items-center md:items-start text-center md:text-left px-6 md:px-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-orange-400 text-xs md:text-sm italic mb-3"
        >
          We are the number one pre-owned mobile dealer all over Odisha 🔥
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-xl font-semibold text-sm md:text-base transition-all shadow-[0_0_20px_rgba(255,100,0,0.5)]"
        >
          Explore More
        </motion.button>
      </div>
    </div>
  );
}
