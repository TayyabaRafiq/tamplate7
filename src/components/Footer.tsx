import React from 'react';

import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full bg-[#1E293B] px-4 md:px-10 lg:px-20 py-16 text-white border-t border-slate-800">
      {/* Top Section */}
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-y-12">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4">
          <Link href="/" className="text-3xl font-bold text-primary tracking-tighter">MORENT</Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-[300px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-16">
          {/* About */}
          <ul className="space-y-2">
            <li className="font-bold text-lg">About</li>
            <li className="text-muted-foreground text-sm">How it works</li>
            <li className="text-muted-foreground text-sm">Featured</li>
            <li className="text-muted-foreground text-sm">Partnership</li>
            <li className="text-muted-foreground text-sm">Business Relation</li>
          </ul>

          {/* Community */}
          <ul className="space-y-2">
            <li className="font-bold text-lg">Community</li>
            <li className="text-muted-foreground text-sm">Events</li>
            <li className="text-muted-foreground text-sm">Blog</li>
            <li className="text-muted-foreground text-sm">Podcast</li>
            <li className="text-muted-foreground text-sm">Invite a friend</li>
          </ul>

          {/* Socials */}
          <ul className="space-y-2">
            <li className="font-bold text-lg">Socials</li>
            <li className="text-muted-foreground text-sm">Discord</li>
            <li className="text-muted-foreground text-sm">Instagram</li>
            <li className="text-muted-foreground text-sm">Twitter</li>
            <li className="text-muted-foreground text-sm">Facebook</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-y-6 py-8 border-t border-slate-800">
        <h1 className="text-sm font-medium text-slate-500">
          ©2026 MORENT. All rights reserved
        </h1>
        <div className="flex gap-x-8">
          <h1 className="text-sm font-semibold text-white hover:text-primary transition-colors cursor-pointer">
            Privacy & Policy
          </h1>
          <h1 className="text-sm font-semibold text-white hover:text-primary transition-colors cursor-pointer">
            Terms & Condition
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
