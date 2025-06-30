import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    // Small delay to ensure the route change happens first
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const navigation = [
    { name: 'Product', href: '/product' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Ecosystem Builders', href: '#', dropdown: [
      { name: 'VC Firms', href: '/vc-firms' },
      { name: 'Accelerators', href: '/accelerators' },
      { name: 'Corporates', href: '/corporates' },
      { name: 'Universities', href: '/universities' },
      { name: 'Impact Organizations', href: '/impact-organizations' },
    ]},
    { name: 'Resources', href: '#' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group cursor-glow" onClick={handleNavClick}>
            <motion.div 
              className="bg-gradient-to-r from-primary-600 to-electric-500 p-2 rounded-lg group-hover:scale-105 transition-transform glow-effect"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="h-5 w-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-white">ForgeAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  onClick={handleNavClick}
                  className={`text-sm font-medium transition-all duration-300 hover:text-electric-400 cursor-glow ${
                    location.pathname === item.href ? 'text-electric-400' : 'text-white/90'
                  }`}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 dropdown-glass rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          onClick={handleNavClick}
                          className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-glow"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="primary" size="sm" className="glass-button">
              Request Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-button text-white"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card rounded-lg mt-2 mb-4"
          >
            <div className="p-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block text-sm font-medium text-white/90 hover:text-white transition-colors cursor-glow"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block text-sm text-white/70 hover:text-white transition-colors cursor-glow"
                          onClick={handleNavClick}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button variant="primary" size="sm" className="w-full glass-button">
                Request Demo
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;