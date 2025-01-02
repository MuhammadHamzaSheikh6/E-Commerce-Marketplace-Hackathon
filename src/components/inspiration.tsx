"use client";
import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface IProduct {
  image: string;
  id: string;
  description: string;
  type: string;
  link: string;
}

interface ITrendyProductPage {
  mainHeading: string;
  subHeading: string;
  buttontext: string;
  buttonlink: string;
  products: IProduct[];
}

const fetchTrendyProducts = async () => {
  return await client.fetch(
    `*[_type == "trendyProductpage"][0]{mainHeading, subHeading, buttontext, buttonlink, products[]{id, image, description, type, link}}`
  );
};

const TrendyProductsSection = () => {
  const [data, setData] = useState<ITrendyProductPage | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const fetchedData = await fetchTrendyProducts();
      setData(fetchedData || null);
    };
    getProducts();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (data?.products.length || 1)); // Loop to start
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (data?.products.length || 1)) % (data?.products.length || 1)); // Loop to end
  };

  if (!data) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div
      className="relative bg-[#FCF8F3] h-[490px] md:h-[570px] w-full bg-cover bg-center flex flex-col md:flex-row items-center"
    >
      {/* Left Section */}
      <div className="md:pl-16 pl-4 py-5  w-full md:py-20 text-black space-y-4 md:space-y-6">
        <h1 className="md:text-4xl text-2xl font-bold text-gray-800 leading-tight">
          {data.mainHeading}
        </h1>
        <p className="md:text-lg lg:pr-40 text-gray-600">{data.subHeading}</p>
        <a href={data.buttonlink}>
          <button className="bg-[#B88E2F] text-white mt-5 px-2 py-2 md:px-8 md:py-3 text-lg font-medium hover:bg-[#c89b32] transition duration-300">
            {data.buttontext}
          </button>
        </a>
      </div>

      {/* Right Section: Product Image Slider */}
      <div className="relative flex items-center w-full md:w-2/3 justify-center mt-6 md:mt-0">
        {/* Image Slider */}
        <div className="relative w-full md:w-[500px] lg:w-[850px] overflow-hidden">
          {/* Slider Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 35}%)` }}
          >
            {data.products.map((product, index) => (
              <div
                key={index}
                className="relative w-44 h-52 md:w-[300px]  md:h-[460px] lg:w-[370px]  lg:h-[520px] mx-2 flex-shrink-0"
              >
                <img
                  src={urlFor(product.image).url()}
                  alt={`Product ${index}`}
                  className="w-full h-full object-cover"
                />
                {/* Description Box */}
                <div className="absolute md:py-4 py-1 px-1 md:px-5 font-light items-center justify-center bottom-4 left-4 bg-white bg-opacity-70 text-black text-sm md:w-36 md:h-20">
                  {product.id} - {product.description} <br />
                  <span className="font-bold text-sm md:text-lg">{product.type}</span>
                </div>
                <a href={product.link}>
                  <div className="absolute bottom-4 left-[102px] md:left-40 p-1 md:p-2 bg-[#B88E2F]">
                    <FaArrowRightLong />
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 hidden top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
          >
            ❮
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute text-xl right-5 top-1/2 transform -translate-y-1/2 bg-white text-[#B88E2F] md:py-2 md:px-4 px-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendyProductsSection;
