"use client"
import Link from "next/link"
import objects from '@/public/OBJECTS.png';
import Image from "next/image";
import { useEffect, useState } from "react"
export default function NavBar(){
  const [isScrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const handleScroll=()=>{
      setScrolled(window.scrollY>50);
    };
    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[]);
    const links=<>
     <li><Link   href="/">Home</Link></li>
     <li><Link  href="/packages">Packages</Link></li>
     <li><Link  href="/testimonial">Testimonial</Link></li>
     <li><Link  href="/blog">Blog</Link></li>
     <li><Link  href="/contact">Contact</Link></li>
    </>
    return(
<div className="bg-orange-50">
<div className={`${
  isScrolled ?
  ' bg-orange-50 fixed top-0 left-0 z-50 w-full'
  :"shadow-sm"
}`}>
<div className={`md:w-[72%] mx-auto bg-orange-50`}>
<div className="navbar  bg-orange-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
        <Image
        src={objects}
        alt="logo"
        >
        </Image>
        <h2 className="text-[#131318] text-[36px] font-extrabold">Hero <span className="text-[#FF5400] text-[36px] font-extrabold">Travel</span></h2>
    </a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
</div>
      </div>
        </div>
        </div>
    )
}