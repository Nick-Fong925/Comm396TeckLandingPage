import CapTeam from "../../assets/GroupPhotos/CapTeam.jpg";

function LandingMission() {
  return (
    <div className="bg-gray-100 py-24 lg:py-16">
      <div className="container mx-auto px-4 md:flex flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-xl text-lime-400 lg:text-3xl font-semibold mb-2">
            Our mission
          </h1>
          <h2 className="text-2xl lg:text-4xl font-medium mb-5">
            Providing Support and Guidance for Students
          </h2>
          <p className="text-gray-700">
            The Campus Ambassador Program at Sauder School of Business is
            dedicated to fostering a welcoming and inclusive community for
            incoming students, empowering them to navigate the exciting journey
            of their academic and personal growth. Our mission is to facilitate
            a smooth transition and provide unwavering support to ensure their
            success at Sauder.
          </p>
        </div>
        <div className="mt-6 mr-12 md:w-1/2 mt-0 ml-10">
          <img
            src={CapTeam}
            alt="Mission"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingMission;
