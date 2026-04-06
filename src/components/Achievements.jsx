import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaMeta, FaTrophy, FaMedal } from "react-icons/fa6";
import {
  competitiveProgramming,
  competitionHighlights,
} from "../data/achievements";

const iconMap = {
  google: FaGoogle,
  meta: FaMeta,
  trophy: FaTrophy,
  award: FaMedal,
};

/* ---- Animated counter hook ---- */
const useCountUp = (target, duration = 1.6) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
};

/* ---- CP Rating Card ---- */
const RatingCard = ({ platform, rating, handle, link, color, index }) => {
  const { count, ref } = useCountUp(rating);

  return (
    <motion.a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300 block"
    >
      <p className="text-sm text-gray-400 mb-1 font-medium">{platform}</p>
      <p
        className="text-4xl sm:text-5xl font-bold mb-2"
        style={{ color }}
      >
        {count}
      </p>
      <p className="text-xs text-gray-500">@{handle}</p>
    </motion.a>
  );
};

/* ---- Competition Card ---- */
const CompetitionCard = ({ title, detail, icon, index }) => {
  const Icon = iconMap[icon] || FaTrophy;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 flex items-start gap-4 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="shrink-0 mt-1 w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
        <Icon className="text-lg" />
      </div>
      <div>
        <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{detail}</p>
      </div>
    </motion.div>
  );
};

/* ---- Main Component ---- */
const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-purple-500 to-violet-400 bg-clip-text text-transparent"
      >
        Achievements
      </motion.h2>

      {/* CP Ratings */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
        {competitiveProgramming.map((cp, i) => (
          <RatingCard key={cp.platform} {...cp} index={i} />
        ))}
      </div>

      {/* Competition Highlights */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl font-semibold text-white mb-6"
      >
        Competition Highlights
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {competitionHighlights.map((item, i) => (
          <CompetitionCard key={item.title} {...item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
