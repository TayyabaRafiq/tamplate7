import Image from 'next/image';
import React from 'react';
import { IoSwapVertical } from "react-icons/io5";

const Hero = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4 bg-[#F6F7F9]'>
      {/* Ads Section */}
      <section className='flex flex-wrap justify-center gap-4 md:gap-8'>
        <Image src='/images/Ads 1.png' alt='ad1' width={600} height={260} className='w-full md:w-[48%]' />
        <Image src='/images/Ads 2.png' alt='ad2' width={600} height={260} className='w-full md:w-[48%]' />
      </section>

      {/* Pick-Up Section */}
      <section className='flex flex-wrap justify-center items-center gap-4 mt-6'>
        <Image src='/images/Pick - Up.png' alt='pick-up-1' width={550} height={132} className='w-full md:w-[45%]' />
        <button className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded bg-[#3563E9] flex justify-center items-center'>
          <IoSwapVertical className='text-white text-xl' />
        </button>
        <Image src='/images/Pick - Up.png' alt='pick-up-2' width={550} height={132} className='w-full md:w-[45%]' />
      </section>

      {/* Popular Car Header */}
      <section className='flex justify-between items-center mt-6'>
        <h1 className='text-[#90A3BF] text-sm md:text-lg font-medium'>Popular Car</h1>
        <h1 className='text-[#3563E9] text-sm md:text-lg font-medium'>View All</h1>
      </section>

      {/* Catalog Section */}
      <section className='flex flex-wrap justify-center gap-4 mt-6'>
        <Image src='/images/Catalog 1.png' alt='catalog-1' width={250} height={360} className='w-[45%] md:w-[22%]' />
        <Image src='/images/Catalog 2.png' alt='catalog-2' width={250} height={360} className='w-[45%] md:w-[22%]' />
        <Image src='/images/Catalog 3.png' alt='catalog-3' width={250} height={360} className='w-[45%] md:w-[22%]' />
        <Image src='/images/Catalog 4.png' alt='catalog-4' width={250} height={360} className='w-[45%] md:w-[22%]' />
      </section>

      {/* Recommendation Section */}
      <section className='mt-6'>
        <Image
          src='/images/Recomendation Car Rent.png'
          alt='recommendation'
          width={1200}
          height={872}
          className='w-full'
        />
      </section>

      {/* Show More Button */}
      <div className='flex justify-center mt-6'>
        <Image src='/images/Show More.png' alt='show-more' width={500} height={500} className='w-[50%] md:w-[30%]' />
      </div>
    </div>
  );
};

export default Hero;
