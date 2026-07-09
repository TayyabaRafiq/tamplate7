import React from 'react'
import Image from 'next/image'

import { IoMdHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';

const page = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row p-4 gap-8">
        
        {/* Filter Sidebar (Placeholder for clean look) */}
        <div className="w-full md:w-64 flex-shrink-0 space-y-8 bg-[#1E293B] p-6 rounded-2xl border border-slate-800 h-fit">
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Type</h3>
            <div className="space-y-3">
              {['Sport', 'SUV', 'MPV', 'Sedan'].map((type) => (
                <Link key={type} href={`/CarsPage?type=${type}`}>
                  <div className="flex items-center gap-3 text-sm hover:text-primary transition-colors cursor-pointer">
                    <div className="w-4 h-4 border border-slate-700 rounded bg-[#0F172A]" />
                    <span>{type}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Capacity</h3>
            <div className="space-y-3">
              {['2 Person', '4 Person', '6 Person', '8 or More'].map((cap) => (
                <div key={cap} className="flex items-center gap-3 text-sm">
                  <div className="w-4 h-4 border border-slate-700 rounded bg-[#0F172A]" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1E293B] border-slate-800 flex flex-col justify-between overflow-hidden group">
              <Link href="/cars/koenigsegg">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-white">
                    Koenigsegg <IoMdHeart className="text-red-600" />
                  </CardTitle>
                  <CardDescription className="text-slate-500">Sport</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-6 py-4">
                  <div className="relative w-full h-32">
                    <Image src='/images/car.png' alt='Koenigsegg' fill className="object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="flex gap-4 opacity-70">
                    <Image src='/images/Spesification.png' alt='Specs' width={256} height={24} className="invert brightness-200" />
                  </div>
                </CardContent>
              </Link>
              <CardFooter className="flex items-center justify-between border-t border-slate-800 pt-6 mt-2">
                <p className="text-white font-bold text-lg">$99.00/<span className="text-slate-500 text-sm font-normal">day</span></p>
                <Link href="/payment?car=koenigsegg">
                  <button className="bg-primary px-4 py-2 text-white rounded-lg hover:bg-primary/90 transition font-bold text-sm">Rent Now</button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-[#1E293B] border-slate-800 flex flex-col justify-between overflow-hidden group">
              <Link href="/cars/nissan-gt-r">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-white">
                    Nissan GT - R <CiHeart className="text-slate-500" />
                  </CardTitle>
                  <CardDescription className="text-slate-500">Sport</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-6 py-4">
                  <div className="relative w-full h-32">
                    <Image src='/images/car2.png' alt='Nissan GT-R' fill className="object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="flex gap-4 opacity-70">
                    <Image src='/images/Spesification.png' alt='Specs' width={256} height={24} className="invert brightness-200" />
                  </div>
                </CardContent>
              </Link>
              <CardFooter className="flex items-center justify-between border-t border-slate-800 pt-6 mt-2">
                <p className="text-white font-bold text-lg">$80.00/<span className="text-slate-500 text-sm font-normal">day</span></p>
                <Link href="/payment?car=nissan-gt-r">
                  <button className="bg-primary px-4 py-2 text-white rounded-lg hover:bg-primary/90 transition font-bold text-sm">Rent Now</button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-[#1E293B] border-slate-800 flex flex-col justify-between overflow-hidden group">
              <Link href="/cars/rolls-royce">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-white">
                    Rolls - Royce <CiHeart className="text-slate-500" />
                  </CardTitle>
                  <CardDescription className="text-slate-500">Sport</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-6 py-4">
                  <div className="relative w-full h-32">
                    <Image src='/images/Car3.png' alt='Rolls-Royce' fill className="object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="flex gap-4 opacity-70">
                    <Image src='/images/Spesification.png' alt='Specs' width={256} height={24} className="invert brightness-200" />
                  </div>
                </CardContent>
              </Link>
              <CardFooter className="flex items-center justify-between border-t border-slate-800 pt-6 mt-2">
                <p className="text-white font-bold text-lg">$96.00/<span className="text-slate-500 text-sm font-normal">day</span></p>
                <Link href="/payment?car=rolls-royce">
                  <button className="bg-primary px-4 py-2 text-white rounded-lg hover:bg-primary/90 transition font-bold text-sm">Rent Now</button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="flex justify-center py-8">
            <Link href="/CarsPage" className="bg-primary px-8 py-3 text-white rounded-xl font-bold hover:scale-105 transition-transform inline-block">
              Show More Cars
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page