import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { getCarBySlug } from "@/sanity/lib/getCar";

export default async function PaymentPage({
  searchParams,
}: {
  searchParams: { car?: string };
}) {
  const carSlug = searchParams.car;
  const car = carSlug ? await getCarBySlug(carSlug) : null;

  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col text-foreground">
      <div className="payment w-full p-4 md:p-8 flex flex-col gap-8 lg:flex-row justify-center max-w-[1440px] mx-auto">
        
        {/* Left Side: Core Booking Elements */}
        <div className="flex-1 flex flex-col gap-8">
          
          {/* 1. Billing Information Form */}
          <Card className="bg-[#1E293B] border-slate-700 shadow-xl rounded-2xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-2xl font-bold">Billing Information</CardTitle>
              <CardDescription className="text-slate-400">
                Please enter your details for the rental agreement
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Full Name</label>
                  <Input placeholder="John Doe" className="bg-[#0F172A] border-slate-700 text-white h-14 focus:ring-blue-500 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Phone Number</label>
                  <Input placeholder="+1 (555) 000-0000" className="bg-[#0F172A] border-slate-700 text-white h-14 focus:ring-blue-500 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Address</label>
                  <Input placeholder="123 Street, City" className="bg-[#0F172A] border-slate-700 text-white h-14 focus:ring-blue-500 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Town / City</label>
                  <Input placeholder="New York" className="bg-[#0F172A] border-slate-700 text-white h-14 focus:ring-blue-500 rounded-xl" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 2. Payment Method Section */}
          <Card className="bg-[#1E293B] border-slate-700 shadow-xl rounded-2xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-2xl font-bold">Payment Method</CardTitle>
              <CardDescription className="text-slate-400">
                Select your preferred way to pay
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Credit Card Option (Active) */}
              <div className="bg-[#0F172A] p-6 rounded-2xl border border-blue-500/30 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-4 border-blue-500 bg-[#0F172A]" />
                    <span className="font-bold text-white">Credit Card</span>
                  </div>
                  <div className="flex gap-2">
                    <Image src="/images/Credit Card.png" alt="Visa/Mastercard" width={92} height={20} className="opacity-80" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Card Number</label>
                    <Input placeholder="0000 0000 0000 0000" className="bg-[#1E293B] border-slate-700 text-white h-12 rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Expiration Date</label>
                    <Input placeholder="MM / YY" className="bg-[#1E293B] border-slate-700 text-white h-12 rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Card Holder</label>
                    <Input placeholder="Holder Name" className="bg-[#1E293B] border-slate-700 text-white h-12 rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">CVC</label>
                    <Input placeholder="000" className="bg-[#1E293B] border-slate-700 text-white h-12 rounded-lg" />
                  </div>
                </div>
              </div>
              
              {/* PayPal Option */}
              <div className="bg-[#0F172A]/50 p-5 rounded-2xl border border-slate-800 flex justify-between items-center opacity-70 hover:opacity-100 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-slate-600" />
                  <span className="font-semibold text-slate-300">PayPal</span>
                </div>
                <Image src="/images/PayPal.png" alt="PayPal" width={100} height={24} className="object-contain" />
              </div>

              {/* Bitcoin Option */}
              <div className="bg-[#0F172A]/50 p-5 rounded-2xl border border-slate-800 flex justify-between items-center opacity-70 hover:opacity-100 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-slate-600" />
                  <span className="font-semibold text-slate-300">Bitcoin</span>
                </div>
                <Image src="/images/Bitcoin.png" alt="Bitcoin" width={100} height={24} className="object-contain" />
              </div>
            </CardContent>
          </Card>

          {/* 3. Confirmation & Terms */}
          <Card className="bg-[#1E293B] border-slate-700 shadow-xl rounded-2xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-white text-2xl font-bold">Confirmation</CardTitle>
              <CardDescription className="text-slate-400">
                Final step to secure your dream car
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-8">
              <div className="bg-[#0F172A] p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="marketing" className="mt-1 w-5 h-5 accent-blue-500 bg-[#1E293B] border-slate-700 rounded cursor-pointer" />
                  <label htmlFor="marketing" className="text-slate-300 text-sm cursor-pointer leading-relaxed">
                    I agree with receiving marketing emails and newsletters. No spam, we promise!
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="terms" className="mt-1 w-5 h-5 accent-blue-500 bg-[#1E293B] border-slate-700 rounded cursor-pointer" />
                  <label htmlFor="terms" className="text-slate-300 text-sm cursor-pointer leading-relaxed">
                    I agree with the <span className="text-blue-400 hover:underline">Terms and Conditions</span> and <span className="text-blue-400 hover:underline">Privacy Policy</span>.
                  </label>
                </div>
              </div>

              {/* 5. Final Confirm Booking Button */}
              <div className="flex flex-col gap-4">
                <Link href={`/confirmation?car=${carSlug}`} className="block">
                  <button className="bg-primary hover:bg-primary/90 text-white text-lg font-bold py-5 px-12 rounded-2xl transition-all w-full md:w-auto shadow-lg shadow-orange-500/20 active:scale-[0.98]">
                    Confirm Booking
                  </button>
                </Link>
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Image src="/images/Safe Data.png" alt="Safe" width={24} height={24} className="opacity-70" />
                    <span className="font-bold text-white text-sm">All your data is secure</span>
                  </div>
                  <p className="text-slate-500 text-xs pl-8">
                    We use 256-bit SSL encryption to protect your sensitive information.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 4. Dynamic Rental Summary (Right Sidebar) */}
        <div className="w-full lg:w-[400px]">
          <Card className="bg-[#1E293B] border-slate-700 shadow-2xl rounded-2xl overflow-hidden sticky top-8">
            <CardHeader className="bg-[#161E2C] border-b border-slate-700/50">
              <CardTitle className="text-white text-xl font-bold">Rental Summary</CardTitle>
              <CardDescription className="text-slate-500 text-xs mt-1">
                Base price calculated for your selected vehicle
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8 space-y-8">
              {car ? (
                <div className="flex items-center gap-5">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-3 w-32 h-24 flex items-center justify-center relative shadow-inner overflow-hidden">
                    <Image src={car.imageUrl} alt={car.name} fill className="object-contain p-2 hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-white text-xl font-black tracking-tight leading-none">{car.name}</h2>
                    <div className="flex items-center gap-1 py-1">
                      {[1, 2, 3, 4].map((i) => (
                        <span key={i} className="text-yellow-500 text-xs">★</span>
                      ))}
                      <span className="text-slate-600 text-xs">★</span>
                      <span className="text-slate-400 text-[10px] ml-2 font-medium">440+ Reviews</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-slate-500 italic text-sm py-4 text-center bg-[#0F172A] rounded-xl border border-dashed border-slate-800">
                  No vehicle selected for booking
                </div>
              )}
              
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-center text-slate-400">
                  <span className="text-sm">Daily Rental Rate</span>
                  <span className="text-white font-bold">${car?.pricePerDay || "0.00"}</span>
                </div>
                <div className="flex justify-between items-center text-slate-400 border-b border-slate-800 pb-4">
                  <span className="text-sm">Tax & Service Fee</span>
                  <span className="text-white font-bold">$0.00</span>
                </div>
                
                <div className="bg-[#0F172A] p-4 rounded-xl flex items-center justify-between border border-slate-800 group focus-within:border-blue-500/50 transition-colors">
                  <input placeholder="Promo code" className="bg-transparent border-none text-slate-300 text-sm outline-none w-2/3" />
                  <button className="text-blue-400 font-bold text-sm hover:text-blue-300 transition-colors">Apply</button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4 bg-[#161E2C] border-t border-slate-700/50 p-8">
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col">
                  <span className="text-white font-black text-xl leading-tight">Total Price</span>
                  <span className="text-slate-500 text-[10px] font-medium uppercase tracking-widest">Includes VAT & discounts</span>
                </div>
                <span className="text-[#F59E0B] font-black text-3xl leading-none">
                  ${car?.pricePerDay || "0.00"}
                </span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
