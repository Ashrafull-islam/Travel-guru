import Image from "next/image"
import group1 from "@/public/Group.png"
import group2 from "@/public/Group (1).png"
import group3 from "@/public/Group 27.png"
export default function Chosen_Card(){
    return(
        <div className="md:w-[70%] md:mx-auto">
            <div className="md:flex gap-5">
                <div className="">
            <div className="card card-compact bg-[#FFFBF7] w-full p-8">
            <Image
            src={group1}
            alt="hotel logo"
            >
            </Image>
        <div className="">
        <h2 className="card-title text-[24px] my-4">Handpicked Hotels</h2>
        <p className="text-[16px] my-4">Amet consectetur. Vulputate commodo felis molestie risus <br />  ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet. </p>
        </div>
        </div>
                </div>
                <div>
                <div className="card card-compact bg-[#F4FDFF] w-full p-8">
            <Image
            src={group2}
            alt="hotel logo"
            >
            </Image>
        <div className="card-body">
        <h2 className="card-title my-4 text-[24px]">World Class Service</h2>
        <p className="text-[16px]">Amet consectetur. Vulputate commodo felis molestie risus <br />  ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet. </p>
        </div>
        </div>
                </div>
            </div>
        <div className="my-10">
           <div className="md:w-[570px] mx-auto">
                <div className="card card-compact bg-[#FEF6F6] w-full p-8">
            <Image
            src={group3}
            alt="hotel logo"
            >
            </Image>
        <div className="card-body">
        <h2 className="card-title my-4 text-[24px]">Best Price Guarantee</h2>
        <p className="text-[16px]">Amet consectetur. Vulputate commodo felis molestie risus <br />  ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet. </p>
        </div>
        </div>
        </div>
                </div>
            </div>
    )
}