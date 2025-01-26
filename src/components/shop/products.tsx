import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { IProduct } from "@/types";

interface ProductGridProps {
  products: IProduct[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((item) => (
        <div key={item._id} className="relative group bg-gray-100 overflow-hidden">
          <Image
              src={urlFor(item.productImage).width(1000).height(1000).url()}
            alt={`Image of ${item.title}`}
            width={1000}
            height={1000}
            className="w-[290px] h-[301px] object-cover"
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
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Link href={`/product/${item._id}`}>
              <button className="bg-white text-[#B88E2F] px-8 py-2 mb-2 font-medium shadow">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
