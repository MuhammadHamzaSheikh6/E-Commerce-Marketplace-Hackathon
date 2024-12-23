import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiSearch  } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountPinCircleFill } from "react-icons/ri";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { FaBars } from "react-icons/fa6";
  

export default function Header(){
    return(
        <>
        <header className="sticky shadow top-0 z-50 ">
            <div className="flex justify-between mx-2 md:mx-10 py-4  text-center items-center">
                <div className="flex justify-center items-center gap-1 text-center">
                {/* Logo */}
                <Link href="/">
                    <Image
                    src="/logo.png" // Replace with the path to your logo image
                    alt="Furniro Logo"
                    width='32'
                    height='20'
                    className="w-8 h-5" // Adjust size as needed
                    />
                </Link>
                
                {/* Text */}
                <Link href="/">
                    <h1 className="text-2xl font-bold">Furniro</h1>
                </Link>
                </div>

                <div className="hidden gap-12 lg:flex mt-1">
                        <Link
                            href="/"
                            className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Home
                        </Link>
                        <Link
                            href="/shop"
                            className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Shop
                        </Link>
                        <Link
                            href="/blog"
                            className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Contact
                        </Link>
                </div>
                
                <div className="hidden lg:flex items-center gap-4">
                     <button className="text-gray-600 hover:text-gray-800">
                        {/* React Icon for Shopping Cart */}
                        <RiAccountPinCircleFill size={24} />
                    </button>

                    {/* Search Bar */}
                    <button className="text-gray-600  hover:text-gray-800">
                            {/* React Icon for Search */}
                            <CiSearch  size={24} />
                    </button>
                    

                    {/* Wishlist Icon */}
                    <button className="text-gray-600 hover:text-gray-800">
                        {/* React Icon for Heart */}
                        <CiHeart size={24} />
                    </button>

                    {/* Cart Icon */}
                    <button className="text-gray-600 hover:text-gray-800">
                        {/* React Icon for Shopping Cart */}
                        <IoCartOutline size={24} />
                    </button>
                </div>

                <Sheet >
                <SheetTrigger className="lg:hidden text-2xl"> <FaBars className="text-[#B88E2F]"/> </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>
                    <div className="flex justify-center items-center gap-1 text-center">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                        src="/logo.png" // Replace with the path to your logo image
                        alt="Furniro Logo"
                        width='32'
                        height='20'
                        className="w-8 h-5" // Adjust size as needed
                        />
                    </Link>
                    
                    {/* Text */}
                    <Link href="/">
                        <h1 className="text-2xl font-bold">Furniro</h1>
                    </Link>
                    </div>
                    </SheetTitle>
                    <SheetDescription>
                    <div className="grid space-y-5 mt-1 ">
                            <Link
                                href="/"
                                className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Home
                            </Link>
                            <Link
                                href="/shop"
                                className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Shop
                            </Link>
                            <Link
                                href="/blog"
                                className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Blog
                            </Link>
                            <Link
                                href="/contact"
                                className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-[0px] after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Contact
                            </Link>
                    </div>

                    <div className="flex mt-5 justify-center items-center gap-4">
                     <button className="text-gray-600 hover:text-gray-800">
                        {/* React Icon for Shopping Cart */}
                        <RiAccountPinCircleFill size={24} />
                    </button>
                    {/* Search Bar */}
                    <button className="text-gray-600  hover:text-gray-800">
                            {/* React Icon for Search */}
                            <CiSearch  size={24} />
                    </button>
                    {/* Wishlist Icon */}
                    <button className="text-gray-600 hover:text-gray-800">
                        {/* React Icon for Heart */}
                        <CiHeart size={24} />
                    </button>
                    {/* Cart Icon */}
                    <button className="text-gray-600 hover:text-gray-800">
                        {/* React Icon for Shopping Cart */}
                        <IoCartOutline size={24} />
                    </button>
                </div>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>


            </div>
        </header>





        </>
    )
}