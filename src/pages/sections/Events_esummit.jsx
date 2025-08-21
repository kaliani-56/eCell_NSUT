import { CheckCheck } from 'lucide-react';
import React, { useState } from 'react';
import runeeti from '../../assets/runeeti.png'
import karyaneeti from '../../assets/karyaneeti.png'
import f1fiesta from '../../assets/f1fiesta.png'
import dharma from '../../assets/dharma.png'
import chanakyan from '../../assets/chanakyan.png'
import bazaar from '../../assets/bazaar.jpg'
import product from '../../assets/product.png'
const eventData = [


  {
    name: 'Dharma of Duels',
    title: 'Dharma of Duels: A Case Study',
    description:
      'Dharma of Duels is a dynamic corporate strategy competition that simulates real-world rivalry between business giants. Participants will represent iconic companies and compete across multiple high-stakes rounds designed to test business acumen, strategic thinking, research skills, and debating prowess. From economic report submissions to high-intensity corporate face-offs, this is the ultimate battleground for emerging leaders.',
    features: ['Team Size: 2 to 4 members', 
        'Eligibility: Open to undergraduate and postgraduate students from all disciplines'],
    link:'https://unstop.com/competitions/dharma-of-duels-the-corporate-battle-e-summit-netaji-subhas-university-of-technology-nsut-delhi-1529468',
    image: dharma,
  },
  {
    name: 'Chankayan Gambit',
    title: 'Chankayan Gambit: Strategic Challenge',
    description:
      "Step into the high-stakes world of corporate strategy and leadership. Corporate Quest: Chanakyan Gambit is an immersive business simulation that challenges you to think like a C-suite executive. Inspired by the timeless wisdom of Chanakyan strategy, this event is not just about theory—it's about execution. You will build a board of directors in a high-pressure auction, tackle a complex, real-world business challenge, and defend your corporate strategy in a final boardroom showdown. This is a definitive test of your business acumen, resource management, and ability to lead under fire. Are you ready to outwit, outplay, and outmaneuver your rivals?",
    features: ['Team Size: 3 to 5 members', 'Eligibility: Open to all undergraduate and postgraduate students from any discipline.','Inter-disciplinary teams are strongly encouraged to bring diverse perspectives to the boardroom.'],
    link: 'https://unstop.com/competitions/chankyan-gambit-the-boardroom-conclave-e-summit-netaji-subhas-university-of-technology-nsut-delhi-1529566',
    image: chanakyan,
  },
  {
    name: 'F1 Fiesta',
    title: 'F1 Fiesta: The Racing Simulation',
    description:
      "Do you have the strategic mind of a Team Principal and the lightning reflexes of a world champion? F1 Fiesta is more than just a quiz; it’s a multi-stage competition that merges the high-octane thrill of Formula 1 with sharp business acumen and strategic intensity. This event challenges you to prove your F1 knowledge, solve complex operational challenges, and build your dream racing team in a high-stakes auction. It’s a race where competitive bidding meets the glamour and prestige of Formula 1. Get ready to go lights out and prove you're the ultimate F1 strategist!",
    features: ["Team Size: 2 to 4 members.", 'Eligibility: Open to all undergraduate and postgraduate students from any recognized educational institution.','Inter-college and inter-specialization teams are encouraged.'],
    link: 'https://unstop.com/competitions/1-fiesta-the-ultimate-f1-experience-e-summit-netaji-subhas-university-of-technology-nsut-delhi-1529579',
    image: f1fiesta,
  },
  {
    name: 'Product Reinvent',
    title: 'ReThink: The Innovation Challenge',
    description:
      "Product Reinvent is a high-impact redesign challenge where participants step into the role of product innovators to reimagine everyday physical or digital products. From cluttered app interfaces to inefficient gadgets or uninspiring packaging, you’ll identify flaws and create smarter, cleaner, and future-ready solutions. The competition rewards creativity, logic, and vision in delivering products that are more usable, appealing, functional, and emotionally engaging.",
    features: ['Team Size: 2 to 4 members', 'Eligibility: Open to undergraduate and postgraduate students from all disciplines'],
    link:'https://unstop.com/competitions/product-reinvent-reimagine-rebuild-relive-e-summit-netaji-subhas-university-of-technology-nsut-delhi-1529508',
    image: product,
  },
    {
    name: 'RunNeeti',
    title: 'RunNeeti: The IPL Auction',
    description:
      'Simulate the electrifying experience of the IPL auction in two thrilling phases – first, a cricket-themed quiz to determine your franchise slot, and second, a strategic, budget-bound auction to build your dream team. Participants will test both their cricket knowledge and managerial skills in team building, role balance, and budget strategy.',
    link: 'https://unstop.com/competitions/runneeti-ipl-auction-e-summit-netaji-subhas-university-of-technology-nsut-delhi-1529531',
    features: [
      'Team Size: 2 to 4 members',

      'Eligibility: Open to all undergraduate and postgraduate students from any discipline',
      'Interdisciplinary teams are encouraged for stronger perspectives',
    ],
    image: runeeti ,
  },
  {
    name: 'Bazaar BreakOut',
    title: 'Bazaar BreakOut: Market Challenge',
    description:
      'Bazaar Breakout is a business simulation event that immerses participants in the pivotal 1988–1994 liberalization era of India. Teams will step into the shoes of iconic Indian and global brands, crafting market entry and expansion strategies aligned with historical reforms, evolving consumer behavior, and economic shifts. A perfect blend of strategy, storytelling, and historical insight—this event challenges your understanding of macroeconomics, marketing, and brand adaptation in a changing India.',

    features: [
      'Team Size: 2 to 4 members',
      'Eligibility: Open to all undergraduate and postgraduate students from any discipline',
      'Interdisciplinary teams are encouraged for stronger perspectives',
    ],
    link:'https://unstop.com/competitions/bazaar-breakout-a-liberalisation-era-business-simulation-e-summit-netaji-subhas-university-of-technology-ns-1529517',
    image: bazaar,
  },
    {
    name: 'KaryaNeeti',
    title: 'KaryaNeeti: The Policy Maker',
    description:
      'A Case Study Competition is a dynamic business and problem-solving contest wherein participants analyse real-world or hypothetical scenarios and present innovative solutions. Popular among colleges, Business Schools, and corporate circles, these competitions offer a platform for students to showcase and refine their analytical thinking, strategic planning, and presentation skills.',
    features: [
        'Team Size: 3 to 5 members',
        'Eligibility: Open to all undergraduate and postgraduate students from any discipline.',
        'Inter-disciplinary teams are strongly encouraged to bring diverse perspectives to the boardroom.'
        ],
      link:'https://unstop.com/competitions/kaaryaneeti-case-study-competition-e-summit-netaji-subhas-university-of-technology-nsut-delhi-1529585',
    image: karyaneeti,
  },
];

