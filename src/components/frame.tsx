import Image from "next/image";

const ImageGrid = () => {
  return (
    <>
    <div className=" w-full mt-10 mb-14">
      <h2 className="text-center text-sm text-gray-600 mb-6 ">
        Share your setup with
        <br />
        <span className="text-gray-950 font-bold text-3xl">#FuniroFurniture</span>
      </h2>

      <div className="md:flex md:space-x-4 space-y-7 md:space-y-0 mx-5 md:mx-0 items-center ">
        <div className=" space-y-6">
        <div className="md:left-[23px] md:top-1 relative">
          <Image
            src="/category/badroom.png"
            alt="Shelves with plants"
            width='7800'
            height='38200'
            className=" w-full md:w-[78px] md:h-[382px]"
          />
        </div>

        <div className="md:left-[17px] md:top-1 relative">
          <Image
            src="/category/dining.png"
            alt="Laptop Workspace"
            width='18500'
            height='32300'
            className="w-full md:w-[185px] md:h-[323px]"
          />
        </div>            
        </div>

        <div className="space-y-6">
        <div className="md:-left-[40px]  relative">
          <Image
            src="/category/living.png"
            alt="Dining Table"
            width='45100'
            height='31200'
            className="w-full h-full md:w-[490px] md:h-[312px]"
          />
        </div>

        <div className="md:left-[23px] relative">
          <Image
            src="/category/badroom.png"
            alt="Bedroom"
            width='34400'
            height='24200'
            className="w-full md:w-[320px] md:h-[242]"
          />
        </div>            
        </div>

        <div className=" md:flex items-center">
        <div className="md:-left-[35px] relative">
          <Image
            src="/category/dining.png"
            alt="Armchair"
            width='29500'
            height='39200'
            className="md:w-[295px] w-full h-full md:h-[392px]"
          />
        </div>            
        </div>

        <div className="space-y-6">
        <div className="md:-left-[30px] relative">
          <Image
            src="/category/living.png"
            alt="Vases on Stools"
            width='29000'
            height='34800'
            className="md:w-[290px] w-full h-full md:h-[348px]"
          />
        </div>

        <div className="md:-left-[30px] relative">
          <Image
            src="/category/badroom.png"
            alt="Frame with Plants"
            width='17800'
            height='24200'
            className="md:w-[178px] w-full h-full md:h-[242px]"
          />
        </div>             
        </div>

        <div className="space-y-6">
        <div className="md:-left-[25px] md:-top-10 relative">
          <Image
            src="/category/dining.png"
            alt="Office Corner"
            width='26200'
            height='43300'
            className="md:w-[262px] h-full w-full  md:h-[380px]"
          />
        </div>
        <div className="md:-top-10 md:-left-[74px] relative">
          <Image
            src="/category/dining.png"
            alt="Office Corner"
            width='25800'
            height='19600'
            className="md:w-[258px] w-full h-full md:h-[196px]"
          />
        </div>            
        </div>

      </div>
    </div>

    </>
  );
};

export default ImageGrid;