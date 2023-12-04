import mining from "../assets/mining.jpg";

function LandingPageImage() {
  return (
    <div className="flex max-w-screen-xl mx-auto bg-white mt-20">
      {/* Image Section */}
      <div className="flex-1 flex items-center p-6">
        <div className="text-center">
          <div className="text-lg font-bold mb-4">
            Creating a model for sustainable resource collection
          </div>
          <div className="text-base text-gray-700 mb-4">Something else...</div>

          {/* Learn More Button */}
          <a
            href="#"
            className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex-1">
        <img className="w-full h-auto" src={mining} alt="Mining Image" />
      </div>

      {/* Text Section */}
    </div>
  );
}

export default LandingPageImage;
