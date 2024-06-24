import React from 'react';
import RecentStudies from './RecentStudies';
import { FiArrowLeftCircle , FiPaperclip} from 'react-icons/fi';
const Layout2 = () => {
 

  return (
    <div className=" w-full ">
     <div className="flex justify-between w-full">
          <FiArrowLeftCircle className=" mt-1 w-8 h-8 cursor-pointer" />
          <button className="bg-blue-500  text-white font-bold py-2 px-12 rounded-full">
            Back to Home
          </button>
        </div>
        <div className='mt-5 '>

        <p className='text-2xl text-gray-800 font-bold'>Given information</p>
      </div>
      <div className='mt-2 border'/>
      <div className='space-y-2'>
        <p className='text-xl mt-2 text-gray-600 font-semibold'>Text Entered</p>
        <div className='pb-2'>
          <p className='text-gray-400'>I'm researching enviromental <br/>
          regulations. Can you summarize the <br/>
          Clean Air Act and it's objectives with <br/>
          details.
           </p>
        </div>
        <div className='mt-2 border'/>
          <p className='text-xl mt-2 text-gray-600 font-semibold'>Uploads</p>
        <div>
          <div className='mt-2 border rounded-xl bg-gray-300'>
            <div className='flex space-x-4 mt-2 ml-2 '>
              <p className='text-gray-700 font-semibold'>Uploaded files</p>
              <div className='border px-2  bg-gray-200 rounded-md '>
                <p className='text-blue-500 font-bold'>3/3</p>
              </div>
            </div>
            <div className='mt-2 p-2 space-y-2'>

              <div className=' flex space-x-4 items-center border rounded-xl  bg-gray-200'>
                <FiPaperclip className='w-8 h-8 ml-2 mt-1 cursor-pointer' />
                <p>Case document.pdf</p>
              </div>
              <div className=' flex space-x-4 items-center border rounded-xl  bg-gray-200'>
                <FiPaperclip className='w-8 h-8 ml-2 mt-1 cursor-pointer' />
                <p>Case document.pdf</p>
              </div>
              <div className=' flex space-x-4 items-center border rounded-xl  bg-gray-200'>
                <FiPaperclip className='w-8 h-8 ml-2 mt-1 cursor-pointer' />
                <p>Case document.pdf</p>
              </div>
              
            </div>
             
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout2;
