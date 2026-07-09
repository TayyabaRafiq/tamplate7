
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
import { getCarBySlug } from "@/sanity/lib/getCar";
import Image from "next/image";
import Link from "next/link";
import { IoMdHeart } from "react-icons/io";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

export default async function CarPage({
  params,
}: {
  params: { slug: string };
}) {
  const car = await getCarBySlug(params.slug);

  if (!car) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center text-white">
        <p className="text-xl font-bold">🚨 Car not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <div className="max-w-[1440px] mx-auto p-4 md:p-8 space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 font-bold uppercase tracking-widest">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/category" className="hover:text-primary transition-colors">Cars</Link>
          <span>/</span>
          <span className="text-white">{car.name}</span>
        </div>

        <section className="flex flex-col lg:flex-row gap-8">
          {/* Car Images Side */}
          <div className="flex-1 space-y-6">
            <div className="relative aspect-video bg-gradient-to-br from-blue-600 to-blue-900 rounded-[32px] overflow-hidden shadow-2xl border border-blue-500/20">
              <Image 
                src={car.imageUrl} 
                alt={car.name} 
                fill 
                className="object-contain p-8 hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative aspect-square bg-[#1E293B] rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all cursor-pointer group">
                  <Image src={car.imageUrl} alt={`${car.name} view ${i}`} fill className="object-contain p-4 group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* Car Info Side */}
          <Card className="flex-1 bg-[#1E293B] border-slate-800 p-6 md:p-10 flex flex-col justify-between shadow-2xl rounded-[32px]">
            <CardHeader className="p-0 space-y-6">
              <CardTitle className="flex justify-between items-start">
                <div className="space-y-2">
                  <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none">{car.name}</h1>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((i) => <span key={i} className="text-yellow-500 text-sm">★</span>)}
                    <span className="text-slate-600 text-sm">★</span>
                    <span className="text-slate-400 text-xs ml-3 font-bold uppercase tracking-widest">440+ Verified Reviews</span>
                  </div>
                </div>
                <button className="bg-[#0F172A] p-3 rounded-full border border-slate-800 hover:border-red-500/50 transition-colors group">
                  <IoMdHeart className="text-slate-600 group-hover:text-red-600 w-6 h-6 transition-colors" />
                </button>
              </CardTitle>
              <CardDescription className="text-slate-400 leading-relaxed text-lg font-medium">
                Experience the pinnacle of automotive excellence with the {car.brand} {car.name}. 
                Perfectly engineered for both city streets and open highways.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 py-10">
              <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm">
                <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Type</span>
                  <span className="font-black text-white">{car.type}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Capacity</span>
                  <span className="font-black text-white">{car.seatingCapacity} Person</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Steering</span>
                  <span className="font-black text-white">{car.transmission}</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Gasoline</span>
                  <span className="font-black text-white">{car.fuelCapacity}</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-0 flex items-center justify-between mt-6">
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-white">${car.pricePerDay}</span>
                  <span className="text-slate-500 font-bold text-sm">/ DAY</span>
                </div>
                {car.originalPrice > car.pricePerDay && (
                  <p className="text-slate-500 text-sm line-through font-bold">${car.originalPrice}</p>
                )}
              </div>
              <Link href={`/payment?car=${car.slug}`}>
                <button className="bg-primary px-12 py-5 text-white rounded-2xl font-black text-lg hover:bg-primary/90 transition-all shadow-xl shadow-orange-500/20 active:scale-95 uppercase tracking-tighter">
                  Rent Now
                </button>
              </Link>
            </CardFooter>
          </Card>
        </section>

        {/* Features / Details Placeholder */}
        <section className="bg-[#1E293B] rounded-[32px] p-8 md:p-12 border border-slate-800 space-y-8">
          <h2 className="text-2xl font-black tracking-tight text-white uppercase">Vehicle Specifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Model Year</h4>
              <p className="text-white font-black text-xl">2024</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Engine</h4>
              <p className="text-white font-black text-xl">V8 Twin-Turbo</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Drivetrain</h4>
              <p className="text-white font-black text-xl">AWD</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">0-60 MPH</h4>
              <p className="text-white font-black text-xl">3.2s</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}