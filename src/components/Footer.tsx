import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import GlassCard from './GlassCard';
import Logo from '/assets/ForgeAI_Logo_2.svg';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '/product' },
      { name: 'Pricing', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Integrations', href: '#' },
    ],
    Solutions: [
      { name: 'VC Firms', href: '/vc-firms' },
      { name: 'Accelerators', href: '/accelerators' },
      { name: 'Corporates', href: '/corporates' },
      { name: 'Universities', href: '/universities' },
      { name: 'Impact Organizations', href: '/impact-organizations' },
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Privacy', href: '#' },
    ],
  };

  return (
    <footer className="relative bg-navy-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-electric-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/" className="flex items-center space-x-0 mb-4 group cursor-glow">
                <div className="h-12 w-12 overflow-hidden rounded-lg group-hover:scale-105 transition-transform glow-effect bg-transparent p-0 m-0 border-none">
                  <img src={Logo} alt="ForgeAI Logo" className="h-full w-full object-cover p-0 m-0 border-none rounded-lg" />
                </div>
                <span className="text-xl font-bold">ForgeAI</span>
              </Link>
              <p className="text-white/70 mb-4 max-w-md leading-relaxed">
                The AI-powered operating system for innovation programs across Africa. 
                Empowering accelerators, VCs, and innovation hubs to unleash breakthrough potential.
              </p>
              <p className="text-sm text-electric-400 mb-4 font-medium">
                Proudly building Africa's innovation future 🇰🇪
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="text-white/60 hover:text-electric-400 transition-colors cursor-glow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-white/60 hover:text-electric-400 transition-colors cursor-glow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-white/60 hover:text-electric-400 transition-colors cursor-glow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-white/60 hover:text-electric-400 transition-colors cursor-glow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-electric-400">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm cursor-glow hover:text-electric-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="border-t border-white/10 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-white">Stay Updated on Innovation</h3>
              <p className="text-white/70 text-sm">
                Get the latest insights on African innovation ecosystems and breakthrough stories.
              </p>
            </div>
            <GlassCard className="flex w-full md:w-auto" tint="white" opacity="10">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-transparent border-none text-white placeholder-white/60 focus:outline-none"
              />
              <motion.button 
                className="px-6 py-2 bg-gradient-to-r from-primary-600 to-electric-500 hover:from-primary-700 hover:to-electric-600 rounded-r-lg transition-all glow-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </GlassCard>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>&copy; 2025 ForgeAI. All rights reserved. Unleashing Africa's innovation potential.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-electric-400 transition-colors cursor-glow">Terms</Link>
            <Link to="#" className="hover:text-electric-400 transition-colors cursor-glow">Privacy</Link>
            <Link to="#" className="hover:text-electric-400 transition-colors cursor-glow">Security</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;