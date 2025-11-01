"use client";
import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: "#0a0a0a" }, // dark theme background
      },
      fullScreen: { enable: false },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#00bfff" }, // neon blue color
        move: {
          enable: true,
          speed: 0.6, // slow smooth motion
          direction: "none",
          outModes: { default: "bounce" },
        },
        number: { value: 60, density: { enable: true, area: 800 } },
        opacity: {
          value: 0.4,
          random: true,
          animation: {
            enable: true,
            speed: 0.8,
            minimumValue: 0.1,
            sync: false,
          },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#00bfff",
          opacity: 0.2,
          width: 1,
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.5,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">

      <Particles id="tsparticles" options={options} />
    </div>
  );
}
