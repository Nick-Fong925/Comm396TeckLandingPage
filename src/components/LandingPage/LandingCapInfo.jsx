import CapLogoBlack from "../../assets/Footer/CAP Logo.jpg";

function LandingCapInfo() {
  return (
    <div className="flex flex-row justify-center items-center lg:max-w-screen-lg mx-auto">
      {/* Logo */}
      <div className="mb-4 lg:mb-0 lg:mr-8">
        <img
          src={CapLogoBlack}
          alt="CapLogo"
          className="w-48 h-48"
        />
      </div>

      <p className="ml-10 text-3xl font-bold">
        Students Helping Students <span style={{ color: '#a3e635' }}>Since 2020</span>
      </p>
    </div>
  );
}

export default LandingCapInfo;