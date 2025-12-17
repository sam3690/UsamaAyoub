'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const counterRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          onComplete
        });
      }
    });

    gsap.set(textRef.current?.children || [], { y: 100, opacity: 0 });
    gsap.set(logoRef.current, { scale: 0.8, opacity: 0, rotation: -180 });

    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.5)'
    });

    tl.to(textRef.current?.children || [], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.4');

    const counter = { value: 0 };
    tl.to(counter, {
      value: 100,
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value).toString();
        }
        if (progressRef.current) {
          progressRef.current.style.width = `${counter.value}%`;
        }
      }
    }, '-=0.5');

    // Pulse animation for logo
    gsap.to(logoRef.current, {
      scale: 1.1,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="loader-container flex-col gap-6"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
    >
      <div 
        ref={logoRef}
        style={{
          width: '150px',
          height: '150px',
          position: 'relative',
          marginBottom: '2rem'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '4px solid #00ff88',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#00ff88',
            background: 'radial-gradient(circle, rgba(0,255,136,0.1) 0%, rgba(0,0,0,0) 70%)',
            boxShadow: '0 0 40px rgba(0,255,136,0.3)'
          }}
        >
          UA
        </div>
      </div>

      <div className="relative">
        <div 
          ref={textRef}
          className="flex items-center gap-2 overflow-hidden"
        >
          {'USAMA'.split('').map((letter, i) => (
            <span 
              key={i}
              className="text-4xl md:text-6xl font-bold tracking-wider"
              style={{ color: '#00ff88' }}
            >
              {letter}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              ref={progressRef}
              className="h-full bg-gradient-to-r from-[#00ff88] to-[#00ccff] rounded-full"
              style={{ width: '0%' }}
            />
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <span ref={counterRef} className="text-2xl font-bold">0</span>
            <span className="text-sm">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
