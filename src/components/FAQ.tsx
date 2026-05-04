import React, { useState, useRef, useEffect } from 'react';

interface FAQItem {
  q: string;
  a: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: 'Getting Started',
    q: 'How quickly can you set everything up?',
    a: 'For most clinics, we complete the full onboarding — website, chatbot, and automation setup — within 5–7 business days. Simple packages (chatbot only or content only) are live within 48 hours of receiving your information. We work fast because we know every day without leads is a day of missed revenue.',
  },
  {
    category: 'Getting Started',
    q: 'Do I need any technical knowledge to use your systems?',
    a: 'Absolutely not. We handle all the technical setup, maintenance, and monitoring. You get a simple dashboard to see your results and a WhatsApp number to reach us anytime. Your staff doesn\'t need to change anything about their workflow — the systems run silently in the background.',
  },
  {
    category: 'Results',
    q: 'What kind of results can I expect?',
    a: 'Most clients see a significant increase in online enquiries within the first 30 days. Our automation systems typically save 2–4 hours of staff time daily and reduce missed leads by over 80%. We share a detailed monthly performance report so you always know exactly what\'s working and where.',
  },
  {
    category: 'Results',
    q: 'How is success measured?',
    a: 'We track what actually matters: number of leads generated, booked appointments, cost per lead, and estimated patient revenue. Not vanity metrics like followers or impressions. Every package includes a monthly report with these numbers, and we\'re always available to walk you through them.',
  },
  {
    category: 'Pricing & Contracts',
    q: 'Can I cancel anytime?',
    a: 'Yes. We operate on monthly retainers with no long-term lock-in. We\'re confident in our results — so we don\'t need contracts to keep you. Simply give us 15 days notice before the next billing cycle and we\'ll wrap everything up cleanly.',
  },
  {
    category: 'Pricing & Contracts',
    q: 'Are there any hidden fees or setup costs?',
    a: 'No hidden fees. What we quote is what you pay. For most packages, there\'s a one-time setup fee that covers system configuration, creative assets, and onboarding. Monthly retainer costs are fully transparent and listed on our pricing page.',
  },
  {
    category: 'Compatibility',
    q: 'Do you work with all types of clinics?',
    a: 'Yes — dental clinics, physiotherapy centers, dermatology practices, med spas, nutrition consultants, and general physicians. If you see patients and want more of them, we can help. We currently operate in Kolkata and surrounding areas with remote support available across India.',
  },
  {
    category: 'Compatibility',
    q: 'What if I already have a website or social media pages?',
    a: 'We can work with what you have. We\'ll audit your existing setup, identify what\'s underperforming, and either improve it or rebuild it from scratch — depending on what makes sense. We\'ll give you an honest recommendation rather than pushing a rebuild just to bill more.',
  },
];

const categories = Array.from(new Set(faqs.map(f => f.category)));

const getFaqId = (item: FAQItem) => `${item.category}::${item.q}`;
const getFaqsByCategory = (category: string) =>
  category === 'All' ? faqs : faqs.filter(f => f.category === category);

const AccordionItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}> = ({ item, isOpen, onToggle, index }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      style={{
        borderBottom: '1px solid var(--border)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-none group"
        style={{ background: 'none', border: 'none' }}
      >
        <div className="flex items-start gap-4 flex-1">
          {/* Number */}
          <span
            className="text-[12px] font-bold tracking-[0.1em] mt-[2px] flex-shrink-0"
            style={{ color: isOpen ? 'var(--cyan)' : 'var(--muted)', transition: 'color 0.3s', minWidth: '28px' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className="text-[15.5px] font-medium leading-snug"
            style={{
              color: isOpen ? 'var(--text)' : 'var(--text)',
              fontFamily: 'var(--font-body)',
              transition: 'color 0.3s',
            }}
          >
            {item.q}
          </span>
        </div>

        {/* Icon */}
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-[1px] transition-all duration-300"
          style={{
            background: isOpen ? 'var(--cyan)' : 'var(--border)',
            color: isOpen ? 'var(--black)' : 'var(--muted)',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </button>

      {/* Smooth animated answer */}
      <div
        style={{
          height: `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div ref={contentRef} className="pb-5 pl-[44px]">
          <p
            className="text-[14.5px] leading-[1.8]"
            style={{ color: 'var(--muted)', fontWeight: 300 }}
          >
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openItemId, setOpenItemId] = useState<string | null>(getFaqId(faqs[0]));
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = getFaqsByCategory(activeCategory);

  const handleCategoryChange = (category: string) => {
    const nextFaqs = getFaqsByCategory(category);
    setActiveCategory(category);
    setOpenItemId(nextFaqs.length > 0 ? getFaqId(nextFaqs[0]) : null);
  };

  return (
    <section className="section-block" style={{ background: 'var(--black)' }}>
      <div className="section-shell">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 reveal">
          <div>
            <div className="section-label">FAQ</div>
            <h2 className="mb-0">
              Questions?{' '}
              <span style={{ color: 'var(--orange)' }}>Answered.</span>
            </h2>
          </div>
          <p className="text-[16px] lg:max-w-xs leading-relaxed" style={{ color: 'var(--muted)', fontWeight: 300 }}>
            Everything you'd want to know before working with us — covered honestly.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 reveal">
          {['All', ...categories].map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className="px-4 py-2 rounded-full text-[12px] font-semibold tracking-[0.08em] uppercase transition-all duration-200 cursor-none"
              style={{
                background: activeCategory === cat ? 'var(--cyan)' : 'var(--card)',
                color: activeCategory === cat ? 'var(--black)' : 'var(--muted)',
                border: `1px solid ${activeCategory === cat ? 'var(--cyan)' : 'var(--border)'}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Two-column layout on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-20">
          {/* Accordion */}
          <div key={activeCategory}>
            {filtered.map((faq, i) => (
              <AccordionItem
                key={getFaqId(faq)}
                item={faq}
                index={i}
                isOpen={openItemId === getFaqId(faq)}
                onToggle={() =>
                  setOpenItemId(prev => (prev === getFaqId(faq) ? null : getFaqId(faq)))
                }
              />
            ))}
          </div>

          {/* Sidebar card */}
          <div className="hidden lg:block">
            <div
              className="sticky top-28 rounded-2xl p-8 reveal"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="text-4xl mb-5">💬</div>
              <h3
                className="text-[22px] font-bold mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-head)', color: 'var(--text)' }}
              >
                Still have questions?
              </h3>
              <p className="text-[14px] leading-relaxed mb-7" style={{ color: 'var(--muted)' }}>
                Our team typically responds within 2 hours on working days. No bots, no scripted replies — just a real conversation about your clinic.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-full text-[14px] font-semibold text-white transition-all duration-200 cursor-none"
                  style={{ background: 'linear-gradient(135deg, var(--blue), var(--cyan))' }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 10px 30px rgba(37,99,255,0.35)')}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                >
                  Book a Free Call →
                </a>
                <a
                  href="https://wa.me/"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-full text-[14px] font-semibold transition-all duration-200 cursor-none"
                  style={{
                    background: 'rgba(0,229,153,0.1)',
                    color: '#00e599',
                    border: '1px solid rgba(0,229,153,0.25)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,229,153,0.18)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,229,153,0.1)')}
                >
                  💬 Chat on WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-3 mt-7 pt-7" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex -space-x-2">
                  {['AK', 'SR', 'PM'].map((init, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white border-2"
                      style={{
                        background: `linear-gradient(135deg, ${['#2563ff','#00d4ff','#ff6b00'][i]}, ${['#00d4ff','#00e599','#facc15'][i]})`,
                        borderColor: 'var(--card)',
                      }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <p className="text-[12px]" style={{ color: 'var(--muted)' }}>
                  Response in <span style={{ color: 'var(--cyan)' }}>under 2 hours</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;