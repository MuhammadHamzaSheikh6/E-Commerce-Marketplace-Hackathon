"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import {
  FaFacebook,
  FaInstagram,
  FaMinus,
  FaPlus,
  FaTwitter,
} from "react-icons/fa6";
import Tools from "./tools";
import { urlFor } from "@/sanity/lib/image"; // Add this import
import { MdOutlineStar } from "react-icons/md";

interface IProduct {
  name: string;
  price: string;
  description?: string;
  shortDescription?: string;
  tags?: string[];
  SKU?: string;
  category?: string;
  rating?: number; // Add rating
  customerReview?: number; // Add customerReview
  image?: string;
  image1?: string;
  image2?: string;
  image3?: string;
}

export default function Detail({ id }: { id: string }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleQuantityChange = (type: "increase" | "decrease") => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const [product, setProduct] = useState<IProduct | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const productUrl = typeof window !== "undefined" ? window.location.href : ""; // Current page URL

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && _id == $id][0]{
          name,
          price,
          description,
          shortDescription,
          tags,
          SKU,
          category,
          rating,
          customerReview,
          image,
          image1,
          image2,
          image3
        }`;
        const data: IProduct = await client.fetch(query, { id });
        setProduct(data);
        if (data.image) {
          setSelectedImage(urlFor(data.image).url()); // Use urlFor here
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleShare = (platform: "facebook" | "twitter" | "instagram") => {
    let url = "";
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(productUrl)}&text=Check out this product!`;
        break;
      case "instagram":
        url = `https://www.instagram.com/?url=${encodeURIComponent(productUrl)}`;
        break;
    }
    window.open(url, "_blank");
  };

  if (!product) return <p>Loading...</p>;

  const {
    name,
    price,
    description,
    shortDescription,
    tags,
    SKU,
    category,
    rating,
    customerReview,
    image,
    image1,
    image2,
    image3,
  } = product;

  const thumbnailImages = [image, image1, image2, image3]
    .filter((img) => img)
    .map((img) => urlFor(img!).url()); // Use urlFor for all images

  return (
    <>
      <div className="max-w-7xl mx-auto grid md:mx-8 grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Section */}
        <div className="lg:col-span-6 lg:flex  gap-3 md:gap-7 space-y-6">
          <div className="lg:space-y-10 space-x-5 flex justify-center lg:block mt-6">
            {thumbnailImages.map((src, index) => (
              <div
                key={index}
                className=" w-16 h-16 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  width="1000"
                  height="1000"
                  className="md:w-full md:h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Product Image"
                width="1000"
                height="1000"
                className="h-[240px]  lg:h-[500px] lg:w-[423px] object-cover"
              />
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-6 mx-3 md:mx-0 mt-8 space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
            {name}
          </h1>
          <p className="text-xl text-gray-400 font-semibold">Rs. {price}</p>
          <p className="text-gray-600 md:mr-48">{shortDescription}</p>

          {/* Rating and Customer Reviews */}
          <div className="flex items-center">
            <div className="flex">
              {Array.from({ length: rating || 0 }).map((_, i) => (
                <span key={i}>
                  <MdOutlineStar className="text-yellow-400 text-[25px]" />
                </span>
              ))}
              {Array.from({ length: 5 - (rating || 0) }).map((_, i) => (
                <span key={i}>
                  <MdOutlineStar className="text-yellow-100 text-[25px]" />
                </span>
              ))}
            </div>
            <span className="border-l-2 b h-6 mx-5"></span>
            <p className=" text-gray-500">{customerReview} Customer Reviews</p>
          </div>

          <div className="space-y-4">
            {/* Size Selector */}
            <div>
              <h3 className="font-medium text-gray-800">Size</h3>
              <div className="flex space-x-4 mt-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2  rounded-md ${
                      selectedSize === size
                        ? "border-[#B88E2F] bg-[#B88E2F] text-white"
                        : " bg-[#F9F1E7] text-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* Color Selector */}
            <div>
              <h3 className="font-medium text-gray-800">Color</h3>
              <div className="flex space-x-4 mt-2">
                {["#000000", "#845EC2", "#FFD700", "#D5D5D5"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "ring-2 ring-[#b9935a]"
                        : "border-gray-300"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          {/* Quantity Selector */}
          <div className="md:flex items-center space-y-5 md:space-y-0 space-x-4">
            <div className="w-[120px] flex items-center border rounded-md overflow-hidden">
              <button
                onClick={() => handleQuantityChange("decrease")}
                className="px-3 py-2  text-gray-600"
              >
                <FaMinus />
              </button>
              <span className="px-4 py-2 text-gray-800">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("increase")}
                className="px-3 py-2 text-gray-600"
              >
                <FaPlus />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className=" flex place-items-center   border-2 text-gray-700 px-10 py-3 rounded-md font-medium hover:border-black transition">
              Add to Cart
            </button>

            <button className=" flex place-items-center   border-2 text-gray-700 px-10 py-3 rounded-md font-medium hover:border-black transition">
              <FaPlus className="mx-2" />
              <a href="/camparison">Compare</a>
            </button>
          </div>

          <div className="md:mr-[350px]  md:grid md:grid-cols-2 gap-y-3 text-gray-400 text-sm items-center">
            <p className="font-medium">SKU:</p>
            <p>{SKU}</p>
            <p className="font-medium">Category:</p>
            <p>{category}</p>
            <p className="font-medium">Tags:</p>
            <p>{tags?.join(", ")}</p>
            <div className="flex gap-7">
              <p className="font-medium">Share:</p>
              <div className="flex ml-11 space-x-3">
                <FaFacebook
                  className="text-gray-950 hover:text-[#3b5998] cursor-pointer text-xl"
                  onClick={() => handleShare("facebook")}
                />
                <FaTwitter
                  className="text-gray-950 hover:text-[#1DA1F2] cursor-pointer text-xl"
                  onClick={() => handleShare("twitter")}
                />
                <FaInstagram
                  className="text-gray-950 hover:text-[#E4405F] cursor-pointer text-xl"
                  onClick={() => handleShare("instagram")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom part */}
      <div className="border-y-2 text-gray-500 mt-12 pb-12">
        <div className="text-center py-9 text-lg md:text-2xl font-medium space-x-4 md:space-x-10">
          <a className="text-gray-950 hover:text-gray-950" href="">
            Description
          </a>
          <a className="hover:text-gray-950" href="">
            Additional Information
          </a>
          <a className="hover:text-gray-950" href="">
            Reviews[5]
          </a>
        </div>
        <div className="mx-auto">
          <p className="md:mx-32 mx-3 text-justify pb-6">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>

          <div className="lg:flex md:mx-32  mx-3 lg:mx-auto space-y-8 lg:space-y-0 lg:space-x-8 lg:w-[1100px] lg:h-[348px] ">
            <Image
              src="/single/3.jpg"
              alt="Product Image"
              width="1000"
              height="1000"
              className="h-[348px] w-[605px] rounded-md "
            />
            <Image
              src="/single/2.jpg"
              alt="Product Image"
              width="1000"
              height="1000"
              className="h-[348px] w-[605px] rounded-md "
            />
          </div>
        </div>
      </div>
    </>
  );
}
