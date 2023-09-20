import { useEffect, useState } from "react";
import CapLogo from "../assets/Header/CapLogoWhite.png";
import instagramIcon from "../assets/socialmedia/instagram.png";
import tiktokIcon from "../assets/socialmedia/tiktok.png";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Footer() {
  const [email, setEmail] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
    };

    emailjs
      .send(
        "service_k4uk2c4",
        "template_ml0v8n6",
        templateParams,
        "BeR1A5o70hui-9_qq"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.text);
        setEmail("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="bg-blue-950">
      <footer className="bg-blue-950 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:flex-row md:justify-between">
          <div className="md:mb-0">
            <img src={CapLogo} alt="Cap Logo" className="w-44 h-auto ml-0" />
          </div>
          <div className="flex flex-col items-center md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Link
              to="/TeamPage"
              className="font-extrabold text-xs text-white hover:text-green-400"
              onClick={scrollToTop}
            >
              TEAM
            </Link>
            <Link
              to="/Contact"
              className="font-extrabold text-xs text-white hover:text-green-400"
              onClick={scrollToTop}
            >
              CONTACT
            </Link>
          </div>
          <div className="text-center  mt-6 md:mt-0">
            <h4 className="text-s font-semibold mb-2 lg:text-lg">
              Sign up for our Newsletter
            </h4>
            <form
              className="flex flex-col md:flex-row items-center"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="-px-2 text-base border-2 w-full hover:border-lime-400 focus:border-lime-400 rounded-lg focus:outline-none border-black text-gray-800 py-1 md:mr-2"
                placeholder="Email"
                required
              />
              <button
                type="submit"
                className="bg-lime-500 text-white px-2 py-1 rounded font-bold md:px-4 mt-2 md:mt-0"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-center mt-6 md:mt-0">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ubcsaudercap/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram Icon" className="w-6 h-6" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tiktokIcon} alt="tiktok" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
