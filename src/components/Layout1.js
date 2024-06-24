// Layout1.js

import React from 'react';
import RecentStudies from './RecentStudies';

const Layout1 = () => {
  const studies = [
    { title: 'Dog Bite Complaint', summary: 'Get legal advice on handling dog bite incidents.', status: 'Completed', daysAgo: 2 },
    { title: 'The Cyberbullying Conspiracy', summary: 'Explore legal options for dealing with cyberbullying.', status: 'Completed', daysAgo: 2 },
    { title: 'The Data Breach Dilemma', summary: 'Understand the legal implications of data breaches.', status: 'In Progress', daysAgo: 2 },
    { title: 'The Data Breach Dilemma', summary: 'Understand the legal implications of data breaches.', status: 'Failed', daysAgo: 2 },
  ];

  return (
    <div className="flex h-full">
      
      <main className="flex-1">
        <RecentStudies studies={studies} />
      </main>
    </div>
  );
};

export default Layout1;
