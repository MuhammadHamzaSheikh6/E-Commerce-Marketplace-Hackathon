'use client';

import Feature from '@/components/button/feature';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowRight, MdLocalPhone, MdLocationPin, MdOutlineAccessTimeFilled } from 'react-icons/md';

const ContactPage: React.FC = () => {
  return (
    <>
          <header className="">
      <div className="relative w-full h-[50vh] md:h-[55vh]  ">
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
            <h4 className="text-4xl font-bold">Contact</h4>
            <h5 className="flex items-center text-sm md:text-xl mb-4 space-x-1">
            <Link className="font-bold text-2xl" href="/">Home</Link>
            <MdKeyboardArrowRight className="mt-2 text-2xl"/>
            <a className='mt-1 md:mt-0' href="#">Contact</a>
            </h5>
        </div>
      </div>
      </header>
    <div className=" pt-16 pb-11 px-6 lg:px-36">
        <div className='items-center mb-24 justify-center text-center'>
            <h2 className="md:text-3xl text-2xl lg:text-4xl font-bold text-gray-800">
                Get In Touch With Us
            </h2>
            <p className="text-gray-600 md:px-52">
                For more information about our products & services, please feel free to drop us an email. Our staff is always here to help you out. Do not hesitate!
            </p>
        </div>
      <div className="max-w-7xl   mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <span className="text-2xl "><MdLocationPin /></span>
              <div>
                <h4 className="font-semibold pt-2 text-gray-800">Address</h4>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl "><MdLocalPhone /></span>
              <div>
                <h4 className="font-semibold pt-2 text-gray-800">Phone</h4>
                <p className="text-gray-600">
                  Mobile: (+84) 546-6789 <br />
                  Hotline: (+84) 546-6789
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl "><MdOutlineAccessTimeFilled /></span>
              <div>
                <h4 className="font-semibold pt-2 text-gray-800">Working Time</h4>
                <p className="text-gray-600">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className=" space-y-6">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              console.log('Form Submitted');
            }}
          >
            <div>
              <label
                className="block text-sm font-medium text-gray-950"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-3 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-3 focus:ring-[#b9935a] focus:border-[#b9935a]"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-950"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-3 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-3 focus:ring-[#b9935a] focus:border-[#b9935a]"
                placeholder="Your email address"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-950"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="mt-3 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-3 focus:ring-[#b9935a] focus:border-[#b9935a]"
                placeholder="This is optional"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-950"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-3 focus:ring-[#b9935a] focus:border-[#b9935a]"
                placeholder="Hi! I'd like to ask about..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-40 ml-2 bg-[#B88E2F] text-white py-2 rounded-md text-lg font-medium hover:bg-[#a2814d] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <Feature/>
    </>
  );
};

export default ContactPage;
