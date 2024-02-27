"use client";
import Image from "next/image";
import image1 from "./images/image1.jpg";
import { useEffect, useState } from "react";

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
    <div className=" flex items-center justify-center h-auto w-full ">
      <button onClick={prevImage}>
        Previous
      </button>
      <Image 
        src={`/images/image${currentImage}.jpg`} 
        alt={`Image $ {currentImage}`} 
        height={500}
        width={500}
      />
      <button onClick={nextImage}>
        Next
      </button>
    </div>
  );
}
