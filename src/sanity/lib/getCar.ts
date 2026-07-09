import { sanityFetch } from "@/sanity/lib/fetch";

type Cars = {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: number;
  originalPrice: number;
  tags: string[];
  imageUrl: string;
  slug: { current: string };
};

export async function getCarBySlug(slug: string) {
  try {
    const queryCar = `
      *[_type == "car" && slug.current == $slug][0] {
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
        "imageUrl": image.asset->url,
        slug
      }
    `;

    const getCar: Cars = await sanityFetch({
      query: queryCar,
      params: { slug },
    });

    return getCar ? getCar : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}