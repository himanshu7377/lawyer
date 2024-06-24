import React from 'react'

const MainBoard = ({ layout: Layout }) => {
  return (
    <div className='bg-white w-4/6 p-4  h-full rounded-md shadow-md'>

    
    {/* Fixed Main structure */}
   
    {/* Render dynamic layout content */}
    <Layout />
  </div>
  )
}

export default MainBoard
