
import Link from "next/link";
import Hero from "@/components/Hero";
import CarsPage from "./CarsPage/page";
 
export default function Home() {
  return (
    <div className="bg-[#0F172A] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <Hero />

        {/* Dynamic Cars Section from CarsPage (if needed) or separate Recommendation */}
        <section className="py-12 space-y-8">
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-black text-white tracking-tight'>Popular Cars</h2>
            <Link href='/category' className='text-primary hover:underline text-sm font-bold'>View All</Link>
          </div>
          <CarsPage />
        </section>

      </div>
    </div>
  );
}
