import ChromaGrid1 from './ChromaGrid1'
import React from 'react';

import st11 from "../assets/st11.png"
import st22 from "../assets/st22.png"
import tech1 from "../assets/tech1.png"
import tech2 from "../assets/tech2.png"
import ops1 from "../assets/ops1.png"
import ops2 from "../assets/ops2.png"
import ide1 from "../assets/ide1.png"
import ide2 from "../assets/ide2.png"
import des1 from "../assets/des1.png"
import des2 from "../assets/des2.png"

const items = [
  {
    image: ops1,
    title: 'Balvinder',
    subtitle: "Head, Operations",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/balvind3rsingh/"
  },
  {
    image: ops2,
    title: "Gitesh",
    subtitle: "Head, Operations",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/gitesh-batra/"
  },
  {
    image: st11,
    title: "Aditya",
    subtitle: "Head, Strategy",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/aditya0giri/"
  },
  {
    image: st22,
    title: "Rohan",
    subtitle: "Head, Strategy",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/rohan-mittal-394329224/"
  },
  {
    image: ide1,
    title: "Riya",
    subtitle: "Head, Ideation",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/riya-munjal-06650922a/"
  },
  {
    image: ide2,
    title: "Shrujai",
    subtitle: "Head, Ideation",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/shrujaigupta/"
  },
  {
    image: tech1,
    title: "Harsh",
    subtitle: "Head, Technology",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "#"
  },
  {
    image: tech2,
    title: "Vishu",
    subtitle: "Head, Technology",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/vishu-aasliya-3b302b22b/"
  },
  {
    image: des1,
    title: "Ojas",
    subtitle: "Head, Design",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.instagram.com/_ojas_07/?hl=en"
  },
  {
    image: des2,
    title: "Shruti",
    subtitle: "Head, Design",
    borderColor: "#fc7f02",
    gradient: "linear-gradient(145deg, #fc7f02, #352315)",
    url: "https://www.linkedin.com/in/shruti6143/"
  },
];

const ChromaGrid1Use = () => {
  return (
    <div className="w-full">
      <ChromaGrid1 
        items={items}
        radius={250}
        damping={0.4}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  )
}

export default ChromaGrid1Use
