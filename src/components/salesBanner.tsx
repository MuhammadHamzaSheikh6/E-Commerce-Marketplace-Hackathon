import React from "react";

const SalesBanner = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-center p-2 flex items-center overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex space-x-10">
        <h1 className="text-xl font-bold flex items-center">
          <span className="animate-blink">🎉</span>
          <span className="mx-2">Mega Sale Alert!</span>
          <span className="animate-blink">🎉</span>
        </h1>
        <p className="text-lg flex items-center ">
          Get up to <span className="font-bold mx-1">50% OFF</span> on all products. Limited time only!
        </p>
      </div>
    </div>
  );
};

export default SalesBanner;
