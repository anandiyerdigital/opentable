import NavBar from '@/app/components/NavBar'
import Link from 'next/link'
import React from 'react'
import ReserveForm from './components/ReserveForm'
import ReserveHeader from './components/ReserveHeader'

const page = () => {
  return (
   <>
      {/* NAVBAR END */}
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          {/* HEADER */}
        <ReserveHeader />
          {/* HEADER */} {/* FORM */}
        <ReserveForm />
        </div>
      </div>
  
  </>
  
  )
}

export default page