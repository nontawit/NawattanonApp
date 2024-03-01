"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
    const [isNavVisible, setNavVisible] = useState(true);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setNavVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <nav className={`transition-all duration-300 ${isNavVisible ? 'bg-gray-800 p-4' : 'bg-opacity-0'} fixed w-full top-0 z-50`}>
            <div className=" container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-lg">
                    <Link href="/">
                        NawattanonEngineering
                    </Link>
                </div>
                <div className=" space-x-4 text-white">
                    <Link href="/">Home</Link>
                    <Link href="/About">About</Link>
                    <Link href="/Contact">Contact</Link>
                </div>
            </div>          
        </nav>
    )
}

export default Navbar;