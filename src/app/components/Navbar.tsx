'use client';
import Link from "next/link";
import { useState } from "react";
import burger from '../../../public/images/burger-menu.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-500 text-white text- p-5 sm:p-3 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <a href="" className="text-2xl font-bold">
          Benign
        </a>
        <div className="hidden md:flex">
        <Link href="../" className="mx-2 hover:text-gray-700">
          Home 
        </Link>
        <Link href="/login" className="mx-2 hover:text-gray-700">
          Login 
        </Link>
        <Link href="/store " className="mx-2 hover:text-gray-700">
          Store
        </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => {
            setIsOpen(!isOpen)
          }}>
            <svg width="4rem" height="4rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
              <g id="SVGRepo_iconCarrier"> <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"/></g>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}