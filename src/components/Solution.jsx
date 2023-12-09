import Sustainable from "../assets/MiningImage.png"

function LandingMission() {
  return (
    <div className="">
      <div className="container mx-auto px-4 md:flex flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-3xl text-emerald-600  font-bold mb-2">
            The Approach
          </h1>

          <p className="text-gray-700 font-hard mt-5">
        
           <p className="font-bold text-xl">Safe & Sustainable Practices</p>

            Track if mining is safe and eco-friendly.
  
            <p className="font-bold text-xl mt-5" >Environmental Impact</p>
            Monitor and minimize harm to the environment.

            <p className="font-bold text-xl mt-5" >Clean Emissions Journey</p>
  
            Follow emissions from mining site to you, ensuring a clean process.

            <p className="font-bold text-xl mt-5">Sustainability for Profit</p>
            Explore how eco-friendly practices can impact revenue positively.
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
