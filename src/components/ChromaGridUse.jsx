import ChromaGrid from './ChromaGrid'
import React from 'react';

import president from '../assets/president.png';
import vp1 from "../assets/vp1.png"
import vp2 from "../assets/vp2.png"
import dir1 from "../assets/dir1.png"
import dir2 from "../assets/dir2.png"
import gs1 from "../assets/gs1.png"
import gs2 from "../assets/gs2.png"

const items = [
  {
    image: president,
    title: 'Bhavvam',
    subtitle: "President",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/bhavvam-soni/"
  },
  {
    image: vp1,
    title: "Shhouraya",
    subtitle: "Vice President",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/shhourayachadha/"
  },
  {
    image: vp2,
    title: "Nikita",
    subtitle: "Vice President",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/nikitakanodia03/"
  },
  {
    image: dir1,
    title: "Abhinav",
    subtitle: "Director",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/abhinav-goswami-87287611a/"
  },
  {
    image: dir2,
    title: "Dhruv",
    subtitle: "Director",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/dhruvb25/"
  },
  {
    image: gs1,
    title: "Shreyansh",
    subtitle: "General Secretary",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.instagram.com/shreyansh0242?igsh=Z21wZXJxdTN2eGU0"
  },
  {
    image: gs2,
    title: "Agam",
    subtitle: "General Secretary",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/agam-bansal/"
  },
];

const ChromaGridUse = () => {
  return (
    <div className="w-full">
      <ChromaGrid 
        items={items}
        radius={250}
        damping={0.4}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  )
}

export default ChromaGridUse