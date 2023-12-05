s
import data from "../assets/hero components/data.png";
import geolocation from "../assets/hero components/geolocation.png";
import connectivity from "../assets/hero components/connectivity.png";
import Telus from "../assets/hero components/Telus.png";
import klue from "../assets/hero components/klue.webp";
import geocomply from "../assets/hero components/Geocomply.jpg";

function Partners() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 gap-4">
        {/* Klue */}
        <div className="flex flex-col items-center">
          <img src={klue} alt="Klue" className="w-60 h-auto" />
          <img src={data} alt="Data" className="w-full h-40 object-contain" />
        </div>

        {/* Geocomply */}
        <div className="flex flex-col items-center">
          <img src={geocomply} alt="Geocomply" className="w-60 h-auto" />
          <img
            src={geolocation}
            alt="Geolocation"
            className="w-full h-40 object-contain"
          />
        </div>

        {/* Telus */}
        <div className="flex flex-col items-center">
          <img src={Telus} alt="Telus" className="w-60 h-auto" />
          <img
            src={connectivity}
            alt="Connectivity"
            className="w-full h-40 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Partners;
