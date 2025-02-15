"use client"
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
import Image from "next/image";
import { getCarById } from "@/app/CarsPage/page";

type Cars = {
    _id : string,
    name : string,
    brand : string,
    type : string,
    fuelCapacity : string,
    transmission : string,
    seatingCapacity : string
    pricePerDay : number,
    originalPrice : number,
    tags : string[],
    imageUrl : string;
    slug: { current: string };
    };

    export default async function carPage({params}: {params:{slug: string}}) {

    const {slug} = params;

    const car = await getCarById(slug);

    if(!car)
    {
        return(
            <>
            <p>No car found</p>
            </>
        );
    }
 
    
    //      const CarPage = () => {
    //         const params = useParams(); 
    //         const slug = params?.slug as string | undefined;
            
    //     const [car, setCar] = useState<Cars | null>(null);
    //     const [loading, setLoading] = useState(true);
    
    //     useEffect(() => {
    //         if (!slug) return; 
    
    //         setLoading(true);
    //             client.fetch(
    //                 groq`
    //                 *[_type == "car" && _id == $id][0] {
    //                     _id,
    //                     name,
    //                     brand,
    //                     type,
    //                     seatingCapacity,
    //                     pricePerDay,
    //                     originalPrice,
    //                     tags,
    //                     "imageUrl": image.asset->url,
    //                     slug,
    //                 }`,
    //                 { slug }
    //             )
    //             .then((data) => {
    //                 if (data) {
    //                     setCar(data);
    //                 } else {
    //                     console.error("🚨 Error: Car not found!");
    //                 }
    //             })
    //             .catch((err) => console.error("🚨 Fetch Error:", err))
    //             .finally(() => setLoading(false)); 
    //     }, [slug]);
    
    //     if (loading) return <p>⏳ Loading car details...</p>; 
    // if (!car) return <p> Car not found!</p>
    
    
    return (
        <div className="max-w-7xl-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-square">
                    <Image
                        src={car.imageUrl}
                        alt={car.name}
                        width={300}
                        height={200}
                        className="rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-8">
                
                    <h1 className="text-4xl font-bold">{car.name}</h1>
                    <p className="text-2xl font-sans">{car.brand} - {car.type}</p>
                    <p className="text-2xl font-sans">🛋 {car.seatingCapacity}</p>
                    <p className="text-2xl font-sans">${car.pricePerDay}</p>
                </div>
            </div>
        </div>
    );
};
//export default CarPage;