import React from 'react';

type Review = {
  id: string;
  initials: string;
  name: string;
  clinic: string;
  text: string;
  rating?: number;
};

const REVIEWS: Review[] = [
  {
    id: 'r1',
    initials: 'SM',
    name: 'Dr. Anup Pradhan',
    clinic: 'General Physician',
    text: 'Very satisfied with the website design and performance. It’s fast, easy to use, and helps my patients connect more efficiently',
    rating: 5,
  },
  
  {
    id: 'r2',
    initials: 'RD',
    name: 'Dr. Swarup Hazra',
    clinic: 'Homeopathy Specialist',
    text: 'The website looks very professional, and the setup has made managing patient queries much easier. Great experience overall.',
    rating: 5,
  },
  {
    id: 'r3',
    initials: 'PG',
    name: 'Priya Ghosh',
    clinic: 'Glow Med Spa, Kolkata',
    text: 'Our Instagram went from 800 to 4,000 followers in 3 months with zero extra effort from our side. They handle everything — content, posting, automation. Professional, fast, and genuinely delivers results.',
    rating: 5,
  },
  {
    id: 'r4',
    initials: 'MB',
    name: 'Dr. Moumita Bera',
    clinic: 'Obstetrician & Gynaecologist',
    text: 'The booking system works smoothly and has simplified appointment management. The website is clean, responsive, and easy for patients to use.',
    rating: 5,
  },
  {
    id: 'r5',
    initials: 'RN',
    name: 'Dr. R. N. Mishra',
    clinic: '',
    text: 'The automated booking system has improved efficiency and reduced manual work. The overall setup is reliable and user-friendly.',
    rating: 5,
  },
  {
    id: 'r6',
    initials: 'JP',
    name: 'Jibondip Pathology Lab',
    clinic: 'Pathology Lab',
    text: 'The website and automation system have made test bookings seamless. It’s fast, professional, and helps manage patient requests efficiently.',
    rating: 5,
  },
  
];

const GRADIENTS = [
  'linear-gradient(135deg,var(--green),var(--cyan))',
  'linear-gradient(135deg,var(--orange),var(--blue))',
  'linear-gradient(135deg,var(--blue),var(--cyan))',
];

const ReviewCard: React.FC<{ review: Review; index: number }> = ({ review, index }) => {
  const bg = GRADIENTS[index % GRADIENTS.length];
  return (
    <div className="review-card reveal">
      <div className="review-quote">"</div>
      <p className="review-text">{review.text}</p>
      <div className="review-author">
        <div className="review-avatar" style={{ background: bg }}>
          {review.initials}
        </div>
        <div>
          <div className="stars">{'★'.repeat(review.rating ?? 5)}</div>
          <div className="review-name">{review.name}</div>
          <div className="review-clinic">{review.clinic}</div>
        </div>
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  return (
    <section className="section-block" style={{ overflow: 'hidden' }}>
      <div className="section-shell">
        <div className="reveal">
          <div className="section-label">Client Reviews</div>
          <h2>
            What our clients
            <br />
            <span style={{ color: 'var(--green)' }}>actually say.</span>
          </h2>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={r.id} review={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
