import CapEvent1 from "../../assets/GroupPhotos/CapEvent1.jpg";
import instagramIcon from "../../assets/socialmedia/instagram.png";
import tiktokIcon from "../../assets/socialmedia/tiktok.png";
import { Link } from "react-router-dom";

function LandingEvents() {
  return (
    <div className="bg-gray-100  py-24 lg:py-16">
      <div className="container mx-auto px-4 md:flex flex-row items-center">
        <div className="ml-6 md:w-1/2 mr-10">
          {" "}
          {/* Swap this with the image div */}
          <img
            src={CapEvent1}
            alt="Mission"
            className="w-full h-auto rounded-lg mr-0 md:mr-10"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className=" text-lime-400  font-semibold mb-2 mt-10 lg:text-xl">
            Brought to You by CAP
          </h1>
          <h2 className="text-2xl font-bold lg:text-4xl  mb-5 text-black">
            Join Us at One of Our Events
          </h2>
          <p className="text-black">
            We host a variety of events throughout the year, whether you want to
            hear about industry experiences, gain case competition experience,
            or just come meet the team we have something for everyone. Follow us
            to hear about upcoming events!
          </p>
          <div className="flex space-x-4 mt-10">
            {" "}
            {/* Move the icons here and add margin */}
            <a
              href="https://www.instagram.com/ubcsaudercap/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram Icon"
                className="w-8 h-8"
              />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={tiktokIcon} alt="tiktok" className="w-8 h-8 mb-5" />
            </a>
          </div>
          <Link
            className="mt-10 text-lime-400 font-bold text-s hover:underline"
            to="/Contact"
          >
            Get Connected
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingEvents;
