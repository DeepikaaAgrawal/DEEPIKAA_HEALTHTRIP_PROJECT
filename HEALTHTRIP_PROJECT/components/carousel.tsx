'use client';

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Carousel({ images }: { images: string[] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  return (
    <div 
      className="relative w-full h-[400px] rounded-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      ))}
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-all ${
              index === currentSlide ? 'bg-primary' : 'bg-muted'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
}