'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    title: 'Promptopia',
    description: 'AI-powered prompt sharing platform',
    tech: ['Next.js', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/sam3690/Prompt-opia.git',
    live: null,
    image: 'https://sam3690.github.io/UsamaAyoub/assets/project%201.png'
  },
  {
    id: 2,
    title: 'Bank Landing Page',
    description: 'Modern banking website with sleek UI',
    tech: ['React', 'Tailwind', 'Vite'],
    github: 'https://github.com/sam3690/bank-app-demo.git',
    live: 'https://react-bank-app-nine.vercel.app/',
    image: 'https://sam3690.github.io/UsamaAyoub/assets/project%202.png'
  },
  {
    id: 3,
    title: 'React + Flask CRUD',
    description: 'Full-stack application with REST API',
    tech: ['React', 'Flask', 'PostgreSQL'],
    github: 'https://github.com/sam3690/React-Flask-APP.git',
    live: 'https://react-flask-app-mytk.onrender.com/',
    image: 'https://sam3690.github.io/UsamaAyoub/assets/project%203.png'
  },
  {
    id: 4,
    title: 'CSV Analyzer',
    description: 'Data analysis tool with visualization',
    tech: ['Python', 'Streamlit', 'Pandas'],
    github: 'https://github.com/sam3690/Streamlit-app',
    live: 'https://csv--file-reader.streamlit.app/',
    image: 'https://sam3690.github.io/UsamaAyoub/assets/project%204.png'
  },
  {
    id: 5,
    title: 'Zoom Clone',
    description: 'Video conferencing application',
    tech: ['Next.js', 'WebRTC', 'Socket.io'],
    github: 'https://github.com/sam3690/zoom-clone.git',
    live: 'https://zoom-clone-six-mu.vercel.app/',
    image: 'https://sam3690.github.io/UsamaAyoub/assets/project%206.png'
  },
  {
    id: 6,
    title: 'Syncly',
    description: 'One stop project management solution',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/sam3690/syncly',
    live: null,
    image: 'https://sam3690.github.io/UsamaAyoub/assets/project%207.png'
  }
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current?.children || [], {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });

      const projectCards = projectsRef.current?.children || [];
      Array.from(projectCards).forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          y: 100,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="projects"
      className="section relative py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-white/50 mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my expertise in building modern web applications
          </p>
        </div>

        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card rounded-2xl overflow-hidden relative group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ff88] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-[#00ff88] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/70 hover:text-[#00ff88] transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div 
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #00ff88, #00ccff)' }}
              >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
