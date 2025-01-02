import { client } from '@/sanity/lib/client';
import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import Head from 'next/head'; // For adding meta tags to the page
import Products from '@/components/product';
import Detail from '@/components/singlePerduct/detail';

interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  tag?: string;
  image: string;
  image1: string;
  image2: string;
  image3: string;
  rating: number;
  customerReview: number;
  shortDescription: string;
  size: string;
  color: string;
  SKU: string;
  category: string;
  tags: string;
}

const getProductDataById = async (id: string) => {
  try {
    const query = `*[_type == "product" && _id == $id]{
      _id, 
      name, 
      description, 
      price, 
      oldPrice, 
      discount, 
      tag, 
      image,
      image1,
      image2,
      image3,
      rating,
      customerReview,
      shortDescription,
      size,
      color,
      SKU,
      category,
      tags
    }`;
    const data = await client.fetch(query, { id });
    return data.length ? data[0] : null;
  } catch (error) {
    console.error('Failed to fetch product data:', error);
    return null;
  }
};

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product: IProduct = await getProductDataById(id);

  if (!product) {
    return <div className="text-center">Product not found.</div>;
  }

  return (
    <>
      <Head>
        {/* SEO meta tags */}
        <title>{product.name} | Your Shop Name</title>
        <meta name="description" content={product.shortDescription || product.description} />
        <meta name="keywords" content={`Shop, ${product.category}, ${product.tags}, ${product.name}`} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.shortDescription || product.description} />
        <meta property="og:image" content={product.image} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.name} />
        <meta name="twitter:description" content={product.shortDescription || product.description} />
        <meta name="twitter:image" content={product.image} />
      </Head>

      <div>
        {/* Breadcrumb for better navigation and SEO */}
        <div className="bg-[#F9F1E7] py-3 md:py-7">
          <nav aria-label="breadcrumb">
            <ol className="flex gap-3 text-sm md:ml-14 ml-3 text-gray-500 items-center">
              <li>
                <a href="/" className="hover:text-black">Home</a>
              </li>
              <FaAngleRight className="text-black" />
              <li>
                <a href="/shop" className="hover:text-black">Shop</a>
              </li>
              <FaAngleRight className="text-black" />
              <li aria-current="page" className="font-m text-gray-950">
                {product.name}
              </li>
            </ol>
          </nav>
        </div>

        {/* Product Details */}
        <Detail id={params.id} />


        {/* Related Products Section */}
        <div className="py-16">
          <h2 className="text-center text-3xl font-medium mb-8">Related Products</h2>
          <Products />
        </div>
      </div>
    </>
  );
}
