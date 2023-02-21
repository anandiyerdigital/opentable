import NavBar from '@/app/components/NavBar'
import Link from 'next/link'
import React from 'react'
import ReserveForm from './components/ReserveForm'
import ReserveHeader from './components/ReserveHeader'

const page = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* NAVBAR */}
    <NavBar />
      {/* NAVBAR END */}
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          {/* HEADER */}
        <ReserveHeader />
          {/* HEADER */} {/* FORM */}
        <ReserveForm />
        </div>
      </div>
    </main>
  </main>
  
  )
}

export default page