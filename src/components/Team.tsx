import React, { useState } from 'react';

interface SocialLink {
  label: string;
  icon: string;
  href: string;
  hoverColor: string;
}

interface TeamMember {
  initials: string;
  gradFrom: string;
  gradTo: string;
  name: string;
  role: string;
  quote: string;
  desc: string;
  skills: string[];
  socials: SocialLink[];
  portfolioHref: string;
  experience: string;
  projects: string;
}

const team: TeamMember[] = [
  {
    initials: 'AK',
    gradFrom: '#2563ff',
    gradTo: '#00d4ff',
    name: 'Arnav Kumar',
    role: 'Founder & Growth Strategist',
    quote: 'The mind behind the machine.',
    desc: 'Obsessed with making clinics impossible to ignore online. 6+ years helping healthcare practices scale their digital presence across India.',
    skills: ['Growth Strategy', 'Paid Ads', 'Funnels', 'Meta Ads'],
    experience: '6+ yrs',
    projects: '80+ clinics',
    socials: [
      { label: 'LinkedIn', icon: 'in', href: '#', hoverColor: '#0077b5' },
      { label: 'Twitter', icon: 'X', href: '#', hoverColor: '#e8e8f0' },
      { label: 'Instagram', icon: 'IG', href: '#', hoverColor: '#e1306c' },
    ],
    portfolioHref: '#',
  },
  {
    initials: 'SR',
    gradFrom: '#00d4ff',
    gradTo: '#00e599',
    name: 'Sneha Roy',
    role: 'Lead Web Designer',
    quote: 'Pixels with purpose.',
    desc: 'Creates clinic websites that patients trust before they even walk in. Expert in conversion-first design that blends aesthetics with performance.',
    skills: ['UI/UX Design', 'Figma', 'Webflow', 'Framer'],
    experience: '5+ yrs',
    projects: '60+ websites',
    socials: [
      { label: 'LinkedIn', icon: 'in', href: '#', hoverColor: '#0077b5' },
      { label: 'Dribbble', icon: 'Dr', href: '#', hoverColor: '#ea4c89' },
    ],
    portfolioHref: '#',
  },
  {
    initials: 'PM',
    gradFrom: '#ff6b00',
    gradTo: '#facc15',
    name: 'Priya Mehta',
    role: 'AI Automation Engineer',
    quote: "Your chatbot's best friend.",
    desc: 'Builds AI-powered systems that never sleep — WhatsApp bots, CRM pipelines, automated follow-ups, and smart lead qualification flows.',
    skills: ['Make.com', 'OpenAI API', 'n8n', 'Zapier'],
    experience: '4+ yrs',
    projects: '40+ automations',
    socials: [
      { label: 'LinkedIn', icon: 'in', href: '#', hoverColor: '#0077b5' },
      { label: 'GitHub', icon: 'GH', href: '#', hoverColor: '#e8e8f0' },
    ],
    portfolioHref: '#',
  },
  {
    initials: 'RD',
    gradFrom: '#a78bfa',
    gradTo: '#f472b6',
    name: 'Rohan Das',
    role: 'Content & SEO Strategist',
    quote: 'Words that rank and convert.',
    desc: 'SEO-optimised content that brings in organic patient traffic for years. Manages AI content pipelines, Google Business profiles, and review systems.',
    skills: ['SEO', 'Content Strategy', 'GBP', 'Analytics'],
    experience: '4+ yrs',
    projects: '50+ campaigns',
    socials: [
      { label: 'LinkedIn', icon: 'in', href: '#', hoverColor: '#0077b5' },
      { label: 'Twitter', icon: 'X', href: '#', hoverColor: '#e8e8f0' },
    ],
    portfolioHref: '#',
  },
];

