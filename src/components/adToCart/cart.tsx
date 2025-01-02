'use client'
import { useState,  } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

// Sample products (you can replace this with your API call)
const sampleProducts = [
  {
    id: 1,
    name: "Asgaard Sofa",
    imageUrl: "/single/2.jpg",
    price: 250000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Casaliving Wood",
    imageUrl: "/blog/laptop.jpg",
    price: 270000,
    quantity: 1,
  },
];

export default function Cart() {
  // Cart state to hold items and subtotal
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);

  // Add item to the cart
  const addToCart = (product: any) => {
    setCartItems((prev) => {
      const updatedCart = [...prev, product];
      calculateSubtotal(updatedCart);
      return updatedCart;
    });
  };

  // Remove item from the cart
  const removeFromCart = (productId: number) => {
    setCartItems((prev) => {
      const updatedCart = prev.filter((item) => item.id !== productId);
      calculateSubtotal(updatedCart);
      return updatedCart;
    });
  };

  // Calculate subtotal
  const calculateSubtotal = (cart: any[]) => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setSubtotal(total);
  };

//   useEffect(() => {
//     // Replace this with your API call to get the cart data
//     // fetchCartData();
//   }, []);

  return (
    <Sheet>
      <SheetTrigger className="text-gray-600 hover:text-gray-800">
        <IoCartOutline size={24} />
      </SheetTrigger>
      <SheetContent className="h-auto md:w-full w-[260px] max-w-md p-4">
        <SheetHeader>
          <SheetTitle className="border-b pb-4 text-xl font-semibold">
            Shopping Cart
          </SheetTitle>
        </SheetHeader>

        {/* Cart Items */}
        <div className="space-y-4 mt-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map((item: any) => (
              <div key={item.id} className="flex items-center space-x-4 pb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-md">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity} x Rs. {item.price.toLocaleString()}
                  </p>
                </div>
                <button
                  className="text-gray-500 hover:text-gray-800"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Subtotal */}
        <div className="flex justify-between items-center md:mt-36 pt-4">
          <p className="font-medium text-gray-800">Subtotal</p>
          <p className="font-medium text-yellow-600">
            Rs. {subtotal.toLocaleString()}
          </p>
        </div>

        {/* Actions */}
        <div className="md:flex justify-between items-center space-y-4 md:space-y-0 space-x-2 border-t pt-5 mt-4">
          <button className="flex-1 py-2 px-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition">
            <a href="/cart">View Cart</a>
          </button>
          <button className="flex-1 py-2 px-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition">
            <a href="/checkout">Checkout</a>
          </button>
          <button className="flex-1 py-2 px-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition">
            <a href="/comparison">Comparison</a>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
