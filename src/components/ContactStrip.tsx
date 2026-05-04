import React, { useState, useRef, useEffect } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  clinicName: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  clinicName: '',
  service: '',
  message: '',
};

const services = [
  'Clinic Website Design',
  'AI Lead & Booking Automation',
  'Social Media & Content AI',
  'Paid Ads & Lead Generation',
  'Reputation & Review Growth',
  'Analytics & Growth Consulting',
  'Full Growth Package',
  'Not sure — need guidance',
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdaywykl';

const ContactStrip: React.FC = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [formHeight, setFormHeight] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formOpen ? formRef.current.scrollHeight : 0);
    }
  }, [formOpen, submitted]);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) e.email = 'Valid email required';
    if (!formData.phone.trim() || formData.phone.length < 7) e.phone = 'Valid phone required';
    if (!formData.clinicName.trim()) e.clinicName = 'Clinic name is required';
    if (!formData.service) e.service = 'Please select a service';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) setErrors(prev => ({ ...prev, [name]: '' }));
  };
  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    setSubmitError('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setSubmitted(true);
      setFormData(initialForm);
    } catch {
      setSubmitError('Something went wrong. Please try again in a moment.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field: keyof FormData): React.CSSProperties => ({
       
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? '#ef4444' : 'var(--border)'}`,
    borderRadius: '12px',
    padding: '13px 16px',
    color: 'var(--text)',
    fontSize: '14px',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s',
  });

  return (
    <section id="contact" className="py-20 sm:py-24" style={{ background: 'var(--deep)' }}>
      <div className="px-4 sm:px-12 lg:px-20">
        <div
          className="rounded-2xl sm:rounded-3xl overflow-hidden reveal"
          style={{
            background: 'linear-gradient(135deg, rgba(37,99,255,0.1) 0%, rgba(0,212,255,0.04) 50%, rgba(255,107,0,0.04) 100%)',
            border: '1px solid rgba(37,99,255,0.28)',
          }}
        >
          {/* Top content */}
          <div className="p-6 sm:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
              {/* Left text */}
              <div className="flex-1">
                <span
                  className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase mb-3 sm:mb-4"
                  style={{ color: 'var(--cyan)' }}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)' }}
                  />
                  Free Consultation Available
                </span>
                <h2 className="mb-3 sm:mb-4 text-[clamp(30px,8vw,56px)] sm:text-[clamp(32px,5vw,56px)]" style={{ letterSpacing: '-1.5px' }}>
                  Ready to grow<br />
                  <span style={{ color: 'var(--cyan)' }}>your Idea?</span>
                </h2>
                <p className="text-[14px] sm:text-[16px] leading-relaxed max-w-md" style={{ color: 'var(--muted)', fontWeight: 300 }}>
                  Tell us about your idea and we'll reach out within <strong style={{ color: 'var(--text)', fontWeight: 600 }}>24 hours</strong> with a personalised growth plan — completely free.
                </p>

                {/* Trust signals */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5 mt-6 sm:mt-7">
                  {[
                    { icon: '✓', label: 'No contracts or lock-ins' },
                    { icon: '✓', label: 'Results in 30 days or more' },
                    { icon: '✓', label: 'Free 20-min strategy call' },
                  ].map(({ icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-[12px] sm:text-[13px]" style={{ color: 'var(--muted)' }}>
                      <span className="font-bold" style={{ color: '#00e599' }}>{icon}</span>
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right CTA or success */}
              <div className="flex flex-col items-stretch lg:items-end gap-3 sm:gap-4 w-full lg:w-auto">
                {!submitted ? (
                  <button
                    onClick={() => setFormOpen(prev => !prev)}
                    className="group flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[14px] sm:text-[15px] font-semibold text-white transition-all duration-300 cursor-none w-full lg:w-auto"
                    style={{
                      background: formOpen
                        ? 'transparent'
                        : 'linear-gradient(135deg, var(--blue), var(--cyan))',
                      border: formOpen ? '1px solid var(--border)' : '1px solid transparent',
                      color: formOpen ? 'var(--muted)' : 'white',
                      boxShadow: formOpen ? 'none' : '0 12px 40px rgba(37,99,255,0.3)',
                    }}
                  >
                    {formOpen ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        Close form
                      </>
                    ) : (
                      <>
                        Book Free Call
                        <span
                          className="w-7 h-7 rounded-full flex items-center justify-center text-sm transition-transform duration-300 group-hover:translate-x-1"
                          style={{ background: 'rgba(255,255,255,0.2)' }}
                        >
                          →
                        </span>
                      </>
                    )}
                  </button>
                ) : null}

                <p className="text-[11px] sm:text-[12px] text-center lg:text-right" style={{ color: 'var(--muted)' }}>
                  🔒 Your details stay private. No spam, ever.
                </p>
              </div>
            </div>
          </div>

          {/* Expandable form */}
          <div
            style={{
              height: `${formHeight}px`,
              overflow: 'hidden',
              transition: 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div ref={formRef}>
              <div
                className="px-5 sm:px-12 lg:px-16 pb-8 sm:pb-12 pt-2"
                style={{ borderTop: '1px solid rgba(37,99,255,0.2)' }}
              >
                {submitted ? (
                  // Success state
                  <div className="py-10 sm:py-12 flex flex-col items-center text-center gap-4">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl"
                      style={{ background: 'rgba(0,229,153,0.15)' }}
                    >
                      ✓
                    </div>
                    <h3 className="text-[20px] sm:text-[24px] font-bold" style={{ fontFamily: 'var(--font-head)', color: '#00e599' }}>
                      Message received!
                    </h3>
                    <p className="text-[14px] sm:text-[15px] max-w-sm" style={{ color: 'var(--muted)' }}>
                      We'll review your details and reach out within 24 hours with a personalised plan for your clinic.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormOpen(false); }}
                      className="mt-4 px-6 py-2.5 rounded-full text-[13px] font-semibold cursor-none w-full sm:w-auto"
                      style={{ background: 'var(--card)', color: 'var(--text)', border: '1px solid var(--border)' }}
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  // Form
                  <div className="pt-6 sm:pt-8">
                    <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.12em] uppercase mb-5 sm:mb-7" style={{ color: 'var(--cyan)' }}>
                      Tell us about your clinic
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold tracking-wide" style={{ color: 'var(--muted)' }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Mr. Rahul Sharma"
                          value={formData.name}
                          onChange={handleChange}
                          style={inputStyle('name')}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')}
                          onBlur={e => (e.currentTarget.style.borderColor = errors.name ? '#ef4444' : 'var(--border)')}
                        />
                        {errors.name && <span className="text-[11px]" style={{ color: '#ef4444' }}>{errors.name}</span>}
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold tracking-wide" style={{ color: 'var(--muted)' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="example@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                          style={inputStyle('email')}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')}
                          onBlur={e => (e.currentTarget.style.borderColor = errors.email ? '#ef4444' : 'var(--border)')}
                        />
                        {errors.email && <span className="text-[11px]" style={{ color: '#ef4444' }}>{errors.email}</span>}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold tracking-wide" style={{ color: 'var(--muted)' }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91 98765 43****"
                          value={formData.phone}
                          onChange={handleChange}
                          style={inputStyle('phone')}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')}
                          onBlur={e => (e.currentTarget.style.borderColor = errors.phone ? '#ef4444' : 'var(--border)')}
                        />
                        {errors.phone && <span className="text-[11px]" style={{ color: '#ef4444' }}>{errors.phone}</span>}
                      </div>

                      {/* Clinic Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[12px] font-semibold tracking-wide" style={{ color: 'var(--muted)' }}>
                          Business Name / Niche *
                        </label>
                        <input
                          type="text"
                          name="clinicName"
                          placeholder="eg. E-commerce"
                          value={formData.clinicName}
                          onChange={handleChange}
                          style={inputStyle('clinicName')}
                          onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')}
                          onBlur={e => (e.currentTarget.style.borderColor = errors.clinicName ? '#ef4444' : 'var(--border)')}
                        />
                        {errors.clinicName && <span className="text-[11px]" style={{ color: '#ef4444' }}>{errors.clinicName}</span>}
                      </div>
                    </div>

                    {/* Service dropdown */}
                    <div className="flex flex-col gap-1.5 mb-4">
                      <label className="text-[12px] font-semibold tracking-wide" style={{ color: 'var(--muted)' }}>
                        Which service are you interested in? *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        style={{
                          ...inputStyle('service'),
                          cursor: 'none',
                          appearance: 'none',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b6b8a' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 16px center',
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.currentTarget.style.borderColor = errors.service ? '#ef4444' : 'var(--border)')}
                      >
                        <option value="" style={{ background: '#090912' }}>Select a service...</option>
                        {services.map(s => (
                          <option key={s} value={s} style={{ background: '#090912' }}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <span className="text-[11px]" style={{ color: '#ef4444' }}>{errors.service}</span>}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5 mb-6 sm:mb-7">
                      <label className="text-[12px] font-semibold tracking-wide" style={{ color: 'var(--muted)' }}>
                        Tell us about your goals{' '}
                        <span style={{ color: '#3a3a58' }}>(optional)</span>
                      </label>
                      <textarea
                        name="message"
                        placeholder="We're a Foot ware shop in Kolkata looking to increase appointments through our website and WhatsApp..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        style={{
                          ...inputStyle('message'),
                          resize: 'vertical',
                          minHeight: '100px',
                        }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'var(--blue)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                      />
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                      <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[13px] sm:text-[14px] font-semibold text-white transition-all duration-200 cursor-none w-full sm:min-w-50"
                        style={{
                          background: loading
                            ? 'rgba(37,99,255,0.5)'
                            : 'linear-gradient(135deg, var(--blue), var(--cyan))',
                          minWidth: '200px',
                          justifyContent: 'center',
                          opacity: loading ? 0.8 : 1,
                        }}
                        onMouseEnter={e => !loading && (e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,99,255,0.4)')}
                        onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
                      >
                        {loading ? (
                          <>
                            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                              <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>Send Message →</>
                        )}
                      </button>
                        <p className="text-[11px] sm:text-[12px] text-center sm:text-left" style={{ color: 'var(--muted)' }}>
                        We respond within <span style={{ color: 'var(--text)' }}>24 hours</span>
                      </p>
                    </div>
                    {submitError && (
                      <p className="mt-4 text-[12px]" style={{ color: '#ef4444' }}>
                        {submitError}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;