import eSummitLogo from '../../assets/Esummit-logo.svg';
import emblem from '../../assets/Emblem.png';

const Hero = () => {
  return (
    <section className="py-8 bg-transparent">
      {/* Container */}
      <div className="flex items-center justify-center max-w-6xl mx-auto px-4 gap-4 sm:gap-8">

        {/* Left Emblem */}
        <img
          src={emblem}
          alt="Emblem of India"
          className="hidden sm:block sm:h-20 md:h-28 lg:h-36 flex-shrink-0"
        />

        {/* Center Logo */}
        <img
          src={eSummitLogo}
          alt="eSummit Logo"
          className="sm:h-16 md:h-28 lg:h-40 mx-4"
        />

        {/* Right Emblem */}
        <img
          src={emblem}
          alt="Emblem of India"
          className="hidden sm:block sm:h-20 md:h-28 lg:h-36 flex-shrink-0"
        />
      </div>


      {/* Divider lines */}
      <div className="mt-6">
        <div className="bg-gray-500 h-[1px] w-11/12 mx-auto"></div>
        <div className="bg-gray-500 h-[2px] w-10/12 mx-auto mt-1"></div>
      </div>
    </section>
  );
};

export default Hero;
