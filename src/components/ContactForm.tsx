/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import fullLogo from '../assets/full-logo.png';

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string || 'N/A';
    const phone = formData.get('phone') as string || 'N/A';
    const email = formData.get('email') as string || 'N/A';
    const service = formData.get('service') as string || 'N/A';
    const propertyType = formData.get('propertyType') as string || 'N/A';
    const message = formData.get('message') as string || 'N/A';

    const text = `Hello OSPACE! I would like to inquire about your services.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Service Interested In:* ${service}%0A*Property Type:* ${propertyType}%0A*Message:* ${message}`;

    window.open(`https://wa.me/254741895272?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-32 md:py-48 bg-white px-8">
      <div className="max-w-xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-navy-light font-display text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Elevate Your<br />Property Standards?
          </motion.h2>
          <p className="text-gray-500 font-montserrat">
            Fill in your details and our team will get back to you within 24 hours.
          </p>
        </div>

        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="relative">
            <input 
              type="text" 
              name="name"
              required
              placeholder="Your Full Name"
              className="w-full bg-transparent border-0 border-b border-brand-navy py-4 outline-none focus:border-brand-red transition-colors placeholder:text-gray-300"
            />
          </div>
          <div className="relative">
            <input 
              type="tel" 
              name="phone"
              required
              placeholder="e.g. 0712 345 678"
              className="w-full bg-transparent border-0 border-b border-brand-navy py-4 outline-none focus:border-brand-red transition-colors placeholder:text-gray-300"
            />
          </div>
          <div className="relative">
            <input 
              type="email" 
              name="email"
              placeholder="Your Email Address"
              className="w-full bg-transparent border-0 border-b border-brand-navy py-4 outline-none focus:border-brand-red transition-colors placeholder:text-gray-300"
            />
          </div>
          <div className="relative">
            <select 
              name="service"
              defaultValue=""
              required
              className="w-full bg-transparent border-0 border-b border-brand-navy py-4 outline-none focus:border-brand-red transition-colors text-gray-400"
            >
              <option value="" disabled>Service Interested In</option>
              <option value="management">Property & Home Management</option>
              <option value="landscaping">Landscaping & Ground Design</option>
              <option value="lawn">Lawn & Garden Maintenance</option>
              <option value="cleaning">Cleaning & Detailing</option>
              <option value="fumigation">Fumigation & Pest Control</option>
              <option value="design">Design & Consultancy</option>
            </select>
          </div>
          <div className="relative">
            <select 
              name="propertyType"
              defaultValue=""
              required
              className="w-full bg-transparent border-0 border-b border-brand-navy py-4 outline-none focus:border-brand-red transition-colors text-gray-400"
            >
              <option value="" disabled>Property Type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="both">Both</option>
            </select>
          </div>
          <div className="relative">
            <textarea 
              name="message"
              placeholder="Tell us more about your property or enquiry..."
              rows={4}
              required
              className="w-full bg-transparent border-0 border-b border-brand-navy py-4 outline-none focus:border-brand-red transition-colors placeholder:text-gray-300 resize-none"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-brand-red text-white py-5 font-sans uppercase tracking-[0.2em] text-[12px] transition-all hover:bg-brand-red-dark mt-8 flex justify-center items-center gap-4"
          >
            Book a Free Consultation <ArrowRight size={16} />
          </motion.button>
          
          <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest mt-4">
            ✓ No commitment required. We'll respond within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
}
