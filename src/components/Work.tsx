import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  MouseEvent,
} from 'react';

/* ─── Data ──────────────────────────────────────────────────────────── */
interface Project {
  title: string;
  desc: string;
  category: string;
  image: string;
  accent: string;        // subtle glow / chip tint
  accentText: string;
}

const projects: Project[] = [
  {
    title: 'SmileCare Dental Clinic',
    desc: 'Complete redesign with online booking, before/after gallery, and lightning-fast mobile experience.',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=80',
    accent: '#378ADD',
    accentText: '#B5D4F4',
  },
  {
    title: 'Mehta Physiotherapy',
    desc: 'WhatsApp AI chatbot for 24/7 enquiries and automated follow-ups — zero staff effort.',
    category: 'AI Automation',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80',
    accent: '#1D9E75',
    accentText: '#9FE1CB',
  },
  {
    title: 'Glow Med Spa',
    desc: 'Website + AI content calendar + Instagram growth automation. 30 posts/month, hands-free.',
    category: 'Growth & Content',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=700&q=80',
    accent: '#BA7517',
    accentText: '#FAC775',
  },
  {
    title: 'ClearVision Eye Clinic',
    desc: 'High-performance landing page with SEO-optimised content and local schema markup.',
    category: 'SEO & Web',
    image: 'https://images.unsplash.com/photo-1516131206008-dd041a9764fd?w=700&q=80',
    accent: '#7F77DD',
    accentText: '#CECBF6',
  },
  {
    title: 'SkinFirst Dermatology',
    desc: 'Full social media takeover with AI content, targeted Meta ads, and a high-converting funnel.',
    category: 'Paid Ads',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=80',
    accent: '#D4537E',
    accentText: '#F4C0D1',
  },
  {
    title: 'Zenith Wellness Studio',
    desc: 'End-to-end CRM with automated reminders, no-show follow-ups, and a review generation pipeline.',
    category: 'CRM & Reviews',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&q=80',
    accent: '#639922',
    accentText: '#C0DD97',
  },
];

/* ─── Lerp ──────────────────────────────────────────────────────────── */
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

