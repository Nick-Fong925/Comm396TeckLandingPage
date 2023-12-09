import data from "../assets/hero components/data.png";
import geolocation from "../assets/hero components/geolocation.png";
import connectivity from "../assets/hero components/connectivity.png";
import Telus from "../assets/hero components/Telus.png";
import klue from "../assets/hero components/klue.webp";
import geocomply from "../assets/geocomply.png";

function Partners() {
  return (
    <>
    <p className="text-6xl items-center font-bold mb-14 ml-28">Our <span className="text-emerald-600">Partners</span></p>
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 gap-12">
        {/* Klue */}
        <div className="flex flex-col items-center rounded-2xl overflow-hidden  bg-sky-100 p-5 ml-10">
          <img src={klue} alt="Klue" className="w-auto h-16 ml-8" />
          <img src={data} alt="Data" className="w-full h-40 object-contain mt-4" />
          <div className="border-b border-black mt-4 w-full"></div>
          <div className="mt-4 text-2xl font-semibold">Sustianable Data</div>
          <div className="mt-2 text-lg font-semibold">Providing data analysis on how sustainable initiatives affect mining operations.</div>
        </div>

        {/* Geocomply */}
        <div className="flex flex-col items-center rounded-2xl overflow-hidden bg-gray-100  p-4 ml-5 mr-5">
          <img src={geocomply} alt="Geocomply" className="w-60 h-auto mt-4 ml-4" />
          <img
            src={geolocation}
            alt="Geolocation"
            className="w-full h-40 object-contain mt-4 mb-2"
          />
            <div className="border-b border-black mt-4 w-full"></div>
            <div className="mt-4 text-2xl font-semibold">Geosecurity</div>
            <div className="mt-2 text-lg font-semibold">Enabling real-time, GIS-enhanced oversight on geolocation security and compliance.</div>
        </div>

        {/* Telus */}
        <div className="flex flex-col items-center text-left rounded-2xl overflow-hidden bg-green-50  p-4  mr-10">
          <img src={Telus} alt="Telus" className="w-60 h-20 object-cover" />
          <img
            src={connectivity}
            alt="Connectivity"
            className="w-full h-40 object-contain "
          />
            <div className="border-b border-black mt-4 w-full"></div>
            <div className="mt-4 text-2xl font-semibold">Connectivity</div>
            <div className="mt-2 text-lg font-semibold">Facilitating connectivity to remote places to enable data collection.</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Partners;
