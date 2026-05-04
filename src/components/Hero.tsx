import React, { useEffect } from 'react';

const Hero: React.FC = () => {
  useEffect(() => {
    // Scroll animation for counters
    const animateCounters = () => {
      document.querySelectorAll('[data-target]').forEach(el => {
        const hElement = el as HTMLElement;
        const target = parseInt(hElement.dataset.target || "0");
        // const isPercentage = el.textContent?.includes('%');
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = Math.floor(current) + (target === 95 ? '%' : target === 150 ? '+' : target === 3 ? '' : '+');
          if (current >= target) clearInterval(timer);
        }, 20);
      });
    };

    const statsElement = document.querySelector('.hero-stats');
    if (statsElement) {
      const heroObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          animateCounters();
          heroObserver.disconnect();
        }
      }, { threshold: 0.5 });
      heroObserver.observe(statsElement);
    }

    // Smooth parallax on hero orbs
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      document.querySelectorAll('.hero-orb').forEach((orb, i) => {
        const factor = (i + 1) * 0.4;
        (orb as HTMLElement).style.transform = `translate(${x * factor}px,${y * factor}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home">
      <div className="hero-bg">   
        <div className="hero-grid"></div>
        <div className="hero-orb orb1"></div>
        <div className="hero-orb orb2"></div>
        <div className="hero-orb orb3"></div>
      </div>

      <div className="hero-3d">
        <div className="float-card">
          <div className="float-card-title">Leads This Month</div>
          <div className="float-metric">+100</div>
          <div className="float-tag"> Qualified Leads Generated for Local Businesses</div>
          <div className="float-bar"><div className="float-bar-fill"></div></div>
        </div>
     </div>

      <div className="hero-content">
        <div className="hero-badge"><span></span> AI Automation + Web Development Agency</div>
        <h1>Turn Your Website<br />Into a <span className="hero-grad">Client-Generating Machine</span></h1>
        <p className="hero-sub">AI-powered lead generation, booking automation, and stunning websites — designed for healthcare professionals who want to focus on patients, not marketing.</p>
        <div className="hero-btns">
          <a href="#services" className="btn-primary">See Our Services →</a>
          <a href="#work" className="btn-outline">View Our Work</a>
        </div>
        <div className="hero-stats">
          <div className="stat-item"><div className="stat-num" data-target="150">0</div><div className="stat-label">Appointments Automated</div></div>
          <div className="stat-item"><div className="stat-num" data-target="12">0</div><div className="stat-label">Clinics Served</div></div>
          <div className="stat-item"><div className="stat-num" data-target="95">0</div><div className="stat-label">% Client Retention</div></div>
          <div className="stat-item"><div className="stat-num" data-target="3">0</div><div className="stat-label">Faster Patient Response Time
</div></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
        <span className="scroll-txt">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
