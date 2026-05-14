import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import houseImg from '../assets/house.jpg';
import landscapeImg from '../assets/landscape.jpg';
import landscapeMaintenanceImg from '../assets/landscape-maintenance.jpg';
import cleaningImg from '../assets/cleaning.jpg';
import fumigationImg from '../assets/fumigation.jpg';
import apartmentsImg from '../assets/apartment.jpg';

const services = [
  {
    title: 'Property & Home Management',
    description: 'Comprehensive end-to-end management of residential and commercial properties. Inspections, maintenance scheduling, tenant coordination, and financial reporting.',
    image: houseImg
  },
  {
    title: 'Landscaping & Ground Design',
    description: 'Architectural-grade landscaping including soft scaping, planting, irrigation installation, landscape lighting, property grading and drainage solutions.',
    image: landscapeImg
  },
  {
    title: 'Lawn & Garden Maintenance',
    description: 'Year-round grounds care including lawn mowing, fertilizer and soil management, top dressing, weed and pest management (IPM), pruning, trimming and hedging.',
    image: landscapeMaintenanceImg
  },
  {
    title: 'Cleaning & Detailing',
    description: 'Deep cleaning, detailing, post-construction clean-ups, and exterior compound cleaning including parking areas.',
    image: cleaningImg
  },
  {
    title: 'Fumigation & Pest Control',
    description: 'Certified fumigation and integrated pest management using industry-approved treatments for residential and commercial properties.',
    image: fumigationImg
  },
  {
    title: 'Apartment Management and Maintenance',
    description: 'Comprehensive management of apartment complexes, including tenant relations, facility maintenance, security oversight, and common area upkeep.',
    image: apartmentsImg
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-sans text-[12px] tracking-[0.3em] uppercase block mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-navy font-serif text-5xl md:text-7xl"
          >
            Core Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isActive = activeService === index;
            return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveService(isActive ? null : index)}
              className="group relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer"
            >
              <img 
                src={service.image} 
                alt={`OSpace ${service.title} services in Nairobi`}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isActive ? 'scale-110' : ''}`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-brand-navy-light via-brand-navy-light/60 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-95' : 'opacity-80 group-hover:opacity-95'}`}></div>
              
              <div className={`absolute bottom-0 left-0 p-8 w-full z-10 transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}>
                <h3 className="text-white font-serif text-2xl mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className={`text-white/80 font-sans font-light text-sm mb-6 transition-opacity duration-500 leading-relaxed ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  {service.description}
                </p>
                {/* <a href="#" className="text-brand-green font-bold text-[12px] tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={14} />
                </a> */}
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
