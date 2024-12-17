'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaAngleRight , FaStar, FaMinus, FaPlus } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';
import { IoMdShare } from 'react-icons/io';
import { MdCompareArrows } from 'react-icons/md';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Product = [
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
  }
];



const ProductPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  return (
    <>
    <div className="">
        <div className='bg-[#F9F1E7] py-3 md:py-7'>
            <p className="text-sm md:ml-14 ml-3 flex gap-3  place-items-center text-gray-500">
                Home <FaAngleRight className='text-black'/> Shop <FaAngleRight className='text-black'/> <span className='font-extrabold'>|</span>  <span className="text-gray-950 font-medium">Asgaard sofa</span>
            </p>
        </div>
      <div className="max-w-7xl mx-auto grid md:mx-8  grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Section */}
        <div className="lg:col-span-6 flex gap-3 md:gap-7 space-y-6">
         <div className=" md:space-y-10 mt-6">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-lg overflow-hidden cursor-pointer"
              >
                <Image
                  src={`/single/1.jpg?text=Image+${index + 1}`}
                  alt={`Thumbnail ${index + 1}`}
                  width='1000'
                  height='1000'
                  className="md:w-full md:h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <Image
              src="/single/2.jpg"
              alt="Product Image"
              width='423'
              height='500'
              className=" h-[240px] md:h-[500px] md:w-[423px] object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-6 mx-3 md:mx-0 mt-8 space-y-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Asgaard sofa
            </h1>
          </div>
          <div>
            <p className="text-xl text-gray-400 font-semibold">Rs. 250,000.00</p>
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex items-center">
                {[...Array(4)].map((_, index) => (  
                  <FaStar key={index} className="text-yellow-500 text-xl" />
                ))}
                <FaStar className="text-gray-300 text-xl" />
              </div>
              <span className="text-sm text-gray-500">(5 Customer Review)</span>
            </div>
          </div>
          <p className="text-gray-600 md:mr-48">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, go-anywhere hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="space-y-4">
            {/* Size Selector */}
            <div>
              <h3 className="font-medium text-gray-800">Size</h3>
              <div className="flex space-x-4 mt-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2  rounded-md ${
                      selectedSize === size
                        ? 'border-[#B88E2F] bg-[#B88E2F] text-white'
                        : ' bg-[#F9F1E7] text-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* Color Selector */}
            <div>
              <h3 className="font-medium text-gray-800">Color</h3>
              <div className="flex space-x-4 mt-2">
                {['#000000', '#845EC2', '#FFD700', '#D5D5D5'].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? 'ring-2 ring-[#b9935a]'
                        : 'border-gray-300'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          {/* Quantity Selector */}
          <div className="md:flex items-center space-y-5 md:space-y-0 space-x-4">
            <div className="w-[120px] flex items-center border rounded-md overflow-hidden">
              <button
                onClick={() => handleQuantityChange('decrease')}
                className="px-3 py-2  text-gray-600"
              >
                <FaMinus />
              </button>
              <span className="px-4 py-2 text-gray-800">{quantity}</span>
              <button
                onClick={() => handleQuantityChange('increase')}
                className="px-3 py-2 text-gray-600"
              >
                <FaPlus />
              </button>
            </div>
        
            <Sheet>
              <SheetTrigger className="px-10 py-3 rounded-md font-medium border-2 hover:border-black transition">
                Add To Cart
              </SheetTrigger>
              <SheetContent className="h-auto md:w-full w-[260px] max-w-md p-4">
                <SheetHeader>
                  <SheetTitle className="border-b pb-4 text-xl font-semibold">
                    Shopping Cart
                  </SheetTitle>
                </SheetHeader>

                {/* Cart Items */}
                <div className="space-y-4 mt-4">
                  {/* Cart Item 1 */}
                  <div className="flex items-center space-x-4  pb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-md">
                    <Image
                        src="/single/2.jpg" // Replace with your product image URL
                        alt="Product 2"
                        width='1000'
                        height='1000'
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">Asgaard Sofa</p>
                      <p className="text-sm text-gray-500">1 x Rs. 250,000.00</p>
                    </div>
                    <button className="text-gray-500 hover:text-gray-800">
                      ✕
                    </button>
                  </div>

                  {/* Cart Item 2 */}
                  <div className="flex items-center space-x-4  pb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-md">
                      <Image
                        src="/blog/laptop.jpg" // Replace with your product image URL
                        alt="Product 2"
                        width='1000'
                        height='1000'
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">Casaliving Wood</p>
                      <p className="text-sm text-gray-500">1 x Rs. 270,000.00</p>
                    </div>
                    <button className="text-gray-500 hover:text-gray-800">
                      ✕
                    </button>
                  </div>
                </div>

                {/* Subtotal */}
                <div className="flex justify-between items-center md:mt-36 pt-4">
                  <p className="font-medium text-gray-800">Subtotal</p>
                  <p className="font-medium text-yellow-600">Rs. 520,000.00</p>
                </div>

                {/* Actions */}
                <div className="md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2 border-t pt-5 mt-4">
                  <button className="flex-1 py-2 px-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition">
                    <a href="/cart">Cart</a>
                  </button>
                  <button className="flex-1 py-2 px-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition">
                    <a href="/checkout">Checkout</a>
                  </button>
                  <button className="flex-1 py-2 px-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition">
                    <a href="/camparison">Comparison</a>
                  </button>
                </div>
              </SheetContent>
            </Sheet>


        
            <button className=" flex place-items-center   border-2 text-gray-700 px-10 py-3 rounded-md font-medium hover:border-black transition">
            <FaPlus className='mx-2'/><a href="/camparison">Compare</a> 
            </button>
          </div>
          <div className='border-t-2 mr-16 '>

          </div>
                    {/* Product Meta */}
            <div className="md:mr-[350px]  md:grid md:grid-cols-2 gap-y-3 text-gray-400 text-sm items-center">
            {/* SKU */}
            <p className=" font-medium">SKU<span className='md:pl-[59px]'>:</span></p>
            <p className=''>S8001</p>

            {/* Category */}
            <p className="font-medium">Category<span className='md:pl-[28px]'>:</span></p>
            <p>Sofas</p>

            {/* Tags */}
            <p className="font-medium">Tags <span className='md:pl-[53px]'>:</span></p>
            <p>Sofa, Chair, Home, Shop</p>

            {/* Share */}
            <p className="font-medium">Share <span className='md:pl-[46px]'>:</span></p>
            <div className="flex space-x-3">
                <FaFacebook className="text-gray-950 hover:text-[#3b5998] cursor-pointer text-xl" />
                <FaTwitter className="text-gray-950 hover:text-[#1DA1F2] cursor-pointer text-xl" />
                <FaInstagram className="text-gray-950 hover:text-[#E4405F] cursor-pointer text-xl" />
            </div>
            </div>

        </div>
      </div>

      <div className=' border-y-2 text-gray-500 mt-12 pb-12'>          
      <div className='text-center py-9 text-lg md:text-2xl font-medium space-x-4 md:space-x-10'>
        <a className='text-gray-950 hover:text-gray-950'  href="">Description</a><a className='hover:text-gray-950' href="">Additional Information</a><a className='hover:text-gray-950' href="">Reviews[5]</a>
      </div>
      <div className='mx-auto '>
        <p className='md:mx-32 mx-3 text-justify pb-6'>
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. <br /> <br />
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with 
        a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences 
        while the guitar-influenced leather strap enables easy and stylish travel.
        </p>

        <div className='md:flex mx-3   md:mx-auto space-y-8 md:space-y-0 md:space-x-8 md:w-[1100px] md:h-[348px] '>
          <Image
              src="/single/3.jpg"
              alt="Product Image"
              width='1000'
              height='1000'
              className="h-[348px] w-[605px] rounded-md "
          />
          <Image
              src="/single/3.jpg"
              alt="Product Image"
              width='1000'
              height='1000'
              className="h-[348px] w-[605px] rounded-md "
            />
        </div>
      </div>
      </div>
      

      <div className="py-16 px-5 md:px-28">
      {/* Heading */}
      <h2 className="text-center text-3xl font-medium mb-8">Related Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {Product.map((product, index) => (
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

    </div>
    </>
  );
};

export default ProductPage;
