import { Clock, Award, Hammer, Users, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "70+ Years Experience",
    desc: "Serving Fresno & Madera since 1952. We've seen it all and fixed it all."
  },
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: "Certified Technicians",
    desc: "Our team is NATE & EPA certified, ensuring the highest standard of technical expertise."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Family-Oriented",
    desc: "We treat your home with the same respect and care as we would our own."
  },
  {
    icon: <Hammer className="w-8 h-8 text-blue-600" />,
    title: "In-House Fabrication",
    desc: "Unique custom sheet metal shop means faster, perfectly fitting ductwork and solutions."
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Fast Response Times",
    desc: "On-call 7 days a week. When you have an emergency, we are ready to roll."
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Why Choose Purl's?</h2>
          <p className="text-xl text-slate-400">
            Don't trust your home's comfort to just anyone. See why generations of Central Valley residents have relied on us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors"
            >
              <div className="bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
          
          {/* Call to action card to fill the grid nicely */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-blue-600 p-8 rounded-2xl flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to experience the difference?</h3>
            <a href="tel:559-555-1234" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors w-full">
              Call Us Today
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
