import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom'

import bhel from './assets/profile-pictures/bhel.png'
import cn from './assets/profile-pictures/cn.png'
import ongc from './assets/profile-pictures/ongc.png'
import hindu from './assets/profile-pictures/hindu.png'
import honda from './assets/profile-pictures/honda.png'
import oyo from './assets/profile-pictures/oyo.png'
import redbull from './assets/profile-pictures/redbull.png'
import siti from './assets/profile-pictures/siti.png'
import du_news from './assets/profile-pictures/du_news.png'

import { useEffect, useState } from 'react';
import IntroAnimation from './components/IntroAnimation/IntroAnimation.jsx';


import gallery1 from './assets/gallery1.png'
import gallery2 from './assets/gallery2.webp'
import gallery3 from './assets/gallery3.webp'
import gallery4 from './assets/gallery4.webp'
import gallery5 from './assets/gallery5.webp'
import gallery6 from './assets/gallery6.webp'
import gallery7 from './assets/gallery7.webp'
import gallery8 from './assets/gallery8.jpg'
import gallery9 from './assets/gallery9.jpg'
import gallery10 from './assets/gallery10.jpg'

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

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navbar */}
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default App;
