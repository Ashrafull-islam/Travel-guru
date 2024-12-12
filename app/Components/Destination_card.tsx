import Image from "next/image"
import image1 from "@/public/Rectangle 5.png"
import image2 from "@/public/Rectangle 8.png"
import image3 from "@/public/Rectangle 6.png"
import image4 from "@/public/Rectangle 7.png"
import image5 from "@/public/Rectangle 9.png"
import image6 from "@/public/Rectangle 11.png"
import image7 from "@/public/Rectangle 10.png"
import { mulish } from "../layout"

export default function Destination_card(){
    return (
        <div className="md:w-[70%] mx-auto my-20">
            <div className="md:w-[600px] mx-auto">
                <h2 className={`${mulish.variable} font-bold text-center text-[40px] text-[#131318]`}>Choose Your Destination</h2>
                <p className={`${mulish.variable} text-center mb-20 mt-4 text-[16px] text-[#131318]`}>Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra odio sit massa. Sodales dictumst nec nibh pellentesque.</p>
            </div>
            <div className="md:flex gap-5 ">
            <Image
            src={image1}
            alt="maldives"
            className="flex-1"
            ></Image>
            <Image
            src={image2}
            alt="indornishia"
            className="flex-1"
            ></Image>
            </div>
            <div className="grid md:grid-cols-4 gap-5  my-5">
            <Image
            src={image3}
            alt="srilanka"
            className="flex-1 w-full h-[280px]"
            ></Image>

              <Image
            src={image4}
            alt="srilanka"
            className="col-span-2 flex-1 w-full h-[280px]"
            ></Image>

              <Image
            src={image5}
            alt="srilanka"
            className="flex-1  w-full h-[280px]"
            ></Image>
            </div>
            <div className="grid md:grid-cols-3 gap-5 ">
            <Image
            src={image6}
            alt="srilanka"
            className=" flex-1 w-[450px] h-[300px]"
            ></Image>

            <Image
            src={image7}
            alt="srilanka"
            className=" flex-1 col-span-2 h-[300px] w-full"
            ></Image>
            </div>
        </div>
    )
}