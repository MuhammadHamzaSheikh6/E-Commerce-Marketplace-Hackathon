import React from "react";

const SalesBanner = () => {
  return (
    <div className="bg-red-500 text-white text-center p-4 h-12 flex items-center overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex space-x-10">
        <h1 className="text-xl font-bold">🎉 Mega Sale Alert! 🎉</h1>
        <p className="text-lg">Get up to 50% OFF on all products. Limited time only!</p>
      </div>
    </div>
  );
};

export default SalesBanner;
