import { motion } from 'motion/react';

export default function Statement() {
  return (
    <section className="bg-brand-navy-light py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-2/3 h-px bg-brand-green mb-16 origin-center"
        ></motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            Manage • Maintain • Enhance • Care
          </h2>
          <p className="font-sans font-light text-white/60 text-lg md:text-xl tracking-wide uppercase">
            Four pillars. One standard of excellence.
          </p>
        </motion.div>

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-2/3 h-px bg-brand-green mt-16 origin-center"
        ></motion.div>
      </div>
    </section>
  );
}
