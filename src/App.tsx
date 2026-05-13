/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Statement from './components/Statement';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-light selection:bg-brand-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Statement />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
