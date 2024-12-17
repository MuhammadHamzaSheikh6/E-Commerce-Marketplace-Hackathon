import Link from "next/link";

export default function Footer() {
    return (
      <footer className=" text-gray-400 border-t-2 pt-16 ">
        <div className="container ">
          <div className="md:flex  justify-between mx-10 md:mx-24">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h2 className="text-xl text-gray-950 font-bold">Funiro</h2>
              <address className="not-italic mt-3 md:mt-12">
                400 University Drive Suite 200<br />
                Coral Gables, <br /> FL 33134 USA
              </address>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold">Links</h3>
              <ul className="md:mt-12 mt-3 font-semibold space-y-8">
                <li><Link href="/" className="text-gray-950 hover:text-gray-600">Home</Link></li>
                <li><Link href="/shop" className="text-gray-950 hover:text-gray-600">Shop</Link></li>
                <li><Link href="/about" className="text-gray-950 hover:text-gray-600">About</Link></li>
                <li><Link href="/contact" className="text-gray-950 hover:text-gray-600">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold">Help</h3>
              <ul className=" mt-3 md:mt-12 font-semibold space-y-8">
                <li><a href="/payment-options" className="text-gray-950 hover:text-gray-600">Payment Options</a></li>
                <li><a href="/returns" className="text-gray-950 hover:text-gray-600">Returns</a></li>
                <li><a href="/privacy-policies" className="text-gray-950 hover:text-gray-600">Privacy Policies</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <form className="md:flex mt-12 gap-2 ">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full text-sm border-b-2 border-gray-700"
                />
                <button
                  type="submit"
                  className="border-b-2 border-gray-700 text-gray-950 font-bold"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-start font-medium border-t-2 mx-5 md:mx-24 py-6 text-gray-950">
            &copy; 2024 Funiro. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  