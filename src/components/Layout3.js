

import React from 'react'
import BackButton from './BackButton'
import RecentStudies from './RecentStudies'
const Layout3 = () => {
    const studies = [
        { title: 'Dog Bite Complaint', summary: 'Get legal advice on handling dog bite incidents.', status: 'Completed', daysAgo: 2 ,type:'DEEDS'},
        { title: 'The Cyberbullying Conspiracy', summary: 'Explore legal options for dealing with cyberbullying.', status: 'Completed', daysAgo: 2 ,type:'CONTRACT'},
        { title: 'The Data Breach Dilemma', summary: 'Understand the legal implications of data breaches.', status: 'In Progress', daysAgo: 2 ,type:'COURT ORDER'},
        { title: 'The Data Breach Dilemma', summary: 'Understand the legal implications of data breaches.', status: 'Failed', daysAgo: 2 , type:'DEEDS'},
      ];

  return (
    <div className=' h-full'>
        <div className='mb-5'>
            <BackButton />
        </div>
        <p className='text-2xl text-gray-800 font-bold'>Given information</p>
        <div className='mt-2 border'/>
        <div>
            <p className='text-xl mt-2 text-gray-600 font-semibold'>Your saerch</p>
            <p className='text-gray-400 ml-2 mt-2'> Habeas corpus</p>
        </div>
        <main className="flex-1">
        <section className="">
      <h2 className="text-xl font-bold text-gray-800">Recent Studies</h2>
      <ul className="mt-4 space-y-6">
        {studies.map((study, index) => (
          <li key={index} className="py-2 justify-between items-center border rounded-xl p-2">
            <div className="flex  justify-between space-y-1">
              <h3 className="text-base ml-2 font-medium text-gray-400">{study.type}</h3>
              {/* <p className="text-sm text-gray-600">{study.summary}</p> */}
              {study.status === 'Completed' && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold text-green-500 bg-green-100">
                  {study.status}
                </span>
              )}
              {study.status === 'In Progress' && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold text-blue-500 bg-blue-100">
                  {study.status}
                </span>
              )}
              {study.status === 'Failed' && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold text-red-500 bg-red-100">
                  {study.status}
                </span>
              )}
            </div>
            <p className='text-blue-600 font-bold ml-2'>{study.title}</p>
            <div className="flex items-center justify-between p-1 ml-2">
              <span className="text-sm text-gray-500">{study.daysAgo} days ago</span>
             
            </div>
          </li>
        ))}
      </ul>
    </section>
      </main>
    </div>
  )
}

export default Layout3
