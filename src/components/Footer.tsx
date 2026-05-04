import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="nav-logo">Ayik<span>Solution</span></div>
          <p>AI automation and web development for health clinics. We turn your patient pipeline into a growth machine.</p>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/ramkrishna-giri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition duration-300 w-6 h-6"

            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.45 20.45h-3.554v-5.569c0-1.328-.027-3.036-1.849-3.036-1.85 0-2.134 1.445-2.134 2.939v5.666H9.36V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.372 4.267 5.455v6.283zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.813 20.45H3.861V9h2.952v11.45z" />
              </svg>

            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61568483424974"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 hover:scale-110 transition-all duration-300 w-6 h-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H7v-3h3.5V9.5c0-3.5 2.1-5.4 5.2-5.4 1.5 0 3.1.3 3.1.3v3.4h-1.8c-1.8 0-2.3 1.1-2.3 2.2V12H19l-.5 3h-2.8v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ayiksolution"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 hover:scale-110 transition-all duration-300 w-6 h-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 9a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>
            <a
              href="https://wa.me/918768119195"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 hover:scale-110 transition-all duration-300 w-6 h-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M16 .4C7.5.4.6 7.3.6 15.8c0 2.8.7 5.4 2.1 7.7L.4 31.6l8.3-2.2c2.2 1.2 4.7 1.8 7.3 1.8 8.5 0 15.4-6.9 15.4-15.4S24.5.4 16 .4zm0 28.1c-2.4 0-4.8-.7-6.8-1.9l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.3-2.1-2-4.5-2-6.9 0-7.2 5.9-13.1 13.1-13.1s13.1 5.9 13.1 13.1-5.9 13.1-13.1 13.1zm7.2-9.8c-.4-.2-2.4-1.2-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.6-.2.3-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.3 2.3 3.6 5.6 5 .8.4 1.5.6 2 .8.8.3 1.6.2 2.2.1.7-.1 2.4-1 2.7-2 .3-1 .3-1.8.2-2-.1-.2-.3-.3-.7-.5z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#services">Website Design</a></li>
            <li><a href="#services">AI Chatbot Setup</a></li>
            <li><a href="#services">Lead Automation</a></li>
            <li><a href="#services">Social Media AI</a></li>
            <li><a href="#services">Full Stack Package</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#work">Our Work</a></li>
            <li><a href="#work">Case Studies</a></li>
            <li><a href="#Pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-links">
            <li><a href="#">📍 Kolkata, West-Bengal / Kutch, Gujarat</a></li>
            <li><a href="#">📧 info@ayiksolution.com</a></li>
            <li><a href="https://wa.me/918768119195">💬 WhatsApp Us</a></li>
            <li><a href="#">⏰ Mon–Sat, 9AM–8PM</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 AyikSolution. All rights reserved. Built with <span>♥</span> in west-Bengal + Gujarat.</p>
        <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Privacy Policy · Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
