"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { ModeToggle } from './modeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 sticky top-0 z-50  bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto border-b-2 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">
            My Blog
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm mx-6 lg:flex-grow space-x-6">
            <Link href="/">
              <span className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-700">
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-700">
                About
              </span>
            </Link>
            <Link href="/blog">
              <span className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-700">
                Blog
              </span>
            </Link>
            <Link href="/writeblog">
              <span className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-700">
                Write
              </span>
            </Link>
          </div>
          <div className='space-x-3'>
            <Button variant="outline">Login</Button>
            <Button variant="outline">Signup</Button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;