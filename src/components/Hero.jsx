import { useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import ParticleField from "./three/ParticleField";
import FloatingGeometry from "./three/FloatingGeometry";
import { PERSONAL } from "../utils/constants";

const ROLES = [
  "Senior Backend Engineer",
  "Distributed Systems",
  "Voice AI & LLM",
  "Competitive Programmer",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

function useTypingEffect(strings) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = strings[index];

    if (!isDeleting) {
      if (displayText.length < current.length) {
        return { text: current.slice(0, displayText.length + 1), delay: TYPING_SPEED };
      }
      return { text: displayText, delay: PAUSE_AFTER_TYPE, startDelete: true };
    }

    if (displayText.length > 0) {
      return { text: displayText.slice(0, -1), delay: DELETING_SPEED };
    }
    return { text: "", delay: PAUSE_AFTER_DELETE, nextWord: true };
  }, [displayText, index, isDeleting, strings]);

  useEffect(() => {
    const { text, delay, startDelete, nextWord } = tick();

    const timer = setTimeout(() => {
      setDisplayText(text);
      if (startDelete) setIsDeleting(true);
      if (nextWord) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % strings.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [tick, strings.length]);

  return displayText;
}

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const typedText = useTypingEffect(ROLES);

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-[#0a0a0f]"
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[-5, -5, 5]} intensity={0.5} color="#06b6d4" />
          <ParticleField />
          <FloatingGeometry />
        </Canvas>
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/40 via-transparent to-[#0a0a0f]/80 pointer-events-none" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base tracking-widest uppercase text-cyan-400 mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6"
        >
          {PERSONAL.name}
        </motion.h1>

        {/* Typing text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-8"
        >
          <span className="text-lg sm:text-xl md:text-2xl font-medium text-purple-400">
            {typedText}
          </span>
          <span className="ml-0.5 w-[2px] h-6 sm:h-7 bg-purple-400 animate-pulse" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3 rounded-full font-semibold text-white border border-purple-500/50 hover:border-cyan-400/50 hover:bg-white/5 transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Scroll-down chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => scrollTo("#about")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            Scroll Down
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-cyan-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
