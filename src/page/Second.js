

import React from 'react'

import Sidebar from '../components/Sidebar'

import Layout2 from '../components/Layout2'
import DragAndDropArea from '../components/MainBoard'
const Second = () => {
  return (
    <div className='flex space-x-4'>
        <div className='ml-20'>
      <Sidebar layout={Layout2} />
      
        </div>
      <DragAndDropArea />
    </div>
  )
}

export default Second
