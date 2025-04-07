"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { profileData } from "../../../constant"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { trackEvent } from "@/lib/analytics"
import { useSectionTracking } from "@/hooks/useSectionTracking"

export default function Projects() {
  const headingRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useSectionTracking('Project Section');

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    const currentCards = [...cardsRef.current]

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )

    currentCards.forEach((card) => {
      if (!card) return

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
          delay: 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            card.addEventListener("mouseenter", () => {
              gsap.to(card, { y: -4, duration: 0.3, ease: "power2.out" })
            })

            card.addEventListener("mouseleave", () => {
              gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" })
            })
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      gsap.killTweensOf(currentCards)
    }
  }, [])

  const carouselSettings = {
    responsive: {
      all: {
        breakpoint: { max: 4000, min: 0 },
        items: 1,
      },
    },
    infinite: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
    keyBoardControl: true,
    customTransition: "transform 800ms ease-in-out",
    transitionDuration: 800,
    containerClass: "carousel-container",
    removeArrowOnDeviceType: ["desktop", "tablet", "mobile"],
    dotListClass: "custom-dot-list-style",
    showDots: false,
    arrows: false,
  }

  const handleProjectClick = (projectName: string) => {
    trackEvent('Projects', 'Project Click', projectName);
  };

  const handleProjectLinkClick = (projectTitle: string, type: 'GitHub' | 'Live Demo') => {
    trackEvent('Project Link', `Click - ${type}`, projectTitle);
  };

  return (
    <section id="projects" className="py-20 bg-light-300 dark:bg-dark-100" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profileData.projects.map((project, index) => (
            <div
              key={index}
              ref={(i) => {
                cardsRef.current[index] = i
              }}
              className="bg-white dark:bg-dark-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer dark:hover:bg-primary-800/50 hover:-translate-y-1 hover:bg-primary-100 group"
              onClick={() => handleProjectClick(project.title)}
            >
              <div className="relative h-48 overflow-hidden">
                {project.images.length > 1 ? (
                  <Carousel {...carouselSettings}>
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative h-48 w-full">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} - image ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </Carousel>
                ) : (
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm group-hover:bg-primary-500/20 dark:group-hover:bg-primary-100/20 dark:group-hover:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={`${project.links.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    onClick={() => handleProjectLinkClick(project.title, 'GitHub')}
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </Link>
                  <Link
                    href={`${project.links.live}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    onClick={() => handleProjectLinkClick(project.title, 'Live Demo')}
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}