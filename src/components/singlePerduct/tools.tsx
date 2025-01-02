'use client';
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";


export default function Tools() {
    const [quantity, setQuantity] = useState(1);
      const [selectedColor, setSelectedColor] = useState<string | null>(null);
      const [selectedSize, setSelectedSize] = useState<string | null>(null);
    
      const handleQuantityChange = (type: 'increase' | 'decrease') => {
        if (type === 'increase') {
          setQuantity(quantity + 1);
        } else if (type === 'decrease' && quantity > 1) {
          setQuantity(quantity - 1);
        }
      };

  return (
    <>
              <div className="space-y-4">
                {/* Size Selector */}
                <div>
                  <h3 className="font-medium text-gray-800">Size</h3>
                  <div className="flex space-x-4 mt-2">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2  rounded-md ${
                          selectedSize === size
                            ? 'border-[#B88E2F] bg-[#B88E2F] text-white'
                            : ' bg-[#F9F1E7] text-gray-700'
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
                    {['#000000', '#845EC2', '#FFD700', '#D5D5D5'].map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        style={{ backgroundColor: color }}
                        className={`w-8 h-8 rounded-full border ${
                          selectedColor === color
                            ? 'ring-2 ring-[#b9935a]'
                            : 'border-gray-300'
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
                    onClick={() => handleQuantityChange('decrease')}
                    className="px-3 py-2  text-gray-600"
                  >
                    <FaMinus />
                  </button>
                  <span className="px-4 py-2 text-gray-800">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange('increase')}
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
                <FaPlus className='mx-2'/><a href="/camparison">Compare</a> 
                </button>
              </div>
    </>
  );
}