'use client';


import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface ICategory {
  title: string;
  image: string;
}

interface IHeading {
  mainHeading: string;
  subHeading: string;
}

const fetchBrowseCategories = async () => {
  return await client.fetch(
    `*[_type == "browseCategories"][0]{mainHeading, subHeading, categories}`
  );
};

const BrowseRange = () => {
  const [data, setData] = useState<{ mainHeading: string; subHeading: string; categories: ICategory[] } | null>(null);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchBrowseCategories();
      setData(fetchedData);
    };
    getData();
  }, []);

  if (!data) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      {/* Heading */}
      <h2 className="md:text-2xl text-xl font-bold mb-2">{data.mainHeading}</h2>
      <p className="text-gray-600 text-sm md:text-base mb-8">{data.subHeading}</p>

      {/* Categories */}
      <div className="grid grid-cols-1 px-5 md:px-0 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {data.categories.map((category, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={urlFor(category.image).url()}
              alt={category.title}
              width={1000}
              height={1000}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseRange;
