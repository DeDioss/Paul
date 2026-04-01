import { motion } from 'motion/react';

export default function TrustBar() {
  return (
    <section className="bg-slate-50 border-b border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
          Why Homeowners Choose Us
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80 transition-all duration-500">
          <div className="flex items-center justify-center font-black text-2xl text-slate-800 tracking-tighter">
            <span className="text-yellow-500 mr-2">★★★★★</span> 5-Star Rated
          </div>
          <div className="flex items-center justify-center font-black text-2xl text-slate-800 tracking-tighter">
            <span className="text-blue-600 mr-2">⚡</span> Fast Response
          </div>
          <div className="flex items-center justify-center font-black text-2xl text-slate-800 tracking-tighter">
            <span className="text-green-600 mr-2">$</span> Honest Pricing
          </div>
          <div className="flex items-center justify-center font-black text-2xl text-slate-800 tracking-tighter">
            <span className="text-red-600 mr-2">✓</span> Done Right
          </div>
        </div>
      </div>
    </section>
  );
}
