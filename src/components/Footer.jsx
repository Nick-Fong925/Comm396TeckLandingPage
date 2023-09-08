import { useEffect } from "react";
import CapLogo from "../assets/Header/CapLogoWhite.png";
import instagramIcon from "../assets/socialmedia/instagram.png";
import tiktokIcon from "../assets/socialmedia/tiktok.png";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Add an event listener to all links to scroll to the top
  const addScrollToTopEventListener = () => {
    const links = document.querySelectorAll("Link");

    links.forEach((link) => {
      link.addEventListener("click", scrollToTop);
    });
  };

  // Call the function when the component mounts
  useEffect(() => {
    addScrollToTopEventListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <footer className="bg-blue-950 text-white w-full">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-auto">
          <img src={CapLogo} alt="Cap Logo" className="pl-10 w-44 h-auto" />
        </div>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="font-extrabold text-white hover:text-green-400"
            onClick={scrollToTop}
          >
            EVENTS
          </Link>
          <Link
            to="/TeamPage"
            className="font-extrabold text-white hover:text-green-400"
            onClick={scrollToTop}
          >
            TEAM
          </Link>
          <Link
            to="/Contact"
            className="font-extrabold text-white hover:text-green-400"
            onClick={scrollToTop}
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
                className="border border-gray-400 px-2 py-1 md:mr-2 rounded hover:border-lime-500 mb-2 md:mb-0"
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
