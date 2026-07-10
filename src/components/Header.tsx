"use client";

import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');

  return (
    <div className="flex flex-wrap items-center justify-between w-full px-4 py-4 bg-[#1E293B] border-b border-slate-800">
      {/* Logo */}
      <Link href="/" className="text-3xl font-bold text-primary lg:text-4xl tracking-tighter">
        MORENT
      </Link>

      {/* Search Bar */}
      <div className="w-full mt-4 lg:mt-0 lg:w-auto lg:flex-grow lg:max-w-[492px] lg:mx-8">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search for cars..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const params = new URLSearchParams();
                if (search) params.set('search', search);
                router.push(`/CarsPage?${params.toString()}`);
              }
            }}
            className="w-full px-4 py-2 bg-secondary text-foreground placeholder:text-muted-foreground border-border rounded-md"
          />
        </div>
      </div>

    </div>
  );
};

export default Header;
