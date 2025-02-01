"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface Product {
  _id: string;
  name: string;
  title: string; // Added
  price: number;
  productImage: string; // Added (assuming it's a Sanity image type)
  shortDescription: string; // Added
  // Add other product properties here
}

interface WishlistContextType {
  wishlist: Product[];
  wishlistCount: number;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
}

const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  wishlistCount: 0,
  addToWishlist: () => {},
  removeFromWishlist: () => {},
});

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    // Load wishlist from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
    setWishlistCount(storedWishlist.length);
  }, []);

  // ✅ Function to Add Product to Wishlist
  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = [...prevWishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setWishlistCount(updatedWishlist.length);
      localStorage.setItem("wishlistCount", updatedWishlist.length.toString());
      return updatedWishlist;
    });
  };

  // ✅ Function to Remove Product from Wishlist
  const removeFromWishlist = (productId: string) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((product) => product._id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setWishlistCount(updatedWishlist.length);
      localStorage.setItem("wishlistCount", updatedWishlist.length.toString());
      return updatedWishlist;
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, wishlistCount, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};