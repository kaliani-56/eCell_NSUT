import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="backdrop-blur-lg text-gray-700 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Left Section */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold">eCell.NSUT</h2>
          <p className="text-sm">
            Netaji Subhas University of Technology<br/>
            Azad Hind Fauj Marg, Dwarka Sector-3, Delhi
          </p>
          <p className="text-sm"><strong>Phone:</strong> +1 5589 55488 55</p>
          <p className="text-sm"><strong>Email:</strong> ecell.care@gmail.com</p>
        </div>

        {/* Events 1 */}
        <div className="text-center md:text-left">
          <h4 className="font-bold mb-2">E-Summit Events</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://unstop.com/competitions/runneeti-ipl-auction-e-summit-netaji-subhas-university-of-technology-nsut-delhi-1529531" className="hover:text-brand-yellow">&gt; RunNeeti</a></li>
            <li><a href="https://unstop.com/competitions/1-fiesta-the-ultimate-f1-experience-e-summit-netaji-subhas-university-of-technology-nsut-delhi-1529579" className="hover:text-brand-yellow">&gt; F1 Fiesta</a></li>
            <li><a href="https://unstop.com/competitions/chankyan-gambit-the-boardroom-conclave-e-summit-netaji-subhas-university-of-technology-nsut-delhi-1529566" className="hover:text-brand-yellow">&gt; Chanakyan Gambit</a></li>
            <li><a href="https://unstop.com/competitions/dharma-of-duels-the-corporate-battle-e-summit-netaji-subhas-university-of-technology-nsut-delhi-1529468" className="hover:text-brand-yellow">&gt; KaryaNeeti</a></li>
          </ul>
        </div>

        {/* Events 2 */}
        <div className="text-center md:text-left">
          <h4 className="font-bold mb-2">E-Summit Events</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://unstop.com/competitions/dharma-of-duels-the-corporate-battle-e-summit-netaji-subhas-university-of-technology-nsut-delhi-1529468" className="hover:text-brand-yellow">&gt; Dharma of Duels</a></li>
            <li><a href="https://unstop.com/competitions/bazaar-breakout-a-liberalisation-era-business-simulation-e-summit-netaji-subhas-university-of-technology-ns-1529517" className="hover:text-brand-yellow">&gt; Bazaar Breakout</a></li>
            <li><a href="https://unstop.com/competitions/product-reinvent-reimagine-rebuild-relive-e-summit-netaji-subhas-university-of-technology-nsut-delhi-1529508" className="hover:text-brand-yellow">&gt; Product Reinvent</a></li>
          </ul>
        </div>

        {/* Useful Links + Socials */}
        <div className="text-center md:text-left">
          <h4 className="font-bold mb-2">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-brand-yellow">&gt; Home</a></li>
            <li><a href="#" className="hover:text-brand-yellow">&gt; About us</a></li>
            <li><a href="#" className="hover:text-brand-yellow">&gt; Our Team</a></li>
          </ul>
          <div className="flex justify-center md:justify-start space-x-3 mt-4">
            <a href="https://twitter.com/hashtag/eCellNSUT?src=hashtag_click" className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all"><FaTwitter /></a>
            <a href="https://www.facebook.com/ecell.nsut/" className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all"><FaFacebookF /></a>
            <a href="https://www.instagram.com/ecell.nsut/?hl=en" className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all"><FaInstagram /></a>
            <a href="https://in.linkedin.com/company/ecell-nsut" className="p-2 border border-gray-300 rounded-full hover:bg-black hover:text-white transition-all"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
