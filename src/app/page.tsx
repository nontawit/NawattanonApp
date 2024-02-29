import Image from "next/image";
import Carousel from "@/components/Carousel";
import React from "react";

const Home: React.FC = () => {
  return (
      <div className=" text-center mt-10">
        <p className="text-2xl font-bold">
          บริษัท นวัทนนท์ วิศวกรรม จำกัด
        </p>
        <p className="mt-2">
          บริการด้านไฟฟ้าในอาคารและนอกอาคาร
        </p>
        <Carousel />
      </div>
    
  )
}

export default Home;