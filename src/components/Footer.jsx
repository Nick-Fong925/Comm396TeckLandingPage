import CapLogo from "../assets/Header/CapLogoWhite.png";
import instagramIcon from "../assets/socialmedia/instagram.png";
import tiktokIcon from "../assets/socialmedia/tiktok.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white fixed bottom-0 w-full">
      <div className="flex flex-col items-center justify-center md:flex-row justify-betweenmd: container mx-auto flex justify-between items-center">
        <div>
          <img src={CapLogo} alt="Cap Logo" className="pl-10 w-44 h-auto" />
        </div>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="font-extrabold text-white hover:text-green-400"
          >
            EVENTS
          </Link>
          <Link
            to="/about"
            className="font-extrabold text-white hover:text-green-400"
          >
            TEAM
          </Link>
          <Link
            to="/contact"
            className="font-extrabold text-white hover:text-green-400"
          >
            CONTACT
          </Link>
        </div>
        <div className="text-center">
          <h4 className="text-lg font-semibold mb-2">
            Sign up for our Newsletter
          </h4>
          <form className="md:flex md:items-center md:justify-center">
            <div className="flex flex-col md:flex-row items-center">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="border border-gray-400 px-2 py-1 md:mr-2 rounded hover:border-red-600 mb-2 md:mb-0"
              />
              <button
                type="submit"
                className="bg-lime-500 text-white px-4 py-1 rounded font-bold"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="text-center md:text-right">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/ubcsaudercap/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramIcon}
                alt="Instagram Icon"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.tiktok.com/@melonacanada"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktokIcon} alt="tiktok" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
