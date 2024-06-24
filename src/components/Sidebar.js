// Sidebar.js

import React from 'react';

const Sidebar = ({ layout: Layout }) => {
  return (
    <div className='bg-white w-80 p-4 h-full rounded-md shadow-md'>

    
      {/* Fixed sidebar structure */}
     
      {/* Render dynamic layout content */}
      <Layout />
    </div>
  );
};

export default Sidebar;
