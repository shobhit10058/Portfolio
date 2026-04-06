import { useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useState } from "react";

/* ───── Animated counter hook ───── */
const useAnimatedCounter = (end, duration = 2, inView = false) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, end, {
      duration,
      onUpdate: (v) => setValue(parseFloat(v.toFixed(2))),
    });
    return () => controls.stop();
  }, [end, duration, inView]);

  return value;
};

const StatCard = ({ value, suffix = "", label }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useAnimatedCounter(parseFloat(value), 2, inView);

  // Format: integers stay integers, decimals keep 2 places
  const display = Number.isInteger(parseFloat(value))
    ? Math.floor(count)
    : count.toFixed(2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex-1 min-w-[140px] text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-colors duration-300"
    >
      <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-gray-400">{label}</p>
    </motion.div>
  );
};

/* ───── Variants ───── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const About = () => {
  const stats = [
    { value: "3", suffix: "+", label: "Years Experience" },
    { value: "10", suffix: "M+", label: "API Calls Scaled" },
    { value: "1", suffix: "M+", label: "Daily Requests" },
    { value: "9.03", suffix: "", label: "CGPA" },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile photo placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="shrink-0"
          >
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-400/20 border border-white/10 flex items-center justify-center">
              <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent select-none">
                SG
              </span>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex-1">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="text-gray-300 leading-relaxed text-lg"
            >
              I&apos;m a Senior Backend Engineer with 3+ years of experience
              building high-performance distributed systems. From scaling APIs
              to 10M+ calls/month at Wayground to architecting Kafka-based
              microservices handling 1M+ requests/day at Sprinklr, I thrive on
              solving complex engineering challenges. Currently building
              real-time Voice AI at Dialflo. IIT Kharagpur graduate with a
              passion for competitive programming.
            </motion.p>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-6">
          {stats.map((s) => (
            <StatCard
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
