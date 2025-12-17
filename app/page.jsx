'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "@fontsource/inter";

const Loader = dynamic(() => import('@/components/Loader'), { ssr: false });
const ParallaxBackground = dynamic(() => import('@/components/ParallaxBackground'), { ssr: false });
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import MouseFollower from '@/components/MouseFollower';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isLoading ? 'hidden' : 'auto';
    }
  }, [isLoading]);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onComplete={handleLoadComplete} />}

      <Suspense fallback={null}>
        <ParallaxBackground />
      </Suspense>

      <MouseFollower />

      <div className="content-wrapper">
        <Navigation />
        <main>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
