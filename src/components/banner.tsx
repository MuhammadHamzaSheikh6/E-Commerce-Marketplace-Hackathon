"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState, useEffect } from "react";

interface IBanner {
  _id: string;
  image: string;
  alt: string;
  topHeading: string;
  centerHeading: string;
  bottomHeading: string;
  buttonLink: string;
}

const fetchBannerData = async () => {
  return await client.fetch(
    '*[_type == "banner"]{_id, topHeading, centerHeading, bottomHeading, buttonLink, image, "alt": altText}'
  );
};

export default function Banner() {
  const [banners, setBanners] = useState<IBanner[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fetch banner data from Sanity
  useEffect(() => {
    const getBanners = async () => {
      const data = await fetchBannerData();
      setBanners(data);
    };
    getBanners();
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [banners.length]);

  // If no banners are available, return a loader
  if (!banners.length)
    return (
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="text-center space-y-6">
          <Image
            src="/logo.png"
            alt="Loading Logo"
            width={120}
            height={80}
            className="mx-auto mb-4 animate-pulse"
            loading="lazy"
          />
          <div className="text-3xl font-bold text-black animate-pulse">
            Furniro...
          </div>
          <div className="flex justify-center space-x-2 text-yellow-700">
            <span className="dot text-5xl">.</span>
            <span className="dot text-5xl">.</span>
            <span className="dot text-5xl">.</span>
          </div>
        </div>

        <style jsx>{`
          .dot {
            animation: blink 1.5s infinite step-start;
          }

          .dot:nth-child(1) {
            animation-delay: 0s;
          }

          .dot:nth-child(2) {
            animation-delay: 0.3s;
          }

          .dot:nth-child(3) {
            animation-delay: 0.6s;
          }

          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
        `}</style>
      </div>
    );

  return (
    <section
      className="relative w-full h-full overflow-hidden"
      aria-label="Banner Carousel"
    >
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        aria-live="polite"
      >
        {banners.map((banner, index) => (
          <figure
            key={banner._id}
            className="relative min-w-full h-full bg-cover bg-center"
            aria-hidden={index !== currentSlide}
          >
            <Image
              src={urlFor(banner.image).url()}
              alt={banner.alt || `Banner ${index + 1}`}
              width={1920}
              height={1080}
              priority={index === 0}
              className="w-full md:h-[400px] h-[170px] lg:h-[650px] object-cover"
            />
            <figcaption className="hidden md:block absolute top-1/2 md:pl-8 md:pr-5 md:pt-9 md:w-[360px] md:h-[280px] right-12 lg:w-[623px] lg:h-[423px] rounded-xl bg-[#FFF3E3] transform -translate-y-1/2">
              <h2 className="lg:text-xl font-semibold">{banner.topHeading}</h2>
              <h1 className="lg:text-5xl lg:my-4 md:text-2xl py-1 text-[#B88E2F] font-extrabold">
                {banner.centerHeading}
              </h1>
              <p className="lg:font-semibold text-gray-600 md:text-sm">
                {banner.bottomHeading}
              </p>
              <a
                href={banner.buttonLink}
                className="bg-[#B88E2F] hover:bg-[rgba(184,143,47,0.77)] md:mt-7 lg:mt-12 md:px-5 md:py-2 lg:px-12 lg:py-6 text-white font-bold inline-block"
                aria-label={`Learn more about ${banner.centerHeading}`}
              >
                BUY NOW
              </a>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Navigation Dots */}
      <nav
        className="absolute bottom-4 w-full flex justify-center space-x-2"
        aria-label="Carousel Navigation"
      >
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
            aria-label={`Slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          ></button>
        ))}
      </nav>
    </section>
  );
}
