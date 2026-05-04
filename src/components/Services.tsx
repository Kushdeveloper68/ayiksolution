import React, { useCallback, useEffect, useRef, useState } from 'react';

/* ─── Data Model ──────────────────────────────────────────────── */
interface Service {
  image: string;
  imageAlt: string;
  accentColor: string;
  tag: string;
  title: string;
  benefit: string;
  features: string[];
  cta: string;
}

/*
 * Images: using high-quality Unsplash photos that visually communicate each service.
 * Swap these URLs for your own assets at any time.
 */
const services: Service[] = [
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    imageAlt: 'Modern clinic website on laptop',
    accentColor: '#4F8EF7',
    tag: 'Most Popular',
    title: 'Clinic Website Design',
    benefit: 'Your website should book patients while you sleep.',
    features: [
      'Online booking built-in from day one',
      'Google Maps & local SEO ready',
      'WhatsApp click-to-chat on every page',
    ],
    cta: 'See How It Works',
  },
  {
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
    imageAlt: 'WhatsApp AI chatbot conversation',
    accentColor: '#34C98A',
    tag: 'High Impact',
    title: 'AI Booking Automation',
    benefit: 'Every enquiry answered. Every lead captured. Automatically.',
    features: [
      'WhatsApp AI responds 24/7',
      'Appointment reminders sent automatically',
      'Monthly lead report delivered to you',
    ],
    cta: 'See How It Works',
  },
  {
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80',
    imageAlt: 'Instagram social media dashboard',
    accentColor: '#E05FD8',
    tag: 'Fully Managed',
    title: 'Social Media & Content',
    benefit: 'Stay visible every week — without touching your phone.',
    features: [
      '30 AI-generated posts per month',
      'Reels scripts and video hooks',
      'Scheduled across all your platforms',
    ],
    cta: 'See How It Works',
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imageAlt: 'Ad campaign analytics dashboard',
    accentColor: '#F97316',
    tag: 'ROI Focused',
    title: 'Paid Ads & Lead Generation',
    benefit: 'Bring in patients who are ready to book — not just browse.',
    features: [
      'Meta & Google Ads managed for you',
      'Custom landing page built & tested',
      'Weekly performance dashboard',
    ],
    cta: 'See How It Works',
  },
  {
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80',
    imageAlt: '5-star review dashboard',
    accentColor: '#F59E0B',
    tag: 'Trust Builder',
    title: 'Reputation & Review Growth',
    benefit: 'Build the kind of trust that fills your calendar.',
    features: [
      'Automated post-visit review requests',
      'Google & Practo profile optimised',
      'Negative review response managed',
    ],
    cta: 'See How It Works',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    imageAlt: 'Business analytics and growth charts',
    accentColor: '#A78BFA',
    tag: 'Strategic',
    title: 'Analytics & Growth Consulting',
    benefit: 'Know exactly where to grow next — with data, not guesswork.',
    features: [
      'Monthly strategy call with your team',
      'Full-funnel analytics dashboard',
      'Clear priority roadmap each quarter',
    ],
    cta: 'See How It Works',
  },
];

