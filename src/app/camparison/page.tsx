import Feature from "@/components/button/feature";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Comparison(){
    return(
      <>
      {/* banner */}
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
            <h4 className="text-4xl font-bold">Product Comparison</h4>
            <h5 className="flex items-center text-sm md:text-xl mb-4 space-x-1">
            <Link className="font-bold text-2xl" href="/">Home</Link>
            <MdKeyboardArrowRight className="mt-2 text-2xl"/>
            <Link className="mt-2 md:mt-0"  href="#">Comparison</Link>
            </h5>
        </div>
      </div>
    </div>






        <div className="container mx-auto  md:space-y-6">

        <div className=" md:flex justify-between mt-8 items-start space-x-4">
          {/* Left Section */}
          <div className="md:w-1/3 md:pt-6 md:pl-16 space-y-3">
            <h2 className="text-gray-800 text-3xl font-medium">Go to Product page for more Products</h2>
            <a
              href="#"
              className="text-gray-500 pt-6 text-sm underline hover:text-black transition"
            >
              View More
            </a>
          </div>

          {/* Product Cards */}
          <div className="md:grid md:grid-cols-2 md:gap-4 md:w-2/3">
            {/* Product 1 */}
            <div className="space-y-2 text-center">
              <Image
                src="/com/cam1.png"
                alt="Asgaard Sofa"
                width='1000'
                height='1000'
                className="w-[280px] h-[177px] bg-[#F9F1E7] rounded-md"
              />
              <h3 className="font-semibold text-gray-800">Asgaard Sofa</h3>
              <p className="text-gray-600">Rs. 250,000.00</p>
              <div className="flex items-center justify-center space-x-1 text-sm text-yellow-500">
                <span>4.7</span>
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-500">204 Reviews</span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="space-y-2 text-center">
              <Image
                src="/com/cam2.png"
                alt="Outdoor Sofa Set"
                width='1000'
                height='1000'
                className="w-[280px] h-[177px] bg-[#F9F1E7] rounded-md"
              />
              <h3 className="font-semibold text-gray-800">Outdoor Sofa Set</h3>
              <p className="text-gray-600">Rs. 224,000.00</p>
              <div className="flex items-center justify-center space-x-1 text-sm text-yellow-500">
                <span>4.2</span>
                <span>⭐⭐⭐⭐⭐</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-500">145 Reviews</span>
              </div>
            </div>
          </div>

          {/* Add Product Section */}
          <div className="md:w-1/3 flex flex-col md:pr-16 pt-6 md:items-end">
            <h2 className="text-gray-800 font-medium mb-2">Add A Product</h2>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition">
              Choose a Product ▼
            </button>
          </div>
        </div>



        <div className="flex flex-col md:flex-row justify-start pt-14 border-t border-gray-300">
  {/* General Heading */}
  <div className="w-1/4 p-4  border-r">
    <h2 className="font-bold -mt-9 px-6 text-lg mb-6">General</h2>
    <ul className="space-y-6 px-6 text-gray-950">
      <li>Sales Package</li>
      <li>Model Number</li>
      <li>Secondary Material</li>
      <li>Configuration</li>
      <li>Upholstery Material</li>
      <li>Upholstery Color</li>
    </ul>

    <h2 className="font-bold mt-16 px-6 text-lg mb-6">Product</h2>
    <ul className="space-y-6 px-6 text-gray-950">
      <li>Filling Material</li>
      <li>Finish Type</li>
      <li>Adjustable Headrest</li>
      <li>Maximum Load Capacity</li>
      <li>Origin of Manufacture</li>
    </ul>

    <h2 className="font-bold mt-16 px-6 text-lg mb-6">Dimensions</h2>
    <ul className="space-y-6 px-6 text-gray-950">
      <li>Width</li>
      <li>Height</li>
      <li>Depth</li>
      <li>Weight</li>
      <li>Seat Height</li>
      <li>Leg Height</li>
    </ul>


    <h2 className="font-bold mt-16 px-6 text-lg mb-6">Warranty</h2>
    <ul className="space-y-6 px-6 text-gray-950">
      <li>Warranty Summary</li>
      <li>Warranty Service 
      Type</li>
      <li className="pt-[68px]">Covered in Warranty</li>
      <li className="pt-[23px]">Not Covered in Warranty</li>
      <li className="pt-[97px]">Domestic Warranty</li>
    </ul>    
  </div>

  {/* Product 1 Data */}
  <div className="w-1/4 p-4 mt-4 border-r">  
    <ul className="space-y-6 px-6 text-gray-950">
      <li>1 sectional sofa</li>
      <li>TFCBUIGRBL6SRHS</li>
      <li>Solid Wood</li>
      <li>L-shaped</li>
      <li>Fabric + Cotton</li>
      <li>Bright Grey & Lion</li>
    </ul>


    <ul className="space-y-6 mt-[118px] px-6 text-gray-950">
      <li>Foam</li>
      <li>Bright Grey & Lion</li>
      <li>No</li>
      <li>280 KG</li>
      <li>India</li>
    </ul>


    <ul className="space-y-6 mt-28 px-6 text-gray-950">
      <li>265.32 cm</li>
      <li>76 cm</li>
      <li>167.76 cm</li>
      <li>45 KG</li>
      <li>41.52 cm</li>
      <li>5.46 cm</li>
    </ul>


    <ul className="space-y-6 mt-28 px-6 text-gray-950">
      <li>1 Year Manufacturing Warranty</li>
      <li>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</li>
      <li>Warranty Against Manufacturing Defect</li>
      <li>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
      <li>1 Year</li>
    </ul>

    <button className="my-6 mx-6 px-7 py-3 bg-[#B88E2F] text-white ">
        Add To Card 
    </button>
  </div>

  {/* Product 2 Data */}
  <div className="w-1/4  p-4 mt-3 border-r">
    <ul className="space-y-6  px-6 text-gray-950">
      <li>1 Three Seater, 2 Single Seater</li>
      <li>DTUBIGRBL568</li>
      <li>Solid Wood</li>
      <li>L-shaped</li>
      <li>Fabric + Cotton</li>
      <li>Bright Grey & Lion</li>
    </ul>

    <ul className="space-y-6 mt-[120px]  px-6 text-gray-950">
      <li>Matte</li>
      <li>Bright Grey & Lion</li>
      <li>yes</li>
      <li>300 KG</li>
      <li>India</li>
    </ul>


    <ul className="space-y-6 mt-28  px-6 text-gray-950">
      <li>265.32 cm</li>
      <li>76 cm</li>
      <li>167.76 cm</li>
      <li>45 KG</li>
      <li>41.52 cm</li>
      <li>5.46 cm</li>
    </ul>  


    <ul className="space-y-6 mt-28 px-6 text-gray-950">
      <li>1.2 Year Manufacturing Warranty</li>
      <li>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</li>
      <li className="pt-6">Warranty of the product is limited to manufacturing defects only.</li>
      <li>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
      <li>3 Months</li>
    </ul> 

    <button className="my-6 mx-6 px-7 py-3 bg-[#B88E2F] text-white ">
        Add To Card 
    </button> 
  </div>
</div>


</div>


 <Feature/>
</>

    )
}