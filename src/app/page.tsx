'use client';

import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Services from '@/components/sections/services';
import Contact from '@/components/sections/contact';
import Certificates from '@/components/sections/certificates';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';


export default function Home() {
  return (
    <main>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="min-h-screen bg-white dark:bg-dark-200 transition-colors duration-300">
          <Header />
          <div className="pt-20">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Services />
            <Certificates />
            <Contact />
          </div>
          <Footer />
        </div>
      </ThemeProvider>

    </main>
  );
}
