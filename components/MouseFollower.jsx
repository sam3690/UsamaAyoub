'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MouseFollower() {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.5,
        ease: 'power2.out'
      });

      gsap.to(cursorDot, {
        x: e.clientX - 4,
        y: e.clientY - 4,
        duration: 0.1,
        ease: 'power2.out'
      });
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, {
        scale: 1.5,
        borderColor: '#00ff88',
        duration: 0.3
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 1,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        duration: 0.3
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/30 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{ transform: 'translate(-100px, -100px)' }}
      />
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#00ff88] pointer-events-none z-[9999] hidden md:block"
        style={{ transform: 'translate(-100px, -100px)' }}
      />
    </>
  );
}
