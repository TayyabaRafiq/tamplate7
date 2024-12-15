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
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div className=''>
      <div  >
        <h1 className='text-[#90A3BF] text-sm md:text-lg font-medium'>Details Car Rent</h1>
        </div>
        <div className='flex'>
       <div className=' flex w-[25%]'>
       <Image  src='/images/Nav Bar Side.png' alt='' width={360} height={1600} />
        </div>

        <div className='w-[75%]'>
          <section className=' flex'>
            
            <div className=' gap-6 flex flex-col items-center justify-around h-[508px]'>
              <div className='w-[492px]'>
                <Image src='/images/DetailRentCar.png' alt='' width={492} height={300} />
              </div>
              <div className='flex gap-4'>
              <Image src='/images/View 1.png' alt='' width={148} height={124} />
              <Image src='/images/View 2.png' alt='' width={148} height={124} />
              <Image src='/images/View 3.png' alt='' width={148} height={124} />
              </div>
              </div>
             
              

              <div className=' h-[632px] mr-4'>
              <Card className='h-[500px] '>
  <CardHeader>
    <CardTitle className='w-full flex items-center justify-between'><Image src='/images/Car Name.png' alt='' width={220} height={72} /><IoMdHeart className="text-red-600" /></CardTitle>
    <CardDescription><p className='text-[#596780]'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
     
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p><Image src='/images/Spesification2.png' alt='' width={444} height={72} /></p>
  </CardContent>
  <CardFooter className="w-full flex items-center justify-between">
    <p><Image src='/images/price.png' alt='' width={200} height={56} /></p>
    <Link href='/payment'  >
    <button className="bg-[#3563E9] p-2 text-white rounded">Rent Now</button>
    </Link>
  </CardFooter>
</Card>
              </div>
              </section>
              <section>
                <Image src='/images/Reviews.png' alt='' width={940} height={400} />
                
              </section>

              <section className="w-[940px] p-4 ">
              <div className='flex justify-between items-center mt-6'>
        <h1 className='text-[#90A3BF] text-sm md:text-lg font-medium'>Popular Car</h1>
        <Link href='/category' >
        <h1 className='text-[#3563E9] text-sm md:text-lg font-medium'>View All</h1>
        </Link>
        </div>

        <div className="grid  grid-cols-3 gap-4">

          <Card className="w-full h-auto">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">Koenigsegg <IoMdHeart className="text-red-600" /> </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src='/images/car.png' alt='' width={220} height={68} />
              <Image src='/images/Spesification.png' alt='' width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>$99.00/<span className="text-slate-400">day</span></p>
              <button className="bg-[#3563E9] p-2 text-white rounded">Rent Now</button>
            </CardFooter>
          </Card>

         < Card className="w-full h-auto">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">Nissan GT - R <CiHeart /> </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src='/images/car2.png' alt='' width={220} height={68} />
              <Image src='/images/Spesification.png' alt='' width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>$99.00/<span className="text-slate-400">day</span></p>
              <Link href='/payment' >
              <button className="bg-[#3563E9] p-2 text-white rounded">Rent Now</button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full h-auto">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">Rolls - Royce <CiHeart /> </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src='/images/Car3.png' alt='' width={220} height={68} />
              <Image src='/images/Spesification.png' alt='' width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>$99.00/<span className="text-slate-400">day</span></p>
              <button className="bg-[#3563E9] p-2 text-white rounded">Rent Now</button>
            </CardFooter>
          </Card>
          </div>
       </section>

       <section className="w-[940px] p-4 ">
       <div  >
        <h1 className='text-[#90A3BF] text-sm md:text-lg font-medium'>Recomendation Car</h1>
        </div>
        <div className="grid  grid-cols-3 gap-4">

         <Card className="w-full h-auto">
           <CardHeader>
             <CardTitle className="w-full flex items-center justify-between">All New Rush <CiHeart /> </CardTitle>
             <CardDescription>Sport</CardDescription>
           </CardHeader>
           <CardContent className="w-full flex flex-col items-center justify-center gap-4">
             <Image src='/images/Car5.png' alt='' width={220} height={68} />
             <Image src='/images/Spesification.png' alt='' width={256} height={24} />
           </CardContent>
           <CardFooter className="w-full flex items-center justify-between">
             <p>$99.00/<span className="text-slate-400">day</span></p>
             <button className="bg-[#3563E9] p-2 text-white rounded">Rent Now</button>
           </CardFooter>
         </Card> 

         <Card className="w-full h-auto">
           <CardHeader>
             <CardTitle className="w-full flex items-center justify-between">CR  - V <IoMdHeart className="text-red-600" /> </CardTitle>
             <CardDescription>Sport</CardDescription>
           </CardHeader>
           <CardContent className="w-full flex flex-col items-center justify-center gap-4">
             <Image src='/images/Car4.png' alt='' width={220} height={68} />
             <Image src='/images/Spesification.png' alt='' width={256} height={24} />
           </CardContent>
           <CardFooter className="w-full flex items-center justify-between">
             <p>$99.00/<span className="text-slate-400">day</span></p>
             <button className="bg-[#3563E9] p-2 text-white rounded">Rent Now</button>
           </CardFooter>
         </Card>

         <Card className="w-full h-auto">
           <CardHeader>
             <CardTitle className="w-full flex items-center justify-between">All New Terios  <CiHeart /> </CardTitle>
             <CardDescription>Sport</CardDescription>
           </CardHeader>
           <CardContent className="w-full flex flex-col items-center justify-center gap-4">
             <Image src='/images/Car5.png' alt='' width={220} height={68} />
             <Image src='/images/Spesification.png' alt='' width={256} height={24} />
           </CardContent>
           <CardFooter className="w-full flex items-center justify-between">
             <p>$99.00/<span className="text-slate-400">day</span></p>
             <button className="bg-[#3563E9] p-2 text-white rounded">Rent Now</button>
           </CardFooter>
         </Card> 
        </div>
       </section>
       </div>   
        </div>
        <Footer />
    </div>
  )
}

export default page