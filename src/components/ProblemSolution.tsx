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
              AC Broke in 100° Heat? Heater Not Working on a Cold Night?
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                "Sweating through the summer with a broken AC?",
                "Freezing indoors because your furnace won't start?",
                "Tired of waiting days for a technician to show up?",
                "Worried about hidden fees and dishonest pricing?"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <div className="mt-1 min-w-[20px] text-red-500">✕</div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 font-medium italic">
              We know how miserable it is when your HVAC system fails. You need help fast.
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
              Get Fast, Reliable Solutions from Merced's 5-Star Experts.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              At Perez Heating & Air, we pride ourselves on rapid response times and getting the job done right the first time. We restore your comfort quickly and honestly.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Same-day service available when you need it most",
                "Honest, upfront pricing with no surprises",
                "Highly rated, reliable technicians you can trust",
                "On-time, every time—we respect your schedule"
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
