import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col md:flex-row'>
        <div className=' md:flex w-[25%] lg:w-[20%]'>
            <Image src='/images/Nav Bar.png' alt='Nav bar' width={360} height={800} />
        </div>

        <div className=' md:flex w-full md:w-[75%] lg:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 gap-7 flex-nowrap justify-center'>
            <Image src='/images/Details Rental.png' alt='Details Rental' width={534} height={836} className="ml-1 w-full md:w-[45%] lg:w-[534px]" />
            
            
        </div>

        <div className="small-screens md:w-[75%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-6">
            
            
                
            <Image src='/images/Top 5 Car Rental.png' alt='Top 5 cars' width={534} height={324} className="w-full" />

            
                <Image src='/images/Recent Transaction.png' alt='Recent Transaction' width={524} height={480} className="w-full" />
            
        </div>
    </div>
  )
}

export default page