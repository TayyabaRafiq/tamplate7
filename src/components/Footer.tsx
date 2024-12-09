import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-[#FFFFFF] px-4 md:px-10 lg:px-20 py-10">
      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-y-10">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-[#3563E9]">MORENT</h1>
          <p className="text-[#13131399] text-sm w-full md:w-[280px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-16">
          {/* About */}
          <ul className="space-y-2">
            <li className="font-bold text-lg">About</li>
            <li className="text-[#13131399] text-sm">How it works</li>
            <li className="text-[#13131399] text-sm">Featured</li>
            <li className="text-[#13131399] text-sm">Partnership</li>
            <li className="text-[#13131399] text-sm">Business Relation</li>
          </ul>

          {/* Community */}
          <ul className="space-y-2">
            <li className="font-bold text-lg">Community</li>
            <li className="text-[#13131399] text-sm">Events</li>
            <li className="text-[#13131399] text-sm">Blog</li>
            <li className="text-[#13131399] text-sm">Podcast</li>
            <li className="text-[#13131399] text-sm">Invite a friend</li>
          </ul>

          {/* Socials */}
          <ul className="space-y-2">
            <li className="font-bold text-lg">Socials</li>
            <li className="text-[#13131399] text-sm">Discord</li>
            <li className="text-[#13131399] text-sm">Instagram</li>
            <li className="text-[#13131399] text-sm">Twitter</li>
            <li className="text-[#13131399] text-sm">Facebook</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t mt-10 border-[#13131329]"></div>

      {/* Bottom Section */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center gap-y-4 md:gap-y-0 py-6">
        <h1 className="text-base font-semibold leading-6 text-center">
          ©2022 MORENT. All rights reserved
        </h1>
        <div className="flex flex-wrap md:flex-nowrap gap-x-6 gap-y-2 justify-center">
          <h1 className="text-base font-semibold leading-6 cursor-pointer">
            Privacy & Policy
          </h1>
          <h1 className="text-base font-semibold leading-6 cursor-pointer">
            Terms & Condition
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
