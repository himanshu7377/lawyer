

import React from 'react'

import Sidebar from '../components/Sidebar'
import Layout1 from '../components/Layout1'
import DragAndDropArea from '../components/MainBoard'
const First = () => {
  return (
    <div className='flex space-x-4 '>
      
     
     <div className=' ml-20'>

      <Sidebar layout={Layout1} />
     </div>
      <DragAndDropArea />
    </div>
  )
}

export default First
