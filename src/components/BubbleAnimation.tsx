import { useEffect } from "react";
import { gsap } from "gsap";

export default function BubbleAnimation() {
    useEffect(() => {
        gsap.to(".bubble", {
            scale: 1.5,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: 0.2
        });

        gsap.to(".bubble-move", {
            y: 40,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: 0.3
        });
    }, []);

    return (
        <div className="absolute w-full h-full -z-10 pointer-events-none">
            <div className="bubble absolute w-2.5 h-2.5 bg-[#d27dfa] rounded-full top-12 sm:top-[20%] left-[50%] " />
            <div className="bubble absolute w-5 h-5 bg-[#fca249] rounded-full -top-5 left-[10%]" />
            <div className="bubble absolute w-4 h-4 bg-[#ff9398] rounded-full top-[44%] left-[15%]" />
            <div className="bubble-move absolute w-2.5 h-2.5 bg-[#00c99c] rounded-full top-[10%] left-[80%]" />
            <div className="bubble-move absolute w-5 h-5 bg-[#f1d53b] rounded-full top-[30%] left-[41%]" />
        </div>
    );
}