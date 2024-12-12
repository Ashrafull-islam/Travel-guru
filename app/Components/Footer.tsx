import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import Image from "next/image";
import objects from "@/public/OBJECTS.png"
export default function Footer(){
    return(
        <footer className="bg-gray-50 py-10 text-center my-20">
        {/* Logo and Description */}
        <div className="mb-6">
          <div className="flex justify-center items-center gap-2 mb-2">
             {/* Replace with your logo */}
             <Image
             src={objects}
             alt="image"
             ></Image>
            <h2 className="text-[32px] font-bold">
              Hero <span className="text-orange-500">Travel</span>
            </h2>
          </div>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Lorem ipsum dolor sit amet consectetur. Nulla sit viverra morbi vitae
            blandit orci potenti vulputate. Leo erat maecenas vitae elementum
            ultricies nullam.
          </p>
        </div>
  
        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 text-gray-500 text-xl mb-6">
          <FaTwitter className="hover:text-orange-500 cursor-pointer transition" />
          <FaFacebookF className="hover:text-orange-500 cursor-pointer transition" />
          <FaInstagram className="hover:text-orange-500 cursor-pointer transition" />
          <FaGithub className="hover:text-orange-500 cursor-pointer transition" />
        </div>
  
        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>
  
        {/* Footer Text */}
        <p className="text-sm text-gray-500">2017, All Rights Reserved.</p>
      </footer>
    )
}