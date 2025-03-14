import React, { useEffect, useRef } from 'react'
import * as THREE from "three"
import gsap from "gsap"
import { Sphere } from "@react-three/drei"

const AnimatedSphere = () => {
    const sphereRef = useRef<THREE.Mesh>(null);

    useEffect(() => {
        if (!sphereRef.current) return

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: "#hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            })
            .to(sphereRef.current.rotation, {
                y: Math.PI * 2,
                x: Math.PI / 4,
                duration: 2,
                ease: "power2.inOut",
            })
            .to(
                sphereRef.current.scale,
                {
                    x: 1.5,
                    y: 1.5,
                    z: 1.5,
                    duration: 2,
                    ease: "power1.inOut",
                },
                "<"
            )
            .to(
                sphereRef.current.position,
                {
                    x: 0,
                    y: 0,
                    z: 0,
                    duration: 2,
                    ease: "power1.inOut",
                },
                "<"
            );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <Sphere args={[3, 32, 32]} ref={sphereRef}>
            <meshStandardMaterial color="#0ea5e9" wireframe roughness={0.5} metalness={0.5} />
        </Sphere>
    )
}

export default AnimatedSphere