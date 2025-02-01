import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { IProduct } from "@/types";
import { IoMdShare } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

interface ProductGridProps {
  products: IProduct[];
}

const handleShare = async (productId: string) => {
  const productLink = `${window.location.origin}/product/${productId}`;

  try {
    // Check if the Web Share API is supported
    if (navigator.share) {
      await navigator.share({
        title: "Check out this product!",
        text: "I found this amazing product and thought you might like it.",
        url: productLink,
      });
      toast.success("Product shared successfully!", {
        position: "top-right",
        duration: 3000,
        style: {
          background: "#4ade80",
          color: "white",
        },
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      await navigator.clipboard.writeText(productLink);
      toast.success("Link copied to clipboard!", {
        position: "top-right",
        duration: 3000,
        style: {
          background: "#4ade80",
          color: "white",
        },
      });
    }
  } catch (err) {
    console.error("Error sharing product:", err);
    toast.error("Failed to share product.", {
      position: "top-right",
      duration: 3000,
      style: {
        background: "#f87171",
        color: "white",
      },
    });
  }
};

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
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

  return (
    <div className="grid px-4 lg:px-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <Toaster />
      {products.map((item) => (
        <div
          key={item._id}
          className="relative group bg-gray-100 overflow-hidden"
        >
          <Image
            src={urlFor(item.productImage).width(1000).height(1000).url()}
            alt={`Image of ${item.title}`}
            width={1000}
            height={1000}
            className="object-cover"
            loading="lazy"
          />
          {item.dicountPercentage && (
            <span
              className="absolute top-4 right-4 bg-[#E97171] text-white text-xs font-bold py-2 px-4 rounded-full flex items-center justify-center"
              style={{
                width: "40px",
                height: "40px",
                textAlign: "center",
                lineHeight: "40px",
              }}
            >
              %{item.dicountPercentage}
            </span>
          )}
          {item.isNew && (
            <span
              className="absolute top-4 right-4 bg-[#2EC1AC] text-white text-xs font-bold py-2 px-4 rounded-full flex items-center justify-center"
              style={{
                width: "40px",
                height: "40px",
                textAlign: "center",
                lineHeight: "40px",
              }}
            >
              NEW
            </span>
          )}
          <div className="p-4">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.shortDescription}</p>
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
                aria-label={`Share ${item.title}`}
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
  );
};

export default ProductGrid;
