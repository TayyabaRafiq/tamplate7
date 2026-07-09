"use client";
import React, { useEffect, useState } from 'react'
import { sanityFetch } from "@/sanity/lib/fetch";
import { allcars } from "@/sanity/lib/queries";

type Car = {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: number;
  originalPrice: number;
  tags: string[];
  imageUrl: string;
  slug: string;
};

function formatPrice(price: string | number) {
  const cleaned = String(price).replace(/\$/g, "").replace(/\/day/gi, "").trim();
  return cleaned;
}

const Page = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const data = await sanityFetch({ query: allcars });
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] p-8 text-white">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-black tracking-tight">Admin Dashboard</h1>
        
        <div className="bg-[#1E293B] p-6 rounded-2xl border border-slate-800 space-y-2 max-w-xs">
          {/* Stats Summary */}
          <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider">Available Fleet</h3>
          <p className="text-4xl font-black text-green-500">{cars.length}</p>
        </div>

        <div className="bg-[#1E293B] rounded-2xl border border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex justify-between items-center">
            <h2 className="text-xl font-bold">Vehicle Fleet</h2>
            <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">{cars.length} Vehicles</span>
          </div>
          <div className="p-6 space-y-4">
            {loading ? (
              <div className="text-center text-slate-500 italic py-8">Loading fleet...</div>
            ) : cars.length === 0 ? (
              <div className="text-center text-slate-500 italic py-8">No vehicles found in fleet.</div>
            ) : (
              cars.map((car) => (
                <div key={car._id} className="flex justify-between items-center p-4 bg-[#0F172A] rounded-xl border border-slate-800">
                  <div>
                    <h3 className="font-bold text-white">{car.name}</h3>
                    <p className="text-slate-400 text-xs">{car.brand}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#F59E0B] font-black">${formatPrice(car.pricePerDay)}</p>
                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter">Per Day</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page