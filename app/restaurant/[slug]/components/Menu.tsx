import React from 'react'
import MenuCard from './MenuCard'

const Menu = ({menu} : {menu: string[]}) => {
  console.log(menu)
  return (
    <main className="bg-white mt-5">
    <div>
      <div className="mt-4 pb-1 mb-1">
        <h1 className="font-bold text-4xl">Menu</h1>
      </div>

    

      <div className="flex flex-wrap justify-between">

        {menu.map((item) => (
          <MenuCard item={item} />
          
        ))}

      </div>
    </div>
  </main>
  )
}

export default Menu