/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Statement from './components/Statement';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-light selection:bg-brand-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Portfolio />
        <Statement />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
