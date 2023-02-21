import NavBar from '@/app/components/NavBar'
import Link from 'next/link'
import React from 'react'
import Description from './components/Description'
import Images from './components/Images'
import Rating from './components/Rating'
import ReservationCard from './components/ReservationCard'
import RestaurantHeader from './components/RestaurantHeader'
import RestaurantNavBar from './components/RestaurantNavBar'
import Reviews from './components/Reviews'
import Title from './components/Title'

const page = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* NAVBAR */}
    <NavBar />
    {/* NAVBAR */} {/* HEADER */}
    <RestaurantHeader />
    {/* HEADER */} {/* DESCRIPTION PORTION */}
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
      <div className="bg-white w-[70%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar />
        {/* RESAURANT NAVBAR */} {/* TITLE */}
        <Title />
        {/* TITLE */} {/* RATING */}
        <Rating />
        <Description />
        <Images />
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </div>
    {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */} {/* RESERVATION
    CARD PORTION */}
  </main>
</main>

  )
}

export default page