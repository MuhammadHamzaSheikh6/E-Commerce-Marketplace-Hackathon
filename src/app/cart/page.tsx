'use client'
import Feature from "@/components/button/feature";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi"; // For the delete icon
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Cart() {
  // Initial Cart State
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Asgaard Sofa",
      price: 250000,
      quantity: 1,
      image: "/com/cam1.png",
    },
  ]);

  // Function to Update Quantity
  const handleQuantityChange = (id: number, value: number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, value) } : item
    );
    setCartItems(updatedItems);
  };

  // Function to Remove Item
  const handleRemoveItem = (id: number) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  // Calculate Subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
        <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh]  ">
        <Image
          src="/shop/banner.jpg" // Replace with your map image path
          alt="Shop Map"
          layout="fill"
          objectFit="cover"
          className=" opacity-70 brightness-75 "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-950">
                <Link href="/">
                    <Image
                    src="/logo.png" // Replace with the path to your logo image
                    alt="Furniro Logo"
                    width='32'
                    height='20'
                    className="w-12 h-8" // Adjust size as needed
                    />
                </Link>
            <h4 className="text-4xl font-bold">Cart</h4>
            <h5 className="flex items-center md:text-xl mb-4 space-x-1">
            <Link className="font-bold text-2xl" href="/">Home</Link>
            <MdKeyboardArrowRight className="mt-2 text-2xl"/>
            <Link className="mt-2 md:mt-0" href="#">Cart</Link>
            </h5>
        </div>
      </div>
    </div>
    <div className=" min-h-screen py-16 px-3 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Cart Table */}
        <div className="w-full lg:w-2/3">
          <div className="flex lg:block space-x-4 md:space-x-0 overflow-hidden">
            {/* Table Header */}
            <div className="bg-[#F9F1E7] md:pl-7 p-3 grid md:grid-cols-5  font-semibold">
              <span className="">Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>

            {/* Cart Items */}
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="md:pt-10  grid md:grid-cols-5 items-center gap-4 "
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width='70'
                      height='1000'
                      className="bg-[#F9F1E7] h-[60px] rounded-md"
                    />
                    <span className="text-gray-400 font-medium">{item.name}</span>
                  </div>
                  {/* Price */}
                  <span className="text-gray-600">
                    Rs. {item.price.toLocaleString()}.00
                  </span>
                  {/* Quantity */}
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-16 text-center border rounded"
                  />
                  {/* Subtotal */}
                  <span className="text-gray-800 font-semibold">
                    Rs. {(item.price * item.quantity).toLocaleString()}.00
                  </span>
                  {/* Delete Action */}
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-yellow-600 hover:text-red-700 transition"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-gray-600">
                Your cart is empty!
              </div>
            )}
          </div>
        </div>

        {/* Cart Totals */}
        <div className="w-full lg:w-1/3">
          <div className="bg-[#F9F1E7] space-y-5 px-7 md:px-16 pb-16 rounded-lg shadow-md">
            <h2 className="text-xl text-center pb-8 pt-4 font-bold text-gray-800 mb-4">Cart Totals</h2>
            {/* Subtotal */}
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}.00</span>
            </div>
            {/* Total */}
            <div className="flex justify-between text-gray-800 font-bold text-lg mb-4">
              <span>Total</span>
              <span className="text-yellow-500">
                Rs. {subtotal.toLocaleString()}.00
              </span>
            </div>
            {/* Checkout Button */}
            <button className="px-8 hover:bg-gray-400 border-2 border-gray-700 py-2 mx-10 bg- rounded-xl">
              <a href="/checkout">Check Out</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Feature/>
    </>
  );
}
