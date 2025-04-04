'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { profileData } from '../../../constant';
import Link from 'next/link';
import axios from 'axios';
import { trackEvent } from '@/lib/analytics';
import { useSectionTracking } from '@/hooks/useSectionTracking';

interface FormErrors {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
    const headingRef = useRef<HTMLDivElement>(null);
    const emailCardRef = useRef<HTMLDivElement>(null);
    const phoneCardRef = useRef<HTMLDivElement>(null);
    const locationCardRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const sectionRef = useSectionTracking('Contact Section');

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [errors, setErrors] = useState<FormErrors>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animations = [
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
            ),
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
            ),
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
            ),
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
            ),
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
            )
        ];

        return () => {
            animations.forEach(anim => anim?.scrollTrigger?.kill());
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const validateForm = (): boolean => {
        let valid = true;
        const newErrors: FormErrors = {
            name: '',
            email: '',
            subject: '',
            message: '',
        };

        if (!name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Please enter a valid email';
            valid = false;
        }

        if (!subject.trim()) {
            newErrors.subject = 'Subject is required';
            valid = false;
        }

        if (!message.trim()) {
            newErrors.message = 'Message is required';
            valid = false;
        } else if (message.length < 10) {
            newErrors.message = 'Message should be at least 10 characters';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            axios.post('/api/send-mail', { name, email, subject, message });

            setSubmitSuccess(true);
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");

            setTimeout(() => setSubmitSuccess(false), 5000);
            trackEvent('Contact', 'Form Submission', 'Success');
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-light-200 dark:bg-dark-200" ref={sectionRef}>
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
                        <Link href={`tel:${profileData.contact.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                            {profileData.contact.phone}
                        </Link>
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
                    {submitSuccess && (
                        <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
                            Thank you for your message! We'll get back to you soon.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-dark-100 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent`}
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-dark-100 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent`}
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className={`w-full px-4 py-2 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-dark-100 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent`}
                            />
                            {errors.subject && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-dark-100 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent`}
                            ></textarea>
                            {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 rounded-lg transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}