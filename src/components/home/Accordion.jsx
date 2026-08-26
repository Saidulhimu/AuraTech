const faqsData = [
  {
    id: 1,
    question: "How do I place an order on AuraTech?",
    answer: "Simply add your desired products to the cart, click on the checkout button, enter your shipping details, and select a preferred payment method to complete your purchase."
  },
  {
    id: 2,
    question: "What are the shipping charges and delivery timelines?",
    answer: "Standard delivery within the metro city takes 24–48 hours. Regional deliveries typically take 2–3 business days. Express shipping options are also available at checkout."
  },
  {
    id: 3,
    question: "What is your return and replacement policy?",
    answer: "We offer a hassle-free 7-day return and replacement policy for any defective or damaged products. Please make sure to retain the original packaging and invoice."
  },
  {
    id: 4,
    question: "Do products come with official warranty coverage?",
    answer: "Yes, all electronics and smart gadgets come with an official brand warranty ranging from 6 months to 1 year depending on the product category."
  }
];

const Accordion = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto my-24 px-6 md:px-12">
      {/* Header Section */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent mt-4">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
          Find answers to common inquiries regarding our premium gadgets, shipping options, and warranty services.
        </p>
      </div>

      {/* Accordion Container - Expanded width for better layout fit */}
      <div className="max-w-5xl mx-auto space-y-4">
        {faqsData.map((faq, index) => (
          <details
            key={faq.id}
            open={index === 0}
            className="group bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-md transition-all duration-300 hover:border-purple-500/40 open:border-purple-500/50 open:bg-slate-900/90 open:shadow-lg open:shadow-purple-500/10"
          >
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none select-none font-semibold text-slate-100 text-base md:text-lg">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold text-purple-400">
                  0{index + 1}.
                </span>
                <span>{faq.question}</span>
              </div>
              
              {/* Animated Plus / Minus Badge */}
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-purple-400 group-open:rotate-180 group-open:bg-purple-500/20 group-open:border-purple-500/40 transition-transform duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>

            <div className="px-6 pb-6 pt-2 text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-800/60">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Accordion;