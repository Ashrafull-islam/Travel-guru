import Image from "next/image";
import image1 from "@/public/Rectangle 12 (1).png";
import image2 from "@/public/Rectangle 12 (2).png";
import image3 from "@/public/Rectangle 12.png";
import { IoTimeSharp } from "react-icons/io5";
import { FaPeopleGroup, FaLocationDot } from "react-icons/fa6";

export default function Deals_Container() {
  return (
    <div className="md:w-[70%] mx-auto my-20">
        <div className="w-[600px]  mx-auto my-10">
            <h2 className="text-center text-[40px] text-[#131318] font-bold">Deals & Discounts</h2>
            <p className="my-5 text-[16px] text-[#131318] text-center">Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra odio sit massa. Sodales dictumst nec nibh pellentesque.</p>
        </div>
    <div className=" relative">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={image2}
          alt="swim"
          className="w-full rounded-xl h-full"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:ml-72">
        <div className="bg-[#F7FBFF] md:w-[570px] h-auto p-10 rounded-xl shadow-lg">
          <div className="flex gap-4 items-center">
            <div className="flex gap-1 items-center">
              <IoTimeSharp className="text-[#FF5400] text-2xl" />
              <p>7 Day / 6 Night</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaPeopleGroup className="text-[#FF5400] text-2xl" />
              <p>Max : 10</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaLocationDot className="text-[#FF5400] text-xl" />
              <p>Malaysia</p>
            </div>
          </div>
          <h2 className="text-[24px] font-semibold my-5">Tour To Satorini</h2>
          <p className="text-[16px] text-[#5A5A5D]">
            Amet consectetur. Vulputate commodo felis molestie risus ornare nulla
            amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant
            adipiscing.
          </p>
          <h3 className="text-[#FF5400] text-[20px] font-semibold my-4">
            Price: $1300-$1500
          </h3>
          <button className="px-5 py-3 bg-[#FF5400] font-semibold text-white rounded-xl">
            Book Now
          </button>
        </div>
      </div>
      {/* second card  */}
    </div>
    <div className="relative my-10">
    <div className="relative">
        <Image
          src={image1}
          alt="swim"
          className="w-full rounded-xl h-full"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:-ml-72">
        <div className="bg-[#F7FBFF] md:w-[570px] h-auto p-10 rounded-xl shadow-lg">
          <div className="flex gap-4 items-center">
            <div className="flex gap-1 items-center">
              <IoTimeSharp className="text-[#FF5400] text-2xl" />
              <p>7 Day / 6 Night</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaPeopleGroup className="text-[#FF5400] text-2xl" />
              <p>Max : 10</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaLocationDot className="text-[#FF5400] text-xl" />
              <p>Malaysia</p>
            </div>
          </div>
          <h2 className="text-[24px] font-semibold my-5">Tour To Satorini</h2>
          <p className="text-[16px] text-[#5A5A5D]">
            Amet consectetur. Vulputate commodo felis molestie risus ornare nulla
            amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant
            adipiscing.
          </p>
          <h3 className="text-[#FF5400] text-[20px] font-semibold my-4">
            Price: $1300-$1500
          </h3>
          <button className="px-5 py-3 bg-[#FF5400] font-semibold text-white rounded-xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
    {/* third card  */}
    <div className="relative my-10">
    <div className="relative">
        <Image
          src={image3}
          alt="swim"
          className="w-full rounded-xl h-full"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:ml-72">
        <div className="bg-[#F7FBFF] md:w-[570px] h-auto p-10 rounded-xl shadow-lg">
          <div className="flex gap-4 items-center">
            <div className="flex gap-1 items-center">
              <IoTimeSharp className="text-[#FF5400] text-2xl" />
              <p>7 Day / 6 Night</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaPeopleGroup className="text-[#FF5400] text-2xl" />
              <p>Max : 10</p>
            </div>
            <div className="flex gap-1 items-center">
              <FaLocationDot className="text-[#FF5400] text-xl" />
              <p>Malaysia</p>
            </div>
          </div>
          <h2 className="text-[24px] font-semibold my-5">Tour To Satorini</h2>
          <p className="text-[16px] text-[#5A5A5D]">
            Amet consectetur. Vulputate commodo felis molestie risus ornare nulla
            amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant
            adipiscing.
          </p>
          <h3 className="text-[#FF5400] text-[20px] font-semibold my-4">
            Price: $1300-$1500
          </h3>
          <button className="px-5 py-3 bg-[#FF5400] font-semibold text-white rounded-xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
    <div className="my-10 mx-auto w-[300px]">
        <button className="bg-[#FF5400] text-[20px] text-white font-semibold px-5 py-3 rounded-xl">See All Packages</button>
    </div>
    </div>

  );
}
