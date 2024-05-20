import React, { useState } from 'react';
import Information from "./Information";

const UserInfo = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  return (

    <div className=" bg-white border-2 border-purple-500 rounded-lg shadow-lg h-[96vh] mt-[2vh] mb-[2vh] w-[79%] md:w-[79%] ml-[0.5%] mr-[1.5%] py-4 px-2">

      <div className="flex items-center">
        <img
          src="/images/back-icon.png"
          alt="Go Back"
          className="w-[2%] ml-4"
        />
        <hr className=" w-[2%] rotate-90 border-gray-200" />
        <img
          src="/images/next-icon.png"
          alt="Next"
          className="w-[2%] "
        />
        <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-md ml-6 mr-6 text-gray-700">Gérez les Parents</span>
        <div>
          <img
            src="/images/higher-icon.png"
            alt="Go Up"
            className="mt-2 mb-3 w-[38%]"
          />
          <img
            src="/images/lower-icon.png"
            alt="Go Down"
            className="mt-3 w-[38%]"
          />
        </div>
        <div className="fixed right-7 flex justify-end items-center p-5">
          <img
            src="/images/pen-icon.png"
            alt="select"
            className="w-[10%]"
          />
          <button className="bg-pink-200 ml-5 mr-5 hover:bg-white text-white font-md py-2 px-4 rounded-lg ">
            <span className='text-pink-800'>Restreindre</span>
          </button>
          <img
            src="/images/bigger-icon.png"
            alt="Make it Bigger"
            className="w-[10%]"
          />
        </div>
      </div>
      <div className="w-full p-4">
        <div className="flex mb-4">
          <span
            className={`cursor-pointer py-2 px-4 ${activeTab === 'tab1' ? 'border-b-2 text-hover-color border-hover-color font-md' : 'text-gray-300'}`}
            onClick={() => setActiveTab('tab1')}
          >
            Informations
          </span>
          <span
            className={`cursor-pointer py-2 px-4 ${activeTab === 'tab2' ? 'border-b-2 text-hover-color border-hover-color font-md' : 'text-gray-300'}`}
            onClick={() => setActiveTab('tab2')}
          >
            Abonnements
          </span>
        </div>

        <div className="bg-purple-300 p-1 border-2 border-purple-500 bg-white rounded-lg shadow-md">
          {activeTab === 'tab1' && <div><Information/></div>}
          {activeTab === 'tab2' && <div>Abonnements</div>}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;