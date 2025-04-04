'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { profileData } from '../../../constant';
import { Icon } from '../Icon';
import { useSectionTracking } from '@/hooks/useSectionTracking';

export default function About() {
  const headingRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useSectionTracking('About Section');

  useEffect(() => {
    const currentHeading = headingRef.current;
    const currentCards = [...cardsRef.current];

    if (currentHeading) {
      gsap.fromTo(
        currentHeading,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: currentHeading,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    currentCards.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 20,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          onComplete: () => {
            card.addEventListener("mouseenter", () => {
              gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" });
            });

            card.addEventListener("mouseleave", () => {
              gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
            });
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(currentCards);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-light-300 dark:bg-dark-100">
      <div className="container mx-auto px-6">
        <div
          ref={headingRef}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {profileData.about.description}
          </p>
        </div>

        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold">Expertise</h2>
          <div className="h-px bg-gradient-to-r from-cyan-500 to-indigo-500 flex-grow ml-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {profileData.about.expertise.map((section, index) => (
            <div
              key={index}
              ref={(i) => {
                cardsRef.current[index] = i;
              }}
              className="bg-white dark:bg-dark-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-800/50 hover:-translate-y-1 group"
            >
              <div className="bg-primary-100 dark:bg-primary-900/20 p-3 rounded-full w-fit mb-4 group-hover:bg-primary-500/20 dark:group-hover:bg-primary-100/20">
                <Icon iconName={`${section.icon}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <ul>
                {
                  section.skills.map((skill) => (
                    <li key={skill} className="flex items-center contrast-150">
                      <span className="w-2 h-2 rounded-full bg-primary-700 mr-2"></span>
                      <span className="text-gray-800 dark:text-gray-300 hover:underline">{skill}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}