import React from 'react';
import Spline from '@splinetool/react-spline';
import TextType from './TextType';
// import video_bg from '../assets/video_bg.mp4';

const HeroSection = () => {
  return (
    <div className="bg-transparent w-full h-[750px] px-0 overflow-y-visible overflow-x-visible relative lg:mt-0 -mt-60">
      {/* Background Video */}
      <video autoPlay loop muted className="h-full w-full z-10">
        {/* <source src={video_bg} type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Heading + Paragraph Wrapper */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 lg:-mt-60">
        <h1 className="text-4xl sm:text-3xl lg:text-7xl tracking-wide leading-tight">
          <span className="whitespace-nowrap">Bring the Innovation</span>
          <span className="block bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Game On
          </span>
        </h1>

        {/* Paragraph directly under heading */}
        <TextType
          text={[
            "eCell NSUT aims to inspire and empower students to think innovatively, embrace risk, and turn entrepreneurial dreams into reality through skill building events, industry exposure, and collaborative opportunities."
          ]}
          typingSpeed={20}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="mt-6 text-lg text-neutral-400 max-w-2xl sm:invisible lg:visible"
        />
      </div>
    </div>
  );
};

export default HeroSection;
