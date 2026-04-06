import { motion } from "framer-motion";

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

export default function BlogPost({ post, onClose }) {
  if (!post) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      className="relative w-full max-w-3xl mx-auto bg-[#12121a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl leading-none cursor-pointer"
        aria-label="Close"
      >
        &times;
      </button>

      {/* Date & Read time */}
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
        <span>{post.date}</span>
        <span className="w-1 h-1 rounded-full bg-gray-500" />
        <span>{post.readTime}</span>
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        {post.title}
      </h2>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs px-3 py-1 rounded-full border ${
              TAG_COLORS[tag] || DEFAULT_TAG
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div
        className="prose prose-invert prose-purple max-w-none
          prose-headings:text-white prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3
          prose-h3:text-lg prose-h3:text-purple-300 prose-h3:mt-6 prose-h3:mb-2
          prose-p:text-gray-300 prose-p:leading-relaxed
          prose-strong:text-cyan-300
          prose-li:text-gray-300
          prose-code:text-cyan-400 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          whitespace-pre-wrap"
        dangerouslySetInnerHTML={{
          __html: post.content
            .replace(/^## (.+)$/gm, '<h2>$1</h2>')
            .replace(/^### (.+)$/gm, '<h3>$1</h3>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/^- (.+)$/gm, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
            .replace(/<\/ul>\s*<ul>/g, '')
            .replace(/`(.+?)`/g, '<code>$1</code>')
            .replace(/\n{2,}/g, '<br/><br/>')
        }}
      />
    </motion.div>
  );
}
