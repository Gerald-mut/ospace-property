import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { ArrowRight, Loader2, X } from 'lucide-react';
import swimmingPoolImg from '../assets/swimming-pool.jpg';
import roadImg from '../assets/road.jpg';
import landscapeImg from '../assets/landscape.jpg';
import fountainImg from '../assets/fountain.jpg';
import houseImg from '../assets/house.jpg';
import closetImg from '../assets/closet.jpg';
import gateImg from '../assets/gate.jpg';
import house2Img from '../assets/house2.jpg';
import landscape2Img from '../assets/landscape2.jpg';
import landscape3Img from '../assets/landscape3.jpg';
import landscapewindowImg from '../assets/landscapewindow.jpg';
import washroomImg from '../assets/washroom.jpg';
import gate2Img from '../assets/gate2.jpg';
import landscape4Img from '../assets/landscape4.jpg';
import road2Img from '../assets/road2.jpg';
import apartmentImg from '../assets/apartment.jpg';

const allProjects = [
  {
    id: 1,
    title: 'Luxury Pool & Outdoor Compound',
    image: swimmingPoolImg,
    gridArea: 'md:col-span-8 md:row-span-2'
  },
  {
    id: 2,
    title: 'Estate Maintenance',
    image: roadImg,
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 3,
    title: 'Landscape Designing & Decor',
    image: landscapeImg,
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 4,
    title: 'Decorative Exterior Pillars',
    image: fountainImg,
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 5,
    title: 'Modern Villa',
    image: houseImg,
    gridArea: 'md:col-span-8 md:row-span-2'
  },
  {
    id: 6,
    title: 'Interior Fit-Out & Cabinetry',
    image: closetImg,
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 7,
    title: 'Premium Landscaping',
    image: landscape2Img,
    gridArea: 'md:col-span-8 md:row-span-2'
  },
  {
    id: 8,
    title: 'Landscape Maintenance',
    image: landscape3Img,
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 9,
    title: 'Cabro Cleaning & Maintenance',
    image: gateImg,
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 10,
    title: 'Post Construction Cleaning',
    image: house2Img,
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 11,
    title: 'Residential Management & Letting',
    image: landscapewindowImg,
    gridArea: 'md:col-span-8 md:row-span-2'
  },
  {
    id: 12,
    title: 'Bespoke Amenities',
    image: washroomImg,
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 13,
    title: 'Grand Entrances',
    image: gate2Img,
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 14,
    title: 'Paved Walkways',
    image: road2Img,
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 15,
    title: 'Verdant Lawns',
    image: landscape4Img,
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 16,
    title: 'Apartments Management',
    image: apartmentImg,
    gridArea: 'md:col-span-8 md:row-span-2'
  }
];

export default function Portfolio() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const loadMore = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(allProjects.length);
      setIsLoading(false);
    }, 400);
  };

  const closePortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    setVisibleCount(6);
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const visibleProjects = allProjects.slice(0, visibleCount);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="mb-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-brand-green font-sans text-[12px] tracking-[0.3em] uppercase block mb-4"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-navy font-serif text-4xl sm:text-5xl md:text-7xl leading-tight"
          >
            Transformations That<br />Speak for Themselves
          </motion.h2>
        </div>

        <LayoutGroup>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-1" style={{ gridAutoRows: 'minmax(300px, auto)' }}>
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => {
                const isActive = activeProject === project.id;
                return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{
                    delay: index >= 6 ? (index - 6) * 0.12 : index * 0.1,
                    duration: 0.5
                  }}
                  onClick={() => setActiveProject(isActive ? null : project.id)}
                  className={`relative overflow-hidden group cursor-pointer aspect-square md:aspect-auto ${project.gridArea}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} by OSpace in Nairobi and Kiambu, Kenya`}
                    className={`w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110 ${isActive ? 'scale-110' : ''}`}
                  />
                  <div className={`absolute inset-0 bg-brand-navy-light/60 transition-opacity duration-500 flex items-center justify-center ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <h3 className={`font-serif text-white text-2xl md:text-3xl transition-transform duration-500 text-center px-4 ${isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}>
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              )})}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        <div className="mt-20 flex justify-center h-16 items-center">
          {visibleCount < allProjects.length ? (
            <motion.a
              layout
              href="#"
              onClick={loadMore}
              className={`inline-flex items-center justify-center gap-4 px-12 py-5 border border-brand-navy text-brand-navy font-sans text-[11px] uppercase tracking-[0.2em] transition-all duration-300 group min-w-[240px] ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:text-brand-green hover:border-brand-green'
                }`}
            >
              {isLoading ? (
                <Loader2 size={16} className="animate-spin text-brand-navy" />
              ) : (
                <>
                  View Full Portfolio
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </>
              )}
            </motion.a>
          ) : (
            <motion.a
              layout
              href="#"
              onClick={closePortfolio}
              className="inline-flex items-center justify-center gap-4 px-12 py-5 border border-brand-navy text-brand-navy font-sans text-[11px] uppercase tracking-[0.2em] transition-all duration-300 group min-w-[240px] hover:text-brand-green hover:border-brand-green"
            >
              Close Portfolio
              <X size={16} className="group-hover:rotate-90 transition-transform duration-300" />
            </motion.a>
          )}
        </div>
      </div>
    </section>
  );
}
