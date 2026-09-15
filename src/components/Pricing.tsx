import React from 'react';

interface PricingProps {
  openContact: () => void;
}

const steps = [
  {
    num: '01',
    title: 'Share your idea',
    desc: "Tell us what you're building — a website, an AI booking system, or both.",
  },
  {
    num: '02',
    title: 'Get pricing that fits',
    desc: 'A price built around your project and budget, always open to talk it through.',
  },
  {
    num: '03',
    title: 'We start building',
    desc: 'No contracts to lock you in. Approve the quote and we get straight to work.',
  },
];

const Pricing: React.FC<PricingProps> = () => {
  return (
    <section className="quote-section section-block reveal">
      <div className="section-shell">
        <div className="quote-card reveal">
          <div className="quote-orb quote-orb-1"></div>
          <div className="quote-orb quote-orb-2"></div>
          <div className="quote-grid-bg"></div>

          <div className="quote-badge">No fixed packages</div>

          <div className="quote-card-inner">
            <div className="quote-col-main">
              <div className="section-label">Pricing</div>
              <h2 className="quote-heading">
                Got an idea to build?<br />
                <span style={{ color: 'var(--cyan)' }}>Let&apos;s connect.</span>
              </h2>
              <p className="quote-sub">
                Every clinic and every project is different — so we skip the generic
                packages. Tell us what you&apos;re trying to build and we&apos;ll come back
                with a clear, fixed quote made for it.
              </p>

              <div className="quote-cta-row">
                <a href="#contact" className="btn-primary quote-btn">
                  Let&apos;s Talk About Your Project
                  <span className="quote-btn-arrow">→</span>
                </a>
                <ul className="quote-trust">
                  <li><span className="quote-trust-dot" />Free 20-min consultation</li>
                  <li><span className="quote-trust-dot" />No fixed Pricing, transparent quote</li>
                  <li><span className="quote-trust-dot" />We reply within 24 hours</li>
                </ul>
              </div>
            </div>

            <div className="quote-col-steps">
              <div className="quote-steps-label">How it works</div>
              <div className="quote-steps">
                {steps.map((s, i) => (
                  <div className="quote-step" key={s.num}>
                    <div className="quote-step-num">{s.num}</div>
                    <div className="quote-step-body">
                      <div className="quote-step-title">{s.title}</div>
                      <div className="quote-step-desc">{s.desc}</div>
                    </div>
                    {i < steps.length - 1 && <div className="quote-step-line" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;