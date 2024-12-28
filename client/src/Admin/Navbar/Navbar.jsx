import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          Admin Dashboard
        </div>

        {/* Navigation Links */}
        {/* <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">Dashboard</a>
          <a href="#" className="text-gray-300 hover:text-white">Users</a>
          <a href="#" className="text-gray-300 hover:text-white">Products</a>
          <a href="#" className="text-gray-300 hover:text-white">Orders</a>
        </div> */}

        {/* User Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={toggleDropdown}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 19.071A9 9 0 0112 3v1a8 8 0 104 0v-1a9 9 0 01-1.121 16.071M12 15v2m-1-1h2"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
