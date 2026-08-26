
const About = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-16 px-4 md:px-12 space-y-20">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
          The AuraTech Story
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 leading-tight">
          Delivering Original & Premium Consumer Electronics in Bangladesh
        </h1>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          AuraTech was founded with a singular mission: providing authentic, high-performance gadgets with transparent pricing and official warranty support for tech enthusiasts.
        </p>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            ✓
          </div>
          <h3 className="text-xl font-bold text-slate-100">100% Original Gadgets</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every smartphone, headphone, and accessory in our catalog is sourced directly from verified regional distributors.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            ⚡
          </div>
          <h3 className="text-xl font-bold text-slate-100">Same-Day Dispatch</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Fast nationwide shipping with secure bubble packaging to ensure your products arrive in pristine condition.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-2xl space-y-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            🛡️
          </div>
          <h3 className="text-xl font-bold text-slate-100">Hassle-free Replacement</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            7 days replacement guarantee with official brand warranty management support.
          </p>
        </div>
      </div>

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-900/40 border border-slate-800 p-8 rounded-2xl text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-indigo-400 font-mono">25,000+</h2>
          <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider font-semibold">Orders Fulfilled</p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-indigo-400 font-mono">99.2%</h2>
          <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider font-semibold">Positive Rating</p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-indigo-400 font-mono">64</h2>
          <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider font-semibold">Districts Covered</p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-indigo-400 font-mono">1 Year</h2>
          <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider font-semibold">Official Warranty</p>
        </div>
      </div>
    </div>
  );
};

export default About;