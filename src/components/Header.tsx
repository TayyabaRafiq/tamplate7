import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full px-4 py-3 bg-white border border-gray-200">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600 lg:text-2xl">
        MORENT
      </div>

      {/* Search Bar */}
      <div className="w-full mt-2 lg:mt-0 lg:w-auto lg:flex-grow">
        <div className="relative flex items-center max-w-full lg:max-w-[492px]">
          <Image
            src="/images/Search.png"
            alt="Search bar"
            width={492}
            height={44}
            className="hidden lg:block"
          />
          {/* Placeholder for smaller screens */}
          <input
            type="text"
            placeholder="Search something here"
            className="block w-full px-4 py-2 text-sm border border-gray-300 rounded-full lg:hidden"
          />
        </div>
      </div>

      {/* Profile and Notification */}
      <div className="flex items-center mt-2 lg:mt-0">
        <Image
          src="/images/Profil & Notification.png"
          alt="Profile and Notification"
          width={236}
          height={24}
          className="w-auto h-6 lg:h-8"
        />
      </div>
    </div>
  );
};

export default Header;
