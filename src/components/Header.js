// Header.js

import React from "react";
import   {FiHome,FiMessageSquare ,FiSettings, FiBell, FiUser,FiSearch ,FiRss,FiActivity} from "react-icons/fi"; // Importing Feather Icons

const Header = () => {
  return (
    <header className="bg-gray-300 py-4 px-4 ">
      <div className="container flex justify-between items-center mx-auto px-4">
        <div className="flex items-center ml-5">
          <span className="text-2xl font-bold text-black">Advocase</span>
        </div>
        <nav className="flex space-x-6 items-center text-black">
          <div className="flex space-x-2 hover:text-white  hover:bg-blue-500 rounded-full p-2">
           <FiActivity className="w-6 h-6 cursor-pointer" />
            <a href="#" >
              News feeds
            </a>
          </div>
          <div className="flex space-x-2 hover:text-white  hover:bg-blue-500 rounded-full p-2">
            <FiSearch className="w-6 h-6  cursor-pointer" />
            <a href="#" >
              Find lawyers
            </a>
          </div>
          <div className="border  p-2 rounded-full pl-4 pr-4 hover:text-white bg-gradient-to-r from-blue-400 to-blue-800">
            <div className="flex space-x-2">
            <FiHome className="w-6 h-6  cursor-pointer" />
            <a href="#" >
              Home
            </a>
            </div>
         
          </div>
          <div className="flex space-x-2 hover:text-white  hover:bg-blue-500 rounded-full p-2">
          <FiRss className="w-6 h-6  cursor-pointer" />
            <a href="#" >
              Connections
            </a>
          </div>

          <div className="flex space-x-2 hover:text-white  hover:bg-blue-500 rounded-full p-2">
            <FiMessageSquare className="w-6 h-6  cursor-pointer" />
            <a href="#" >
              Chats
            </a>
          </div>
        </nav>

        <div className="flex space-x-6">
          <FiSettings className="w-6 h-6 text-white hover:text-gray-200 cursor-pointer" />
          <FiBell className="w-6 h-6 text-white hover:text-gray-200 cursor-pointer" />
          <FiUser className="w-6 h-6 text-white hover:text-gray-200 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
