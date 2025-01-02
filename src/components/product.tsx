import React from "react";
import { IoMdShare } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const getProductData = async () => {
  try {
    return await client.fetch(
      '*[_type == "product"]{_id, name, description, discount, price, oldPrice, tag, image}'
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  tag?: string;
  image: string;
}

export default async function Products() {
  const data: IProduct[] = await getProductData();

  if (!data.length) {
    return <div className="text-center">Loading products...</div>;
  }

  return (
    <div className="py-12 px-5  md:mx-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {data.map((item) => (
          <div
            key={item._id}
            className="relative w-[285px] md:w-auto  group bg-gray-100 overflow-hidden"
          >
            <img
              src={urlFor(item.image).url()}
              alt={`Image of ${item.name}`}
              width={1000}
              height={1000}
              className="w-[285px] h-[281px] object-cover"
            />
            {item.discount && (
              <span
                className="absolute top-4 right-4 bg-[#E97171] text-white text-xs font-bold py-2 px-4 rounded-full flex items-center justify-center"
                style={{
                  width: "40px", // Circle ki width
                  height: "40px", // Circle ki height
                  textAlign: "center", // Text ko center mein align karne ke liye
                  lineHeight: "40px", // Text ko vertical center karne ke liye
                }}
              >
                {item.discount}
              </span>
            )}
            {item.tag && (
              <span
                className="absolute top-4 right-4 bg-[#2EC1AC] text-white text-xs font-bold py-2 px-4 rounded-full flex items-center justify-center"
                style={{
                  width: "40px", // Circle ki width
                  height: "40px", // Circle ki height
                  textAlign: "center", // Text ko center mein align karne ke liye
                  lineHeight: "40px", // Text ko vertical center karne ke liye
                }}
              >
                {item.tag}
              </span>
            )}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="font-bold">{item.price}</span>
                {item.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    {item.oldPrice}
                  </span>
                )}
              </div>
            </div>
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Link href={`/product/${item._id}`}>
                <button className="bg-white text-[#B88E2F] px-8 py-2 mb-2 font-medium shadow">
                  View Details
                </button>
              </Link>

              <div className="flex space-x-2">
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
        <button className="px-14 py-2 text-[#B88E2F] hover:bg-[#b88f2f90] font-medium rounded border-[#B88E2F] border-2 transition">
          Show More
        </button>
      </div>
    </div>
  );
}
