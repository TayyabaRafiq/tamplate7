
import Hero from "@/components/Hero";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";
import Footer from "@/components/Footer";
import CarsPage from "./CarsPage/page";
 



export default function Home() {
  return (
    <div >
      
      <Hero />

      
      <section className=" w-full flex flex-col gap-4 ">
        <div className='flex justify-between items-center mt-6'>
        <h1 className='text-[#90A3BF] text-sm md:text-lg font-medium'>Popular Car</h1>
        <Link href='/category' >
        <h1 className='text-[#3563E9] text-sm md:text-lg font-medium hover:underline'>View All</h1>
        </Link>
        </div>

       
        <CarsPage />


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

    <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
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
    <button className="bg-[#3563E9] p-2 text-white rounded-md">Rent Now</button>
  </CardFooter>
</Card>

<Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
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
    <button className="bg-[#3563E9] p-2 text-white rounded-md">Rent Now</button>
    </Link>
  </CardFooter>
</Card>


<Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
  <CardHeader>
    <CardTitle className="w-full flex items-center justify-between">Rolls - Royce <IoMdHeart className="text-red-600" /> </CardTitle>
    <CardDescription>Sport</CardDescription>
  </CardHeader>
  <CardContent className="w-full flex flex-col items-center justify-center gap-4">
    <Image src='/images/Car3.png' alt='' width={220} height={68} />
    <Image src='/images/Spesification.png' alt='' width={256} height={24} />
  </CardContent>
  <CardFooter className="w-full flex items-center justify-between">
    <p>$99.00/<span className="text-slate-400">day</span></p>
    <button className="bg-[#3563E9] p-2 text-white rounded-md">Rent Now</button>
  </CardFooter>
</Card>

<Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
  <CardHeader>
    <CardTitle className="w-full flex items-center justify-between">Nissan GT - R <CiHeart /> </CardTitle>
    <CardDescription>Sport</CardDescription>
  </CardHeader>
  <CardContent className="w-full flex flex-col items-center justify-center gap-4">
    <Image src='/images/Car4.png' alt='' width={220} height={68} />
    <Image src='/images/Spesification.png' alt='' width={256} height={24} />
  </CardContent>
  <CardFooter className="w-full flex items-center justify-between">
    <p>$99.00/<span className="text-slate-400">day</span></p>
    <button className="bg-[#3563E9] p-2 text-white rounded-md">Rent Now</button>
  </CardFooter>
</Card>
</div>
</section>
<section className=" w-full flex flex-col gap-4 ">
       <div  >
        <h1 className='text-[#90A3BF] text-sm md:text-lg font-medium'>Recomendation Car</h1>
        </div>
        
        
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
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
    <button className="bg-[#3563E9] p-2 text-white rounded-md">Rent Now</button>
  </CardFooter>
</Card>

<Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
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
    <button className="bg-[#3563E9] p-2 text-white rounded-md">Rent Now</button>
  </CardFooter>
</Card>

<Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
  <CardHeader>
    <CardTitle className="w-full flex items-center justify-between">All New Rush <CiHeart /> </CardTitle>
    <CardDescription>Sport</CardDescription>
  </CardHeader>
  <CardContent className="w-full flex flex-col items-center justify-center gap-4">
    <Image src='/images/Car4.png' alt='' width={220} height={68} />
    <Image src='/images/Spesification.png' alt='' width={256} height={24} />
  </CardContent>
  <CardFooter className="w-full flex items-center justify-between">
    <p>$99.00/<span className="text-slate-400">day</span></p>
    <button className="bg-[#3563E9] p-2 text-white rounded-md">Rent Now</button>
  </CardFooter>
</Card>


<Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
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
    <button className="bg-[#3563E9] p-2 text-white rounded-md">Rent Now</button>
  </CardFooter>
</Card>


<Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
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
    <button className="bg-[#3563E9] p-2 text-white rounded-md">Rent Now</button>
  </CardFooter>
</Card>


<Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
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
    <button className="bg-[#3563E9] p-2 text-white rounded-md">Rent Now</button>
  </CardFooter>
</Card>


<Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
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
    <button className="bg-[#3563E9] p-2 text-white rounded-md">Rent Now</button>
  </CardFooter>
</Card>


<Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
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
    <button className="bg-[#3563E9] p-2 text-white rounded-md">Rent Now</button>
  </CardFooter>
</Card>
        
</div>
</section>


<section className=" w-full text-center" >
  <Link href='/category' >
  <button className="bg-[#3563E9] px-4 py-2 text-white rounded-md mt-5" >Show More Cars</button>
  </Link>
</section>


 <Footer />
      
    </div>
  );
}
