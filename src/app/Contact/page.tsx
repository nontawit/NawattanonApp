import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className="container mx-auto mt-8 font-sukhumvit">
      <h2 className="text-2xl font-semibold mb-5 text-center justify-center">ช่องทางการติดต่อ</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card1 */}
        <div className="card p-4 mb-8">
          {/* Content for Card1 */}
          <div className='flex items-center justify-center'>
            <Image src="/icons/Address.svg" alt='address' width={100} height={100} />
          </div>
          <p className='mt-5 text-lg text-center'>15 ซอย 19/2 คลองเตย ตำบลคอหงส์ อำเภอหาดใหญ่ จังหวัดสงขลา 90110</p>
        </div>
        {/* Card2 */}
        <div className="card p-4 mb-8">
          {/* Content for Card2 */}
          <div className='flex items-center justify-center'>
            <Image src="/icons/Tel.svg" alt='address' width={100} height={100} />
          </div>
          <p className='mt-5 text-lg text-center'>คุณหนึ่ง 095-4372727</p>
        </div>
        {/* Card3 */}
        <div className="card p-4 mb-8">
          {/* Content for Card3 */}
          <div className='flex items-center justify-center'>
            <Image src="/icons/Email.svg" alt='address' width={100} height={100} />
          </div>
          <p className='mt-5 text-lg text-center'>Nawattanon_EE@hotmail.com</p>
        </div>
        {/* Card4 */}
        <div className="card p-4">
          {/* Content for Card4 */}
          <div className='flex items-center justify-center'>
            <Image src="/icons/Line.svg" alt='address' width={100} height={100} />
          </div>
          <p className='mt-5 text-lg text-center'>Line</p>
        </div>
        {/* Card5 */}
        <div className="card p-4">
          {/* Content for Card5 */}
          <div className='flex items-center justify-center'>
            <Image src="/icons/Facebook.svg" alt='address' width={100} height={100} />
          </div>
          <p className='mt-5 text-lg text-center'>บริษัท นวัทนนท์ วิศวกรรม จำกัด</p>
        </div>
      </div>
    </div>
  )
}

export default page
