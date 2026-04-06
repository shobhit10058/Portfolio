import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PERSONAL } from "../utils/constants";
import { fadeInLeft, fadeInRight, fadeInUp } from "../hooks/useScrollAnimation";

const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: PERSONAL.github,
    color: "hover:text-white",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: PERSONAL.linkedin,
    color: "hover:text-blue-400",
  },
  {
    icon: MdEmail,
    label: "Email",
    href: `mailto:${PERSONAL.email}`,
    color: "hover:text-cyan-400",
  },
  {
    icon: FaPhone,
    label: "Phone",
    href: `tel:${PERSONAL.phone}`,
    color: "hover:text-green-400",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Placeholder: replace with EmailJS or backend call
    console.log("Contact form submitted:", form);

    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
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
            Get In Touch
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Let&apos;s work together
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              I&apos;m always interested in hearing about new projects, opportunities,
              and collaborations. Whether you have a question or just want to say
              hi, feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <MdEmail className="text-purple-400 text-xl flex-shrink-0" />
                <a
                  href={`mailto:${PERSONAL.email}`}
                  className="hover:text-purple-300 transition-colors"
                >
                  {PERSONAL.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaPhone className="text-purple-400 text-lg flex-shrink-0" />
                <a
                  href={`tel:${PERSONAL.phone}`}
                  className="hover:text-purple-300 transition-colors"
                >
                  {PERSONAL.phone}
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-gray-400 text-2xl transition-colors ${color}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white
                    placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
                    transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white
                    placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
                    transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white
                    placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
                    transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-lg font-medium text-white
                  bg-gradient-to-r from-purple-600 to-cyan-500
                  hover:shadow-lg hover:shadow-purple-500/25
                  disabled:opacity-60 disabled:cursor-not-allowed
                  transition-all duration-300 cursor-pointer"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {/* Status messages */}
              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 text-sm"
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-400 text-sm"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
