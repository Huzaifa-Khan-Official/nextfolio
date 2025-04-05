'use client';

import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Services from '@/components/sections/services';
import Contact from '@/components/sections/contact';
import Certificates from '@/components/sections/certificates';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useEffect } from 'react';
import { initGA } from '@/lib/analytics';


export default function Home() {
  useEffect(() => {
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID! && initGA();
  }, []);

  return (
    <main>
      <div className="min-h-screen bg-white dark:bg-dark-200 transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Services />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
