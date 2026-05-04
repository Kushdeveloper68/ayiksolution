import React, { useState } from 'react';

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [success, setSuccess] = useState(false);

  const submitModal = () => {
    setSuccess(true);
    setTimeout(() => {
      closeModal();
    }, 2500);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div 
      id="modal-overlay" 
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.8)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '480px',
        width: '90%',
        position: 'relative'
      }}>
        <button 
          onClick={closeModal} 
          style={{
            position: 'absolute',
            top: '16px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--muted)',
            fontSize: '20px',
            cursor: 'none'
          }}
        >✕</button>
        <div className="section-label">Book A Free Call</div>
        <h3 style={{
          fontFamily: 'var(--font-head)',
          fontSize: '28px',
          fontWeight: 800,
          marginBottom: '8px',
          letterSpacing: '-1px'
        }}>
          Let's talk about<br /><span style={{ color: 'var(--cyan)' }}>growing your clinic.</span>
        </h3>
        <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '24px' }}>
          Fill in your details and we'll reach out within 24 hours.
        </p>
        <input 
          type="text" 
          placeholder="Your Name" 
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '12px 16px',
            color: 'var(--text)',
            fontSize: '14px',
            marginBottom: '12px',
            fontFamily: 'var(--font-body)',
            outline: 'none'
          }} 
        />
        <input 
          type="text" 
          placeholder="Clinic Name & Type" 
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '12px 16px',
            color: 'var(--text)',
            fontSize: '14px',
            marginBottom: '12px',
            fontFamily: 'var(--font-body)',
            outline: 'none'
          }} 
        />
        <input 
          type="tel" 
          placeholder="WhatsApp Number" 
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '12px 16px',
            color: 'var(--text)',
            fontSize: '14px',
            marginBottom: '20px',
            fontFamily: 'var(--font-body)',
            outline: 'none'
          }} 
        />
        <button 
          onClick={submitModal} 
          style={{
            width: '100%',
            background: 'linear-gradient(135deg,var(--blue),var(--cyan))',
            border: 'none',
            borderRadius: '100px',
            padding: '14px',
            color: '#fff',
            fontSize: '15px',
            fontWeight: 600,
            cursor: 'none',
            fontFamily: 'var(--font-body)'
          }}
        >Book My Free Call →</button>
        {success && (
          <p id="modal-success" style={{
            color: 'var(--green)',
            textAlign: 'center',
            marginTop: '16px',
            fontSize: '14px'
          }}>✓ Submitted! We'll WhatsApp you within 24 hours.</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
