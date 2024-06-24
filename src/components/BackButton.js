
import { FiArrowLeftCircle } from 'react-icons/fi'
import React from 'react'

const BackButton = () => {
  return (
   
       <div className="flex justify-between w-full">
          <FiArrowLeftCircle className=" mt-1 w-8 h-8 cursor-pointer" />
          <button className="bg-gradient-to-r from-blue-400 to-blue-800  text-white font-bold py-2 px-12 rounded-full">
            Back to Home
          </button>
        </div>
   
  )
}

export default BackButton
