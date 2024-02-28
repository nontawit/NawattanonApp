"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImage = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % totalImage) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage % totalImage) + 1);
  };
  
  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 2 + totalImage) % totalImage + 1);
  };

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className=" relative w-500 h-500">
          <Image 
          src={`/images/image${currentImage}.jpg`} 
          alt={`Image $ {currentImage}`} 
          width={500}
          height={500}
        />
      </div>
      
      <button 
        onClick={prevImage} 
        className="bg-gray-500 text-white p-2 rounded-full absolute left-4 top-1/2 transform -translate-y-1/2">
        <FaChevronLeft size={20}/>
      </button>
      <button 
        onClick={nextImage}
        className="bg-gray-500 text-white p-2 rounded-full absolute right-4 top-1/2 transform -translate-y-1/2"
      >
        <FaChevronRight size={20}/>
      </button>
    </div>
  );
}
