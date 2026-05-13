/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Eleanor Vance',
    role: 'Private Investor',
    quote: '"The meticulous attention to detail and unwavering professionalism redefined our expectations of property management. Our estate has never been in better hands."',
    rating: 5,
    offset: false
  },
  {
    name: 'Marcus Chen',
    role: 'Commercial Developer',
    quote: '"A truly architectural approach to asset management. They understand the nuanced value of modern design and preserve it flawlessly while maximizing returns."',
    rating: 5,
    offset: true
  },
  {
    name: 'Sophia & James Sterling',
    role: 'Estate Owners',
    quote: '"Discreet, efficient, and incredibly thorough. Their editorial approach to presenting properties attracts exactly the caliber of tenants we seek."',
    rating: 5,
    offset: false
  }
];

export default function Testimonials() {
  return (
    <section className="bg-brand-navy py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="text-center mb-32">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-green font-sans text-[12px] tracking-[0.3em] uppercase block mb-6"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white font-serif text-5xl md:text-7xl"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-brand-navy-light border-l-4 border-brand-green p-10 md:p-12 transition-all hover:-translate-y-4 duration-500 ${t.offset ? 'md:mt-16' : ''}`}
            >
              <div className="flex text-yellow-400 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="font-serif text-white/90 italic text-xl mb-12 leading-relaxed">
                {t.quote}
              </p>
              <div>
                <h4 className="text-brand-green font-bold mb-1">{t.name}</h4>
                <p className="font-sans text-[11px] text-white/40 uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-10">
            <Star size={16} fill="#FFD700" stroke="none" />
            <p className="text-white/60 font-light text-sm">Rated 5.0 by property owners across our portfolio</p>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#"
            className="inline-flex items-center gap-4 px-10 py-5 border border-brand-red text-white font-sans text-[11px] uppercase tracking-[0.2em] hover:bg-brand-red transition-all duration-300"
          >
            Read More Reviews <ArrowRight size={14} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
