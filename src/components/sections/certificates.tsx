"use client"

import { Award } from "lucide-react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import { profileData } from "../../../constant"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Icon } from "../Icon"
import { useSectionTracking } from "@/hooks/useSectionTracking"

export default function Certificates() {
  const headingRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useSectionTracking('Certificate Section');

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

    currentCards.forEach((card, index) => {
      if (!card) return

      gsap.fromTo(
        card,
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            card.addEventListener("mouseenter", () => {
              gsap.to(card, { y: -8, duration: 0.3, ease: "power2.out" })
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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute right-0 -translate-y-1/2 top-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-dark-300/80 shadow-md hover:bg-white dark:hover:bg-dark-200 transition-all cursor-pointer"
      aria-label="Next slide"
    >
      <Icon iconName="ChevronRight" />
    </button>
  )

  const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute left-0 -translate-y-1/2 top-1/2 z-10 p-2 rounded-full bg-white/80 dark:bg-dark-300/80 shadow-md hover:bg-white dark:hover:bg-dark-200 transition-all cursor-pointer"
      aria-label="Previous slide"
    >
      <Icon iconName="ChevronLeft" />
    </button>
  )

  return (
    <section id="certificates" className="py-20 bg-light-300 dark:bg-dark-100" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[]}
          dotListClass="custom-dot-list-style"
          itemClass="px-6"
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {profileData.certificates.map((cert, index) => (
            <div
              key={index}
              ref={(i) => {
                cardsRef.current[index] = i
              }}
              className="bg-white dark:bg-dark-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group hover:bg-primary-100 hover:-translate-y-1 dark:hover:bg-primary-800/50 sm:h-full"
            >
              <div className="relative h-48">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.title}
                  fill
                  className="object-contain transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-primary-600 dark:text-primary-400 dark:group-hover:text-gray-300 mb-1 contrast-150">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{cert.date}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}