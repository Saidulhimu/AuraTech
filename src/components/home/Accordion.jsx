import { useState } from 'react';

const faqsData = [
  {
    id: 1,
    tag: "Order & Payment",
    question: "How do I place an order on AuraTech?",
    answer: "Simply browse your desired gadgets, add them to your cart, click checkout, fill in your delivery details, and pick your preferred payment option to complete the order.",
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    id: 2,
    tag: "Delivery & Tracking",
    question: "What are the shipping timelines?",
    answer: "Standard delivery takes 24–48 hours inside the metro city. Regional delivery typically completes within 2–3 business days. Live tracking links are provided via SMS and email.",
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 3,
    tag: "Returns & Exchanges",
    question: "What is your replacement policy?",
    answer: "We offer a 7-day hassle-free replacement policy for defective or wrong items. Retain the original box, accessories, and invoice to initiate a swift replacement.",
    icon: (
      <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    id: 4,
    tag: "Brand Warranty",
    question: "Do products come with official warranty?",
    answer: "Yes, every tech device and smart gadget comes with 6 months to 1 year of official manufacturer warranty coverage from the date of purchase.",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const Accordion = () => {
  const [activeId, setActiveId] = useState(1);
  const [copied, setCopied] = useState(false);

  const email = "auratechhimu@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto my-28 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-4">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
          Help Center
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-400 bg-clip-text text-transparent tracking-tight">
          Everything You Need to Know
        </h2>
        <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
          Quickly find answers regarding your orders, product warranties, and fast delivery timelines.
        </p>
      </div>

      {/* Modern 2-Column Grid Accordion */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto relative z-10">
        {faqsData.map((faq) => {
          const isOpen = activeId === faq.id;
          return (
            <div
              key={faq.id}
              onClick={() => setActiveId(isOpen ? null : faq.id)}
              className={`group cursor-pointer rounded-3xl p-6 sm:p-7 border transition-all duration-300 backdrop-blur-xl relative overflow-hidden ${
                isOpen
                  ? "bg-gradient-to-b from-[#191b2c] to-[#121320] border-purple-500/60 shadow-2xl shadow-purple-950/40 translate-y-[-2px]"
                  : "bg-[#0e0f17]/80 border-purple-900/20 hover:border-purple-500/40 hover:bg-[#141524]"
              }`}
            >
              {/* Active Card Glow Stripe */}
              {isOpen && (
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500"></div>
              )}

              {/* Card Header Top Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-purple-950/50 border border-purple-800/40">
                    {faq.icon}
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                    {faq.tag}
                  </span>
                </div>

                {/* Status Toggle Indicator */}
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isOpen 
                    ? "bg-purple-600 border-purple-400 text-white rotate-180 shadow-md shadow-purple-600/50" 
                    : "border-slate-800 bg-slate-900/50 text-slate-500 group-hover:border-purple-500/40 group-hover:text-purple-300"
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Question Title */}
              <h3 className={`text-base sm:text-lg font-bold transition-colors ${isOpen ? "text-white" : "text-slate-200 group-hover:text-purple-200"}`}>
                {faq.question}
              </h3>

              {/* Answer Box */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-slate-300 text-sm leading-relaxed pt-2 border-t border-purple-900/30">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Accordion;