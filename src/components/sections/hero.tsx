"use client";

import { useEffect, useRef } from "react";
import { FileUser, Github, Linkedin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import BubbleAnimation from "../BubbleAnimation";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "../AnimatedSphere";
import dynamic from "next/dynamic";
import { profileData } from "../../../constant";

const DynamicCanvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
});

export default function Hero() {
  const sectionRef = useRef(null);
  const headingRef1 = useRef(null);
  const headingRef2 = useRef(null);
  const paragraphRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power1.out" }
      );
      gsap.fromTo(
        headingRef1.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.3 }
      );
      gsap.fromTo(
        headingRef2.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.5 }
      );
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.7 }
      );
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power1.out", delay: 0.9 }
      );
      gsap.fromTo(
        sectionRef.current,
        { backgroundPosition: "0% 0%" },
        {
          backgroundPosition: "0% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="hero-section"
      ref={sectionRef}
      className="sm:min-h-[500px] relative overflow-hidden pt-20 bg-light-200 dark:bg-dark-200"
    >
      <div className="absolute inset-0 -z-10" />
      <Link
        href="#about"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-700 dark:text-gray-100 animate-bounce cursor-pointer"
        aria-label="Scroll Down"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <div className="container mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between">
        <div className="sm:w-1/2 text-center sm:text-left mb-12 lg:mb-0 relative z-10">
          <BubbleAnimation />
          <h1
            ref={headingRef1}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
          >
            {profileData.hero.name}
          </h1>
          <h2
            ref={headingRef2}
            className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
          >
            {profileData.hero.title}
          </h2>
          <p ref={paragraphRef} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {profileData.hero.subtitle}
          </p>
          <div ref={buttonsRef} className="flex gap-4 justify-center lg:justify-start flex-wrap">
            <Link
              href="#contact"
              className="px-8 py-3 bg-primary-700 hover:bg-primary-800 text-white contrast-150 rounded-full transition-colors"
              aria-label="Get in Touch"
            >
              Get in Touch
            </Link>
            <div className="flex gap-4">
              <Link
                href={`${profileData.hero.social_links.github}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 dark:hover:border-primary-400 border dark:hover:text-primary-400 bg-gray-100 dark:bg-dark-100 rounded-full hover:bg-gray-200 dark:hover:bg-dark-200 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href={`${profileData.hero.social_links.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 dark:hover:border-primary-400 border dark:hover:text-primary-400 bg-gray-100 dark:bg-dark-100 rounded-full hover:bg-gray-200 dark:hover:bg-dark-200 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href={`${profileData.hero.resume}`}
                aria-label="See Resume"
                target="_blank"
                className="p-3 dark:hover:border-primary-400 border dark:hover:text-primary-400 bg-gray-100 dark:bg-dark-100 rounded-full hover:bg-gray-200 dark:hover:bg-dark-200 transition-colors"
                title="See Resume"
              >
                <FileUser className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden sm:block sm:w-1/2 h-[400px]">
          <DynamicCanvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} autoRotate />
          </DynamicCanvas>
        </div>
      </div>
    </section>
  );
}
