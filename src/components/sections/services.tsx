'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Layout, Server, Smartphone, Globe, Palette } from 'lucide-react';
import { useEffect, useRef } from 'react';

const services = [
    {
        icon: <Code className="w-8 h-8" />,
        title: 'Web Development',
        description: 'Building modern, responsive websites using the latest technologies and best practices.',
    },
    {
        icon: <Server className="w-8 h-8" />,
        title: 'Backend Development',
        description: 'Creating robust and scalable server-side applications and APIs.',
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: 'Mobile Development',
        description: 'Developing cross-platform mobile applications with React Native.',
    },
    {
        icon: <Layout className="w-8 h-8" />,
        title: 'UI/UX Design',
        description: 'Designing intuitive and beautiful user interfaces and experiences.',
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: 'SEO Optimization',
        description: 'Optimizing websites for better search engine rankings and visibility.',
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: 'Brand Design',
        description: 'Creating cohesive brand identities and design systems.',
    },
];

export default function Services() {
    const headingRef = useRef(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0, duration: 1, delay: 0.5,
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

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
    }, []);

    return (
        <section id="services" className="py-20 bg-light-200 dark:bg-dark-200">
            <div className="container mx-auto px-6">
                <div
                    className="text-center mb-16"
                    ref={headingRef}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your needs
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={(i) => {
                                cardsRef.current[index] = i;
                            }}
                            className="bg-white dark:bg-dark-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-primary-100 group dark:hover:bg-primary-800/50 cursor-pointer"
                        >
                            <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-full w-fit mb-6 group-hover:bg-primary-500/20 dark:group-hover:bg-primary-100/20">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}