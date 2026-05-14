import { motion } from 'motion/react';
import houseImg from '../assets/house.jpg';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={houseImg} 
          alt="Luxury property managed by OSpace in Nairobi Kenya" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/30 md:bg-transparent md:bg-gradient-to-r md:from-black/40 md:to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans text-[12px] text-white/90 mb-8 uppercase tracking-[0.3em] block"
          >
            Premium Property Management
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-8xl text-white mb-6 leading-[1.1] text-shadow-sm"
          >
            Curating Luxury<br />Environments.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-3xl md:text-5xl text-brand-green mb-10 font-bold"
          >
            Built on a Standard of Excellence.
          </motion.p>



          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center px-10 py-5 bg-brand-red text-white font-sans text-[11px] uppercase tracking-[0.2em] rounded-sm transition-all duration-300 hover:bg-brand-green hover:-translate-y-1"
            >
              Get a Quote
            </a>
            <a 
              href="#portfolio" 
              className="inline-flex justify-center items-center px-10 py-5 bg-brand-navy-light text-white font-sans text-[11px] uppercase tracking-[0.2em] rounded-sm transition-all duration-300 hover:bg-brand-green hover:-translate-y-1"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
