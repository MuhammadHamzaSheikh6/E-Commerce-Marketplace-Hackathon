import WishlistPage from "@/components/wishlist/wishlist";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Wishlist() {
  return(
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] ">
          <Image
            src="/shop/banner11.png"
            alt="Shop Map"
            layout="fill"
            objectFit="cover"
            className=""
            loading="lazy"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-950">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Furniro Logo"
                width="32"
                height="20"
                className="w-12 h-8"
                loading="lazy"
              />
            </Link>
            <h4 className="text-4xl font-bold">WishList</h4>
            <h5 className="flex items-center text-sm md:text-xl mb-4 space-x-1">
              <Link className="font-bold text-xl" href="/">
                Home
              </Link>
              <MdKeyboardArrowRight className="mt-2 text-2xl" />
              <a className="mt-2 md:mt-0" href="#">
                Wishlist
              </a>
            </h5>
          </div>
        </div>
      {/* Wishlist Page */}
      <WishlistPage/>

    </div>
  );
}