import Image from "next/image"
import { Button } from "./ui/button";
import Link from "next/link";

function Hero() {
  
  return (
    <div className="Hero pt-[70px]" >
      <div className="container flex h-[710px] w-full gap-9 my-16 ">

        <div className="bg-[#e0e0e0] flex-1 rounded-xl relative ">
          <Image
            src="/image 2 28.png"
            alt="image"
            fill
            quality={100}
            className="hero-left-img w-[90%] !h-auto !bottom-4 !top-[auto] !left-0"
            priority
          />
        </div>


        <div className="flex-1 flex justify-between flex-col  ">
          <div className="bg-[#e0e0e0] w-full rounded-xl h-[150px] relative overflow-hidden">
            <Image 
              src="/image (1).png" 
              alt="image" 
              fill
              quality={100}
              priority  
              className="!h-auto !bottom-0 !top-[auto]" 
            />
          </div>

          <div className="text-center ">
            <h1 className="text-[91px] font-medium text-[#484848] leading-[1] tracking-[-3.64px]  ">ULTIMATE</h1>
            <h1 className="strock-text text-[187px] font-medium text-transparent leading-[0.9] tracking-[-10.29px] ">SALE</h1>
            <p className="text-xl tracking-[2px] mb-4">NEW COLLECTION</p>
            <Link href="/products">
              <Button className="px-[60px] py-[25px] shadow-mainsh" >SHOP NOW </Button>
            </Link>
          </div>

          <div className="bg-[#F9A79B] w-full rounded-xl h-[150px] relative overflow-hidden ">
          <Image 
              src="/image(2).png" 
              alt="image" 
              fill
              quality={100}
              priority  
              className="!h-auto !bottom-0  !top-[auto]" 
            />
          </div>

        </div>


        <div className=" bg-[#e0e0e0] flex-1 rounded-xl relative max-xl:hidden">
          <Image
              src="/image 227.png"
              alt="image"
              fill
              quality={100}
              className="hero-right-img !w-[249px] !h-auto !bottom-0 !top-[auto]  "
              priority
              // calc(50% - 130px)
            />
        </div>

      </div>
    </div>
  );
}

export default Hero