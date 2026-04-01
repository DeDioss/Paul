import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: "AC Repair",
    problem: "AC blowing warm air?",
    solution: "We diagnose and fix it fast.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop",
    cta: "Schedule Repair"
  },
  {
    title: "AC Installation",
    problem: "Old system costing too much?",
    solution: "Upgrade to high-efficiency.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop",
    cta: "Get Install Quote"
  },
  {
    title: "Heating Services",
    problem: "Furnace won't turn on?",
    solution: "Stay warm with expert repairs.",
    image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86d?q=80&w=800&auto=format&fit=crop",
    cta: "Fix My Heater"
  },
  {
    title: "Maintenance",
    problem: "Want to prevent breakdowns?",
    solution: "Keep it running with tune-ups.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
    cta: "Book Tune-Up"
  },
  {
    title: "Sheet Metal Fab",
    problem: "Need custom ductwork?",
    solution: "We fabricate in-house.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
    cta: "Learn More"
  },
  {
    title: "Generators",
    problem: "Tired of power outages?",
    solution: "Keep your home running.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800&auto=format&fit=crop",
    cta: "Explore Generators"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching the reference image style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-red-600"></span>
              <span className="text-slate-600 font-semibold uppercase tracking-wider text-sm">Services We Offer</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              Certified<br />Excellence
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-slate-600 text-lg mb-6">
              From emergency repairs and new installations to preventative maintenance and custom fabrication, we've got you covered. Choose reliability, choose Purl's.
            </p>
            <div className="flex items-center gap-6">
              <a href="#all-services" className="text-red-600 font-bold hover:text-red-700 flex items-center gap-1 transition-colors">
                View All Services <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="tel:559-555-1234" className="text-red-600 font-bold hover:text-red-700 flex items-center gap-1 transition-colors">
                Call For Booking <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Services Grid matching reference image style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
                  <p className="text-red-400 font-medium text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {service.problem}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    {service.solution}
                  </p>
                </div>
              </div>

              {/* Action Button (Yellow circle from reference) */}
              <div className="absolute bottom-8 right-8">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
