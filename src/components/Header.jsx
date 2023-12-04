import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Show/hide the "About Us" dropdown

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);

    scrollToTop();
  };

  // Function to scroll to the top of the page
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
    <header className="fixed top-0 left-0 right-0 bg-blue-900 shadow-lg z-50">
      <nav className="container mx-auto flex items-center justify-between h-16">
        <div className="flex items-center w-1/4">
          {/* Updated class */}
          <Link
            to="/"
            className="text-black font-bold hover-animation relative"
            onClick={scrollToTop}
          >
            <p className="text-white font-bold text-4xl ml-24">Teck</p>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex w-3/4 space-x-12 justify-end">
          <li className="relative group group-hover:block">
            <Link
              to="/"
              className="text-white font-extrabold text-xs"
              onClick={scrollToTop}
            >
              About
            </Link>
          </li>

          <li className="relative group group-hover:block">
            <Link
              to="/"
              className="text-white font-extrabold text-xs"
              onClick={scrollToTop}
            >
              Products
            </Link>
          </li>
          <li className="relative group group-hover:block">
            <Link
              to="/"
              className="text-white font-extrabold text-xs"
              onClick={scrollToTop}
            >
              Technology
            </Link>
          </li>
          <li className="relative group group-hover:block">
            <Link
              to="/"
              className="text-white font-extrabold text-xs"
              onClick={scrollToTop}
            >
              New Projects
            </Link>
          </li>
          <li className="relative group group-hover:block">
            <Link
              to="/"
              className="text-white font-extrabold text-xs mr-10"
              onClick={scrollToTop}
            >
              Careers
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-black font-bold mr-10 relative ${
            mobileMenuOpen ? "open" : ""
          } ${mobileMenuOpen ? "close" : ""}`}
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-full bg-blue-950 border-l border-gray-200 shadow-lg p-4 transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="md:hidden text-black font-bold absolute top-4 right-4"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          {/* Menu Items */}
          <ul className="flex flex-col space-y-4 mt-10 text-center">
            <li>
              <Link
                to="/"
                className="text-white font-bold text-xl hover:text-lime-400"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/TeamPage"
                className="text-white font-bold text-xl hover:text-lime-400"
                onClick={toggleMobileMenu}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="text-white font-bold text-xl hover:text-lime-400"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Centered Icons */}
          <div className="flex justify-center mt-4 gap-6">
            <a
              href="https://www.instagram.com/ubcsaudercap/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a href="" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
