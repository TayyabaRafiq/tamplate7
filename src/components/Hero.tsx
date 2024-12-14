import Image from 'next/image';
import React from 'react';
import { IoSwapVertical } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4 bg-[#F6F7F9]'>
      <div  >
        <h1 className='text-[#90A3BF] text-sm md:text-lg font-medium'>Home Car Rent</h1>
        </div>
      
      <section className='flex flex-wrap justify-center gap-4 md:gap-8'>
        <Image src='/images/Ads 1.png' alt='ad1' width={600} height={260} className='w-full md:w-[48%]' />
        <Image src='/images/Ads 2.png' alt='ad2' width={600} height={260} className='w-full md:w-[48%]' />
      </section>

      
      <section className='flex flex-wrap justify-center items-center gap-4 mt-6'>
        <Image src='/images/Pick - Up.png' alt='pick-up-1' width={550} height={132} className='w-full md:w-[45%]' />
        <button className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded bg-[#3563E9] flex justify-center items-center'>
          <IoSwapVertical className='text-white text-xl' />
        </button>
        <Image src='/images/Drop - Off.png' alt='pick-up-2' width={550} height={132} className='w-full md:w-[45%]' />
      </section>

      

      </div>
  );
};

export default Hero;
