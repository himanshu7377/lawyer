

import React from 'react'

import Sidebar from '../components/Sidebar'

import MainBoard from '../components/MainBoard'
import Layout2 from '../components/Layout2'
import MainLayout2 from '../components/MainLayout2'


const Second = () => {
  return (
    <div className='flex space-x-4  '>
        <div className='ml-20'>
      <Sidebar layout={Layout2} />
      
        </div>
        
        <MainBoard layout={MainLayout2} />
        
      
    </div>
  )
}

export default Second
