import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-block">
      <div className="section-shell">
        <div className="reveal">
          <div className="section-label">Who We Are</div>
          <h2>More Customers for Local <br /> Businesses, <span style={{ color: 'var(--cyan)' }}>Less Work for You </span></h2>
        </div>
        <div className="about-grid">
          <div className="reveal">
            <div className="about-text">
              <p>AyikSolution is a lean, execution-first AI automation and web development agency. We specialize in one thing: helping health clinics and medical professionals grow — without wasting time on things that can be automated.</p>
              <p>We help local businesses automate customer inquiries, bookings, and follow-ups using AI-powered systems.</p>
              <p>From WhatsApp to Instagram to your website — everything works together to capture leads and convert them into paying customers automatically.</p>
            </div>
            <div className="about-stats">
              <div className="about-stat-card reveal">
                <div className="about-stat-num">₹0</div>
                <div className="about-stat-label">Setup cost for clients</div>
              </div>
              <div className="about-stat-card reveal">
                <div className="about-stat-num">48h</div>
                <div className="about-stat-label">Average onboarding time</div>
              </div>
              <div className="about-stat-card reveal">
                <div className="about-stat-num">24/7</div>
                <div className="about-stat-label">AI works, even while you sleep</div>
              </div>
              <div className="about-stat-card reveal">
                <div className="about-stat-num">100%</div>
                <div className="about-stat-label">Outcome-focused delivery</div>
              </div>
            </div>
          </div>
          <div className="team-grid reveal">
            <div className="team-card">
              <div className="team-avatar">AI</div>
              <div>
                <div className="team-name"> AI Chat & Booking System (WhatsApp + Instagram)</div>
                <div className="team-role">CEO & Founder</div>
                <div className="team-desc"> Automatically responds to customer inquiries, books appointments/orders,    and handles FAQs 24/7.</div>
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg,var(--green),var(--cyan))' }}>CA</div>
              <div>
                <div className="team-name">Customer Follow-Up Automation</div>
                <div className="team-role">Workflow & Integration Lead</div>
                <div className="team-desc">Turn interested people into paying customers with automated reminders, offers, and re-engagement.
</div>
              </div>
            </div>
            <div className="team-card">
              <div className="team-avatar" style={{ background: 'linear-gradient(135deg,var(--orange),var(--blue))' }}>LC</div>
              <div>
                <div className="team-name">Lead Capture & Conversion Systemh</div>
                <div className="team-role">Digital Growth Specialist</div>
                <div className="team-desc"> All your leads from ads, social media, and website are captured and converted into customers in one system.
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
