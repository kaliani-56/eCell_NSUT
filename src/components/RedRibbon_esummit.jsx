import React from 'react';
import { Ribbon } from '../constants/index_esummit'; // Assuming Ribbon is defined in constants.js
const RedRibbon = () => {

  return (
    <div className="-mt-1 height-2 w-full py-3 overflow-hidden">
        <ul className=" flex lg:space-x-4 lg:text-[13px] transform md:space-x-3 text-[10px] sm:space-x-4 xs:text-[6px] xs:space-x-3  items-center justify-center text-red-600">
            {Ribbon.map((item, index) => (
                                    <li key={index} >
                                        <p>{item.content}</p>
                                    </li>
                                ))}
        </ul>
      
    </div>
  );
};

export default RedRibbon;