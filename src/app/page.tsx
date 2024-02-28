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
    <div className=" grid place-items-center min-h-screen relative">
      <div className="relative  w-400 h-600">
        <Image 
          src={`/images/image${currentImage}.jpg`} 
          alt={`Image $ {currentImage}`} 
          layout="intrinsic"
          objectFit="cover"
          objectPosition="center center"
          width={350}
          height={550}
        />
      
      </div>
      <button 
        onClick={prevImage} 
        className="bg-gray-500 text-white p-2 rounded-full absolute left-20 top-1/2 transform -translate-y-1/2">
        <FaChevronLeft size={20}/>
      </button>
      <button 
        onClick={nextImage}
        className="bg-gray-500 text-white p-2 rounded-full absolute right-20 top-1/2 transform -translate-y-1/2"
      >
        <FaChevronRight size={20}/>
      </button>

      
    </div>
  );
};
