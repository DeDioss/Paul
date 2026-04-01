import { Phone, Calendar, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
          alt="HVAC Technician working" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full font-semibold text-sm mb-6 border border-blue-500/30"
          >
            <ShieldCheck className="w-4 h-4" />
            Trusted by homeowners in Merced, Atwater & Turlock
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Fast, Reliable AC Repair in Merced – <span className="text-blue-400">Same-Day Service Available.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed"
          >
            Don't suffer in the heat or cold. We are your local 5-star rated HVAC experts, delivering fast response times, honest pricing, and reliable solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a href="tel:209-555-1234" className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-red-600/30">
              <Phone className="w-6 h-6" />
              Call Now
            </a>
            <a href="#estimate" className="flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg">
              <Calendar className="w-6 h-6 text-blue-600" />
              Book Service Today
            </a>
          </motion.div>

          {/* Quick Trust Signals */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300"
          >
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="ml-2 text-white">5-Star Rated Service</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              Fast Response Times
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl text-white">100%</span>
              Satisfaction Guaranteed
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
