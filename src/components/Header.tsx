import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import iconSvg from '../assets/icon.svg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-8 md:px-12 py-4 md:py-5 flex justify-between items-center ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent'
        }`}
    >
      <a href="#home" className="flex items-center gap-3">
        <img src={iconSvg} alt="OSpace Icon" className="h-10 w-auto object-contain" />
        <div className={`text-xl md:text-2xl font-bold tracking-[0.3em] font-serif transition-colors flex items-center ${isScrolled ? 'text-brand-navy-light' : 'text-white md:text-brand-navy-light'
          }`}>
          <span className="text-brand-red">O</span>
          <span className="text-brand-green">SPACE</span>
        </div>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-12">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`font-serif uppercase tracking-[0.2em] text-[11px] transition-all duration-300 hover:text-brand-green border-b-2 border-transparent hover:border-brand-green pb-1 ${isScrolled ? 'text-brand-navy-light/70' : 'text-white/80'
              }`}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <a href="#contact" className={`hidden md:block font-serif uppercase tracking-[0.2em] text-[11px] border px-8 py-3 transition-all duration-500 hover:bg-brand-navy-light hover:text-white ${isScrolled ? 'border-brand-navy-light text-brand-navy-light' : 'border-white text-white md:border-brand-navy-light md:text-brand-navy-light'
        }`}>
        Inquire
      </a>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-brand-navy-light"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-8 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif uppercase tracking-[0.2em] text-sm text-brand-navy-light hover:text-brand-green"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="font-serif uppercase tracking-[0.2em] text-sm border border-brand-navy-light text-brand-navy-light px-8 py-4 w-full text-center">
              Inquire
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
