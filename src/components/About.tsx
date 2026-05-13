import { motion } from 'motion/react';
import fountain from '../assets/fountain.jpg';


export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square relative z-10">
              <img
                src={fountain}
                alt="About Ospace"
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-green/10 -z-0 rounded-sm hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-brand-red font-sans text-[12px] tracking-[0.3em] uppercase block mb-6">Our Heritage</span>
            <h2 className="text-brand-navy font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Setting the Standard for Premium Property Care in Kenya
            </h2>
            <p className="text-gray-600 font-sans font-light text-lg mb-8 leading-relaxed">
              Founded on the belief that property management should be as sophisticated as the architecture it protects. Ospace has grown from a specialized landscaping firm into a full-cycle property management company.
            </p>
            <p className="text-gray-600 font-sans font-light text-lg mb-12 leading-relaxed">
              We serve a limited number of high-profile clients to ensure that every square inch of their property receives premium attention. From meticulous landscape management to architectural-grade gardening, we are the silent partners in your property's enduring legacy.
            </p>

            <div className="grid grid-cols-2 gap-8 py-8 border-t border-gray-100">
              <div>
                <h4 className="font-serif text-brand-navy text-xl mb-2">Discrete Service</h4>
                <p className="text-gray-400 text-sm">Confidentiality and efficiency in every operation.</p>
              </div>
              <div>
                <h4 className="font-serif text-brand-navy text-xl mb-2">Scaleable Care</h4>
                <p className="text-gray-400 text-sm">Services customized for single homes or vast estates.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
