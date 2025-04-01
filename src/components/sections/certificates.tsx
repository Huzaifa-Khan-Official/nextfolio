'use client';

import { Award, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const certificates = [
    {
        title: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        date: 'December 2023',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
        credential: 'https://aws.amazon.com',
    },
    {
        title: 'Google Cloud Professional Developer',
        issuer: 'Google Cloud',
        date: 'October 2023',
        image: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&q=80&w=800',
        credential: 'https://cloud.google.com',
    },
    {
        title: 'Meta Frontend Developer',
        issuer: 'Meta',
        date: 'August 2023',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
        credential: 'https://meta.com',
    },
];

export default function Certificates() {
    const headingRef = useRef(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const currentCards = [...cardsRef.current];

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

        currentCards.forEach((card, index) => {
            if (!card) return;

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
        <section id="certificates" className="py-20 bg-light-300 dark:bg-dark-100">
            <div className="container mx-auto px-6">
                <div
                    ref={headingRef}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Professional certifications and achievements
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            ref={(i) => {
                                cardsRef.current[index] = i;
                            }}
                            className="bg-white dark:bg-dark-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group hover:bg-primary-100 hover:-translate-y-1 dark:hover:bg-primary-800/50"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                                <p className="text-primary-600 dark:text-primary-400 dark:group-hover:text-gray-300 mb-1">{cert.issuer}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{cert.date}</p>
                                <a
                                    href={cert.credential}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                                >
                                    <span>View Credential</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}