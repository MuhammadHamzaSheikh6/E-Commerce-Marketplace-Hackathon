'use client'
import Feature from "@/components/button/feature";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Sri Lanka",
    streetAddress: "",
    city: "",
    province: "Western Province",
    zipCode: "",
    phone: "",
    emailAddress:"",
    additionalInformation:"",
    paymentMethod: "bank",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Order placed successfully!");
    console.log("Form Data:", formData);
  };

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
            <h4 className="text-4xl font-bold">Checkout</h4>
            <h5 className="flex items-center text-sm md:text-xl mb-4 space-x-1">
            <Link className="font-bold text-2xl" href="/">Home</Link>
            <MdKeyboardArrowRight className="mt-2 text-2xl"/>
            <Link className="mt-2 md:mt-0" href="#">Checkout</Link>
            </h5>
        </div>
      </div>
    </div>
    <div className="mb-11  min-h-screen">
      <div className=" max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2  gap-8">
        {/* Billing Details */}
        <form
          onSubmit={handleSubmit}
          className=" md:pl-32 px-6 md:px-0 space-y-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Billing details
          </h2>
          <div className="grid grid-cols-1 md:flex gap-7 ">
            {/* First Name */}
            <div>
              <label className="block text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="md:w-[211px] w-full h-[50px] border p-2 rounded"
                required
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="md:w-[211px] w-full h-[50px] border p-2 rounded"
                required
              />
            </div>
          </div>
          {/* Company Name */}
          <div>
            <label className="block text-gray-600 mb-1">
              Company Name (Optional)
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="md:w-[453px] w-full h-[50px] border p-2 rounded"
            />
          </div>
          {/* Country */}
          <div>
            <label className="block text-gray-600 mb-1">Country / Region</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="md:w-[453px] w-full h-[50px] border p-2 rounded"
            >
              <option>Sri Lanka</option>
              <option>Pakistan</option>
              <option>India</option>
              <option>UAE</option>
            </select>
          </div>
          {/* Address */}
          <div>
            <label className="block text-gray-600 mb-1">Street Address</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              className="md:w-[453px] w-full h-[50px] border p-2 rounded"
              required
            />
          </div>
          {/* Town/City */}
          <div>
            <label className="block text-gray-600 mb-1">Town / City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="md:w-[453px] w-full h-[50px] border p-2 rounded"
              required
            />
          </div>
          {/* Province */}
          <div>
            <label className="block text-gray-600 mb-1">Province</label>
            <select
              name="province"
              value={formData.province}
              onChange={handleInputChange}
              className="md:w-[453px] w-full h-[50px] border p-2 rounded"
            >
              <option>Western Province</option>
              <option>Central Province</option>
              <option>Eastern Province</option>
            </select>
          </div>
          {/* ZIP Code */}
          <div>
            <label className="block text-gray-600 mb-1">ZIP Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="md:w-[453px] w-full h-[50px] border p-2 rounded"
              required
            />
          </div>
          {/* Phone */}
          <div>
            <label className="block text-gray-600 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="md:w-[453px] w-full h-[50px] border p-2 rounded"
              required
            />
          </div>
          {/* Email Address */}
          <div>
            <label className="block text-gray-600 mb-1">Email address</label>
            <input
              type="email"
              name="Email address"
              value={formData.emailAddress}
              onChange={handleInputChange}
              className="md:w-[453px] w-full h-[50px] border p-2 rounded"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="Additional Information"
              value={formData.additionalInformation}
              onChange={handleInputChange}
              className="md:w-[453px] w-full h-[50px] border p-2 rounded"
              required
            />
          </div>          
        </form>

        {/* Order Summary */}
        <div className=" p-6 md:pr-20 ">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product</h2>
          {/* Product Summary */}
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Asgaard Sofa x 1</span>
            <span className="font-medium">Rs. 250,000.00</span>
          </div>
          {/* Subtotal */}
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="font-medium">Rs. 250,000.00</span>
          </div>
          {/* Total */}
          <div className="flex justify-between text-lg font-medium  mb-4">
            <span>Total</span>
            <span className="text-yellow-700">Rs. 250,000.00</span>
          </div>
          {/* Payment Methods */}
          <div className="space-y-2 text-gray-600 border-t pt-4">
            <div>
              <input
                type="radio"
                id="bank"
                name="paymentMethod"
                value="bank"
                checked={formData.paymentMethod === "bank"}
                onChange={handleInputChange}
              />
              <label htmlFor="bank" className="text-gray-950 ml-2">
                Direct Bank Transfer
              </label>
              <p className="text-gray-500 text-sm ml-6">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>
            </div>
            <div>
              <input
                type="radio"
                id="cash"
                name="paymentMethod"
                value="cash"
                onChange={handleInputChange}
              />
              <label htmlFor="cash" className="ml-2">Direct Bank Transfer</label>
            </div>
            <div>
              <input
                type="radio"
                id="cash"
                name="paymentMethod"
                value="cash"
                onChange={handleInputChange}
              />
              <label htmlFor="cash" className="ml-2">Cash On Delivery</label>
            </div>
          </div>
          <p className="mt-3">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b> .</p>
          {/* Submit Button */}
          <button
            type="submit"
            form="checkoutForm"
            className="w-52 mt-4  border md:mx-36 border-gray-900 md:px-12 py-2 rounded-xl  hover:bg-gray-300 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
    <Feature/>
    </>
  );
}


