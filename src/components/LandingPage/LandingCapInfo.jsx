import CapLogoBlack from "../../assets/Footer/CAP Logo.jpg";

function LandingCapInfo() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center max-w-screen-lg mx-auto">
      {/* Logo */}
      <div className="mb-4 lg:mb-0 lg:mr-8">
        <img
          src={CapLogoBlack} // Replace with your logo image path
          alt="CapLogo"
          className="w-48 h-48"
        />
      </div>

      <div className="text-center mr-10 lg:text-left mb-4 lg:mb-0">
        {/* Since xxxx */}
        <p className="text-lg font-bold text-gray-700">
           Since
        </p>
        <p className="text-lg font-bold text-gray-700">
          2020
        </p>
      </div>

      <div className="text-center lg:text-left">
        {/* Serving Students xxxx */}
        <p className="text-lg font-bold text-gray-700">
          Serving 
        </p>
        <p className="text-lg font-bold text-gray-700">
          10,000 Students
        </p>
      </div>
    </div>
  );
}

export default LandingCapInfo;
