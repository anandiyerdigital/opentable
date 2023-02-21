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
    <nav className="bg-white p-2 flex justify-between">
    <Link href="/" className="font-bold text-gray-700 text-2xl"> OpenTable </Link>
      <div>
        <div className="flex">
          <button
            className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
          >
            Sign in
          </button>
          <button className="border p-1 px-4 rounded">Sign up</button>
        </div>
      </div>
    </nav>
    {/* NAVBAR */} {/* HEADER */}
    <RestaurantHeader />
    {/* HEADER */} {/* DESCRIPTION PORTION */}
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
      <div className="bg-white w-[100%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavBar />
        {/* RESAURANT NAVBAR */} {/* MENU */}
        <Menu />
        {/* MENU */}
      </div>
    </div>
    {/* DESCRIPTION PORTION */}
  </main>
</main>

  )
}

export default page