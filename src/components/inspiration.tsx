"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";



const TrendyProductsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample product images with descriptions
  const products = [
    { src: "/category/badroom.png", id: "01", description: "Bedroom", type: "Inner Peace"  },
    { src: "/category/dining.png",id: "01", description: "Dining", type: "Inner Peace"},
    { src: "/category/living.png", id: "01",description: "Living",type: "Inner Peace" },
    { src: "/category/badroom.png",id: "01", description: "Bedroom", type: "Inner Peace"},
    { src: "/category/dining.png", id: "01",description: "Dining", type: "Inner Peace"},
    { src: "/category/living.png", id: "01",description: "Living", type: "Inner Peace"},
    { src: "/category/living.png", id: "01",description: "Living", type: "Inner Peace"},

  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length); // Loop to start
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length); // Loop to end
  };

  return (
    <div
      className="relative bg-[#FCF8F3] h-[450px] w-full bg-cover bg-center flex flex-col md:flex-row items-center"
    >
      {/* Left Section */}
      <div className="md:pl-16 pl-4  py-5 w-full md:w-1/3 md:py-20 text-black space-y-4 md:space-y-6">
        <h1 className="md:text-4xl text-2xl font-bold text-gray-800 leading-tight">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="md:text-lg text-gray-600">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you.
        </p>
        <button className="bg-[#B88E2F] text-white px-2 py-2 md:px-8 md:py-3 text-lg font-medium  hover:bg-[#c89b32] transition duration-300">
          Explore More
        </button>
      </div>

      {/* Right Section: Product Image Slider */}
      <div className="relative flex items-center w-full md:w-2/3 justify-center mt-6 md:mt-0">
        {/* Image Slider */}
        <div className="relative w-full md:w-[600px] overflow-hidden">
          {/* Slider Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 35}%)` }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="relative w-44 h-44 md:w-60 md:h-[400px] mx-2 flex-shrink-0"
              >
                <Image
                  src={product.src}
                  alt={`Product ${index}`}
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
                {/* Description Box */}
                <div className="absolute md:py-4 py-1 px-1 md:px-5 font-light items-center justify-center bottom-4 left-4 bg-white bg-opacity-70 text-black text-sm md:w-36 md:h-20">
                  {product.id} - {product.description} <br />
                  <span className="font-bold md:text-lg">{product.type}</span>
                  
                </div>
                <a href="#">
                <div className="absolute bottom-4 left-[102px] md:left-40 p-2 bg-[#B88E2F]">
                <FaArrowRightLong />
                </div></a>
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 hidden top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
          >
            ❮
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute text-xl right-5 top-1/2 transform -translate-y-1/2 bg-white text-[#B88E2F] md:py-2 md:px-4 px-3  rounded-full shadow-md hover:bg-gray-200 transition duration-300"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendyProductsSection;
