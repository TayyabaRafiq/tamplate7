import { client } from "@/sanity/lib/client";


import { groq } from "next-sanity";
import Image from "next/image";

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
    slug :{
      _type : "slug"
      current :string;
    };

};

interface CarPageProps {
    params :{slug : string}
}

async function getCar(slug:string): Promise<Cars>{
return client.fetch(
    groq `*[_type == "car" && slug.current == $slug][0]{
     _id,
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    tags,
    imageUrl,
  slug

    }`, {slug}
);

     

} 

export default async function carPage({params}:CarPageProps){
    const {slug} = params;
    const car = await getCar(slug);
    if (!car) {
        return <p>Car not found</p>;
    }
    
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
                    <p className="text-2xl font-sans">{car.type}</p>
                    <p className="text-2xl font-sans">{car.brand}</p>
                </div>
            </div>
        </div>
    );
}