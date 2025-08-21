import React from 'react';
import G1 from '../../assets/G1.webp'
import G2 from '../../assets/G2.webp'
import G3 from '../../assets/G3.jpeg'
import G4 from '../../assets/G4.JPG'
import G5 from '../../assets/G5.webp'
import G6 from '../../assets/G6.webp'
import G7 from '../../assets/G7.jpeg'
import G8 from '../../assets/G8.jpg'
import G9 from '../../assets/G9.JPG'
import G10 from '../../assets/G10.webp'
import G11 from '../../assets/G11.webp'
import G12 from '../../assets/G12.webp'
const galleryImages = [
  
  
  G1,
  G2,
  G3,
  G4,
  G5,
  G6,
  G7,
  G8,
  G9,
  G10,
  G11,
  G12
];

const Gallery = () => {
  return (
    <>
    <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=UnifrakturCook:wght@700&family=Great+Vibes&display=swap');

          .font-cinzel { font-family: 'Cinzel', serif; }
          .font-unifraktur { font-family: 'UnifrakturCook', cursive; }
          .font-great-vibes { font-family: 'Great Vibes', cursive; }
        `}
      </style>
    <section className="py-12 bg-transparent -mt-19 ">
      <div className="container px-10 flex justify-center ">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 ">
          {galleryImages.map((src, index) => (
            <div key={index} className="overflow-hidden">
              <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-64 object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Gallery;
