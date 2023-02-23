

import Header from "@/app/components/Header";
import RestaurantCard from "@/app/components/RestaurantCard";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import React from "react";
import Menu from "../components/Menu";
import RestaurantHeader from "../components/RestaurantHeader";
import RestaurantNavBar from "../components/RestaurantNavBar";


const prisma = new PrismaClient();
const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
      name: true,
    },
  });

  console.log(restaurant?.name);

  return restaurant;
};

type name = {
  name: string;
};



const page = async ({params} : {params : {slug:string}}) => {

  const restaurant = await fetchRestaurantMenu(params.slug);


  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <RestaurantHeader name={restaurant.name} />

        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavBar slug={params.slug} />

          <Menu menu={restaurant?.items}/>
        </div>
      </main>
    </main>
  );
};

export default page;
