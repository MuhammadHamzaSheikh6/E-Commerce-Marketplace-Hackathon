"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  { src: '/banner/1banner.jpg', alt: 'Image 1' }, 
  { src: '/banner/1banner.jpg', alt: 'Image 2' },
  { src: '/banner/1banner.jpg', alt: 'Image 3' },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Function to go to the previous slide
  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  // };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className=" relative w-full h-full overflow-hidden">
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full h-full bg-cover bg-center"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width='1000'
              height='1000'
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
