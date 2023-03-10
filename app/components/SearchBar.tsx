'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { parseJsonSourceFileConfigFileContent } from 'typescript'


const SearchBar = () => {

    const router = useRouter()
   
    const [location, setLocation] = useState('')
   
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center">
    <input
      className="rounded  mr-3 p-2 w-[450px]"
      type="text"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      placeholder="State, city or town"
    />
    <button className="rounded bg-red-600 px-9 py-2 text-white" onClick={() => {
      if
      (location) {
        router.push(`/search?city=${location}`)
        setLocation('')
      }
    }}>
      <p>Let's go</p>
    </button>
    
  </div>
  )
}

export default SearchBar