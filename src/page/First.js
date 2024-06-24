

import React from 'react'

import Sidebar from '../components/Sidebar'
import Layout1 from '../components/Layout1'
import MainBoard from '../components/MainBoard'
import DragAndDropArea from '../components/MainLayout1'
const First = () => {
  return (
    <div className='flex space-x-4 '>
      
     
     <div className=' ml-20'>

      <Sidebar layout={Layout1} />
     </div>
     <MainBoard layout={DragAndDropArea} />
    </div>
  )
}

export default First
