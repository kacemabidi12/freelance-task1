import React from 'react';

const UserInfo = () => {
  return (
    
    <div className=" bg-white border-4 border-purple-300 rounded-lg shadow-lg h-[96vh] mt-[2vh] mb-[2vh] w-[79%] md:w-[79%] ml-[0.5%] mr-[1.5%] py-4 px-4">
      <h1 className="text-2xl font-bold mb-4">Gérez les Parents</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <p className="mt-1 text-sm text-gray-900">prof.mahmoud@example.com</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <p className="mt-1 text-sm text-gray-900">+1234567890</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Followers</label>
            <p className="mt-1 text-sm text-gray-900">578</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <p className="mt-1 text-sm text-gray-900">January 1, 1970</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <p className="mt-1 text-sm text-gray-900">123 Elm Street, Springfield</p>
          </div>
          {/* Add more fields as needed */}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;