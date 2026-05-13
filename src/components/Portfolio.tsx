/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Residential',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uiWegB69_foie27Zb4IigXh2Eh08jGAS2uy1AZhE-zg8QiWfnQiZgwpvVq4RFFAOfud_12bIchTwkFyoj4kxUG_i7a-blqDX0QCYN5U7eioM1wdtwvNrv_pxX2D1hMp25wJ9zWSl5qDYcLnHRDRijjA8T2pZzh3XYxZHKnmcbG2a65P9K-gH4R41zMkTGzlBjj4KnvEuw86DAAvK4j310dgLltnsq3Gqyq2cT58YH--cF4Dn-asZnnYweOnDkKOGWkBeWKr84pv',
    gridArea: 'md:col-span-8 md:row-span-2'
  },
  {
    id: 2,
    title: 'Architectural Stairs',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugmlnGNQihRsxEaceA1kQlZRCXb2u3k1tELsU5dq5v9_TJnC4tOMhK-a0YJa11CSKkkqrhgYAF1xQGsJF3Fgf5RupMJZGKkrfp6pIDM8vHK_5ssN32_ro0UDg_mTaBDGclfq29Kz6OelywsMcWKpCcDpu3YWWNATAXaXSCqVzkPF_wMOVQrQ7msv4IW4FLsXiqQMIXDF4IZ0IX5N4pn5bJ9F0KQdUP9uSanpkvEAIcpfPuBpPCyX-o7Wu--4XMm2mG84yhKcvZo',
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 3,
    title: 'Outdoor Living',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujsnAQlxZkOc9muYkk8TqoINx_HTlgXroQdzNaYTBQ7Bf3FTU0XaspSVCmmM-k0k8Ij2rPYJxza32JUjH-C_EXWD6VeHXvkhW1yW1nT5eLxZs36M4-8RFwyuqYRBC3fi7r-1F-XcXPBdpfo7vEumUccEdjrrWKbwcbRoM3mTVdAd7gQoIkJKvW4J7uTpGvsvUI07t8dyFNcv3ZDDzwWRhrRnU9FrIXU8AzacH2tXHurgQIjbfm7kfpo23_pneG8NCE_7nLhkTeJTQ',
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 4,
    title: 'Investor Lobby',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhpBskJyUYxtNJU2yUiqGcPa-6ztofFxjFG4SKFqb6Q9Gxyv__sUtklwLN4PYOs4jp4Gl3cG-7Ks9KMC0E5UffVbS2G0PVN-v7mA6BaQmm-rJ4NsAz0iqobiYMmsYam6KFJx1GdoATEl8lHXiCwkdFj89zOewTX-TUOiysxL4AvOtApCD_27pYtYlgMtTmzm-nPokOrxVdxFnYZelu-JTCUhyYfB0F2H-rZGyXSuIQ4ftACSAHpqrwyEKemTATFgND2XMqnrbMHNQ',
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 5,
    title: 'Courtyard Detail',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujN0bJrRt_Lh4VMW2qGGOFXHKyCxBlsD3d9pBFSxQFIGLDdMuTHjRmrl2FzBsSWdmKmlboNeNNEp7GId4hlB4dwnzY7k6ZKl9qm8GS3bwzYWhuE5cGWJiZ36h0T7O7X8tlPRWvAyqyAXOPKOXk53OZozkE-8LWHDI4PRtK3_XSUqo8sxGUVcQX-Hy-uVpzrsl01enzpAcbhFG1_TB_XyMwDhfj2OSo3J47b7b24WEdBvJsxupujigO4zgnGJySInPaJsNJqymjjrA',
    gridArea: 'md:col-span-4 md:row-span-1'
  },
  {
    id: 6,
    title: 'Estate Overview',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujRhFkG8hMD3AKoEI8Hm88IF-NA70IN7p8SB6cu9JjuC2jpcNPLz0sCgZBbYBS63ndfyMDfuTMFyRDPUhoMrC4Ff1HCM4Hzjw3u7yikMeFCG78BRKxUpdD2In62wXvcreca6-Hg8XwQpXgqX-TNoZ9WJcoOJjpHFMrpTJAuXFr3abreR3BPPF7-YsMUPrSdV-09nRknNX0Wawcl1agV-XsYPCBy0O-fqtvB1My2sf5vVtUP0hGdNUua7o7aMgHzLY8g-HOt5ChQwg',
    gridArea: 'md:col-span-12 md:row-span-2'
  }
];

export default function Portfolio() {
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
            className="text-brand-navy font-serif text-5xl md:text-7xl leading-tight"
          >
            Transformations That<br />Speak for Themselves
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-4 gap-1 h-auto md:h-[1200px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${project.gridArea}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-navy-light/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h3 className="font-serif text-white text-2xl md:text-3xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="#"
            className="inline-flex items-center gap-4 px-12 py-5 border border-brand-navy text-brand-navy font-sans text-[11px] uppercase tracking-[0.2em] hover:text-brand-green hover:border-brand-green transition-all duration-300 group"
          >
            View Full Portfolio
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
