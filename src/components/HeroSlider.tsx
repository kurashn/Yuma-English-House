"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSliderProps {
    images: { src: string; alt: string }[];
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
            {images.map((image, index) => (
                <div
                    key={image.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    aria-hidden={index !== currentIndex}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 448px, (min-width: 640px) 448px, 100vw"
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}
        </div>
    );
}
