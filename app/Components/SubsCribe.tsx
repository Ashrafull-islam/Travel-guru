import Image from "next/image";
import image from "@/public/Rectangle 8 (1).png"
import image2 from "@/public/Group 40089.png"
export default function Subscribe() {
    return (
      <div className="md:w-[70%] mx-auto">
        <div>
        <div className="mx-auto py-10 md:flex flex-wrap md:flex-nowrap items-center gap-8">
      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold leading-tight mb-4">
          A Simple Perfect Place <br /> To Get Lost
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Amet consectetur. Vulputate commodo felis molestie risus ornare nulla
          amet et. Libero commodo sagittis dignissim adipiscing quis.
        </p>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold">•</span>
            Adipiscing ornare pellentesque mauris volutpat tortor vitae platea
            porta lacus. Lectus suspendisse nullam.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500 font-bold">•</span>
            Adipiscing ornare pellentesque mauris volutpat tortor vitae platea
            porta lacus. Lectus suspendisse nullam.
          </li>
        </ul>
        <button className="mt-6 px-5 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition">
          See More
        </button>
      </div>

      {/* Right Content (Video/Image) */}
      <div className="relative flex-1">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src={image2}
            alt="Watch our mountain"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute bottom-2 left-0 w-full px-4">
            {/* Placeholder for video controls */}
            <div className="h-1 bg-gray-300 rounded-full">
              <div className="h-1 bg-orange-500 rounded-full w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div className="md:flex flex-wrap md:flex-nowrap gap-6">
          {/* Newsletter Card */}
          <div className="border rounded-lg border-[#FF5400] shadow-md p-10 w-full md:w-[500px]">
            <h2 className="text-[24px] font-bold mb-2">Newsletter</h2>
            <p className="text-[16px] text-[#5A5A5D] mb-4">
              Get your daily dose of travel news & tips. Sign <br /> up today!
            </p>
            <hr  className="border border-[#131318] w-[95%] opacity-20 font-thin mx-auto my-5"/>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-md p-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-md p-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
  
          {/* Travel Card */}
          <div className="relative flex-1 w-full">
            <Image
            src={image}
            alt="image"
            className="w-full h-[400px]"
            ></Image>
            <div className="absolute top-6 right-6 bg-orange-500 text-white text-sm font-semibold py-2 px-4 rounded-md transform rotate-12 shadow-md">
              <p>Travel.com</p>
              <p>Save up to 70%</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  