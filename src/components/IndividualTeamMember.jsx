import GmailIcon from "../assets/socialmedia/Gmail.png";
import LinkedInIcon from "../assets/socialmedia/LinkedIn.png";
import PropTypes from "prop-types";

function IndividualTeamMember({
  Name,
  Position,
  TeamImage,
  Specialization,
  Gmail,
  LinkedIn,
  Intended, // Add the 'Intended' prop
}) {
  return (
    <div className="text-white bg-blue-950 p-14 md:w-1/2">
      <div className="w-full md:flex md:items-center">
        <div className="h-20 w-36 rounded-2xl overflow-hidden md:mr-4 hover: border-2 border-lime-500 md:h-44 lg:w-40 h-52 lg:h-52">
          <img
            src={TeamImage}
            alt={`${Name}'s Profile`}
            className="w-full h-full lg:object-fit"
          />
        </div>
        <div className="md:w-3/4 mt-4 md:mt-0">
          <p className="text-3xl font-bold mb-2">{Name}</p>
          <h2 className="text-lg font-extrabold mb-2 text-lime-400">
            {Position}
          </h2>

          <p className="text-base font-semibold">
            {Intended ? (
              <span className=" font-bold text-m">
                Intended Specialization:{" "}
              </span>
            ) : (
              <span className=" font-bold text-m">Specialization: </span>
            )}
            {Specialization}
          </p>
          <div className="flex mt-4">
            <a
              href={LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <img src={LinkedInIcon} alt="LinkedIn Icon" className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${Gmail}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GmailIcon} alt="Gmail Icon" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

IndividualTeamMember.propTypes = {
  Name: PropTypes.string.isRequired,
  Position: PropTypes.string.isRequired,
  TeamImage: PropTypes.node.isRequired,
  Specialization: PropTypes.string.isRequired,
  Gmail: PropTypes.string.isRequired,
  LinkedIn: PropTypes.string.isRequired,
  Intended: PropTypes.bool, // Specify 'Intended' prop as a boolean (default is false)
};

IndividualTeamMember.defaultProps = {
  Intended: false, // Set the default value of 'Intended' to false
};

export default IndividualTeamMember;
