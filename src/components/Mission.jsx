import Sustainable from "../assets/sustainable.jpg"

function LandingMission() {
  return (
    <div className=" py-24 lg:py-16">
      <div className="container mx-auto px-4 md:flex flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-3xl text-emerald-600  font-bold mb-2">
            Our Mission
          </h1>
          <h2 className="text-3xl font-bold mb-5">
            Ensuring Sustainble Resource Collection
          </h2>
          <p className="text-gray-700 font-hard">
        
As the world is working towards producing no extra carbon emissions by 2050, it's important to extract natural resources in a way that's good for the environment. Telus, GeoComply, Teck Resources Limited, and Klue are teaming up to create a plan for responsible mining. This plan will make it easier for mining companies to follow the rules set by the government and protect the environment while getting the resources we need.
          </p>
        </div>
        <div className="mt-6 mr-12 md:w-1/2 mt-0 ml-10">
          <img
            src={Sustainable}
            alt="Mission"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingMission;
