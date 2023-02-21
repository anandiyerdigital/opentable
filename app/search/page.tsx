import Link from 'next/link'
import React from 'react'

import NavBar from '../components/NavBar'
import RestaurantCard from './components/RestaurantCard'
import HeaderSearch from './components/HeaderSearch'
import SearchSideBar from './components/SearchSideBar'

const page = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* NAVBAR */}
    <NavBar />
      {/* HEADER */}
       <HeaderSearch />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDE BAR */}
        <SearchSideBar />
        {/* SEARCH SIDE BAR */}
        <div className="w-5/6">
          {/* RESAURANT CAR */}
          <RestaurantCard />
          {/* RESAURANT CAR */}
        </div>
      </div>
    </main>
  </main>
  
  )
}

export default page