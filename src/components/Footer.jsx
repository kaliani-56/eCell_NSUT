import { resourcesLinks, platformLinks } from "../constants/index.jsx";
import React from 'react';
import FooterLogo from './FooterLogo.jsx';

const Footer = () => {
  return (
    <footer className="border-t mt-20 py-10 border-neutral-700 bg-black">
      <div className="container mx-auto px-4">
        {/* Updated Layout: Logo on top, Social Media and Useful Links side by side */}
        <div className="max-w-6xl mx-auto">
          {/* Logo Section - Full Width */}
          <div className="flex justify-center mb-8">
            <FooterLogo />
          </div>
          {/* Social Media and Useful Links - Side by Side with Horizontal Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-md font-semibold mb-4 text-white">Social Media</h3>
              <ul className="flex flex-col flex-wrap gap-x-6 gap-y-2">
                {resourcesLinks?.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-4 text-white">Useful Links</h3>
              <ul className="flex flex-col flex-wrap gap-x-6 gap-y-2">
                {platformLinks?.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* COMMENTED OUT: Previous Layout
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex justify-center md:justify-start">
            <FooterLogo />
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Social Media</h3>
            <ul className="space-y-2">
              {resourcesLinks?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Useful Links</h3>
            <ul className="space-y-2">
              {platformLinks?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;