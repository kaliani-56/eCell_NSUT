import React from 'react';
import HeroSection from '../../components/HeroSection';
import Stats from '../../components/Stats';
import CardGrid from "../../components/CardGrid";
import InfiniteScroll from '../../components/InfiniteScroll';
import GlareHover from '../../components/GlareHover';
import Masonry from '../../components/Masonry';
import MagicBento from '../../components/MagicBento';

import AboutUs from '../../components/AboutUs';
import Esummit from '../../components/Esummit';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import bhel from '../../assets/profile-pictures/bhel.png'
import cn from '../../assets/profile-pictures/cn.png'
import ongc from '../../assets/profile-pictures/ongc.png'
import hindu from '../../assets/profile-pictures/hindu.png'
import honda from '../../assets/profile-pictures/honda.png'
import oyo from '../../assets/profile-pictures/oyo.png'
import redbull from '../../assets/profile-pictures/redbull.png'
import siti from '../../assets/profile-pictures/siti.png'
import du_news from '../../assets/profile-pictures/du_news.png'

import gallery2 from '../../assets/gallery2.webp'
import gallery3 from '../../assets/gallery3.webp'
import gallery1 from '../../assets/gallery1.png'
import gallery4 from '../../assets/gallery4.webp'
import gallery5 from '../../assets/gallery5.webp'
import gallery6 from '../../assets/gallery6.webp'
import gallery7 from '../../assets/gallery7.webp'
import gallery8 from '../../assets/gallery8.jpg'
import gallery9 from '../../assets/gallery9.jpg'
import gallery10 from '../../assets/gallery10.jpg'

const items = [
  { content: <img className="rotate-90" src= {bhel} /> },
  { content: <img className="rotate-90" src= {cn} /> },
  { content: <img className="rotate-90" src={ongc} /> },
  { content: <img className="rotate-90" src={hindu} /> },
  { content: <img className="rotate-90" src={honda} /> },
  { content: <img className="rotate-90" src={oyo} /> },
  { content: <img className="rotate-90" src={redbull} /> },
  { content: <img className="rotate-90" src={siti} /> },
  { content: <img className="rotate-90" src={du_news} /> },
  
];

const imgs = [
  { id: "1", img: gallery1, url: "#", height: 600 },
  { id: "2", img: gallery2, url: "#", height: 450 },
  { id: "3", img: gallery3, url: "#", height: 500 },
  { id: "4", img: gallery4, url: "#", height: 600 },
  { id: "5", img: gallery5, url: "#", height: 450 },
  { id: "6", img: gallery6, url: "#", height: 600 },
  { id: "7", img: gallery7, url: "#", height: 600 },
  { id: "8", img: gallery8, url: "#", height: 550 },
  { id: "9", img: gallery9, url: "#", height: 450 },
  { id: "10", img: gallery10, url: "#", height: 450 },
];


export const Home = () => {
    return (
        <>
        <Navbar/>
        <HeroSection />
       <Esummit />

       <AboutUs />
      {/* Stats with Glare Hover */}
      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={200}
        transitionDuration={800}
        playOnce={false}
      >
        <Stats />
      </GlareHover>

      <CardGrid />
     
     <section className="mt-20 mb-20">
        <h2 className="lg:text-6xl text-4xl font-bold text-orange-500 mb-10 text-center mask-b-from-0%">
          COLLABORATIONS
        </h2>
        <div className="lg:h-[300px] h-[250px] relative">
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.9}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div>
      </section>

      <section className="mt-20 mb-110 sm:mb-50 lg:mb-0">
        <h2 className="lg:text-6xl text-4xl font-bold text-orange-500 text-center mb-10 mask-b-from-0%">
          GALLERY
        </h2>
        <div className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-32 mb-20 min-h-[600px]">
          <Masonry
            items={imgs}
            ease="power3.out"
            duration={0.1}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </section>

      <section className="mt-10 mb-20">
        <h2 className="lg:text-6xl text-4xl font-bold text-orange-500 text-center mt-230 sm:mt-200 lg:mt-30 mb-10 mask-b-from-0%">
          CONTACT US
        </h2>
        <div className="flex justify-center scale-100">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="252, 152, 52"
          />
        </div>
      </section>
      <Footer/>
        </>
    )

}
