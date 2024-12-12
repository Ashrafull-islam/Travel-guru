import Image from "next/image"
import Bg_container from '@/public/Rectangle 5.png'
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
export default function Bg_Container(){
    return (
        <>
        <div className="relative md:w-[70%] md:mx-auto h-[38vh]  md:h-[500px] md:my-10 ">
      {/* Background Image */}
      <div className="relative h-[300px] rounded-xl overflow-hidden  md:h-[450px]">
  <Image
    alt="Mountains"
    src={Bg_container}
    placeholder="blur"
    quality={100}
    className="rounded-xl"
    fill
    style={{
      objectFit: "cover",
      opacity: 1,
    }}
  />
   <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-transparent pointer-events-none"></div>
</div>


      
      {/* Text Overlay */}
      <div className="absolute inset-0 md:mt-32 text-[#263B3C] md:w-[70%]  md:mx-auto">
      <div className="text-center ">
        <h1 className={`text-6xl md:text-[64px] p-3 font-light leading-10	text-[#FFFFFF]`}>Explore Your Travel</h1>
        <p  className={`md:w-[600px] mx-auto md:text-[16px] p-3 font-light leading-10	text-[#FFFFFF] `}>Dolor sit amet consectetur. Nullam suspendisse vitae ultricies dolor adipiscing. In et odio enim ac quis sapien urna eu phasellus.</p>
        <div className='flex p-3 md:p-0 text-[16px] leading-6'>
        </div>
        <div className={`p-5 border border-[#000000] inset-0 rounded-lg bg-gradient-to-b from-[#7BB0BC] via-transparent to-white md:w-[800px] text-[16px] mx-auto `}>
      <div className="md:flex justify-between item-center">
        <div className="text-[#131318] bg-[#FFFFFF] md:px-10 md:py-4 rounded-lg">Where go</div>
        <div className="text-[#131318] bg-[#FFFFFF] md:h-[52px] md:w-[160px] rounded-lg flex items-center justify-center mx-auto">
        <p>When</p>
        <span><FaAngleDown /></span>
        </div>

        <div className="text-[#131318] bg-[#FFFFFF] md:h-[52px] md:w-[160px] rounded-lg flex items-center justify-center mx-auto">
        <p>Select Type</p>
        <span><FaAngleDown /></span>
        </div>
        <div className="text-[#FFFFFF] bg-[#FF5400] md:h-[52px] md:w-[160px] rounded-lg flex items-center justify-center mx-auto gap-2">
        <p>Find</p>
        <span><CiSearch className="text-2xl"/></span>
        </div>
      </div>
    </div>
        </div>
        </div>
      </div>

        </>
    )
}