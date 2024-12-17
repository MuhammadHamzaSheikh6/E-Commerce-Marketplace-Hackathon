'use client';
import React from "react";
import { IoMdShare } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";


const products = [
  {
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    discount: "30%",
    tag: "",
    image: "/category/badroom.png", // Replace with your image path
  },
  {
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "",
    discount: "20%",
    tag: "",
    image: "/category/dining.png", // Replace with your image path
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
    tag: "",
    image: "/category/living.png", // Replace with your image path
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: "",
    discount: "",
    tag: "New",
    image: "/category/badroom.png", // Replace with your image path
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: "",
    discount: "",
    tag: "New",
    image: "/category/dining.png", // Replace with your image path
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: "",
    discount: "",
    tag: "New",
    image: "/category/living.png", // Replace with your image path
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: "600.000",
    discount: "",
    tag: "New",
    image: "/category/badroom.png", // Replace with your image path
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    oldPrice: "",
    discount: "",
    tag: "New",
    image: "/category/dining.png", // Replace with your image path
  },
  // Add more products here...
];

const ProductCard = () => {
  return (
    <div className="py-12 px-5 md:px-28">
      {/* Heading */}
      <h2 className="text-center text-2xl font-bold mb-8">Our Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative group bg-gray-100  overflow-hidden"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width='1000'
              height='1000'
              className="w-full h-60 object-cover"
            />

            {/* Discount Tag */}
            {product.discount && (
              <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold py-3 px-2 rounded-full ">
                {product.discount}
              </span>
            )}

            {/* New Tag */}
            {product.tag && (
              <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold py-3 px-2 rounded-full">
                {product.tag}
              </span>
            )}

            {/* Product Details */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-red-500 font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-[#B88E2F] px-8 py-2  mb-2 font-medium shadow">
                Add to Cart
              </button>
              <div className="flex space-x-2">
                <button className="flex items-center gap-1  text-white">
                    <IoMdShare />
                    <span>Share</span>
                </button>
                <button className="flex items-center gap-1 text-white">
                    <MdCompareArrows />
                    <span>Compare</span>
                </button>
                <button className="flex items-center gap-1 text-white">
                    <FaRegHeart className=""/>
                    <span>Like</span>
                </button>
                </div>

            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-8 text-center">
        <button className="px-14 py-2  text-[#B88E2F] hover:bg-[#b88f2f90] font-medium rounded border-[#B88E2F] border-2 transition">
          Show More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
