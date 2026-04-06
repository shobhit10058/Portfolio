import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork, MdSchool } from "react-icons/md";
import { experiences } from "../data/experience";

const Experience = () => {
  const contentStyle = {
    background: "rgba(139, 92, 246, 0.05)",
    border: "1px solid rgba(139, 92, 246, 0.2)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(12px)",
    color: "#e2e8f0",
    padding: "1.75rem 2rem",
  };

  const contentArrowStyle = {
    borderRight: "8px solid rgba(139, 92, 246, 0.2)",
  };

  const iconStyle = {
    background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
    color: "#fff",
  };

  const educationIconStyle = {
    background: "linear-gradient(135deg, #06b6d4, #0891b2)",
    boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)",
    color: "#fff",
  };

  return (
    <section id="experience" className="relative py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <VerticalTimeline lineColor="rgba(139, 92, 246, 0.3)" animate={true}>
          {experiences.map((exp, index) => {
            const isEducation = exp.icon === "education";
            return (
              <VerticalTimelineElement
                key={index}
                date={exp.date}
                dateClassName="text-gray-400 font-medium"
                contentStyle={contentStyle}
                contentArrowStyle={contentArrowStyle}
                iconStyle={isEducation ? educationIconStyle : iconStyle}
                icon={isEducation ? <MdSchool /> : <MdWork />}
                visible={true}
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {exp.title}
                </h3>
                <h4 className="text-sm sm:text-base font-semibold text-purple-400 mt-2">
                  {exp.company}
                  {exp.location && (
                    <span className="text-gray-500 font-normal">
                      {" "}
                      &middot; {exp.location}
                    </span>
                  )}
                </h4>

                {/* Bullet Points */}
                <ul className="mt-6 space-y-4 list-disc list-inside">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-300 leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/10">
                  {exp.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full
                        bg-purple-500/10 text-purple-300 border border-purple-500/20
                        hover:bg-purple-500/20 hover:border-purple-500/40
                        transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
