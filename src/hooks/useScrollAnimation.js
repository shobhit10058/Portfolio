import { useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

// --- Variant objects (use directly with whileInView) ---

export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// --- Hook for imperative control ---

export function useScrollAnimation(threshold = 0.2) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return { ref, controls, variants: fadeInUp };
}

export default useScrollAnimation;
