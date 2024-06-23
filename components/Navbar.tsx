import React from 'react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/outline'; // You need to install @heroicons/react for these icons

function Navbar() {
  return (
    <div className="fixed top-0 w-full h-12 bg-white z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">RevRoad</div>
        <div className="flex items-center space-x-4">
          <BellIcon className="h-6 w-6 text-gray-600" />
          <UserCircleIcon className="h-6 w-6 text-gray-600" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
