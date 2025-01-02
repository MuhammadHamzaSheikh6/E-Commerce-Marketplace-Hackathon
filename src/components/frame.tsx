'use client';
import Image from "next/image";
import { useState, useEffect } from "react";

const ImageGrid = () => {
  const images = [
    "/fram/1.png",
    "/fram/2.png",
    "/fram/3.png",
    "/fram/4.png",
    "/fram/5.png",
    "/fram/6.png",
    "/fram/7.png",
    "/fram/8.png",
    "/fram/9.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="w-full mt-10 mb-14">
      <h2 className="text-center text-sm text-gray-600 mb-6">
        Share your setup with
        <br />
        <span className="text-gray-950 font-bold text-3xl">#FuniroFurniture</span>
      </h2>

      {/* For larger screens (Grid Layout) */}
      <div className="hidden lg:flex justify-center space-x-6 items-center">
        <div className="space-y-6">
          <div className="flex items-end space-x-6">
            <Image src={images[0]} alt="" width={992} height={1000} className="lg:w-[32.22px] lg:h-[382px]" />
            <Image src={images[1]} alt="" width={992} height={1000} className="lg:w-[405.22px] lg:h-[312px]" />
          </div>
          <div className="flex space-x-6">
            <Image src={images[2]} alt="" width={992} height={1000} className="lg:w-[139.22px] lg:h-[323px]" />
            <Image src={images[3]} alt="" width={992} height={1000} className="lg:w-[298.22px] lg:h-[242px]" />
          </div>
        </div>
        <div>
          <Image src={images[4]} alt="" width={992} height={1000} className="lg:w-[249.22px] lg:h-[392px]" />
        </div>
        <div className="space-y-6">
          <div className="flex items-end space-x-6">
            <Image src={images[5]} alt="" width={992} height={1000} className="lg:w-[244.22px] lg:h-[348px]" />
            <Image src={images[6]} alt="" width={992} height={1000} className="lg:w-[216.22px] lg:h-[433px]" />
          </div>
          <div className="flex space-x-6">
            <Image src={images[7]} alt="" width={992} height={1000} className="lg:w-[132.22px] lg:h-[242px]" />
            <Image src={images[8]} alt="" width={992} height={1000} className="lg:w-[212.22px] lg:h-[196px]" />
          </div>
        </div>
      </div>

      {/* For mobile and tablet screens (Carousel Layout) */}
      <div className="lg:hidden flex flex-col items-center justify-center">
        <div className="relative w-[260px] md:w-[600px] h-[300px]">
          <Image
            src={images[currentIndex]}
            alt=""
            width={992}
            height={1000}
            objectFit="cover"
            className="h-[300px]  w-[760px] rounded-lg"
          />
        </div>
        <div className="flex mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
