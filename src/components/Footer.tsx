import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

type SocialLink = {
  icon: React.ReactNode;
  href: string;
  label: string;
};

const Footer = () => {
  const socialLinks: SocialLink[] = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/devdii", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/dev-chauhan-52b2a4260/", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/devdii_/", label: "Instagram" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/50 border-t border-gray-800"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-bold gradient-text">
            Dev Chauhan
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>{new Date().getFullYear()} Dev Chauhan All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
