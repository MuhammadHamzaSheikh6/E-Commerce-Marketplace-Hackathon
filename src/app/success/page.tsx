"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLocalStorage } from "../context/CartContext";

export default function SuccessPage() {
  const [, setCartItems] = useLocalStorage("cart", []);

  useEffect(() => {
    // Clear the cart on success page load
    localStorage.removeItem("cart");
    setCartItems([]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Payment Successful!</h1>
      <p className="text-lg text-gray-700 mb-8">Thank you for your purchase.</p>
      <Link href="/" className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
        Continue Shopping
      </Link>
    </div>
  );
}