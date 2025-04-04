'use client';

import { useEffect, useRef } from 'react';
import { trackSectionView } from '@/lib/analytics';

export const useSectionTracking = (sectionName: string) => {
    const sectionRef = useRef<HTMLElement>(null);
    const tracked = useRef(false);

    useEffect(() => {
        const currentRef = sectionRef.current;
        const currentTracked = tracked.current;

        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !currentTracked) {
                    trackSectionView(sectionName);
                    tracked.current = true;
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(currentRef);

        return () => {
            observer.unobserve(currentRef);
        };
    }, [sectionName]);

    return sectionRef;
};