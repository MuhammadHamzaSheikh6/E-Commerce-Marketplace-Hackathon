import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdShare } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart,  } from "react-icons/fa";
import { BiGridSmall } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";
import { TbArrowsRightLeft } from "react-icons/tb";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import Pagination from "@/components/button/pagination";
import Link from "next/link";
import Feature from "@/components/button/feature";
import Products from "@/components/product";



const products = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      discount: "30%",
      tag: "",
      image: "/category/badroom.png", // Replace with your image path
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "",
      discount: "20%",
      tag: "",
      image: "/category/dining.png", // Replace with your image path
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discount: "50%",
      tag: "",
      image: "/category/living.png", // Replace with your image path
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      oldPrice: "",
      discount: "",
      tag: "New",
      image: "/category/badroom.png", // Replace with your image path
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      oldPrice: "",
      discount: "",
      tag: "New",
      image: "/category/dining.png", // Replace with your image path
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      oldPrice: "",
      discount: "",
      tag: "New",
      image: "/category/living.png", // Replace with your image path
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      oldPrice: "600.000",
      discount: "",
      tag: "New",
      image: "/category/badroom.png", // Replace with your image path
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      oldPrice: "",
      discount: "",
      tag: "New",
      image: "/category/dining.png", // Replace with your image path
    },
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      discount: "30%",
      tag: "",
      image: "/category/badroom.png", // Replace with your image path
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "",
      discount: "20%",
      tag: "",
      image: "/category/dining.png", // Replace with your image path
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discount: "50%",
      tag: "",
      image: "/category/living.png", // Replace with your image path
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      oldPrice: "",
      discount: "",
      tag: "New",
      image: "/category/badroom.png", // Replace with your image path
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      oldPrice: "",
      discount: "",
      tag: "New",
      image: "/category/dining.png", // Replace with your image path
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      oldPrice: "",
      discount: "",
      tag: "New",
      image: "/category/living.png", // Replace with your image path
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      oldPrice: "600.000",
      discount: "",
      tag: "New",
      image: "/category/badroom.png", // Replace with your image path
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      oldPrice: "",
      discount: "",
      tag: "New",
      image: "/category/dining.png", // Replace with your image path
    },
  ];

const ShopPage = () => {
  return (
    <>
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh]  ">
        <Image
          src="/shop/banner.jpg" // Replace with your map image path
          alt="Shop Map"
          layout="fill"
          objectFit="cover"
          className=" opacity-70 brightness-75 "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-950">
                <Link href="/">
                    <Image
                    src="/logo.png" // Replace with the path to your logo image
                    alt="Furniro Logo"
                    width='32'
                    height='20'
                    className="w-12 h-8" // Adjust size as needed
                    />
                </Link>
            <h4 className="text-4xl font-bold">Shop</h4>
            <h5 className="flex items-center text-sm md:text-xl mb-4 space-x-1">
            <Link className="font-bold text-xl" href="/">Home</Link>
            <MdKeyboardArrowRight className="mt-2 text-2xl"/>
            <a className="mt-2 md:mt-0" href="#">Shop</a>
            </h5>
        </div>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row justify-around items-center bg-[#F9F1E7] py-7 gap-4">
    {/* Left Section */}
    <div className="flex flex-col sm:flex-row items-center text-center gap-4">
      <ul className="flex text-xl sm:text-2xl gap-4">
        <li className="flex items-center gap-2">
          <a className="flex items-center gap-2" href="#">
            <TbArrowsRightLeft />
            <span className="">Filter</span>
          </a>
        </li>
        <li>
          <a href="#">
            <BiGridSmall className="" />
          </a>
        </li>
        <li>
          <a href="#">
            <BsViewList />
          </a>
        </li>
      </ul>
      <LiaGripLinesVerticalSolid className="hidden sm:block text-2xl mx-2" />
      <p className="text-base sm:text-lg">Showing 1–16 of 32 results</p>
    </div>

    {/* Right Section */}
    <div className="flex  flex-col sm:flex-row text-lg gap-4 w-full lg:w-auto">
      <div className="flex items-center gap-2 sm:gap-4">
        <label htmlFor="shop" className="font-medium">
          Show
        </label>
        <select
          id="language"
          className="p-1 text-gray-400 border rounded"
        >
          <option value="number">16</option>
          <option value="32">32</option>
          <option value="64">64</option>
        </select>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <label htmlFor="shortby" className="font-medium">
          Short by
        </label>
        <select
          id="shortby"
          className="p-1 text-gray-400 border rounded"
        >
          <option value="default">Default</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  </div>



    <div className="pt-12 px-5 ">

      {/* Product Grid */}
      <Products/>

      {/* Show More Button */}
        <Pagination/>
    </div>
        <Feature/>
    </>
  );
};

export default ShopPage;