/* ─── ServiceCard ─────────────────────────────────────────────── */
const ServiceCard: React.FC<{ service: Service; isActive?: boolean }> = ({
  service,
  isActive = false,
}) => {
  const [hovered, setHovered] = useState(false);
  const isLive = isActive && hovered;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 24,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box',
        background: 'rgba(18, 20, 27, 0.96)',
        border: isActive
          ? `1px solid ${service.accentColor}55`
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: isLive
          ? `0 32px 80px ${service.accentColor}28, 0 8px 24px rgba(0,0,0,0.55)`
          : isActive
          ? `0 16px 48px rgba(0,0,0,0.45), 0 0 0 1px ${service.accentColor}22`
          : '0 4px 20px rgba(0,0,0,0.3)',
        transform: isLive ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
        cursor: 'default',
        willChange: 'transform, box-shadow',
      }}
    >
      {/* ── IMAGE ZONE (top 55%) ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56%',
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        {/* Photo */}
        <img
          src={service.image}
          alt={service.imageAlt}
          draggable={false}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: isLive ? 'scale(1.06)' : 'scale(1.0)',
            transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
            filter: isActive ? 'brightness(0.88) saturate(1.08)' : 'brightness(0.62) saturate(0.85)',
            userSelect: 'none',
          }}
        />

        {/* Gradient overlay: fades image into card body */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(
              to bottom,
              transparent 35%,
              rgba(10,12,18,0.55) 70%,
              rgba(10,12,18,0.95) 100%
            )`,
            pointerEvents: 'none',
          }}
        />

        {/* Subtle top-left accent tint when active */}
        {isActive && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(ellipse at 20% 20%, ${service.accentColor}28 0%, transparent 65%)`,
              opacity: isLive ? 1 : 0.6,
              transition: 'opacity 0.45s ease',
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Tag pill — bottom-left of image */}
        <span
          style={{
            position: 'absolute',
            bottom: 14,
            left: 16,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.11em',
            textTransform: 'uppercase',
            padding: '4px 11px',
            borderRadius: 100,
            background: `${service.accentColor}22`,
            color: service.accentColor,
            border: `1px solid ${service.accentColor}44`,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            pointerEvents: 'none',
            fontFamily: 'inherit',
          }}
        >
          {service.tag}
        </span>
      </div>

      {/* ── CONTENT ZONE (bottom 45%) ── */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '22px 24px 24px',
          gap: 0,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Title */}
        <h3
          style={{
            margin: '0 0 10px',
            fontSize: 19,
            fontWeight: 700,
            lineHeight: 1.25,
            fontFamily: 'var(--font-head, Georgia, serif)',
            color: '#FAFAFA',
            letterSpacing: '-0.01em',
            transition: 'color 0.25s ease',
          }}
        >
          {service.title}
        </h3>

        {/* Benefit line */}
        <p
          style={{
            margin: '0 0 18px',
            fontSize: 13.5,
            lineHeight: 1.6,
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 400,
          }}
        >
          {service.benefit}
        </p>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'rgba(255,255,255,0.07)',
            marginBottom: 16,
            borderRadius: 1,
          }}
        />

        {/* Feature list — exactly 3 */}
        <ul
          style={{
            margin: '0 0 20px',
            padding: 0,
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 9,
            flex: 1,
          }}
        >
          {service.features.map((feat, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 12.5,
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.4,
              }}
            >
              {/* Dot */}
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: service.accentColor,
                  flexShrink: 0,
                  opacity: 0.85,
                }}
              />
              {feat}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <button
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              fontSize: 12.5,
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: isActive ? service.accentColor : 'rgba(255,255,255,0.38)',
              cursor: 'pointer',
              transition: 'color 0.25s ease',
              fontFamily: 'inherit',
            }}
          >
            {service.cta}
            <span
              style={{
                display: 'inline-block',
                transform: isLive ? 'translateX(5px)' : 'translateX(0)',
                transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              →
            </span>
          </button>

          {/* Subtle accent circle */}
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: `${service.accentColor}18`,
              border: `1px solid ${service.accentColor}33`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: isActive ? 1 : 0.35,
              transition: 'opacity 0.3s ease',
              flexShrink: 0,
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke={service.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Services Section ────────────────────────────────────────── */

/*
 * INFINITE LOOP STRATEGY — triple-clone
 * ─────────────────────────────────────
 * Render: [ copy-A (0-5) | copy-B (6-11) | copy-C (12-17) ]
 * rawIndex starts at `total` (first card of copy-B).
 * active dot  = rawIndex % total
 * goTo(i)     = setRawIndex(total + i)   ← always land in copy-B
 */


const Services: React.FC = () => {
  const total    = services.length;
  const allCards = [...services, ...services, ...services]; // 18 items

  const [rawIndex, setRawIndex]     = useState(total);
  const [animated, setAnimated]     = useState(true);
  const [dragLive, setDragLive]     = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX   = useRef<number | null>(null);
  const dragDeltaRef = useRef(0);
  const wheelLock    = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerW, setContainerW] = useState(0);

  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => setAnimated(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setContainerW(containerRef.current.offsetWidth);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const [vp, setVp] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  useEffect(() => {
    const check = () =>
      setVp(window.innerWidth < 640 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop');
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const CARD_W = vp === 'mobile' ? Math.min(containerW - 40, 320) : 370;
  const GAP    = vp === 'mobile' ? 16 : 22;

  const next = useCallback(() => { setAnimated(true); setRawIndex(p => p + 1); }, []);
  const prev = useCallback(() => { setAnimated(true); setRawIndex(p => p - 1); }, []);
  const goTo = useCallback((i: number) => { setAnimated(true); setRawIndex(total + i); }, [total]);

  const handleTransitionEnd = useCallback((e: React.TransitionEvent) => {
    if (e.propertyName !== 'transform') return;
    setRawIndex(ri => {
      if (ri >= total * 2) { setAnimated(false); return ri - total; }
      if (ri < total)      { setAnimated(false); return ri + total; }
      return ri;
    });
  }, [total]);

  const handleWheel: React.WheelEventHandler = e => {
    if (wheelLock.current) return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) < 12) return;
    wheelLock.current = true;
    delta > 0 ? next() : prev();
    setTimeout(() => { wheelLock.current = false; }, 450);
  };

  const startDrag = (x: number) => {
    dragStartX.current = x;
    dragDeltaRef.current = 0;
    setIsDragging(true);
    setDragLive(0);
  };
  const moveDrag = (x: number) => {
    if (dragStartX.current === null) return;
    const d = x - dragStartX.current;
    dragDeltaRef.current = -d;
    setDragLive(d);
  };
  const endDrag = () => {
    if (Math.abs(dragDeltaRef.current) > 55) {
      dragDeltaRef.current > 0 ? next() : prev();
    }
    dragStartX.current = null;
    setIsDragging(false);
    setDragLive(0);
  };

  const trackTranslate = containerW / 2 - rawIndex * (CARD_W + GAP) - CARD_W / 2 + dragLive;
  const activeDot = rawIndex % total;

  return (
    <section
      id="services"
      className="section-block"
      style={{ background: 'var(--deep)', overflow: 'hidden' }}
    >
      {/* ── Header ── */}
      <div className="section-shell" style={{ marginBottom: 52 }}>
        <div className="section-label" style={{ marginBottom: 12 }}>What We Offer</div>
        <div
          style={{
            display: 'flex',
            flexDirection: vp === 'mobile' ? 'column' : 'row',
            alignItems: vp === 'mobile' ? 'flex-start' : 'flex-end',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <h2 style={{ margin: 0, lineHeight: 1.2 }}>
            Services built for<br />
            <span style={{ color: 'var(--blue)' }}>clinics that want to grow.</span>
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.7,
              color: 'var(--muted)',
              fontWeight: 300,
              maxWidth: 300,
            }}
          >
            Everything you need — from a stunning website to fully automated lead pipelines. One team, zero fluff.
          </p>
        </div>
      </div>

      {/* ── Carousel ── */}
      <div onWheel={handleWheel} style={{ position: 'relative', width: '100%' }}>

        {/* Clipping window */}
        <div
          ref={containerRef}
          style={{ overflow: 'hidden', width: '100%', padding: '20px 0 32px' }}
        >
          {/* The single sliding track */}
          <div
            onMouseDown={e => startDrag(e.clientX)}
            onMouseMove={e => isDragging ? moveDrag(e.clientX) : undefined}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={e => { e.stopPropagation(); startDrag(e.touches[0].clientX); }}
            onTouchMove={e => moveDrag(e.touches[0].clientX)}
            onTouchEnd={endDrag}
            onTransitionEnd={handleTransitionEnd}
            style={{
              display: 'flex',
              gap: GAP,
              transform: `translateX(${trackTranslate}px)`,
              transition: isDragging || !animated
                ? 'none'
                : 'transform 0.52s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              willChange: 'transform',
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none',
              touchAction: 'pan-y',
              alignItems: 'center',
            }}
          >
            {allCards.map((service, i) => {
              const dist     = i - rawIndex;
              const isCenter = dist === 0;
              const absDist  = Math.abs(dist);

              const scale   = isCenter ? 1      : Math.max(0.80, 1 - absDist * 0.10);
              const opacity = isCenter ? 1      : Math.max(0.30, 1 - absDist * 0.32);
              const blur    = isCenter ? 0      : Math.min(2, absDist * 0.8);

              const svcIdx = i % total;

              return (
                <div
                  key={i}
                  onClick={() => { if (!isDragging && !isCenter) goTo(svcIdx); }}
                  style={{
                    width: CARD_W,
                    flexShrink: 0,
                    transform: `scale(${scale})`,
                    opacity,
                    filter: blur > 0 ? `blur(${blur}px)` : 'none',
                    transition: isDragging || !animated
                      ? 'none'
                      : 'transform 0.52s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.52s ease, filter 0.52s ease',
                    transformOrigin: 'center center',
                    cursor: isCenter ? 'grab' : 'pointer',
                    pointerEvents: isDragging ? 'none' : 'auto',
                  }}
                >
                  <ServiceCard service={service} isActive={isCenter} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Edge fades */}
        <div
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: 120,
            background: 'linear-gradient(to right, var(--deep), transparent)',
            pointerEvents: 'none', zIndex: 5,
          }}
        />
        <div
          style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: 120,
            background: 'linear-gradient(to left, var(--deep), transparent)',
            pointerEvents: 'none', zIndex: 5,
          }}
        />
      </div>

      {/* ── Controls ── */}
      <div
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 20, marginTop: 20, padding: '0 var(--section-px)', flexWrap: 'wrap',
        }}
      >
        <NavBtn onClick={prev} direction="prev" />

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                height: 6,
                width: i === activeDot ? 28 : 6,
                borderRadius: 100,
                background: i === activeDot ? 'var(--blue)' : 'rgba(255,255,255,0.15)',
                border: 'none', padding: 0, cursor: 'pointer',
                transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
              }}
            />
          ))}
        </div>

        <NavBtn onClick={next} direction="next" />
      </div>

      <p
        style={{
          textAlign: 'center', marginTop: 10, fontSize: 10.5,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--muted)', opacity: 0.4,
        }}
      >
        {vp === 'mobile' ? 'swipe to explore' : 'drag · scroll · click side cards'}
      </p>

      {/* ── Bottom CTA ── */}
      <div
        style={{
          margin: '40px var(--section-px) 0', maxWidth: 1160,
          marginLeft: 'auto', marginRight: 'auto',
          borderRadius: 20,
          padding: vp === 'mobile' ? '24px 20px' : '28px 36px',
          display: 'flex',
          flexDirection: vp === 'mobile' ? 'column' : 'row',
          alignItems: vp === 'mobile' ? 'flex-start' : 'center',
          justifyContent: 'space-between', gap: 20,
          background: 'linear-gradient(135deg, rgba(37,99,255,0.09) 0%, rgba(0,212,255,0.05) 100%)',
          border: '1px solid rgba(37,99,255,0.22)',
        }}
      >
        <div>
          <p
            style={{
              margin: '0 0 6px', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cyan)',
            }}
          >
            Not sure which package is right for you?
          </p>
          <p style={{ margin: 0, fontSize: 14.5, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.5 }}>
            Book a free 20-minute consultation — we'll map out exactly what your clinic needs.
          </p>
        </div>
        <CtaButton />
      </div>
    </section>
  );
};

