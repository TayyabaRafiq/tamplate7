"use client";

import { sanityFetch } from "@/sanity/lib/fetch";
import { allcars } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IoMdHeart } from "react-icons/io";

type Cars = {
    _id : string,
    name : string,
    brand : string,
    type : string,
    fuelCapacity : string,
    transmission : string,
    seatingCapacity : string
    pricePerDay : number,
    originalPrice : number,
    tags : string[],
    imageUrl : string;
    slug: string;
}

function CarsPageContent() {
  const searchParams = useSearchParams();
  const search = searchParams?.get('search')?.toString() ?? '';
  const typeParam = searchParams?.get('type')?.toString() ?? '';
  const [cars, setCars] = useState<Cars[]>([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const data = await sanityFetch({ query: allcars });
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
    fetchCars();
  }, []);

  const filtered = cars.filter((c) => {
    const matchesSearch = search
      ? c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.brand.toLowerCase().includes(search.toLowerCase())
      : true;
    const matchesType = typeParam
      ? c.type.toLowerCase() === typeParam.toLowerCase()
      : true;
    return matchesSearch && matchesType;
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((car) => (
          <Card key={car._id} className="bg-[#1E293B] border-slate-800 flex flex-col justify-between overflow-hidden group hover:border-blue-500/50 transition-colors">
            <Link href={`/cars/${car.slug}`}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center text-white">
                  {car.name} <IoMdHeart className="text-red-600" />
                </CardTitle>
                <CardDescription className="text-slate-500">{car.brand} • {car.type}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-6 py-4">
                <div className="relative w-full h-32">
                  <Image
                    src={car.imageUrl}
                    alt={car.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 w-full text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                  <div className="flex items-center gap-1"><span className="text-primary">⛽</span> {car.fuelCapacity}</div>
                  <div className="flex items-center gap-1"><span className="text-primary">🛠</span> {car.transmission}</div>
                  <div className="flex items-center gap-1"><span className="text-primary">🛋</span> {car.seatingCapacity}</div>
                </div>
              </CardContent>
            </Link>
            
            <CardFooter className="flex items-center justify-between border-t border-slate-800 pt-6 mt-auto">
              <div>
                <p className="text-white font-bold text-lg">${car.pricePerDay}/<span className="text-slate-500 text-sm font-normal">day</span></p>
                {car.originalPrice > car.pricePerDay && (
                  <p className="text-slate-500 text-xs line-through">${car.originalPrice}</p>
                )}
              </div>
              <Link href={`/payment?car=${car.slug}`}>
                <button className="bg-primary px-4 py-2 text-white rounded-lg hover:bg-primary/90 transition font-bold text-sm">Rent Now</button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function CarsPage() {
  return (
    <Suspense fallback={<div className="text-center text-slate-500 py-12">Loading cars...</div>}>
      <CarsPageContent />
    </Suspense>
  );
}
