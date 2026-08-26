
const Contact = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-16 px-4 md:px-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase bg-indigo-500/10 px-3.5 py-1.5 rounded-full border border-indigo-500/20">
          Customer Support
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 mt-4">
          How Can We Help You?
        </h1>
        <p className="text-slate-400 mt-3 text-sm md:text-base">
          Have questions regarding order tracking, product warranty, or tech specifications? Get in touch with our team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Information Sidebar */}
        <div className="space-y-6">
          <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl flex items-start gap-4 hover:border-indigo-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-slate-200 font-bold text-sm">Official Support Email</h3>
              <a
                href="mailto:auratechhimu@gmail.com"
                className="text-indigo-400 hover:text-indigo-300 font-medium text-sm mt-1 inline-block underline underline-offset-4"
              >
                auratechhimu@gmail.com
              </a>
              <p className="text-slate-500 text-xs mt-1">Response time: Within 2-4 hours</p>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl flex items-start gap-4 hover:border-indigo-500/30 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h32.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-slate-200 font-bold text-sm">Customer Helpline</h3>
              <p className="text-slate-300 font-semibold text-sm mt-1">+880 1575-873496</p>
              <p className="text-slate-500 text-xs mt-1">Available Everyday (10 AM - 10 PM)</p>
            </div>
          </div>

        </div>

        {/* Form Container */}
        <div className="lg:col-span-2 bg-slate-900/70 border border-slate-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-slate-100 mb-6">Send Us a Direct Message</h2>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2">Subject</label>
              <input
                type="text"
                placeholder="Product warranty claim / Custom order query"
                className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Describe your requirement or issue in detail..."
                className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none resize-none transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] text-white font-semibold py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-indigo-600/25"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;