"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

import Filter from "@/components/shop/filter";
import ProductGrid from "@/components/shop/products";
import { IProduct } from "@/types";
import Pagination from "@/components/shop/pagination";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ShopProducts() {
  const [data, setData] = useState<IProduct[]>([]);
  const [filteredData, setFilteredData] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Filters
  const [isNew, setIsNew] = useState<boolean | null>(null);
  const [discounted, setDiscounted] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<number[]>([0, 10000]);
  const [show, setShow] = useState<number>(16);
  const [sortBy, setSortBy] = useState<string>("default");
  const [searchQuery, setSearchQuery] = useState<string>("");  // Add searchQuery state

  

  // Pagination States
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: IProduct[] = await client.fetch(
          '*[_type == "product"]{_id, title, shortDescription, dicountPercentage, price, oldPrice, isNew, productImage}'
        );
        setData(products);
        setFilteredData(products); // Initialize filtered data
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter Logic
  useEffect(() => {
    let filtered = [...data];

    if (isNew !== null) {
      filtered = filtered.filter((item) => item.isNew === isNew);
    }

    if (discounted) {
      filtered = filtered.filter((item) => item.dicountPercentage);
    }

    if (priceRange) {
      filtered = filtered.filter(
        (item) =>
          parseInt(item.price) >= priceRange[0] &&
          parseInt(item.price) <= priceRange[1]
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) // Apply search filter
      );
    }

    if (sortBy === "price-asc") {
      filtered = filtered.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else if (sortBy === "price-desc") {
      filtered = filtered.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    }

    setFilteredData(filtered);
  }, [isNew, discounted, priceRange, sortBy,searchQuery, data]);

  // Pagination Logic
  const indexOfLastProduct = currentPage * show;
  const indexOfFirstProduct = indexOfLastProduct - show;
  const currentProducts = filteredData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredData.length / show);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen ">
    <div className="relative w-16 h-16 border-8 border-t-transparent border-yellow-500 rounded-full animate-spin">
      <div className="absolute inset-0 border-yellow-700 border-8 border-t-8 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
    </div>
  </div>
  }

  return (
    <div>
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[50vh] ">
          <Image
            src="/shop/banner11.png"
            alt="Shop Map"
            layout="fill"
            objectFit="cover"
            className=""
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-950">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Furniro Logo"
                width="32"
                height="20"
                className="w-12 h-8"
              />
            </Link>
            <h4 className="text-4xl font-bold">Shop</h4>
            <h5 className="flex items-center text-sm md:text-xl mb-4 space-x-1">
              <Link className="font-bold text-xl" href="/">
                Home
              </Link>
              <MdKeyboardArrowRight className="mt-2 text-2xl" />
              <a className="mt-2 md:mt-0" href="#">
                Shop
              </a>
            </h5>
          </div>
        </div>
      </div>

      <Filter
        setIsNew={setIsNew}
        discounted={discounted}
        setDiscounted={setDiscounted}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        show={show}
        setShow={setShow}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchQuery={searchQuery} // Pass searchQuery
        setSearchQuery={setSearchQuery} // Pass setSearchQuery
      />
      <div className="py-12 md:px-5 lg:mx-16">
        <ProductGrid products={currentProducts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
