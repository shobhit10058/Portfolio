import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts } from "../data/blog-posts";
import BlogPost from "./BlogPost";
import { fadeInUp, staggerContainer } from "../hooks/useScrollAnimation";

const TAG_COLORS = {
  Backend: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Scaling: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Redis: "bg-red-500/20 text-red-300 border-red-500/30",
  "Voice AI": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Python: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Architecture: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Kafka: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Microservices: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Java: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  LLM: "bg-violet-500/20 text-violet-300 border-violet-500/30",
};

const DEFAULT_TAG = "bg-gray-500/20 text-gray-300 border-gray-500/30";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Blog
          </span>
        </motion.h2>

        {/* Post cards grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeInUp}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6
                hover:border-purple-500/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col"
            >
              {/* Date & Read time */}
              <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-500" />
                <span>{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-0.5 rounded-full border ${
                      TAG_COLORS[tag] || DEFAULT_TAG
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More */}
              <button
                onClick={() => setSelectedPost(post)}
                className="inline-flex items-center gap-1 text-sm font-medium text-purple-400 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                Read More
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Modal overlay */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto py-10 px-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedPost(null);
            }}
          >
            <BlogPost post={selectedPost} onClose={() => setSelectedPost(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
