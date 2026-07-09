import Image from 'next/image'
import React from 'react'
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
        
        {/* Left Sidebar (Placeholder for clean look) */}
        <div className="w-full md:w-64 flex-shrink-0 space-y-8 bg-[#1E293B] p-6 rounded-2xl border border-slate-800 h-fit">
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Navigation</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-sm text-slate-300 hover:text-primary transition-colors">Home</Link>
              <Link href="/category" className="block text-sm text-slate-300 hover:text-primary transition-colors">Category</Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          <section className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <div className="relative aspect-video bg-blue-600 rounded-2xl overflow-hidden shadow-2xl">
                <Image src='/images/DetailRentCar.png' alt='Main car' fill className="object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative aspect-square bg-[#1E293B] rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-colors cursor-pointer">
                    <Image src={`/images/View ${i}.png`} alt={`View ${i}`} fill className="object-contain p-2" />
                  </div>
                ))}
              </div>
            </div>

            <Card className="flex-1 bg-[#1E293B] border-slate-800 p-6 md:p-8 flex flex-col justify-between">
              <CardHeader className="p-0 space-y-4">
                <CardTitle className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-black tracking-tight">Nissan GT-R</h1>
                    <div className="flex items-center gap-1 mt-2">
                      {[1, 2, 3, 4].map((i) => <span key={i} className="text-yellow-500 text-xs">★</span>)}
                      <span className="text-slate-600 text-xs">★</span>
                      <span className="text-slate-400 text-xs ml-2 font-medium">440+ Reviews</span>
                    </div>
                  </div>
                  <IoMdHeart className="text-red-600 w-8 h-8" />
                </CardTitle>
                <CardDescription className="text-slate-400 leading-relaxed text-base">
                  NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 py-8">
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  <div className="flex justify-between pr-8 border-r border-slate-800"><span className="text-slate-500">Type</span><span className="font-bold">Sport</span></div>
                  <div className="flex justify-between pl-8"><span className="text-slate-500">Capacity</span><span className="font-bold">2 Person</span></div>
                  <div className="flex justify-between pr-8 border-r border-slate-800"><span className="text-slate-500">Steering</span><span className="font-bold">Manual</span></div>
                  <div className="flex justify-between pl-8"><span className="text-slate-500">Gasoline</span><span className="font-bold">70L</span></div>
                </div>
              </CardContent>
              <CardFooter className="p-0 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-black">$80.00/ <span className="text-slate-500 text-sm font-normal">day</span></p>
                  <p className="text-slate-500 text-sm line-through">$100.00</p>
                </div>
                <Link href="/payment?car=nissan-gt-r">
                  <button className="bg-primary px-10 py-4 text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-blue-500/20 active:scale-95">Rent Now</button>
                </Link>
              </CardFooter>
            </Card>
          </section>

          <section className="bg-[#1E293B] rounded-2xl p-8 border border-slate-800">
            <h2 className="text-xl font-bold mb-6">Recent Reviews</h2>
            <div className="relative w-full aspect-[2/1] max-w-[940px] mx-auto opacity-80 grayscale hover:grayscale-0 transition-all">
              <Image src='/images/Reviews.png' alt='Reviews placeholder' fill className="object-contain" />
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Recommended Cars</h2>
              <Link href="/category" className="text-primary hover:underline text-sm font-bold">View All</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Koenigsegg', slug: 'koenigsegg', img: 'car.png', price: '99' },
                { name: 'Nissan GT-R', slug: 'nissan-gt-r', img: 'car2.png', price: '80' },
                { name: 'Rolls-Royce', slug: 'rolls-royce', img: 'Car3.png', price: '96' }
              ].map((car) => (
                <Card key={car.slug} className="bg-[#1E293B] border-slate-800 flex flex-col justify-between overflow-hidden group">
                  <Link href={`/cars/${car.slug}`}>
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center text-white">
                        {car.name} <CiHeart className="text-slate-500" />
                      </CardTitle>
                      <CardDescription className="text-slate-500">Sport</CardDescription>
                    </CardHeader>
                    <CardContent className="py-8">
                      <div className="relative w-full h-32">
                        <Image src={`/images/${car.img}`} alt={car.name} fill className="object-contain group-hover:scale-105 transition-transform" />
                      </div>
                    </CardContent>
                  </Link>
                  <CardFooter className="flex items-center justify-between border-t border-slate-800 pt-6">
                    <p className="text-white font-bold text-lg">${car.price}.00/<span className="text-slate-500 text-sm font-normal">day</span></p>
                    <Link href={`/payment?car=${car.slug}`}>
                      <button className="bg-primary px-4 py-2 text-white rounded-lg hover:bg-primary/90 transition font-bold text-sm">Rent Now</button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default page