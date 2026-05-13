import { MessageSquare } from 'lucide-react';
import fullLogo from '../assets/full-logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#0A1633] pt-24 pb-12 px-8 overflow-hidden text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 pb-20 border-b border-white/5">
          {/* Logo and About */}
          <div className="md:col-span-4 lg:col-span-5 pr-4 md:pr-12">
            <div className="flex flex-col mb-10 items-start">
              <img src={fullLogo} alt="OSpace Properties Logo" className="h-48 md:h-64 w-auto object-contain object-left mb-8" />
            </div>
            <p className="text-white/50 font-serif leading-relaxed italic text-lg max-w-sm">
              Setting the standard in property management and architectural landscaping in Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-white/40 text-[11px] uppercase tracking-[0.3em] font-bold mb-10">Quick Links</h4>
            <ul className="flex flex-col gap-6">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors uppercase tracking-[0.1em] text-sm font-serif">Home</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors uppercase tracking-[0.1em] text-sm font-serif">Services</a></li>
              <li><a href="#portfolio" className="text-white/70 hover:text-white transition-colors uppercase tracking-[0.1em] text-sm font-serif">Portfolio</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors uppercase tracking-[0.1em] text-sm font-serif">About</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors uppercase tracking-[0.1em] text-sm font-serif">Contact</a></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="md:col-span-5 lg:col-span-5">
            <h4 className="text-white/40 text-[11px] uppercase tracking-[0.3em] font-bold mb-10">Get In Touch</h4>
            <div className="flex flex-col gap-8">
              <p className="text-white/50 leading-relaxed max-w-md">
                We operate from two conveniently located offices across the Nairobi region.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h5 className="font-bold text-sm mb-2">Kiambu Office:</h5>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Kikinga House, 1st Floor,<br />
                    Room F1, Kiambu Town,<br />
                    Kiambu County.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-sm mb-2">Nairobi Office:</h5>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Kikinga House, 1st Floor,<br />
                    Room 1, Westlands,<br />
                    Nairobi.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-white/40 text-xs">P.O. Box 2680 – 00100</p>
                <p className="text-white/80 font-serif text-lg">+254 741 895 272</p>
                <p className="text-white/80 font-mono text-sm tracking-tight overflow-hidden text-ellipsis">Ospacepropertymanagement@gmail.com</p>
              </div>

              <a
                href="https://wa.me/254741895272"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-5 bg-[#1B6C3B] text-white rounded-sm transition-all hover:bg-[#15532d] w-fit shadow-xl"
              >
                <MessageSquare className="fill-white" size={20} />
                <span className="font-sans font-medium">Chat With Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 font-sans text-[10px] uppercase tracking-widest">
            © 2024 OSPACE Properties Management. All rights reserved.
          </p>
          <p className="text-white/20 font-sans text-[10px] uppercase tracking-widest text-center">
            Built with excellence in Nairobi, Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}
