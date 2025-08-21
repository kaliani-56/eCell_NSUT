import React from 'react';
import Navbar from '../components/Navbar.jsx';
import img1 from '../assets/img1.jpeg';
import video3 from "../assets/video3.mp4";
import ChromaGridUse from '../components/ChromaGridUse.jsx';
import ChromaGrid1Use from '../components/ChromaGrid1Use.jsx';
import TiltedCard from '../components/TiltedCard.jsx';
import Footer from '../components/Footer.jsx';
import TheTeamGroupPhoto from '../assets/TheTeamGroupPhoto.jpeg';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
     <Navbar />
      {/* Hero Image Section */}
      <div className="relative -mt-10">
        <img 
          src={img1} 
          alt="eCell Hero" 
          className="h-[300px] sm:h-[500px] md:h-[600px] lg:h-[800px] w-full object-cover" 
        />
      </div>

      {/* Title and Description Section */}
      <section className="px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#fc7f02] mb-6">
          eCell TV
        </h1>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base sm:text-lg font-bold mb-2 text-white">
            Join eCell to gain real world entrepreneurial exposure, network with industry leaders,
          </p>
          <p className="text-base sm:text-lg font-bold text-gray-300">
            hone problem solving skills, and be part of a driven community turning ideas into impact.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg border-4 border-dashed border-[#fc7f02] max-h-[220px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-[600px] object-cover"
          >
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* President's Message Section */}
      <section className="px-4 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16 text-[#fc7f02]">
          A WORD FROM THE PRESIDENT
        </h2>
        
        <div className="flex justify-center items-center">
          <div className="w-full max-w-6xl">
            <TiltedCard
              imageSrc={TheTeamGroupPhoto}
              containerHeight="auto"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={5}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="flex flex-col items-center justify-center w-full h-full p-6 bg-black/60 backdrop-blur-sm rounded-2xl">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center leading-relaxed max-w-4xl text-white">
                    When I first joined eCell NSUT, I was simply curious about{' '}
                    <span className="bg-gradient-to-r from-orange-300 to-orange-800 text-transparent bg-clip-text font-semibold">
                      entrepreneurship.
                    </span>{' '}
                    Over time, I saw how this community{' '}
                    <span className="bg-gradient-to-r from-orange-300 to-orange-800 text-transparent bg-clip-text font-semibold">
                      transforms curiosity into capability
                    </span>{' '}
                    and ideas into action. Every summit, competition, and late night brainstorming session has shown me the power of people coming together to build{' '}
                    <span className="bg-gradient-to-r from-orange-300 to-orange-800 text-transparent bg-clip-text font-semibold">
                      something meaningful
                    </span>. eCell isn't just about startups, it's about courage, creativity, and connection. I'm excited for us to script the next big chapter together.
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="px-4 py-16">
        {/* The Core Section */}
        <div className="mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-white">
            THE CORE
          </h2>
          <ChromaGridUse />
        </div>

        {/* Department Heads Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-[#fc7f02] drop-shadow-lg">
            DEPARTMENT HEADS
          </h2>
          <ChromaGrid1Use />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App;
export { App as TheTeam };