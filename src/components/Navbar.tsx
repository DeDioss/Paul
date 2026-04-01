import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Area */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-slate-900">Perez</span>
                <span className="text-xs font-semibold text-slate-500 tracking-wider">HEATING & AIR</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#why-us" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Why Us</a>
            <a href="#reviews" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Reviews</a>
            
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Same-Day Service Available</span>
                <a href="tel:209-555-1234" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  (209) 555-1234
                </a>
              </div>
              <a href="#estimate" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold transition-colors shadow-lg shadow-red-600/20 flex items-center gap-2">
                Get Free Estimate
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden gap-4">
            <a href="tel:209-555-1234" className="bg-blue-600 text-white p-2 rounded-full">
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">Services</a>
            <a href="#why-us" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">Why Us</a>
            <a href="#reviews" className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md">Reviews</a>
            <div className="mt-4 px-3">
              <p className="text-xs font-bold text-red-600 uppercase mb-1">Same-Day Service Available</p>
              <a href="tel:209-555-1234" className="flex items-center justify-center w-full gap-2 bg-slate-900 text-white px-4 py-3 rounded-md font-bold text-lg mb-2">
                <Phone className="w-5 h-5" /> (209) 555-1234
              </a>
              <a href="#estimate" className="flex items-center justify-center w-full bg-red-600 text-white px-4 py-3 rounded-md font-bold text-lg">
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
