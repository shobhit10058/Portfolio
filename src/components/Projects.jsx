import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects, categories } from "../data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-violet-400 bg-clip-text text-transparent"
      >
        Projects
      </motion.h2>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mb-10"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeCategory === cat
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                : "bg-white/5 text-gray-400 border border-white/10 hover:border-purple-500/50 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Highlight Badge */}
              {project.highlight && (
                <span className="inline-block self-start mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  {project.highlight}
                </span>
              )}

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <FaGithub className="text-base" />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
