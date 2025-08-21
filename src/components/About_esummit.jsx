import React from 'react'
// import video1 from '../assets/video1.mp4'
const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 mb-10">
  
  {/* Text Section */}
  <div className="lg:w-5/11 w-full lg:order-1 order-2 p-5 lg:ml-[75px]">
    <h2 className="text-red-600 font-semibold text-[20px] -mt-5">
      BECAUSE HUSTLES DESERVE HEADLINES:
    </h2>
    <p className="text-[15px] text-black text-justify mt-2">
      E-Summit NSUT is our annual celebration of entrepreneurship, innovation, and leadership. 
      It’s where ideas meet execution, and aspiring founders connect with the brightest minds in 
      the startup ecosystem.
      <br />
      Over the years, E-Summit NSUT has grown into one of Delhi’s most anticipated entrepreneurial 
      gatherings, attracting founders, investors, policymakers, and students from across the country.
      
      The event is packed with keynote sessions, workshops, competitions, and networking opportunities 
      designed to challenge and inspire.
      
      The summit isn’t just about listening, it’s about doing. Attendees engage in live problem solving, 
      interactive startup showcases, and competitions that test strategic thinking, pitching skills, 
      and business acumen. From groundbreaking innovations to grassroots ideas, every story finds a 
      stage at E-Summit.
      
      This year, we are thrilled to present E-Summit 2025 with the theme 
      “Scripting the Next Chapter of India’s Economic Journey.” Through this lens, we aim to explore how 
      innovation, entrepreneurship, and policy can converge to drive the nation toward sustainable and 
      inclusive growth.
      <br />
      Our past editions have witnessed an impressive footfall of 5000 participants, each leaving us with 
      fresh perspectives, stronger networks, and renewed motivation. Whether you’re here to pitch, learn, 
      collaborate, or get inspired, E-Summit NSUT is where your entrepreneurial journey accelerates.
    </p>
  </div>

  {/* Video Section */}
  <div className="lg:w-2/5 mr-[95px] w-full lg:order-2 order-1 translate-y-[-10px]">
    <video
      autoPlay
      loop
      muted
      className="w-full border shadow-orange-400"
    >
      {/* <source src={video1} type="video/mp4" /> */}
      Your browser does not support the video tag.
    </video>
  </div>



</div>


  )
}

export default About
