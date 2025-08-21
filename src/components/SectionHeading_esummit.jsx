import React from 'react';

const SectionHeading = ({ children }) => {
  return (
    <h2 className="text-6xl md:text-8xl font-heading text-center text-black my-16">
      {children}
    </h2>
  );
};

export default SectionHeading;