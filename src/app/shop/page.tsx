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



    <div className="pt-12 px-5 md:px-28">

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative group bg-gray-100  overflow-hidden"
          >
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width='1000'
              height='1000'
              className="w-full h-60 object-cover"
            />

            {/* Discount Tag */}
            {product.discount && (
              <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold py-3 px-2 rounded-full ">
                {product.discount}
              </span>
            )}

            {/* New Tag */}
            {product.tag && (
              <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold py-3 px-2 rounded-full">
                {product.tag}
              </span>
            )}

            {/* Product Details */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-red-500 font-bold">{product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">
                    {product.oldPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-[#B88E2F] px-8 py-2  mb-2 font-medium shadow">
                <Link href='/singleproduct'>
                Add to Cart
                </Link>
              </button>
              <div className="flex space-x-2">
                <button className="flex items-center gap-1  text-white">
                    <IoMdShare />
                    <span>Share</span>
                </button>
                <button className="flex items-center gap-1 text-white">
                    <MdCompareArrows />
                    <span>Compare</span>
                </button>
                <button className="flex items-center gap-1 text-white">
                    <FaRegHeart className=""/>
                    <span>Like</span>
                </button>
                </div>

            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
        <Pagination/>
    </div>
        <Feature/>
    </>
  );
};

export default ShopPage;
