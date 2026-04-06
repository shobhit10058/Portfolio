import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NAV_LINKS, PERSONAL } from "../utils/constants";

const socialLinks = [
  { icon: FaGithub, href: PERSONAL.github, label: "GitHub" },
  { icon: FaLinkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
  { icon: MdEmail, href: `mailto:${PERSONAL.email}`, label: "Email" },
];

const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: name + copyright */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white">
              {PERSONAL.name}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Center: quick nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-xl"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
        <p className="mt-4 text-center text-xs text-gray-600">
          Built with React, Tailwind CSS &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