/* ─── Small sub-components ────────────────────────────────────── */
const NavBtn: React.FC<{ onClick: () => void; direction: 'prev' | 'next' }> = ({ onClick, direction }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
      style={{
        width: 42, height: 42, borderRadius: '50%',
        border: `1px solid ${hov ? 'var(--blue)' : 'rgba(255,255,255,0.12)'}`,
        background: hov ? 'rgba(79,142,247,0.1)' : 'rgba(255,255,255,0.04)',
        color: hov ? 'var(--blue)' : 'rgba(255,255,255,0.5)',
        fontSize: 16, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.22s ease', flexShrink: 0,
      }}
    >
      {direction === 'prev' ? '←' : '→'}
    </button>
  );
};

const CtaButton: React.FC = () => {
  const [hov, setHov] = useState(false);
  return (
    <a
      href="#contact"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flexShrink: 0, padding: '13px 28px', borderRadius: 100,
        fontSize: 13.5, fontWeight: 600, color: '#fff',
        textDecoration: 'none',
        background: 'linear-gradient(135deg, var(--blue), var(--cyan))',
        boxShadow: hov ? '0 10px 36px rgba(37,99,255,0.42)' : '0 4px 16px rgba(37,99,255,0.2)',
        transform: hov ? 'translateY(-1px)' : 'translateY(0)',
        transition: 'all 0.22s ease', whiteSpace: 'nowrap', display: 'inline-block',
      }}
    >
      Book Free Call →
    </a>
  );
};

export default Services;