'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from '../../../public/images/logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <nav className="sm:p-4 p-2 md:flex md:justify-between md:items-center">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <Image 
    //       src={logo}
    //       alt="Logo"
    //       width={150}
    //       height={150}
    //     />
    //     <div className="hidden md:flex">
    //     <Link href="../" className="mx-2 hover:text-gray-700">
    //       Home 
    //     </Link>
    //     <Link href="/login" className="mx-2 hover:text-gray-700">
    //       Login 
    //     </Link>
    //     <Link href="/store " className="mx-2 hover:text-gray-700">
    //       Store
    //     </Link>
    //     </div>
    //     <div className="md:hidden flex items-center">
    //       <button onClick={() => {
    //         setIsOpen(!isOpen)
    //       }}>
    //         <svg width="4rem" height="4rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //           <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
    //           <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
    //           <g id="SVGRepo_iconCarrier"> <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/></g>
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </nav>
    <header className="bg-teal-500 sticky top-0 z-10">
      <section className="bg-blue-500 max-w-8xl mx-auto px-4 flex justify-between items-center">
        <div>XYZ</div>
        <a href="/" className="w-40">
          <Image 
            src={logo}
            alt="Logo"
            className=""
          />
        </a>        
        <Link href="/login" className="">Account</Link>
      </section>
      <section className="max-w-8xl mx-auto p-4 flex justify-between items-center">
        <Link href="/sustain">Sustainability</Link>    
        <Link href="/store">All Products</Link>    
        <Link href="/Article">Article</Link>    
        <Link href="/contactUs">Contact Us</Link>    
        <Link href="/login" className="">About Us</Link>
      </section>
    </header>
  )
}