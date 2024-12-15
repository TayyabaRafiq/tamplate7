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
import Footer from '@/components/Footer';

const page = () => {
  return (
    
    <div>
        <div  >
        <h1 className='text-[#90A3BF] text-sm md:text-lg font-medium'>Category Car Rent</h1>
        </div>
        <div className='flex'>  
           <div className='flex w-[25%] h-[1000px]'>
           <Image  src='/images/Nav Bar Side.png' alt='' width={360} height={1000} />
            </div>

            <div className='w-[75%]'>
                <section>
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
                               <Link href='/details' >
                               <button className="bg-[#3563E9] p-2 text-white rounded">Rent Now</button>
                               </Link>
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
                               <button className="bg-[#3563E9] p-2 text-white rounded">Rent Now</button>
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

                          <Card className="w-full h-auto">
                            <CardHeader>
                              <CardTitle className="w-full flex items-center justify-between">MG ZX Exclusice <IoMdHeart className="text-red-600" /> </CardTitle>
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
                              <CardTitle className="w-full flex items-center justify-between">New MG ZS <CiHeart /> </CardTitle>
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
                              <CardTitle className="w-full flex items-center justify-between">MG ZX Excite <IoMdHeart className="text-red-600" /> </CardTitle>
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

                         </div>
                        </section> 

                        <section className="mt-6 text-center" >
  <button className="bg-[#3563E9] text-white p-2" >Show More Cars</button>
</section>
  
                
            </div>

           </div>
            <Footer />
            </div>
  )
}

export default page