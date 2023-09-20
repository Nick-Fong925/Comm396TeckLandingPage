import CapLogoBlack from "../../assets/Footer/CAP Logo.jpg";

function LandingCapInfo() {
  return (
    <div className="flex flex-row justify-center items-center lg:max-w-screen-lg mx-auto">
      {/* Logo */}
      <div className="mb-4 lg:mb-0 lg:mr-8">
        <img
          src={CapLogoBlack}
          alt="CapLogo"
          className="w-52 h-44 md:w-44 h-44"
        />
      </div>

      <p className="ml-10 md:text-2xl font-bold lg:text-3xl">
        Students Helping Students <span style={{ color: '#a3e635' }}>Since 2006</span>
      </p>
    </div>
  );
}

export default LandingCapInfo;