import React from 'react';

interface PricingProps {
  openContact: () => void;
}
   
const Pricing: React.FC<PricingProps> = () => {
  return (
    <section className="price-section section-block reveal">
      <div className="section-shell">
        <div className="section-label">Pricing</div>
        <h2>Simple, transparent<br /><span style={{ color: 'var(--cyan)' }}>monthly retainers.</span></h2>
        <div className="price-grid">
          <div className="price-card reveal">
            <div className="price-name">Starter</div>
            <div className="price-amount">₹14,999</div>
            <div className="price-period">per month</div>
            <div className="price-desc">Perfect for clinics just getting started with AI automation and a digital presence.</div>
            <ul className="price-features">
              <li>WhatsApp AI chatbot (basic)</li>
              <li>10 social media posts/month</li>
              <li>Lead capture form setup</li>
              <li>Monthly performance report</li>
              <li>Email support</li>
            </ul>
           <a href="#contact"><button  className="btn-price btn-price-outline">Request Quote</button> </a> 
          </div>
          <div className="price-card featured reveal">
            <div className="price-badge">Most Popular</div>
            <div className="price-name">Growth</div>
            <div className="price-amount">₹29,999</div>
            <div className="price-period">per month</div>
            <div className="price-desc">The complete AI marketing engine for clinics serious about consistent patient growth.</div>
            <ul className="price-features">
              <li>Full AI chatbot + booking automation</li>
              <li>Custom clinic website</li>
              <li>30 posts/month + Reel scripts</li>
              <li>WhatsApp follow-up sequences</li>
              <li>Google Business optimization</li>
              <li>Monthly strategy call</li>
            </ul>
           <a href="#contact"><button  className="btn-price btn-price-filled">Get Started →</button></a>
          </div>
          <div className="price-card reveal">
            <div className="price-name">Full Stack</div>
            <div className="price-amount">₹54,999</div>
            <div className="price-period">per month</div>
            <div className="price-desc">Maximum growth mode — for multi-location clinics or those wanting a complete digital team.</div>
            <ul className="price-features">
              <li>Everything in Growth</li>
              <li>Paid ad creative generation</li>
              <li>Patient re-engagement automation</li>
              <li>Review generation system</li>
              <li>Priority WhatsApp support</li>
              <li>Dedicated account manager</li>
            </ul>
            <a href="#contact"><button  className="btn-price btn-price-outline"> Request Quote</button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
