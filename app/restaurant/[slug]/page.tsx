import NavBar from "@/app/components/NavBar";
import { PrismaClient, Review } from "@prisma/client";
import Link from "next/link";
import React from "react";
import Description from "./components/Description";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantHeader from "./components/RestaurantHeader";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  location_id: number;
  reviews: Review[]
}

interface Location {
  id: number;
  name: string;
}

const prisma = new PrismaClient();
const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      location_id: true,
      reviews: true,
    },
  });


  const location = await prisma.location.findUnique({
    where: {
      id: restaurant?.location_id,
    },
    select: {
      id: true,
      name: true,
    },
  });

  console.log(location?.name);
  if (!restaurant) throw new Error("Restaurant not found");

  return restaurant;
};






const page = async ({ params }: { params: { slug: string } }) => {
  console.log(params);
  const restaurant = await fetchRestaurantBySlug(params.slug);
  console.log(restaurant);

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <RestaurantHeader name={restaurant.name}  />

        <div className="flex m-auto  justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar slug={restaurant.slug} />

            <Title name={restaurant.name} />

            <Rating />
            <Description description={restaurant.description} />
            <Images images={restaurant.images} />
            <Reviews reviews={restaurant.reviews} />
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  );
};

export default page;
