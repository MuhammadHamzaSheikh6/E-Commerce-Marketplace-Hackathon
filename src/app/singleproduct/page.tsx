
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';
import Products from '@/components/product';
import Detail from '@/components/singlePerduct/detail';

export default function ProductPage() {

  return (
    <>
      <div className="">
        <div className='bg-[#F9F1E7] py-3 md:py-7'>
          <p className="text-sm md:ml-14 ml-3 flex gap-3  place-items-center text-gray-500">
            Home <FaAngleRight className='text-black' /> Shop <FaAngleRight className='text-black' /> <span className='font-extrabold'>|</span>  <span className="text-gray-950 font-medium">Asgaard sofa</span>
          </p>
        </div>

        <Detail/>  

        <div className="py-16">
          <h2 className="text-center text-3xl font-medium mb-8">Related Products</h2>
          <Products />
        </div>
      </div>
    </>
  );
}
