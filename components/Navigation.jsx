'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { navLinks } from '@/public/constants';

const Nav = () => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      delay: 3,
      ease: 'power3.out'
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-2xl font-bold"
          style={{ color: '#00ff88' }}
        >
          UA
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.link}`}
              onClick={(e) => handleNavClick(e, `#${item.link}`)}
              className="nav-link text-sm uppercase tracking-wider font-medium"
            >
              {item.title}
            </a>
          ))}
        </div>

        <a
          href="https://sam3690.github.io/UsamaAyoub/assets/Usama's%20Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block btn-primary text-sm py-3 px-6"
        >
          Resume
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span 
            className={`w-6 h-0.5 bg-white transition-all ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-white transition-all ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`w-6 h-0.5 bg-white transition-all ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-dark mt-4 mx-6 rounded-2xl p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.link}`}
                onClick={(e) => handleNavClick(e, `#${item.link}`)}
                className="text-lg uppercase tracking-wider font-medium text-white/80 hover:text-white"
              >
                {item.title}
              </a>
            ))}
            <a
              href="https://sam3690.github.io/UsamaAyoub/assets/Usama's%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center mt-4"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
