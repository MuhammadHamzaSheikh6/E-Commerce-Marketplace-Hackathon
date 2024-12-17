'use client';
import Image from "next/image";
import React from "react";

const categories = [
  {
    title: "Dining",
    image: "/category/dining.png", // Replace with your image path
  },
  {
    title: "Living",
    image: "/category/living.png", // Replace with your image path
  },
  {
    title: "Bedroom",
    image: "/category/badroom.png", // Replace with your image path
  },
];

const BrowseRange = () => {
  return (
    <div className="text-center py-12">
      {/* Heading */}
      <h2 className="md:text-2xl text-xl font-bold mb-2">Browse The Range</h2>
      <p className="text-gray-600 text-sm md:text-base mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Categories */}
      <div className="grid grid-cols-1 px-5 md:px-0  sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden  hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={category.image}
              alt={category.title}
              width='1000'
              height='1000'
              className=" "
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseRange;
