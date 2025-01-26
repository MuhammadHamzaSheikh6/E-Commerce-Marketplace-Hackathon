"use client";

import React, { useEffect, useState } from "react";
import { IoMdShare } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {data.map((item) => (
          <div
            key={item._id}
            className="relative bg-gray-100 rounded overflow-hidden group"
          >
            <Image
              src={urlFor(item.productImage).width(1000).height(1000).url()}
              alt={`Image of ${item.title}`}
              width={400} // Specify the dimensions
              height={400} // Specify the dimensions
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
                <button className="flex items-center gap-1 text-white">
                  <IoMdShare />
                  <span>Share</span>
                </button>
                <button className="flex items-center gap-1 text-white">
                  <MdCompareArrows />
                  <span>Compare</span>
                </button>
                <button className="flex items-center gap-1 text-white">
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
