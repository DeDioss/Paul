import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Sarah M.",
    location: "Merced, CA",
    text: "Our AC died on a 105-degree day. Perez Heating & Air had a technician out within hours. He was professional, explained the issue clearly, and had it running again quickly. Lifesavers!",
    rating: 5
  },
  {
    name: "David T.",
    location: "Atwater, CA",
    text: "We used them for a full system replacement. The pricing was honest, the crew was respectful, and they got it done right the first time. Highly recommend their 5-star service.",
    rating: 5
  },
  {
    name: "Jessica R.",
    location: "Turlock, CA",
    text: "I've been using Perez for maintenance for years. They never try to upsell me on things I don't need. Honest, reliable, and always on time.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-current" />)}
            </div>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Loved by Merced, Atwater & Turlock</h2>
          <p className="text-xl text-slate-600">Don't just take our word for it. Read what your neighbors say.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
