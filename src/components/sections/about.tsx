'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Palette, Terminal } from 'lucide-react';
import { useEffect, useRef } from 'react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with modern frameworks.',
  },
  {
    icon: <Terminal className="w-6 h-6" />,
    title: 'Backend Development',
    description: 'Building scalable server-side applications and APIs.',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user experiences.',
  },
];

export default function About() {
  const headingRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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
          toggleActions: "play none none none"
        }
      }
    )

    cardsRef.current.forEach((card, index) => {
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
            if (card) {
              card.addEventListener("mouseenter", () => {
                gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" })
              })

              card.addEventListener("mouseleave", () => {
                gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" })
              })
            }
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(cardsRef.current);
    }
  }, [])


  return (
    <section id="about" className="py-20 bg-light-300 dark:bg-dark-100">
      <div className="container mx-auto px-6">
        <div
          ref={headingRef}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a passionate developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies,
            I create seamless digital experiences that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(i) => {
                cardsRef.current[index] = i;
              }}
              className="bg-white dark:bg-dark-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-800/50 hover:-translate-y-1 group"
            >
              <div className="bg-primary-100 dark:bg-primary-900/20 p-3 rounded-full w-fit mb-4 group-hover:bg-primary-500/20 dark:group-hover:bg-primary-100/20">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}