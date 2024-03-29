// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from 'next/font/local';
import Navbar from "@/components/Navbar";

const sukhumvit = localfont(
  {
    src: [
      {
        path: "../../public/fonts/sukhumvit.ttf",
        weight: "normal",
      },
    ],
    variable: "--font-sukhumvit",
  }
)


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nawattanon",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sukhumvit.variable} font-sukhumvit`}>
      <body className={`${sukhumvit.variable} font-sukhumvit`}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '50vh'}}>
            <Navbar/>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {children}
          </div>
        </div>
        
       
      
      </body>
      
    </html>
  );
}