/* ─── PremiumCard ───────────────────────────────────────────────────── */
const PremiumCard: React.FC<{
  project: Project;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  isMobile: boolean;
}> = ({ project, isActive, onEnter, onLeave, isMobile }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isMobile || !shineRef.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    shineRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`;
  };

  const cardStyle: React.CSSProperties = {
    position: 'relative',
    flexShrink: 0,
    borderRadius: 28,
    overflow: 'hidden',
    cursor: 'none',
    transition: isMobile
      ? 'none'
      : 'width 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.55s cubic-bezier(0.22,1,0.36,1)',
    width: isMobile ? 280 : isActive ? 460 : 300,
    height: isMobile ? 400 : 440,
    transform: !isMobile && isActive ? 'translateY(-10px)' : 'translateY(0px)',
    boxShadow: isActive
      ? `0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08), 0 0 40px ${project.accent}30`
      : '0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.05)',
    zIndex: isActive ? 10 : 1,
    filter: !isMobile && !isActive ? 'brightness(0.72)' : 'brightness(1)',
  };

  const imageStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.75s cubic-bezier(0.22,1,0.36,1)',
    transform: isActive ? 'scale(1.07)' : 'scale(1.01)',
    willChange: 'transform',
  };

  // Overlay: always visible at bottom on mobile, animated on desktop
  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: isMobile
      ? 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.05) 100%)'
      : isActive
      ? 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.1) 100%)'
      : 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
    transition: 'background 0.55s cubic-bezier(0.22,1,0.36,1)',
  };

  const titleTranslate = isActive ? '0px' : '6px';
  const titleSize = isActive ? 22 : 18;

  return (
    <div
      ref={cardRef}
      style={cardStyle}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Image */}
      <img src={project.image} alt={project.title} style={imageStyle} />

      {/* Overlay */}
      <div style={overlayStyle} />

      {/* Shine layer */}
      <div
        ref={shineRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          transition: 'opacity 0.3s',
          opacity: isActive ? 1 : 0,
        }}
      />

      {/* Content — bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '28px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        {/* Category chip */}
        <div
          style={{
            opacity: isMobile ? 1 : isActive ? 1 : 0,
            transform: isMobile
              ? 'none'
              : isActive
              ? 'translateY(0px)'
              : 'translateY(10px)',
            transition: 'opacity 0.4s 0.1s cubic-bezier(0.22,1,0.36,1), transform 0.4s 0.1s cubic-bezier(0.22,1,0.36,1)',
            display: 'inline-flex',
            alignSelf: 'flex-start',
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: project.accentText,
              background: `${project.accent}22`,
              border: `1px solid ${project.accent}55`,
              padding: '4px 12px',
              borderRadius: 999,
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            margin: 0,
            color: '#fff',
            fontFamily: "'Playfair Display', 'Georgia', serif",
            fontSize: titleSize,
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            transform: `translateY(${titleTranslate})`,
            transition: 'font-size 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)',
            textShadow: '0 2px 12px rgba(0,0,0,0.4)',
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            margin: 0,
            color: 'rgba(255,255,255,0.65)',
            fontSize: 13,
            lineHeight: 1.6,
            fontFamily: "'DM Sans', sans-serif",
            opacity: isMobile ? 0.85 : isActive ? 1 : 0,
            transform: isMobile
              ? 'none'
              : isActive
              ? 'translateY(0px)'
              : 'translateY(14px)',
            transition:
              'opacity 0.45s 0.18s cubic-bezier(0.22,1,0.36,1), transform 0.45s 0.18s cubic-bezier(0.22,1,0.36,1)',
            maxHeight: isMobile ? 60 : isActive ? 80 : 0,
            overflow: 'hidden',
          }}
        >
          {project.desc}
        </p>

        {/* Bottom accent line */}
        <div
          style={{
            height: 2,
            borderRadius: 2,
            background: project.accent,
            opacity: isActive ? 1 : 0,
            transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition:
              'opacity 0.4s 0.25s cubic-bezier(0.22,1,0.36,1), transform 0.5s 0.25s cubic-bezier(0.22,1,0.36,1)',
            marginTop: 2,
          }}
        />
      </div>

      {/* Top-right index number */}
      <div
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          color: 'rgba(255,255,255,0.25)',
          fontSize: 11,
          fontFamily: "'DM Mono', monospace",
          letterSpacing: '0.1em',
          opacity: isActive ? 0 : 1,
          transition: 'opacity 0.3s',
        }}
      >
        {String(projects.indexOf(project) + 1).padStart(2, '0')}
      </div>
    </div>
  );
};

/* ─── Work Section ──────────────────────────────────────────────────── */
const Work: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const loopActiveRef = useRef(false);

  const [isMobile, setIsMobile] = useState(false);
  const [outerHeight, setOuterHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  /* ── Detect mobile ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    const mq = window.matchMedia('(max-width: 767px)');
    mq.addEventListener('change', check);
    return () => mq.removeEventListener('change', check);
  }, []);

  /* ── Measure track overflow → outer height ── */
  useLayoutEffect(() => {
    if (isMobile) { setOuterHeight(0); return; }
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const extra = Math.max(0, track.scrollWidth - window.innerWidth);
      setOuterHeight(window.innerHeight + extra);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener('resize', measure);
    return () => { ro.disconnect(); window.removeEventListener('resize', measure); };
  }, [isMobile]);

  /* ── Lerp loop ── */
  const startLerpLoop = () => {
    if (loopActiveRef.current) return;
    loopActiveRef.current = true;
    const tick = () => {
      const diff = targetXRef.current - currentXRef.current;
      if (Math.abs(diff) < 0.05) {
        currentXRef.current = targetXRef.current;
        loopActiveRef.current = false;
        applyTransform(currentXRef.current);
        return;
      }
      currentXRef.current = lerp(currentXRef.current, targetXRef.current, 0.1);
      applyTransform(currentXRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const applyTransform = (x: number) => {
    if (trackRef.current)
      trackRef.current.style.transform = `translateX(-${x}px)`;
    if (progressRef.current) {
      const track = trackRef.current;
      const max = track ? Math.max(1, track.scrollWidth - window.innerWidth) : 1;
      progressRef.current.style.width = `${Math.min(100, (x / max) * 100)}%`;
    }
  };

  /* ── Scroll → updateX ── */
  useEffect(() => {
    if (isMobile) return;
    const onScroll = () => {
      const outer = outerRef.current;
      const track = trackRef.current;
      if (!outer || !track) return;
      const outerTop = outer.getBoundingClientRect().top + window.scrollY;
      const scrollBudget = outer.offsetHeight - window.innerHeight;
      if (scrollBudget <= 0) return;
      const scrolled = window.scrollY - outerTop;
      const progress = Math.max(0, Math.min(1, scrolled / scrollBudget));
      const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth);
      targetXRef.current = progress * maxTranslate;
      startLerpLoop();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, outerHeight]);

  /* ── Font loader ── */
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500&family=DM+Mono&display=swap';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  /* ════════════════════════════════════════════════════════════════
     MOBILE
  ════════════════════════════════════════════════════════════════ */
  if (isMobile) {
    return (
      <section
        id="work"
        style={{ background: 'var(--black)', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div
          style={{
            paddingLeft: 'var(--section-px)',
            paddingRight: 'var(--section-px)',
            marginBottom: '2.5rem',
          }}
        >
          <p className="section-label">Our Work</p>
          <h2 style={{ margin: 0 }}>
            Results that speak<br />
            <span style={{ color: 'var(--orange)' }}>louder than promises.</span>
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 16,
            overflowX: 'auto',
            paddingLeft: 'var(--section-px)',
            paddingRight: 'var(--section-px)',
            paddingBottom: 24,
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch' as any,
            scrollSnapType: 'x mandatory',
          }}
        >
          {projects.map((project) => (
            <div key={project.title} style={{ scrollSnapAlign: 'start', flexShrink: 0 }}>
              <PremiumCard
                project={project}
                isActive={false}
                onEnter={() => {}}
                onLeave={() => {}}
                isMobile={true}
              />
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginTop: 8,
          }}
        >
          <div style={{ display: 'flex', gap: 6 }}>
            {projects.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === 0 ? 20 : 6,
                  height: 3,
                  borderRadius: 3,
                  background: i === 0 ? 'var(--cyan)' : 'var(--border)',
                }}
              />
            ))}
          </div>
          <span
            style={{
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            swipe to explore
          </span>
        </div>
      </section>
    );
  }

  /* ════════════════════════════════════════════════════════════════
     DESKTOP — sticky lerp scroll
  ════════════════════════════════════════════════════════════════ */
  return (
    <div
      ref={outerRef}
      id="work"
      style={{ height: outerHeight > 0 ? `${outerHeight}px` : '100vh', position: 'relative' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: 'var(--black)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Header */}
        <div
          className="section-shell"
          style={{ flexShrink: 0, marginBottom: '2.5rem' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p className="section-label">Our Work</p>
              <h2 style={{ margin: 0 }}>
                Results that speak<br />
                <span style={{ color: 'var(--orange)' }}>louder than promises.</span>
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>
                {projects.length} projects
              </span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 16px',
                  borderRadius: 999,
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  color: 'var(--muted)',
                }}
              >
                <span style={{ color: 'var(--cyan)', fontSize: 14 }}>↓</span>
                scroll to explore
              </div>
            </div>
          </div>
        </div>

        {/* Cards track */}
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: 18,
            flexShrink: 0,
            paddingLeft: 'var(--section-px)',
            paddingRight: 'var(--section-px)',
            willChange: 'transform',
            alignItems: 'flex-end',
          }}
        >
          {projects.map((project, i) => (
            <PremiumCard
              key={project.title}
              project={project}
              isActive={activeIndex === i}
              onEnter={() => setActiveIndex(i)}
              onLeave={() => setActiveIndex(null)}
              isMobile={false}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginTop: '2.5rem',
            paddingLeft: 'var(--section-px)',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 220,
              height: 2,
              background: 'var(--border)',
              borderRadius: 2,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <div
              ref={progressRef}
              style={{
                position: 'absolute',
                inset: 0,
                width: '0%',
                background: 'var(--cyan)',
                borderRadius: 2,
                transition: 'none',
              }}
            />
          </div>
          <span
            style={{
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            keep scrolling
          </span>
        </div>
      </div>
    </div>
  );
};

export default Work;