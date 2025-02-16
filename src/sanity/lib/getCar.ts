

import { sanityFetch } from "@/sanity/lib/fetch";

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
    
    }


export async function  getCarById (id:string){
  try{
    const queryCar = 
    `*[_type == "car" && _id == $id][0] {
      _id,
      name,
      brand,
      type,
      seatingCapacity,
      pricePerDay,
      originalPrice,
      tags,
      "imageUrl": image.asset->url,
      
  }`
  const getCar: Cars = await sanityFetch({ query: queryCar, params: { id } });
  return getCar? getCar : null;

  } catch (error) {
   console.log(error);
   return null
  }
};
