import Image from 'next/image';
import React from 'react';

const TopHeader = () => {
  return (
    <div className="flex flex-wrap justify-between items-center w-full max-w-[1240px] mx-auto px-4 py-3 bg-white">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        <Image src="/images/command.png" alt="Command Icon" width={32} height={32} />
        <div className="text-lg md:text-xl lg:text-2xl font-bold leading-6 md:leading-8 lg:leading-10">
          High Fidelity Dashboard - Home Rent
        </div>
      </div>

      {/* Right Section */}
      <div className="text-sm md:text-base lg:text-lg text-right">
        <span className="block md:inline text-gray-500 mr-1">Last Updated:</span>
        <span className="text-black font-bold">8 Aug 2022</span>
      </div>
    </div>
  );
};

export default TopHeader;
