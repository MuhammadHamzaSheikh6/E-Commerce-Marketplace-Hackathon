import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiSearch } from "react-icons/ci";
import { RiAccountPinCircleFill } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa6";
import Cart from "./adToCart/cart";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="flex justify-between items-center mx-2 md:mx-10 py-4">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-1">
          <Link href="/" aria-label="Furniro Home">
            <Image
              src="/logo.png"
              alt="Furniro - Premium Furniture Logo"
              width={32}
              height={20}
              className="w-8 h-5"
              priority
            />
          </Link>
          <Link href="/" aria-label="Furniro Home">
            <h1 className="text-2xl font-bold">Furniro</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-12">
          {["Home", "Shop", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
              aria-label={item}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            className="text-gray-600 hover:text-gray-800"
            aria-label="Account"
          >
            <RiAccountPinCircleFill size={24} />
          </button>
          <button
            className="text-gray-600 hover:text-gray-800"
            aria-label="Search"
          >
            <CiSearch size={24} />
          </button>
          <button
            className="text-gray-600 hover:text-gray-800"
            aria-label="Wishlist"
          >
            <CiHeart size={24} />
          </button>
          <Cart />
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="lg:hidden text-2xl" aria-label="Open Menu">
            <FaBars className="text-[#B88E2F]" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <div className="flex items-center gap-1">
                  <Link href="/" aria-label="Furniro Home">
                    <Image
                      src="/logo.png"
                      alt="Furniro Logo"
                      width={32}
                      height={20}
                      className="w-8 h-5"
                    />
                  </Link>
                  <Link href="/" aria-label="Furniro Home">
                    <h1 className="text-2xl font-bold">Furniro</h1>
                  </Link>
                </div>
              </SheetTitle>
              <SheetDescription>
                <div className="grid gap-5 mt-1">
                  {["Home", "Shop", "Blog", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-gray-500 after:transition-all after:duration-300 hover:after:w-full"
                      aria-label={item}
                    >
                      {item}
                    </Link>
                  ))}
                </div>

                <div className="flex justify-center items-center gap-4 mt-5">
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    aria-label="Account"
                  >
                    <RiAccountPinCircleFill size={24} />
                  </button>
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    aria-label="Search"
                  >
                    <CiSearch size={24} />
                  </button>
                  <button
                    className="text-gray-600 hover:text-gray-800"
                    aria-label="Wishlist"
                  >
                    <CiHeart size={24} />
                  </button>
                  <Cart/>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
