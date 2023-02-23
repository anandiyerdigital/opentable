

import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

import Link from "next/link";
import { useRouter } from "next/navigation";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { Cuisine, Location, PRICE, PrismaClient, Review } from "@prisma/client";

const prisma = new PrismaClient();

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  price: PRICE;
  location: Location;
  slug: string;
  reviews: Review[];

}

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      price: true,
      location  : true,
      slug: true,
      reviews: true,
    }
  });
  return restaurants;
};





const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  
  const restaurants = await fetchRestaurants();
  console.log(restaurants);
  return (
    <main>
      <Header />

      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}

      </div>
    </main>
  );
}
