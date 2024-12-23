"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const images = [
  {
    src: '/banner/banner.png',
    alt: 'Image 1',
    topHeading: 'New Arrival',
    centerHeading: 'Discover Our New Collection',
    bottomHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
    buttonLink: '/collection/new-arrivals', // Unique link for this image
  },
  {
    src: '/banner/banner.png',
    alt: 'Image 2',
    topHeading: 'New Arrival',
    centerHeading: 'Discover Our New Collection',
    bottomHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
    buttonLink: '/collection/new-arrivals', // Unique link for this image 
 },
  {
    src: '/banner/banner.png',
    alt: 'Image 3',
    topHeading: 'New Arrival',
    centerHeading: 'Discover Our New Collection',
    bottomHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
    buttonLink: '/collection/new-arrivals', // Unique link for this image
  },
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
              className="relative min-w-full h-full bg-cover bg-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width="1000"
                height="1000"
                className="w-full h-full object-contain"
              />
              <div
                key={index}
                className="hidden md:block absolute top-1/2 md:pl-12 md:pr-14 md:py-10  md:w-[400px] md:h-[300px]   right-12 lg:w-[623px] lg:h-[423px] rounded-xl  bg-[#FFF3E3]  transform -translate-y-1/2"
              >
                <h4 className="lg:text-xl font-semibold">{image.topHeading}</h4>
                <h3 className="lg:text-5xl lg:my-4 md:text-2xl text-[#B88E2F] font-extrabold ">{image.centerHeading}</h3>
                <p className="lg:font-semibold md:text-sm">{image.bottomHeading}</p>
                <button className='bg-[#B88E2F] hover:bg-[rgba(184,143,47,0.77)] md:mt-3 lg:mt-12 md:px-7 md:py-4 lg:px-12 lg:py-6 text-white font-bold'>
                  <a href={image.buttonLink}> BUY NOW</a>
                </button>
              </div>
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