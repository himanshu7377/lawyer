


import React from 'react'
import Layout3 from '../components/Layout3'
import Sidebar from '../components/Sidebar'
import MainBoard from '../components/MainBoard'
import MainLayout3 from '../components/MainLayout3'
import Layout4 from '../components/Layout4'
const Third = () => {
  return (
    <div className='flex space-x-4 '>

    <div  className='ml-20'>
      <Sidebar layout={Layout3} />
        </div>

      <MainBoard layout={MainLayout3} />
      <div>
      <Sidebar layout={Layout4} />
        </div>


      
    </div>
  )
}

export default Third
