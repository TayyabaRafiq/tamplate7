import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div className="min-h-screen bg-[#f6f7f9] flex flex-col">
      <div className="payment w-full p-4 flex flex-col gap-6 md:flex-row justify-center">
        <div className="cards w-full md:w-3/4 grid grid-cols-1 gap-6">
          <Card className="w-full h-auto flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Billing Info</CardTitle>
              <CardDescription className="w-full flex flex-col sm:flex-row sm:justify-between">
                <h1>Please enter your billing info</h1>
                <h1>Step 1 of 4</h1>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="w-full flex flex-wrap gap-4">
                <div className="w-full flex flex-col gap-3 md:w-[46%]">
                  <label className="font-bold" htmlFor="name">Name</label>
                  <Input placeholder="Your Name" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
                </div>
                <div className="w-full flex flex-col gap-3 md:w-[46%]">
                  <label className="font-bold" htmlFor="phone">Phone Number</label>
                  <Input placeholder="Your Phone Number" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-4">
                <div className="w-full flex flex-col gap-3 md:w-[46%]">
                  <label className="font-bold" htmlFor="address">Address</label>
                  <Input placeholder="Your Address" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
                </div>
                <div className="w-full flex flex-col gap-3 md:w-[46%]">
                  <label className="font-bold" htmlFor="city">Town/City</label>
                  <Input placeholder="Your Town/City" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full h-auto flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Rental Info</CardTitle>
              <CardDescription className="w-full flex flex-col sm:flex-row sm:justify-between">
                <h1>Please select your rental date</h1>
                <h1>Step 2 of 4</h1>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div>
                <Image src="/images/Pick - Up1.png" alt="" width={104} height={20} />
              </div>
              <div className="sec w-full flex flex-wrap gap-4">
                <div className="add flex flex-col gap-3 w-full md:w-[46%]">
                  <label className="font-bold" htmlFor="location">Locations</label>
                  <select title="city" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                    <option value="">Select Your City</option>
                  </select>
                </div>
                <div className="city flex flex-col gap-3 w-full md:w-[46%]">
                  <label className="font-bold" htmlFor="date">Date</label>
                  <select title="date" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                    <option value="">Select Your Date</option>
                  </select>
                </div>
              </div>
              <div className="third w-full md:w-[46%]">
                <div className="city flex flex-col gap-3">
                  <label className="font-bold" htmlFor="time">Time</label>
                  <select title="time" className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl">
                    <option value="">Select Your Time</option>
                  </select>
                </div>
              </div>
              <div>
                <Image src="/images/Drop - Off1.png" alt="" width={104} height={20} />
              </div>
            </CardContent>
          </Card>

          <Card className="w-full h-auto flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription className="w-full flex flex-col sm:flex-row sm:justify-between">
                <h1>Please enter your payment method</h1>
                <h1>Step 3 of 4</h1>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <Image src="/images/Credit Card.png" alt="" width={1100} height={308} />
              <Image src="/images/PayPal.png" alt="" width={1100} height={56} />
              <Image src="/images/Bitcoin.png" alt="" width={1100} height={56} />
            </CardContent>
          </Card>

          <Card className="w-full h-auto flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Confirmation</CardTitle>
              <CardDescription className="w-full flex flex-col sm:flex-row sm:justify-between">
                <h1>We are getting to the end. Just a few clicks and your rental is ready</h1>
                <h1>Step 4 of 4</h1>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Image src="/images/Confirmation.png" alt="" width={1100} height={136} />
              <Link href="/admin">
                <button className="bg-[#3563E9] p-2 text-white rounded w-full md:w-auto">Rent Now</button>
              </Link>
              <Image src="/images/Safe Data.png" alt="" width={548} height={100} />
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-1/4">
          <Image src="/images/Rental Summary.png" alt="" width={492} height={560} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
