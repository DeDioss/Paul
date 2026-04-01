import { motion } from 'motion/react';

export default function TrustBar() {
  return (
    <section className="bg-slate-50 border-b border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
          Certified & Trusted By Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder for logos - using text for now, but styled to look like logos */}
          <div className="flex items-center justify-center font-black text-2xl text-slate-800 tracking-tighter">
            <span className="text-blue-600">NATE</span> Certified
          </div>
          <div className="flex items-center justify-center font-black text-2xl text-slate-800 tracking-tighter">
            EPA <span className="text-green-600 ml-1">Approved</span>
          </div>
          <div className="flex items-center justify-center font-black text-2xl text-slate-800 tracking-tighter italic">
            Carrier <span className="text-sm font-normal not-italic ml-2">Factory Authorized</span>
          </div>
          <div className="flex items-center justify-center font-black text-2xl text-slate-800 tracking-tighter">
            BBB <span className="text-blue-800 ml-1">A+ Rated</span>
          </div>
        </div>
      </div>
    </section>
  );
}
