import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { MdPerson3 } from "react-icons/md";
import { BsCalendar2DateFill, BsFillTagFill } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

interface Props {
  params: { id: string };
}

export default async function BlogDetail({ params }: Props) {
  const { id } = params;

  // Fetch the blog data using the id
  const blog = await client.fetch(
    `*[_type == "blog" && _id == $id][0]{
      _id, 
      title, 
      content, 
      author, 
      date, 
      tags, 
      "image": image.asset._ref,
      category->{title, description}
    }`,
    { id }
  );

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div className="min-h-screen container mx-auto px-6 py-12">
      <header className="relative w-full h-[50vh]">
        <Image
          src={urlFor(blog.image).url()}
          alt={blog.title}
          fill // New way to make images responsive
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <Link href="/">
            <Image src="/logo.png" alt="Furniro Logo" width="32" height="20" />
          </Link>
          <h4 className="text-4xl font-bold">{blog.title}</h4>
          <h5 className="flex items-center text-sm md:text-xl mb-4 space-x-1">
            <Link href="/" className="font-bold text-xl">
              Home
            </Link>
            <AiOutlineArrowLeft className="mt-2 text-2xl" />
            <a className="mt-2 md:mt-0" href="#">
              Blog
            </a>
          </h5>
        </div>
      </header>

      <div className="p-6 bg-white shadow-md rounded-lg mt-8">
        <div className="text-sm text-gray-500 flex items-center gap-4 mb-4">
          <span className="flex items-center gap-2">
            <MdPerson3 /> {blog.author}
          </span>
          <span className="flex items-center gap-2">
            <BsCalendar2DateFill /> {new Date(blog.date).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-2">
            <BsFillTagFill /> {Array.isArray(blog.tags) ? blog.tags.join(", ") : "No tags"}
          </span>
        </div>

        <div className="space-y-6">
          {/* Render the content as PortableText */}
          <PortableText value={blog.content} />
        </div>

        <Link href="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to Blog
        </Link>
      </div>
    </div>
  );
}

