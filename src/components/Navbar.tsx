"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md font-sukhumvit">
      <div className="container mx-auto flex  md:flex-row  md:items-start justify-between ">
        <div className="flex items-center ">
          <img src="logo.png" alt="Logo" className="max-w-16" />
          <span className="text-lg font-semibold ml-2">Nawattanon</span>
        </div>
        <div className="md:hidden ">
          <button onClick={toggleMenu} className="focus:outline-none ">
            {isMenuOpen ? (
              <svg className="w-8 h-8 text-gray-700 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      <ul className={`md:flex flex-col md:flex-row md:space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} mt-2 md:mt-0 items-center`}>
          <li><Link href="/" onClick={() => setMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 block p-2 transition">Home</Link></li>
          <li><Link href="/About" onClick={() => setMenuOpen(!isMenuOpen)}  className="text-gray-700 hover:text-gray-900 block p-2 transition">About</Link></li>
          <li><Link href="/host" onClick={() => setMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 block p-2 transition">Host</Link></li>
          <li><Link href="/signup" onClick={() => setMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 block p-2 transition">Sign Up</Link></li>
          <li><Link href="/login" onClick={() => setMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 block p-2 transition">Log In</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;