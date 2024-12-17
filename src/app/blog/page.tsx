import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight, MdPerson3 } from "react-icons/md";
import { BsCalendar2DateFill, BsFillTagFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header>
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <Image
            src="/shop/banner.jpg"
            alt="Shop Map"
            layout="fill"
            objectFit="cover"
            className="opacity-70 brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-950">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Furniro Logo"
                width={48}
                height={32}
                className="w-12 h-8"
              />
            </Link>
            <h4 className="text-4xl font-bold">Blog</h4>
            <h5 className="flex items-center text-sm md:text-xl space-x-1">
              <Link href="/" className="font-bold text-xl">Home</Link>
              <MdKeyboardArrowRight className="mt-1 text-2xl" />
              <span className="mt-1">Blog</span>
            </h5>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto md:px-9 py-12 grid lg:grid-cols-3 gap-8">
        {/* Blog Posts */}
        <section className="lg:col-span-2 space-y-12">
          {[
            { img: "/blog/laptop.jpg", tag: "Wood", date: "14 Oct 2022" },
            { img: "/blog/posts/5.jpg", tag: "Handmade", date: "14 Oct 2022" },
            { img: "/blog/posts/3.jpg", tag: "Wood", date: "14 Oct 2022" },
          ].map((post, index) => (
            <div key={index} className="mx-2 md:mx-0 overflow-hidden">
              <Image
                src={post.img}
                alt="Blog Post Image"
                width={1200}
                height={600}
                className="w-auto rounded-xl"
              />
              <div className="p-6">
                <div className="md:flex items-center text-gray-500 text-sm gap-8">
                  <span className="flex items-center gap-2">
                    <MdPerson3 /> Admin
                  </span>
                  <span className="flex items-center gap-2">
                    <BsCalendar2DateFill /> {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <BsFillTagFill /> {post.tag}
                  </span>
                </div>
                <h2 className="mt-4 text-xl md:text-2xl font-bold">
                  Going all-in with millennial design
                </h2>
                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mauris vitae ultricies leo integer malesuada nunc...
                </p>
                <Link
                  href="/post"
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Search Box */}
          <div className="relative mx-3 md:mx-0 md:w-[311px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-[58px] border border-gray-300 rounded-md md:p-4 md:pr-12"
            />
            <AiOutlineSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-950" size={20} />
          </div>

          {/* Categories */}
          <div className="rounded-lg py-6 pl-6 pr-20">
            <h3 className="text-lg font-bold mb-8">Categories</h3>
            <ul className="space-y-8 text-gray-500">
              {[
                { name: "Crafts", count: 2 },
                { name: "Design", count: 8 },
                { name: "Handmade", count: 7 },
                { name: "Interior", count: 1 },
                { name: "Wood", count: 6 },
              ].map((category, index) => (
                <li key={index} className="flex justify-between">
                  <span>{category.name}</span>
                  <span>{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="py-6 pl-6 pr-20">
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {[
                { img: "/blog/posts/1.jpg", title: "Millennial design", date: "03 Aug 2022" },
                { img: "/blog/posts/2.jpg", title: "Decorating ideas", date: "03 Aug 2022" },
                { img: "/blog/posts/3.jpg", title: "Handmade tips", date: "03 Aug 2022" },
                { img: "/blog/posts/4.jpg", title: "Woodwork essentials", date: "03 Aug 2022" },
              ].map((post, index) => (
                <li key={index} className="flex gap-4">
                  <Image
                    src={post.img}
                    alt="Recent Post"
                    width={60}
                    height={60}
                    className="rounded-md"
                  />
                  <div>
                    <Link href="/post" className="text-blue-600 hover:underline">
                      {post.title}
                    </Link>
                    <p className="text-gray-500 text-sm">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
