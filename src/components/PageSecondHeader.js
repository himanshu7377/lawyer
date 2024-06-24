

import React from 'react'

const Page2Header = () => {
    const files =['Case Desc','Acts & Laws',' Judgement ','Templates','Questions','Support']
  return (
    <div className=' w-full  '>

      
      <ul className="flex  ">
       
      {files.map((file, index) => (
        <div className='  w-full  rounded-t-md'>
        <li key={index} className="flex    py-3">
          <span className=" text-center w-full   text-gray-400 font-medium ">{file}</span>
          
        </li>
        </div>
      ))}
    </ul>
    
    </div>
  )
}

export default Page2Header
