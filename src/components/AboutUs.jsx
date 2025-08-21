import React from 'react';
import video1 from "../assets/video3.mp4";
import { exp } from 'three/tsl';
const AboutUs = () => {
  return (
<div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full gap-8 mb-20 lg:-mt-10  ">
        {/* Video */}
        <div className="w-full lg:w-1/3 lg:translate-x-[-150px] ">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full border shadow-orange-400"
          >
            <source src={video1} type="video/mp4" /> 
            Your browser does not support the video tag.
          </video>
        </div>

        {/* About Us Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center px-4 lg:px-0">
          <h2 className="text-3xl sm:text-5xl font-bold text-orange-500 mb-4 md:mt-10 mask-b-from-0%">
            ABOUT US
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-3 lg:text-right">
            The Entrepreneurship Cell of NSUT is the driving force behind fostering a startup culture on campus. We connect
             aspiring entrepreneurs with mentors, investors, and peers to transform ideas into ventures. Through flagship 
             events like E-Summit and InnovateX, eCell blends learning, networking, and execution. From hands-on competitions 
             to industry talks, our initiatives aim to equip students with the skills, mindset, and network needed to lead in the 
             fast-paced world of business innovation.

          </p>
        </div>
      </div>
  )}

  export default AboutUs;
