import React from 'react';

const Ticker = () => {
  const tickerContent = (
    <>
      <span className="text-sm font-medium text-white mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-white mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-white mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-white mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-white mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-white mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-white mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-white mx-8">E-Summit's Time</span>
      <span className="text-sm font-medium text-white mx-8">E-Summit's Time</span>
      
    </>
  );

  return (
    <div className=" -mt-2 bg-[#808080] border-y border-gray-300 w-11/12 py-0 overflow-hidden mx-auto">
      <div className="flex animate-scroll">
        <marquee loop="infinite" scrolldelay="50"><div className="flex items-center flex-shrink-0">{tickerContent}</div></marquee>
        
      </div>
      
    </div>
  );
};

export default Ticker;