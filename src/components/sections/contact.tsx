'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { profileData } from '../../../constant';
import Link from 'next/link';

export default function Contact() {
    const headingRef = useRef(null);
    const emailCardRef = useRef(null);
    const phoneCardRef = useRef(null);
    const locationCardRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

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

        gsap.fromTo(
            emailCardRef.current,
            { opacity: 0, y: 20, scale: 0.8 },
            {
                opacity: 1, y: 0, scale: 1,
                duration: 0.8, delay: 0.2,
                scrollTrigger: {
                    trigger: emailCardRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

        gsap.fromTo(
            phoneCardRef.current,
            { opacity: 0, y: 20, scale: 0.8 },
            {
                opacity: 1, y: 0, scale: 1,
                duration: 0.8, delay: 0.4,
                scrollTrigger: {
                    trigger: phoneCardRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

        gsap.fromTo(
            locationCardRef.current,
            { opacity: 0, y: 20, scale: 0.8 },
            {
                opacity: 1, y: 0, scale: 1,
                duration: 0.8, delay: 0.6,
                scrollTrigger: {
                    trigger: locationCardRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

        gsap.fromTo(
            formRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0,
                duration: 1, delay: 0.8,
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section id="contact" className="py-20 bg-light-200 dark:bg-dark-200">
            <div className="container mx-auto px-6">
                <div
                    ref={headingRef}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Let's discuss how we can work together to bring your ideas to life
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    <div
                        ref={emailCardRef}
                        className="bg-white dark:bg-dark-100 p-6 rounded-xl shadow-lg text-center hover:bg-primary-100 group dark:hover:bg-primary-800/50 cursor-pointer group"
                    >
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-full w-fit mx-auto mb-4  group-hover:bg-primary-500/20 dark:group-hover:bg-primary-100/20">
                            <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400 " />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Email</h3>
                        <Link href={`mailto:${profileData.contact.email}`} className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                            {profileData.contact.email}
                        </Link>
                    </div>

                    <div
                        ref={phoneCardRef}
                        className="bg-white dark:bg-dark-100 p-6 rounded-xl shadow-lg text-center hover:bg-primary-100 group dark:hover:bg-primary-800/50 cursor-pointer group"
                    >
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary-500/20 dark:group-hover:bg-primary-100/20">
                            <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Phone</h3>
                        <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                            {profileData.contact.phone}
                        </a>
                    </div>

                    <div
                        ref={locationCardRef}
                        className="bg-white dark:bg-dark-100 p-6 rounded-xl shadow-lg text-center hover:bg-primary-100 group dark:hover:bg-primary-800/50 cursor-pointer group"
                    >
                        <div className="bg-primary-100 dark:bg-primary-900/20 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary-500/20 dark:group-hover:bg-primary-100/20 ">
                            <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Location</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {profileData.contact.address}
                        </p>
                    </div>
                </div>

                <div
                    ref={formRef}
                    className="max-w-3xl mx-auto bg-white dark:bg-dark-100 rounded-xl shadow-lg p-8"
                >
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-100 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-100 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-100 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-100 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-lg transition-colors cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}