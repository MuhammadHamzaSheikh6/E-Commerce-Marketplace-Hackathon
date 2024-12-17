import Banner from "@/components/banner";
import BrowseRange from "@/components/category";
import ImageGrid from "@/components/frame";
import  TrendyProductsSection from "@/components/inspiration";
import ProductCard from "@/components/product";

export default function HomePage(){
  return(
    <>
    <Banner/>
    <BrowseRange/>
    <ProductCard/>
    <TrendyProductsSection/>
    <ImageGrid/>
    </>
  )
}