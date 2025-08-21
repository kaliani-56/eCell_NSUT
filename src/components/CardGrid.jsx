import React from 'react';
import consigliere from '../assets/consigliere.png'
import innovatex from '../assets/innovatex.jpeg'
import esummit from '../assets/esummit.jpeg'
import boilersroom from '../assets/boilersroom.png'


const cards = [
  {
    id: 1,
    title: "eSummit",
    description:
      "NSUT’s grand entrepreneurial conclave, hosting industry leaders, innovators, and investors. It’s a melting pot of ideas, networking, competitions, and inspiration with an annual footfall of 5000+.",
    url: "https://unstop.com/college-fests/e-summit-netaji-subhas-university-of-technology-nsut-delhi-379875",
    image: esummit,
  },
  {
    id: 2,
    title: "InnovateX",
    description:
      "An intercollegiate innovation fest featuring cutting edge competitions, workshops, and showcases that push students to solve real world challenges with creativity, collaboration, and technical expertise.",
    url: "https://www.instagram.com/p/C_BTQbqyrWo/?igsh=dmVtdW9oNWVmZGd2",
    image: innovatex,
  },
  {
    id: 3,
    title: "Consigliere",
    description:
      "A standalone strategic case study event by eCell, testing analytical thinking, problem solving, and market understanding. Participants tackle real business scenarios, crafting innovative and viable solutions.",
    url: "https://www.instagram.com/p/C-9zBU4yiTB/?igsh=a3ZsMDU3YjFqYzh0",
    image: consigliere,
  },
  {
    id: 4,
    title: "Boiler's Room",
    description:
      "An intense, high pressure entrepreneurial challenge where teams pitch, negotiate, and strategize in a simulated market environment replicating the thrill and uncertainty of real world business.",
    url: "https://www.instagram.com/p/DBJktQjTiTW/?igsh=MWVjZ3BneDNtZXhuMA==",
    image: boilersroom,
  },
];

const CardGrid = () => {
  return (
    <section className="p-6 bg-transparent">
      <h2 className="lg:text-6xl text-4xl font-bold text-orange-500 mb-6 text-center py-1 mt-20 mask-b-to-100%">OUR INITIATIVES</h2>
      <div className="w-3/4 md:ml-20 lg:ml-40 lg:-mt-20">
      <div style={{position: 'relative', height: '150px'}}>

</div>
</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 bg-transparent mt-0">
        {cards.map(({ id, title, description, url, image }) => (
          <div
            key={id}
            className="group flex flex-col justify-between h-full p-4 bg-zinc-900 border border-gray-700 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-orange-400/40"
          >
            <div>
              {/* Image with zoom on hover */}
              <div className="overflow-hidden rounded mb-4">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover rounded transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title & Description */}
              <a href={url}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-300">{description}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
