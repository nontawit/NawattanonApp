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
        <div className="mt-8">
          <Carousel />
        </div>
      </div>
    
  )
}

export default Home;