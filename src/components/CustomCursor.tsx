import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX - 6 + 'px';
        cursorRef.current.style.top = mouseY - 6 + 'px';
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = ringX + 'px';
        cursorRingRef.current.style.top = ringY + 'px';
      }
      animationFrameId = requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', onMouseMove);
    animateRing();

    // Hover effect logic
    const applyHoverEffect = () => {
      document.body.classList.add('cursor-hover');
    };
    const removeHoverEffect = () => {
      document.body.classList.remove('cursor-hover');
    };

    const setupInteractiveElements = () => {
      document.querySelectorAll('a, button, .work-card, .service-card, .team-card, .review-card, .price-card, .about-stat-card').forEach(el => {
        el.addEventListener('mouseenter', applyHoverEffect);
        el.addEventListener('mouseleave', removeHoverEffect);
      });
    };

    // Use a slight delay to ensure other components mount first
    setTimeout(setupInteractiveElements, 500);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      document.querySelectorAll('a, button, .work-card, .service-card, .team-card, .review-card, .price-card, .about-stat-card').forEach(el => {
        el.removeEventListener('mouseenter', applyHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={cursorRingRef}></div>
    </>
  );
};

export default CustomCursor;
