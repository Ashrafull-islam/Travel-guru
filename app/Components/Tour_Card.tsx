import Image from "next/image"
import rectangle from '@/public/Rectangle 4.png';
export default function Tour_Card(){
    return (
        <div className="md:flex gap-5 justify-center item-center md:w-[70%] mx-auto">
            <div className="mx-w-[570px] p-5">
                <h2 className={` text-[40px] text-[#131318] font-bold`}>Our Popular Tours</h2>
                <p className={` text-[#131318] text-[16px] opacity-75`}>Dolor sit amet consectetur. Diam volutpat neque habitasse pharetra odio sit massa. Sodales dictumst nec nibh pellentesque.</p>
                <ul className={` list-disc text-[#131318] text-[16px] pl-5 my-8`}>

                <li className={` text-[#131318] text-[16px] opacity-75`}>Tempus euismod lacus mauris dignissim quis in ultrices. Magna nullam odio neque diam. Sociis erat at.</li>
                <li className={` text-[#131318] text-[16px] opacity-75 my-4`}>Adipiscing ornare pellentesque mauris volutpat tortor vitae platea porta lacus. Lectus suspendisse nullam.</li>
                <li className={` text-[#131318] text-[16px] opacity-75`}>Accumsan eget et turpis praesent lorem egestas enim elit bibendum.    Risus at in.</li>
                </ul>

                <p className={` text-[#131318] text-[16px] opacity-75 my-8`}>Amet consectetur. Vulputate commodo felis molestie risus 
                ornare nulla amet et. Libero commodo sagittis dignissim adipiscing quis. Habitant adipiscing risus natoque aliquet. Id bibendum nunc senectus semper tincidunt. </p>
                <div>
                    <button className="text-[#FFFFFF] bg-[#FF5400] md:h-[52px] md:w-[160px] rounded-lg font-semibold">Read More</button>
                </div>
            </div>
            <Image
            src={rectangle}
            alt="image"
            >
            </Image>
        </div>
    )
}