const TeamCard: React.FC<{ member: TeamMember; index: number }> = ({ member, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="reveal"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          background: 'var(--card)',
          border: `1px solid ${hovered ? member.gradFrom + '60' : 'var(--border)'}`,
          borderRadius: '20px',
          overflow: 'hidden',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered ? `0 32px 72px ${member.gradFrom}22` : '0 0 0 transparent',
          transition: 'all 0.4s cubic-bezier(0.34, 1.2, 0.64, 1)',
          cursor: 'none',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Card Header Banner */}
        <div
          style={{
            position: 'relative',
            height: '110px',
            flexShrink: 0,
            background: `linear-gradient(135deg, ${member.gradFrom}1a 0%, ${member.gradTo}0d 100%)`,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `radial-gradient(${member.gradFrom}38 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '2px',
              background: `linear-gradient(90deg, ${member.gradFrom}, ${member.gradTo}, transparent)`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '14px',
              right: '18px',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '4px 12px',
              borderRadius: '100px',
              background: `${member.gradFrom}18`,
              color: member.gradFrom,
              border: `1px solid ${member.gradFrom}30`,
            }}
          >
            {index === 0 ? 'Founder' : 'Team'}
          </div>
          {/* Avatar on bottom edge */}
          <div
            style={{
              position: 'absolute',
              bottom: '-28px',
              left: '24px',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${member.gradFrom}, ${member.gradTo})`,
              border: '3px solid var(--card)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              fontWeight: 900,
              color: '#fff',
              fontFamily: 'var(--font-head)',
              boxShadow: `0 8px 28px ${member.gradFrom}50`,
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1)',
              zIndex: 2,
            }}
          >
            {member.initials}
          </div>
        </div>

        {/* Card Body */}
        <div style={{ padding: '44px 24px 24px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>

          {/* Name + Role + Quote */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '19px', fontWeight: 800, color: 'var(--text)', marginBottom: '3px', lineHeight: 1.2 }}>
              {member.name}
            </h3>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: member.gradFrom, marginBottom: '5px' }}>
              {member.role}
            </p>
            <p style={{ fontSize: '12.5px', fontStyle: 'italic', color: 'var(--muted)' }}>
              "{member.quote}"
            </p>
          </div>

          {/* Desc */}
          <p style={{ fontSize: '13px', lineHeight: 1.75, color: 'var(--muted)', fontWeight: 300 }}>
            {member.desc}
          </p>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[{ label: 'Experience', val: member.experience }, { label: 'Delivered', val: member.projects }].map(({ label, val }) => (
              <div key={label} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '17px', fontWeight: 900, lineHeight: 1, marginBottom: '3px', background: `linear-gradient(135deg, ${member.gradFrom}, ${member.gradTo})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {val}
                </div>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Skill chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {member.skills.map(skill => (
              <span key={skill} style={{ fontSize: '11px', fontWeight: 600, padding: '4px 10px', borderRadius: '100px', background: `${member.gradFrom}12`, color: member.gradFrom, border: `1px solid ${member.gradFrom}28`, whiteSpace: 'nowrap' }}>
                {skill}
              </span>
            ))}
          </div>

          {/* Spacer to push footer down */}
          <div style={{ flex: 1 }} />

          {/* Divider */}
          <div style={{ borderTop: '1px solid var(--border)' }} />

          {/* Socials + Portfolio */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '7px' }}>
              {member.socials.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  title={social.label}
                  style={{ width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 800, textDecoration: 'none', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--muted)', transition: 'all 0.2s', cursor: 'none' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = `${social.hoverColor}18`; el.style.borderColor = `${social.hoverColor}55`; el.style.color = social.hoverColor; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'var(--surface)'; el.style.borderColor = 'var(--border)'; el.style.color = 'var(--muted)'; }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href={member.portfolioHref}
              style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: 600, color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s', cursor: 'none' }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = member.gradFrom)}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)')}
            >
              Portfolio <span style={{ fontSize: '10px' }}>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section className="section-block" style={{ background: 'var(--black)' }}>
      <div className="section-shell">

        {/* Section Header */}
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '52px' }}>
          <div>
            <div className="section-label">The Team</div>
            <h2 style={{ marginBottom: 0 }}>
              Built by people who<br />
              <span style={{ color: 'var(--green)' }}>actually give a damn.</span>
            </h2>
          </div>
          <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '340px', fontWeight: 300 }}>
            A small, focused team of specialists — no juniors, no outsourcing. Just people who are very good at what they do.
          </p>
        </div>

        {/* 2x2 Grid — min 340px per card, auto-fills to 2 columns on desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '22px', marginBottom: '44px' }}>
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="reveal" style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '20px', padding: '24px 32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex' }}>
              {team.map((m, i) => (
                <div key={m.initials} style={{ width: '36px', height: '36px', borderRadius: '50%', background: `linear-gradient(135deg, ${m.gradFrom}, ${m.gradTo})`, border: '2.5px solid var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 900, color: '#fff', fontFamily: 'var(--font-head)', marginLeft: i === 0 ? '0' : '-10px', zIndex: team.length - i, position: 'relative' }}>
                  {m.initials}
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '2px' }}>We're taking on new clients</p>
              <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Limited spots — <span style={{ color: 'var(--cyan)' }}>3 slots open this month</span></p>
            </div>
          </div>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', borderRadius: '100px', fontSize: '14px', fontWeight: 600, color: '#fff', textDecoration: 'none', background: 'linear-gradient(135deg, var(--blue), var(--cyan))', whiteSpace: 'nowrap', transition: 'box-shadow 0.2s', cursor: 'none' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 36px rgba(37,99,255,0.38)')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none')}
          >
            Work With Us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;