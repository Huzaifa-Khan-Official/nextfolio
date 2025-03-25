'use client';

import { useEffect } from 'react';

export default function PWA() {
    useEffect(() => {
        if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js').then(
                    () => {
                        console.log('ServiceWorker registration successful');
                    },
                    (err) => {
                        console.log('ServiceWorker registration failed: ', err);
                    }
                );
            });
        }
    }, []);

    return null;
}