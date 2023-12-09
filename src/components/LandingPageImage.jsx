import sustainablehouse from "../assets/hero components/sustainblehouse.png";

function LandingPageImage() {
  return (
    <div className="flex max-w-screen-xl mx-auto bg-white mt-20">
      {/* Image Section */}
      <div className="flex-1 flex items-center p-6">
        <div className="text-left">
          <div className="text-s font-bold mb-4 text-emerald-500">
            Regulating Sustainable Resource Collection
          </div>
          <div className="text-black font-bold text-7xl mb-4">
            NatureNet
          </div>

          <div className="text-s mb-4 font-semibold">
            Your Partner for Earth-Friendly Mining! We're here to{" "}
            <span className="text-emerald-600">
              help governments ensure that mining is done responsibly.{" "}
            </span>
            
             With us, it's easy to keep an eye on mining activities and make sure
            they're eco-friendly. Let's work together for a greener future!
          </div>

          {/* Learn More Button */}
          <a
            href="#"
            className="bg-emerald-800 text-white font-bold px-4 py-2 rounded-md inline-block"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex-1">
        <img
          className="w-full h-auto"
          src={sustainablehouse}
          alt="Mining Image"
        />
      </div>

      {/* Text Section */}
    </div>
  );
}

export default LandingPageImage;
