"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Github, Linkedin, Mail } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import AnimatedSphere from "../AnimatedSphere"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const buttonsRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
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
      },
    )

    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "center center",
        scrub: 0.5,
      },
    })

    textTimeline
      .fromTo(
        headingRef.current,
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.5 },
      )
      .fromTo(paragraphRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
      .fromTo(buttonsRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.5")

    gsap.fromTo(
      canvasRef.current,
      { scale: 0.8 },
      {
        scale: 1.1,
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "center top",
          scrub: true,
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section id="hero-section" ref={sectionRef} className="min-h-[calc(100vh-13vh)] relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient -z-10" />

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
        >
          <h1
            ref={headingRef}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
          >
            Full Stack Developer
          </h1>
          <p ref={paragraphRef} className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Crafting digital experiences that make a difference
          </p>
          <div ref={buttonsRef} className="flex gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors"
            >
              Get in Touch
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-dark-100 rounded-full hover:bg-gray-200 dark:hover:bg-dark-200 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-dark-100 rounded-full hover:bg-gray-200 dark:hover:bg-dark-200 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:your@email.com"
                className="p-3 bg-gray-100 dark:bg-dark-100 rounded-full hover:bg-gray-200 dark:hover:bg-dark-200 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
        <div ref={canvasRef} className="lg:w-1/2 h-[400px]">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </div>
      </div>
    </section>
  )
}