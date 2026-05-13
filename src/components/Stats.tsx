/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { value: '200+', label: 'Properties Managed' },
    { value: '24', label: 'Years of Excellence' },
    { value: 'Residential', label: 'Service Scope', subValue: '& Commercial' },
  ];

  return (
    <section className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-12 -mt-24 mb-32">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12 shadow-2xl border border-gray-100"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3">
            <span className="font-serif text-4xl md:text-5xl text-brand-navy-light mb-4 font-bold">
              {stat.value}
              {stat.subValue && <span className="text-xl md:text-2xl block mt-1">{stat.subValue}</span>}
            </span>
            <span className="font-sans text-[11px] text-gray-500 uppercase tracking-[0.3em]">
              {stat.label}
            </span>
            {index < stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-200"></div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
