"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sanityFetch } from '@/sanity/lib/fetch';
import { fourcars } from '@/sanity/lib/queries';
import { IoMdHeart } from "react-icons/io";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Car = {
  _id: string;
  name: string;
  brand: string;
  pricePerDay: number;
  imageUrl: string;
  slug: string;
};

const Hero = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const data = await sanityFetch({ query: fourcars });
        setCars(data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    }
    fetchCars();
  }, []);

  const filtered = cars;

  return (
    <div className='max-w-[1440px] mx-auto space-y-12 py-8'>
      
      {/* Real Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden bg-gradient-to-br from-blue-600 to-blue-900 flex items-center px-8 md:px-16">
        <div className="max-w-xl space-y-6 z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Premium <span className="text-orange-400">Car Rental</span> Experience
          </h1>
          <p className="text-blue-100 text-lg md:text-xl leading-relaxed">
            Drive your dream car at the best daily rates. From luxury sedans to high-performance sports cars.
          </p>
          <div className="pt-4">
            <Link href="/category">
              <button className="bg-primary hover:bg-primary/90 text-white font-black py-4 px-10 rounded-2xl transition-all shadow-xl shadow-orange-500/20 active:scale-95">
                Explore Fleet
              </button>
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute right-[-10%] bottom-0 w-2/3 h-full opacity-20 pointer-events-none">
          <Image src="/images/car.png" alt="Decorative car" fill className="object-contain" />
        </div>
      </section>

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-black text-white tracking-tight">Available Now</h2>
          <Link href="/category" className="text-primary hover:underline text-sm font-bold">View All</Link>
        </div>
        
        {/* Car cards */}
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {filtered.map((car) => (
            <Card key={car._id} className='bg-[#1E293B] border-slate-800 flex flex-col justify-between overflow-hidden group hover:border-blue-500/50 transition-colors'>
              <Link href={`/cars/${car.slug}`}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-white">
                    {car.name} <IoMdHeart className="text-red-600" />
                  </CardTitle>
                  <CardDescription className="text-slate-500">{car.brand}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-6 py-6">
                  <div className="relative w-full h-32">
                    <Image src={car.imageUrl} alt={car.name} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </CardContent>
              </Link>
              <CardFooter className="flex items-center justify-between border-t border-slate-800 pt-6 mt-auto">
                <p className="text-white font-bold text-lg">${car.pricePerDay}/<span className="text-slate-500 text-sm font-normal">day</span></p>
                <Link href={`/payment?car=${car.slug}`}>
                  <button className="bg-primary px-4 py-2 text-white rounded-lg hover:bg-primary/90 transition font-bold text-sm">Rent Now</button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Hero;
