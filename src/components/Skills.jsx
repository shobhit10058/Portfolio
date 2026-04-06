import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="relative py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        {/* Skill Categories */}
        <div className="space-y-10">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx}>
              {/* Category Title */}
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl sm:text-2xl font-semibold text-purple-300 mb-5 pl-1"
              >
                {category.title}
              </motion.h3>

              {/* Skills Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6"
              >
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skillIdx}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 40px rgba(139, 92, 246, 0.2)",
                      }}
                      className="group relative flex items-center gap-3 px-5 py-4 rounded-xl
                        bg-white/5 backdrop-blur-md border border-white/10
                        hover:border-purple-500/40 hover:bg-white/[0.08]
                        transition-all duration-300 cursor-default"
                    >
                      {/* Glow backdrop on hover */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

                      <Icon className="relative z-10 text-xl sm:text-2xl text-cyan-400 group-hover:text-purple-400 transition-colors duration-300 flex-shrink-0" />
                      <span className="relative z-10 text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
