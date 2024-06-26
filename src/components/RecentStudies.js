import React from 'react';

const RecentStudies = ({ studies }) => {
  return (
    <section className="">
      <h2 className="text-xl font-bold text-gray-800">Recent Studies</h2>
      <ul className="mt-4 space-y-6">
        {studies.map((study, index) => (
          <li key={index} className="py-2 justify-between items-center border rounded-xl p-2">
            <div className="flex flex-col space-y-1">
              <h3 className="text-base ml-2 font-medium text-blue-600">{study.title}</h3>
              {/* <p className="text-sm text-gray-600">{study.summary}</p> */}
            </div>
            <div className="flex items-center justify-between p-1">
              <span className="text-sm text-gray-500">{study.daysAgo} days ago</span>
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
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentStudies;