const CheckIcon = () => (
  <CheckCheck className="w-5 h-5 text-brand-yellow mr-2" />
);

const Events1 = () => {
  const [activeEventName, setActiveEventName] = useState('RunNeeti');
  const activeEventData = eventData.find((event) => event.name === activeEventName) || eventData[0];

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

      <section className="py-16 px-5 bg-transparent">
        <h2 className="font-unifraktur text-black text-center text-5xl md:text-6xl tracking-tight mb-8">
          Events
        </h2>

        <div className="flex text-black justify-center items-start gap-[15px] ">
          {/* Sidebar */}
          <aside className="border border-gray-300 rounded p-1 w-[200px] h-[450px] ">
            <ul className="h-[450px] space-y-2.5 ">
              {eventData.map((event) => {
                const selected = activeEventName === event.name;
                return (
                  <li key={event.name}>
                    <div
                      className={
                        selected
                          ? 'border border-black rounded'
                          : 'border-l-2 border-gray-500 pl-2'
                      }
                    >
                      <button
                        onClick={() => setActiveEventName(event.name)}
                        className="w-full text-left p-3 text-base"
                      >
                        <span className="font-semibold">{event.name}</span>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </aside>
        
          {/* Content */}
          <div className="w-[650px] mt-2">
            <img
              src={activeEventData.image}
              alt={activeEventData.title}
              className="w-full h-auto border border-gray-200 object-cover"
              loading="lazy"
            />
            <p className="mt-2 text-gray-700 italic">
              {activeEventData.description}
            </p>

            <ul className="mt-6 space-y-3">
              {activeEventData.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckIcon />
                  <span className="text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button under content */}
            <button
              onClick={() => window.open(` ${activeEventData.link}`)}
              className="mt-4 px-4 py-2 bg-black text-white hover:bg-gray-800 transition flex justify-center"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events1;
