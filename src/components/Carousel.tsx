"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
];

const Carousel: React.FC = () =>
{
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="flex items-center justify-center w-full max-w-md mx-auto">
            <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ">
                <Image
                    src={`/images/${images[currentIndex]}`}
                    alt={`Image ${currentIndex + 1}`}
                    layout="fixed"
                    width={300}
                    height={300}
                    className="rounded-lg"
                />
                <div className=" absolute inset-0 flex items-center justify-between">
                    <button onClick={handlePrev} className=" text-white text-2xl focus:outline-none">
                        <FaChevronLeft/>
                    </button>
                    <button onClick={handleNext} className=" text-white text-2xl focus:outline-none">
                        <FaChevronRight/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel;