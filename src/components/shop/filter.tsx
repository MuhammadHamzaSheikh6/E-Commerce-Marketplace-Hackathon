import React, { useState } from "react";
import { BsViewList } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbArrowsRightLeft } from "react-icons/tb";
import { BiGridSmall } from "react-icons/bi";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import SearchBar from "../searchBar/searchBar";


interface FilterProps {
  setIsNew: (value: boolean | null) => void;
  discounted: boolean;
  setDiscounted: (value: boolean) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  show: number;
  setShow: (value: number) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  setIsNew,
  discounted,
  setDiscounted,
  priceRange,
  setPriceRange,
  show,
  setShow,
  sortBy,
  setSortBy,
  searchQuery,
  setSearchQuery,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around items-center bg-[#F9F1E7] py-5 gap-4">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center text-center gap-4">
          <ul className="flex items-center text-xl sm:text-2xl gap-4">
            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <TbArrowsRightLeft className="text-[#F9A13D]" />
              <span className="font-medium text-[#1F3A5E]">Filter</span>
            </li>
            <li className="flex items-center">
              <a href="#">
                <BiGridSmall className="text-[#F9A13D]" />
              </a>
            </li>
            <li className="flex items-center">
              <a href="#">
                <BsViewList className="text-[#F9A13D]" />
              </a>
            </li>
          </ul>

          <LiaGripLinesVerticalSolid className="hidden sm:block text-2xl mx-2 text-[#F9A13D]" />
          <p className="text-base sm:text-lg text-[#1F3A5E]">
            Showing 1–{show} results
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row text-lg gap-4 w-full lg:w-auto">
          {/* Use the SearchBar Component */}
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          <div className="flex items-center gap-2 sm:gap-4">
            <label htmlFor="shop" className="font-medium text-[#1F3A5E]">
              Show
            </label>
            <select
              id="shop"
              className="p-2 text-gray-600 border rounded-lg focus:ring-[#F9A13D] focus:ring-2"
              value={show}
              onChange={(e) => setShow(parseInt(e.target.value))}
            >
              <option value="8">8</option>
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
            </select>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <label htmlFor="shortby" className="font-medium text-[#1F3A5E]">
              Sort by
            </label>
            <select
              id="shortby"
              className="p-2 text-gray-600 border rounded-lg focus:ring-[#F9A13D] focus:ring-2"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filter Section with Animation */}
      <div
        className={`transition-all lg:w-[750px] mt-4 ml-6 duration-500 ease-in-out bg-[#F9F1E7] px-4 py-3 shadow-lg rounded-full ${
          isFilterOpen ? "opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          {/* Is New Filter */}
          <div className="flex gap-6 items-center">
            <div className="relative">
              <select
                onChange={(e) =>
                  setIsNew(
                    e.target.value === "all" ? null : e.target.value === "true"
                  )
                }
                className="appearance-none bg-[#F5E1A4] text-[#1F3A5E] border-2 border-[#F5E1A4] rounded-full px-6 py-2 w-36 transition duration-300 ease-in-out hover:border-[#F9A13D] focus:ring-2 focus:ring-[#F9A13D] cursor-pointer"
              >
                <option value="all">All</option>
                <option value="true">New Arrivals</option>
                <option value="false">Old Products</option>
              </select>
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[#F9A13D] font-medium text-4xl">
                <RiArrowDropDownLine />
              </span>
            </div>

            {/* Discount Filter */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={discounted}
                onChange={(e) => setDiscounted(e.target.checked)}
                className="h-5 w-5 text-[#F9A13D] border-[#F9A13D] focus:ring-0"
              />
              <span className="text-[#1F3A5E] font-semibold">Discounted</span>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="flex gap-4 items-center">
            <span className="text-[#1F3A5E] font-semibold">Price Range:</span>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([parseInt(e.target.value), priceRange[1]])
              }
              className="bg-[#F5E1A4] text-[#1F3A5E] border-2 border-[#F5E1A4] rounded-full px-4 py-2 w-24 transition duration-300 ease-in-out focus:ring-2 focus:ring-[#F9A13D] hover:border-[#F9A13D]"
              placeholder="Min"
            />
            <span className="text-[#1F3A5E]">-</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
              }
              className="bg-[#F5E1A4] text-[#1F3A5E] border-2 border-[#F5E1A4] rounded-full px-4 py-2 w-24 transition duration-300 ease-in-out focus:ring-2 focus:ring-[#F9A13D] hover:border-[#F9A13D]"
              placeholder="Max"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
