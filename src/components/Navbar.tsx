"use client";
import React, { Component, useState } from "react";
import Link from "next/link";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <div className=" bg-gray-800">
            <div className=" container mx-auto px-4">
                <div className=" flex justify-between items-center h-16">
                    <Link onClick={() => setIsMenuOpen(false)} className=" text-white font-bold text-xl" href="/">
                        NawattanonEngineering
                    </Link>
                    <div className=" md:hidden">
                        <button
                            className=" p-2 text-white rounded-md focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}  
                        >
                            {isMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-6 w-6 "
                                    fill=" none "
                                    viewBox=" 0 0 24 24 "
                                    stroke=" currentColor "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ): (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-6 w-6 "
                                    fill=" none "
                                    viewBox=" 0 0 24 24 "
                                    stroke=" currentColor "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className=" hidden md:flex space-x-4">
                        <Link className=" text-white hover:text-gray-300" href="/About">เกี่ยวกับเรา</Link>
                        <Link className=" text-white hover:text-gray-300" href="/Services">บริการของเรา</Link>
                        <Link className=" text-white hover:text-gray-300" href="/Contact">ติดต่อเรา</Link>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className=" md:hidden">
                    <div className=" bg-gray-900 p-4">
                        <Link onClick={() => setIsMenuOpen(false)} className=" block py-2 text-white hover:text-gray-300" href="/About">เกี่ยวกับเรา</Link>
                        <Link onClick={() => setIsMenuOpen(false)} className=" block py-2 text-white hover:text-gray-300" href="/Services">บริการของเรา</Link>
                        <Link onClick={() => setIsMenuOpen(false)} className=" block py-2 text-white hover:text-gray-300" href="/Contact">ติดต่อเรา</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;