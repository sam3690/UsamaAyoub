'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Languages' },
  { name: 'Django', category: 'Backend' },
  { name: 'Flask', category: 'Backend' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Redis', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Tailwind', category: 'Frontend' },
  { name: 'Laravel', category: 'Backend' },
  { name: 'Jenkins', category: 'DevOps' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Bun', category: 'Runtime' }
];

const categories = ['All', 'Frontend', 'Backend', 'Languages', 'Database', 'DevOps', 'Tools', 'Runtime'];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter((skill) => skill.category === selectedCategory);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const headingLines = titleRef.current?.children || [];
      if (headingLines.length) {
        gsap.from(headingLines, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        });
      }

      if (descriptionRef.current) {
        gsap.from(descriptionRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        });
      }

      const skillCards = cardsRef.current?.children || [];
      if (skillCards.length) {
        gsap.from(skillCards, {
          y: 80,
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%'
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <section ref={sectionRef} id="skills" className="section py-32">
      <div className="relative w-full">
        <div
          aria-hidden
          className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-black/70 via-black/30 to-black/60 backdrop-blur-sm opacity-70 pointer-events-none"
        />
        <div className="content-wrapper relative">
        <div ref={titleRef} className="section-header mb-6">
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title">Skills & Stack</h2>
        </div>

        <p ref={descriptionRef} className="section-description max-w-3xl">
          A curated toolkit across frontend craft, backend systems, and deployment tooling.
          Every project gets the exact combination it needs to move fast without compromising quality.
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border text-xs uppercase tracking-[0.35em] transition-all duration-300 backdrop-blur-md hover:border-[#00ff88] hover:text-white ${
                  isActive
                    ? 'border-[#00ff88] text-white bg-gradient-to-r from-[#00ff88]/20 via-transparent to-[#00ccff]/20 shadow-[0_0_25px_rgba(0,255,136,0.25)]'
                    : 'border-white/10 text-white/40'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div ref={cardsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card p-6 rounded-2xl cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-xl mb-4 flex items-center justify-center text-2xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.2), rgba(0, 204, 255, 0.2))'
                  }}
                >
                  {skill.name.substring(0, 2).toUpperCase()}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#00ff88] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-white/40 mt-1">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-6">
          <div className="glass p-6 rounded-2xl text-center min-w-[150px]">
            <div className="text-3xl font-bold text-[#00ff88]">20+</div>
            <div className="text-white/60 text-sm mt-1">Technologies</div>
          </div>
          <div className="glass p-6 rounded-2xl text-center min-w-[150px]">
            <div className="text-3xl font-bold text-[#00ccff]">5+</div>
            <div className="text-white/60 text-sm mt-1">Years Experience</div>
          </div>
          <div className="glass p-6 rounded-2xl text-center min-w-[150px]">
            <div className="text-3xl font-bold text-[#ff00ff]">50+</div>
            <div className="text-white/60 text-sm mt-1">Projects Completed</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
