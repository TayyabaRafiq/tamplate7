"use client";

import { sanityFetch } from "@/sanity/lib/fetch";

import { allcars } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


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
    slug: { current: string };
    
    }

    interface CarPageProps {
      params: { slug?: string }; 
  }


  export default function CarsPage() {
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

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Available Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car._id} className="border rounded-lg p-4 shadow-md">
          
          {/* car Image */}
          
           <Link href= {`/cars/${car._id}`}>
           
            <Image
              src={car.imageUrl}
              alt={car.name}
              width={300}
              height={200}
              className="rounded-md"
            />
           
            <h2 className="text-xl font-semibold mt-2">{car.name}</h2>
            <p className="text-gray-600">{car.brand} - {car.type}</p>
            <p className="text-gray-800 font-bold mt-1">💰 ${car.pricePerDay} / day</p>
            <p className="text-gray-500 text-sm">Original Price: ${car.originalPrice}</p>
            <p className="text-gray-500 text-sm">🛠 {car.transmission} | ⛽ {car.fuelCapacity}</p>
            <p className="text-gray-500 text-sm">🛋 {car.seatingCapacity}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {car.tags.map((tag,index) => (
                <span key={index} className="bg-gray-200 text-sm px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getCarById = async (id:string) => {
  try{
    const queryCar = 
    `*[_type == "car" && _id == $id][0] {
      _id,
      name,
      brand,
      type,
      seatingCapacity,
      pricePerDay,
      originalPrice,
      tags,
      "imageUrl": image.asset->url,
      
  }`
  const getCar: Cars | null = await sanityFetch({ query: queryCar, params: { id } });
  return getCar? getCar : null;

  } catch (error) {
   console.log(error);
   return null
  }
}

