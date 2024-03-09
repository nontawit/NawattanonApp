"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // ปรับขนาดตามที่คุณต้องการ
    };

    handleResize(); // เช็คขนาดเมื่อโหลดหน้าเพจ

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">

          <Link href="/"><img src="/images/Logo.png" alt="Logo" className="max-w-16" /></Link>
          <Link href="/"><span className="text-lg font-semibold ml-2">Nawattanon</span></Link>
        </div>
        {isMobile ? (
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        ) : (
          <ul className="flex space-x-4">
            <li><Link href="/About" className="text-gray-700 hover:text-gray-900 transition">เกี่ยวกับเรา</Link></li>
            <li><Link href="/Contact" className="text-gray-700 hover:text-gray-900 transition">ติดต่อ</Link></li>
            <li><Link href="/Service" className="text-gray-700 hover:text-gray-900 transition">บริการ</Link></li>
          </ul>
        )}
      </div>
      {isMenuOpen && isMobile && (
        <ul className="md:hidden">
          <li className='flex items-center justify-center'><Link href="/About" onClick={() => setMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 transition">เกี่ยวกับเรา</Link></li>
          <li className='flex items-center justify-center'><Link href="/Contact" onClick={() => setMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 transition">ติดต่อ</Link></li>
          <li className='flex items-center justify-center'><Link href="/Service" onClick={() => setMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 transition">บริการ</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;