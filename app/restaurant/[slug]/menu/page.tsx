'use client'

import Header from '@/app/components/Header'
import RestaurantCard from '@/app/components/RestaurantCard'
import Link from 'next/link'
import React from 'react'
import Menu from '../components/Menu'
import RestaurantHeader from '../components/RestaurantHeader'
import RestaurantNavBar from '../components/RestaurantNavBar'

const page = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* NAVBAR */}
   
    {/* NAVBAR */} {/* HEADER */}
    <RestaurantHeader />
    {/* HEADER */} {/* DESCRIPTION PORTION */}
    
      <div className="bg-white w-[100%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar />
        {/* RESAURANT NAVBAR */} {/* MENU */}
        <Menu />
        {/* MENU */}
      </div>
   
    {/* DESCRIPTION PORTION */}
  </main>
</main>

  )
}

export default page