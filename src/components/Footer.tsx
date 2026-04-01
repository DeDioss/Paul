import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-white">Perez</span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider">HEATING & AIR</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Providing top-tier HVAC, heating, and cooling services to Merced, Atwater, and Turlock. Your comfort is our priority.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="font-bold">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer">
                <span className="font-bold">t</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm">Merced, CA 95340</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="tel:209-555-1234" className="text-sm hover:text-white transition-colors">(209) 555-1234</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:service@perezheatingandair.com" className="text-sm hover:text-white transition-colors">service@perezheatingandair.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-sm">Same-Day Service Available<br />Emergency Service Available</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">AC Repair Merced, CA</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">AC Installation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Heating Repair</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">HVAC Maintenance</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Emergency HVAC Services</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Service Areas</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">HVAC Services Merced</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">HVAC Services Atwater</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">HVAC Services Turlock</a></li>
            </ul>
            <div className="mt-8">
              <a href="#estimate" className="inline-block bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-bold text-sm transition-colors border border-slate-700">
                Request Service
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Perez Heating & Air. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>Lic #123456</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
