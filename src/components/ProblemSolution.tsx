import { ArrowRight, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Problem Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100 relative"
          >
            <div className="absolute -top-6 -left-6 bg-red-100 text-red-600 p-4 rounded-full">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-4">
              Is Your HVAC System Failing When You Need It Most?
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                "AC blowing warm air in the middle of summer?",
                "Furnace making strange noises or won't turn on?",
                "Energy bills skyrocketing for no clear reason?",
                "Uneven temperatures throughout your home?"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1 min-w-[20px] text-red-500">✕</div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 font-medium italic">
              Don't wait for a complete breakdown. Small issues turn into expensive repairs fast.
            </p>
          </motion.div>

          {/* Solution Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Get Fast, Reliable Solutions from Fresno's Experts.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Since 1952, Purl's has been the trusted name for restoring comfort to homes in Fresno and Madera. We don't just apply band-aids; we provide lasting solutions.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Rapid response times, 7 days a week",
                "Upfront pricing with no hidden surprises",
                "NATE-certified technicians who get it right the first time",
                "Fully stocked trucks to complete most repairs on the spot"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-800 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#estimate" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Restore My Comfort <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
