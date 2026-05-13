/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Property & Home Management',
    description: 'Comprehensive end-to-end management of residential and commercial properties. Inspections, maintenance scheduling, tenant coordination, and financial reporting.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujRhFkG8hMD3AKoEI8Hm88IF-NA70IN7p8SB6cu9JjuC2jpcNPLz0sCgZBbYBS63ndfyMDfuTMFyRDPUhoMrC4Ff1HCM4Hzjw3u7yikMeFCG78BRKxUpdD2In62wXvcreca6-Hg8XwQpXgqX-TNoZ9WJcoOJjpHFMrpTJAuXFr3abreR3BPPF7-YsMUPrSdV-09nRknNX0Wawcl1agV-XsYPCBy0O-fqtvB1My2sf5vVtUP0hGdNUua7o7aMgHzLY8g-HOt5ChQwg'
  },
  {
    title: 'Landscaping & Ground Design',
    description: 'Architectural-grade landscaping including soft scaping, planting, irrigation installation, landscape lighting, property grading and drainage solutions.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujsnAQlxZkOc9muYkk8TqoINx_HTlgXroQdzNaYTBQ7Bf3FTU0XaspSVCmmM-k0k8Ij2rPYJxza32JUjH-C_EXWD6VeHXvkhW1yW1nT5eLxZs36M4-8RFwyuqYRBC3fi7r-1F-XcXPBdpfo7vEumUccEdjrrWKbwcbRoM3mTVdAd7gQoIkJKvW4J7uTpGvsvUI07t8dyFNcv3ZDDzwWRhrRnU9FrIXU8AzacH2tXHurgQIjbfm7kfpo23_pneG8NCE_7nLhkTeJTQ'
  },
  {
    title: 'Lawn & Garden Maintenance',
    description: 'Year-round grounds care including lawn mowing, fertilizer and soil management, top dressing, weed and pest management (IPM), pruning, trimming and hedging.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uiaAiq2X_obSQSgjYZtlfSBdUtqMtfxPscsa9v3CybTTkCzFj_2k9C_pCwHrL3LhNz-FbqpkxBivLf_k7A4Hl39VsyhW97reQiAqy5pzHCWaemYVdbQ9-0ze8ek0253hGrR-BCl-Ev0HbrNh9oorZG6eXr3AjgbBlJQUYYq8Ex0Y1LJJPYbOLM3hNcqjiKEv_m5oIVG9iCijgg8P0r_vYMcgzac8t7z1XVCqFGfPkcvy3pbIsko7pM3ML1FMiylxH2e5vaTgQrt'
  },
  {
    title: 'Cleaning & Detailing',
    description: 'Deep cleaning, detailing, post-construction clean-ups, and exterior compound cleaning including parking areas.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uibjla9bUgVeI4Xo4Y7Kn720iJcB61TQHA4rN74-M_sDF0iwszONUXnkMNiz_k1IU2YCBVq8f34xewJweBppPadAfMCz9qtLDGhPqK_UoQ95Chn00kmA8uLaycAe-gcHDnBT9ex0EmxLNKfyibgDjfsi91SgyRMR6ha2uBTg1U9uKPfGKMosaWt0C_Zni94AVc4Zp4sWc245pBs2quXik9rrfljtWGRVMcQWaaXL1HKeez3T4vjHpjZmWFcAY7U0eOo9Vluh1ByuA'
  },
  {
    title: 'Fumigation & Pest Control',
    description: 'Certified fumigation and integrated pest management using industry-approved treatments for residential and commercial properties.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujtseWk4EPEz6gP_hdA9lwVXbv_0huwctLzEZXNC-RkNM38Swz1WF2u99ITNLYDNKSusDbDL0yTNl7AtXiHTmRthGxIwzcrQf2bRvTA2SbbUE54CNEc0utG9eieEE9T3OGTPQB-K8_rUvQPaFH49EtZAKgHBKSi-EuReOcAv-8gfgya3anYX_NgL58YLBvjkmBMlPdWsFlbRG4COJ3C-Gw2war5Hs08QrUGMiCCd21cG_dH7H5p5a0DLZiB0Miftrqi8ZyQ5-nVoA'
  },
  {
    title: 'Design & Consultancy',
    description: 'Exterior redesign, landscape concept planning, and strategic property consultancy for owners, investors, and developers.',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uiWegB69_foie27Zb4IigXh2Eh08jGAS2uy1AZhE-zg8QiWfnQiZgwpvVq4RFFAOfud_12bIchTwkFyoj4kxUG_i7a-blqDX0QCYN5U7eioM1wdtwvNrv_pxX2D1hMp25wJ9zWSl5qDYcLnHRDRijjA8T2pZzh3XYxZHKnmcbG2a65P9K-gH4R41zMkTGzlBjj4KnvEuw86DAAvK4j310dgLltnsq3Gqyq2cT58YH--cF4Dn-asZnnYweOnDkKOGWkBeWKr84pv'
  }
];

export default function Services() {
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
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-light via-brand-navy-light/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-serif text-2xl mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/80 font-sans font-light text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                  {service.description}
                </p>
                <a href="#" className="text-brand-green font-bold text-[12px] tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
