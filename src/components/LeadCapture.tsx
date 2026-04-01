import { motion } from 'motion/react';

export default function LeadCapture() {
  return (
    <section id="estimate" className="py-20 bg-blue-600 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-blue-500/30 rotate-12 transform origin-top-right"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[150%] bg-blue-700/30 -rotate-12 transform origin-bottom-left"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          
          {/* Offer Side */}
          <div className="bg-slate-900 text-white p-10 lg:p-16 lg:w-5/12 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 rounded-bl-full opacity-20"></div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Ready to restore your comfort?
            </h2>
            <div className="bg-red-600 text-white inline-block px-6 py-3 rounded-lg font-black text-2xl mb-6 self-start transform -rotate-2 shadow-lg">
              $50 OFF
            </div>
            <p className="text-xl font-medium mb-4">Your First Service Call!</p>
            <p className="text-slate-400 mb-8">
              Fill out the form or call us directly. We respond fast and get the job done right.
            </p>
            <div className="mt-auto">
              <p className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-2">Prefer to call?</p>
              <a href="tel:559-555-1234" className="text-3xl font-black text-white hover:text-blue-400 transition-colors">
                (559) 555-1234
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 lg:p-16 lg:w-7/12">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Get Your Free Estimate</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all" placeholder="(559) 555-0000" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
                  <select id="service" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all bg-white">
                    <option>AC Repair</option>
                    <option>AC Installation</option>
                    <option>Heating Repair</option>
                    <option>Maintenance</option>
                    <option>Sheet Metal / Ductwork</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">How can we help?</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all resize-none" placeholder="Describe your issue..."></textarea>
              </div>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 rounded-lg transition-colors shadow-lg shadow-red-600/20">
                Request Service Now
              </button>
              <p className="text-center text-xs text-slate-500 mt-4">
                By submitting this form, you agree to be contacted by Purl's regarding your request.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
