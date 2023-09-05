import NicholasFong from "../assets/OurTeam/NicholasFong.jpg";
import LinkedIn from "../assets/socialmedia/LinkedIn.png";
import Gmail from "../assets/socialmedia/Gmail.png";

function IndividualTeamMember() {
  return (
    <div className="text-white bg-blue-950 p-14 md:w-1/2">
      <div className="md:flex md:items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden md:mr-4 hover:">
          <img
            src={NicholasFong}
            alt={`Nick's Profile`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-3/4 mt-4 md:mt-0">
          <h2 className="text-3xl font-extrabold mb-2">Technology Director</h2>
          <p className="text-lg font-bold mb-2">Nicholas Fong</p>
          <p className="text-base font-semibold">
            <span className=" font-bold text-lg">Specialization:</span>
          </p>
          <p className="font-semibold">Business and Computer Science</p>
          <div className="flex mt-2">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <img src={LinkedIn} alt="LinkedIn Icon" className="w-6 h-6" />
            </a>
            <a
              href="mailto:example@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Gmail} alt="Gmail Icon" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualTeamMember;
