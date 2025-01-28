"use client";

import React, { useEffect, useState } from "react";
import { IoMdShare } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import toast, { Toaster } from "react-hot-toast";

interface IProduct {
  _id: string;
  title: string;
  shortDescription: string;
  price: string;
  oldPrice?: string;
  dicountPercentage?: string;
  isNew?: boolean;
  productImage: string;
}

export default function Products() {
  const [data, setData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleWishlist = (product: IProduct) => {
    if (!product) return;

    // Retrieve the wishlist from localStorage
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

    // Check if the product is already in the wishlist
    const isAlreadyInWishlist = wishlist.some(
      (item: IProduct) => item._id === product._id
    );

    if (isAlreadyInWishlist) {
      toast.success("Product is already in your wishlist!", {
        position: "top-right",
        duration: 3000,
        style: {
          background: "#f87171",
          color: "white",
        },
      });
      return;
    }

    // Add the selected product to the wishlist
    const updatedWishlist = [...wishlist, product];

    // Save the updated wishlist back to localStorage
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    toast.success("Product added to wishlist!", {
      position: "top-right",
      duration: 3000,
      style: {
        background: "#B88E2F",
        color: "white",
      },
    });
  };

  // Function to handle sharing
  const handleShare = (productId: string) => {
    const productLink = `${window.location.origin}/product/${productId}`;

    // Check if the Web Share API is supported
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this product!",
          text: "I found this amazing product and thought you might like it.",
          url: productLink,
        })
        .then(() => {
          toast.success("Product shared successfully!", {
            position: "top-right",
            duration: 3000,
            style: {
              background: "#4ade80",
              color: "white",
            },
          });
        })
        .catch((error) => {
          console.error("Error sharing:", error);
          toast.error("Failed to share product.", {
            position: "top-right",
            duration: 3000,
            style: {
              background: "#f87171",
              color: "white",
            },
          });
        });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard
        .writeText(productLink)
        .then(() => {
          toast.success("Link copied to clipboard!", {
            position: "top-right",
            duration: 3000,
            style: {
              background: "#4ade80",
              color: "white",
            },
          });
        })
        .catch((error) => {
          console.error("Error copying to clipboard:", error);
          toast.error("Failed to copy link.", {
            position: "top-right",
            duration: 3000,
            style: {
              background: "#f87171",
              color: "white",
            },
          });
        });
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: IProduct[] = await client.fetch(
          '*[_type == "product"][0...8]{_id, title, shortDescription, dicountPercentage, price, oldPrice, isNew, productImage}'
        );
        setData(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) return <div className="text-center">Loading products...</div>;
  if (!data.length)
    return <div className="text-center">No products found.</div>;

  return (
    <div className="py-12 px-4 lg:px-16">
      <Toaster />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {data.map((item) => (
          <div
            key={item._id}
            className="relative bg-gray-100 rounded overflow-hidden group"
          >
            <Image
              src={urlFor(item.productImage).width(1000).height(1000).url()}
              alt={`Image of ${item.title}`}
              width={400}
              height={400}
              loading="lazy"
            />

            {item.dicountPercentage && (
              <span
                className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold flex items-center justify-center"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              >
                %{item.dicountPercentage}
              </span>
            )}

            {item.isNew && (
              <span
                className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold flex items-center justify-center"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              >
                NEW
              </span>
            )}

            <div className="p-4">
              <h3 className="font-semibold text-lg truncate">{item.title}</h3>
              <p className="text-gray-500 text-sm truncate">
                {item.shortDescription}
              </p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="font-bold">Rp {item.price}</span>
                {item.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    Rp {item.oldPrice}
                  </span>
                )}
              </div>
            </div>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Link href={`/product/${item._id}`} legacyBehavior>
                <a className="bg-white text-yellow-600 px-6 py-2 mb-2 font-medium rounded shadow">
                  View Details
                </a>
              </Link>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleShare(item._id)}
                  className="flex items-center gap-1 hover:text-red-500 text-white"
                >
                  <IoMdShare />
                  <span>Share</span>
                </button>
                <a href={`/comparison/${item._id}`}>
                  <button className="flex items-center gap-1 hover:text-red-500 text-white">
                    <MdCompareArrows />
                    <span>Compare</span>
                  </button>
                </a>
                <button
                  onClick={() => handleWishlist(item)}
                  className="flex items-center gap-1 text-white hover:text-red-500"
                >
                  <FaRegHeart />
                  <span>Like</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/shop" legacyBehavior>
          <a className="px-10 py-2 text-yellow-600 border-2 border-yellow-600 hover:bg-yellow-500 hover:text-white font-medium rounded transition">
            Show More
          </a>
        </Link>
      </div>
    </div>
  );
}