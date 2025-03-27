"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2021 - Present",
    description: "Leading development of enterprise applications using modern technologies.",
    skills: ["Node.js", "React", "PostgreSQL", "AWS"],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2019 - 2021",
    description: "Developed responsive web applications and implemented UI/UX designs.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Junior Developer",
    company: "Startup Inc",
    period: "2017 - 2019",
    description: "Built and maintained various web applications and services.",
    skills: ["JavaScript", "HTML", "CSS", "jQuery"],
  },
]

export default function Experience() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

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
          toggleActions: "play none none none",
        },
      },
    )

    // Animation for each card
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: -40,
          y: 0,
        },
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
            if (card) {
              // Add hover animation after the initial animation is complete
              card.addEventListener("mouseenter", () => {
                gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" })
              })

              card.addEventListener("mouseleave", () => {
                gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" })
              })
            }
          },
        },
      )
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      gsap.killTweensOf(cardsRef.current)
    }
  }, [])

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
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="flex gap-2 mb-4 rounded-lg shadow-lg bg-white dark:bg-dark-100 hover:bg-primary-100 dark:hover:bg-primary-800/50 group"
            >
              <div className="flex-grow p-6 py-4 ">
                <div className="flex justify-between items-start mb-2">
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