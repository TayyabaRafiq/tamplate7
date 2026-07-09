import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCarBySlug } from "@/sanity/lib/getCar";
import { CheckCircle } from "lucide-react";

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: { car?: string };
}) {
  const carSlug = searchParams.car;
  const car = carSlug ? await getCarBySlug(carSlug) : null;

  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col text-white">
      <div className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="max-w-2xl w-full bg-[#1E293B] rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700/50 text-center space-y-8 animate-in fade-in zoom-in duration-500">
          
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="bg-green-500/10 p-4 rounded-full border border-green-500/20">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight">Booking Confirmed!</h1>
            <p className="text-slate-400 text-lg">Your reservation has been successfully processed.</p>
          </div>

          {/* Car Details Summary */}
          {car && (
            <div className="bg-[#0F172A] rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row items-center gap-6 text-left">
              <div className="relative w-40 h-24 flex-shrink-0 bg-blue-600/10 rounded-xl overflow-hidden border border-blue-500/20">
                <Image 
                  src={car.imageUrl} 
                  alt={car.name} 
                  fill 
                  className="object-contain p-2"
                />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">{car.name}</h2>
                <p className="text-slate-500 text-sm">{car.brand} • {car.type}</p>
                <p className="text-[#F59E0B] font-bold text-lg">${car.pricePerDay} <span className="text-slate-600 text-sm font-normal">/ day</span></p>
              </div>
            </div>
          )}

          {/* Thank You Message */}
          <div className="space-y-4 pt-4 border-t border-slate-700/50">
            <p className="text-slate-300 leading-relaxed">
              Thank you for choosing <span className="text-blue-400 font-bold italic">MORENT</span>. We've sent a detailed confirmation email with your rental agreement and pick-up instructions.
            </p>
            <p className="text-slate-500 text-sm">
              Booking Reference: <span className="text-white font-mono">MOR-{Math.random().toString(36).substring(2, 9).toUpperCase()}</span>
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-6">
            <Link href="/">
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg shadow-orange-500/20 active:scale-95 w-full md:w-auto">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
