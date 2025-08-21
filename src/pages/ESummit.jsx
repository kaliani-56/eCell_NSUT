import Navbar from '../components/Navbar_esummit';
import Ticker from '../components/Ticker_esummit';
import Hero from './sections/Hero_esummit';
import Timeline from './sections/Timeline_esummit';
import Gallery from './sections/Gallery_esummit';
import Footer from '../components/Footer_esummit';
import background from '../assets/background.jpeg';
import RedRibbon from '../components/RedRibbon_esummit';
import About from '../components/About_esummit'
import Events1 from './sections/Events_esummit'


export const ESummit = () => {
    return (
        <>
            <div
                className="min-h-screen bg-cover bg-center bg-absolute"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Navbar />
                <RedRibbon />
                <Ticker />
                <div className="mt-7 bg-[#808080] h-[1.5px] mx-auto w-11/12">

                </div>

                <div className="mt-1 bg-[#808080] h-[0.5px] w-7/8 mx-auto">

                </div>
                <div>
                    <Hero />
                </div>
                <About />

                <div className="mt-1 bg-[#808080] h-[0.5px] w-7/8 mx-auto translate-y-[-20px]">
                </div>
                <div className="mt-1 bg-[#808080] h-[2px] w-11/12 mx-auto translate-y-[-20px]">
                </div>
                <div className="mt-1 bg-[#808080] h-[0.5px] w-7/8 mx-auto translate-y-[-20px]">
                </div>

                <Events1 />
                <div className="mt-1 bg-[#808080] h-[0.5px] w-7/8 mx-auto translate-y-[-20px]"></div>


                <div className="mt-1 bg-[#808080] h-[2px] w-11/12 mx-auto translate-y-[-20px]">
                </div>
                <div className="mt-1 bg-[#808080] h-[0.5px] w-7/8 mx-auto translate-y-[-20px]">
                </div>
                <Timeline />
                <div className="mt-1 bg-[#808080] h-[0.5px] w-7/8 mx-auto translate-y-[-20px]">
                </div>
                <div className="mt-1 bg-[#808080] h-[2px] w-11/12 mx-auto translate-y-[-20px]">
                </div>
                <div className="mt-1 bg-[#808080] h-[0.5px] w-7/8 mx-auto translate-y-[-20px]">
                </div>
                <h2 className="font-unifraktur text-black text-center text-6xl lg:text-7xl tracking-tight mb-18 ">
                    Gallery
                </h2>

                <Gallery />

                <Footer />
            </div>
        </>
    )
}