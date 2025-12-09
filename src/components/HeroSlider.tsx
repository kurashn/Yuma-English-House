"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSliderProps {
    images: string[];
}

export default function HeroSlider({ images }: HeroSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        unoptimized
                    />
                </div>
            ))}
        </div>
    );
}
