import { Clock, DollarSign, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Fast Response Times",
    desc: "When your AC breaks in the heat, we don't make you wait. Same-day service available."
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: "Honest Pricing",
    desc: "No hidden fees, no surprise charges. We provide clear estimates before any work begins."
  },
  {
    icon: <Star className="w-8 h-8 text-blue-600" />,
    title: "Highly Rated Service",
    desc: "Our 5-star reviews speak for themselves. We prioritize customer satisfaction above all else."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "Reliable Technicians",
    desc: "Our team is trained, professional, and gets the job done right the first time."
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Why Choose Perez Heating & Air?</h2>
          <p className="text-xl text-slate-400">
            We are Merced's trusted choice for residential HVAC. Here is why your neighbors rely on us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors flex items-start gap-6"
            >
              <div className="bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center shrink-0">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="tel:209-555-1234" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors text-lg shadow-lg">
            Call Us Today: (209) 555-1234
          </a>
        </div>
      </div>
    </section>
  );
}
