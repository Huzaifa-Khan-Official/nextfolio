"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { profileData } from "../../../constant"
import { useSectionTracking } from "@/hooks/useSectionTracking"

export default function Experience() {
  const headingRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useSectionTracking('Experience Section');

  useEffect(() => {
    const currentCards = [...cardsRef.current];

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    currentCards.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, x: -40, y: 0 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            card.addEventListener("mouseenter", () => {
              gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" });
            });

            card.addEventListener("mouseleave", () => {
              gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
            });
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(currentCards);
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-light-200 dark:bg-dark-200" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div ref={headingRef} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {profileData.experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="flex gap-2 mb-4 rounded-lg shadow-lg bg-white dark:bg-dark-100 hover:bg-primary-100 dark:hover:bg-primary-800/50 group"
            >
              <div className="flex-grow p-6 py-4 ">
                <div className="flex justify-between items-start mb-2 gap-1 flex-wrap">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
                <p className="text-primary-600 dark:text-primary-400 mb-2">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                <div className="flex flex-wrap gap-2 my-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm group-hover:bg-primary-500/20 dark:group-hover:bg-primary-100/20 dark:group-hover:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}