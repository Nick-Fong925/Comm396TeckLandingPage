import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isNatureNetDropdownOpen, setNatureNetDropdownOpen] = useState(false);
  const [isNewDropdownOpen, setNewDropdownOpen] = useState(false);

  const handleNatureNetMouseEnter = () => {
    setNatureNetDropdownOpen(true);
  };

  const handleNatureNetMouseLeave = () => {
    setNatureNetDropdownOpen(false);
  };

  const handleNewMouseEnter = () => {
    setNewDropdownOpen(true);
  };

  const handleNewMouseLeave = () => {
    setNewDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-blue-900 shadow-lg z-50">
      <nav className="container mx-auto flex items-center justify-between h-16">
        <div className="flex items-center w-1/4">
          <Link to="/" className="text-black font-bold hover-animation relative">
            <p className="text-white font-bold text-4xl ml-24">Teck</p>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex w-3/4 space-x-12 justify-end">
          <li className="relative group">
            <Link to="/" className="text-white font-extrabold text-xs">
              About
            </Link>
          </li>
          <li className="relative group">
            <Link to="/" className="text-white font-extrabold text-xs">
              Products
            </Link>
          </li>
          <li className="relative group">
            <Link to="/" className="text-white font-extrabold text-xs">
              Technology
            </Link>
          </li>
          <li
            className="relative group"
            onMouseEnter={handleNatureNetMouseEnter}
            onMouseLeave={handleNatureNetMouseLeave}
          >
            <button className="text-white font-extrabold text-xs border-10 border-white focus:outline-none transition-all duration-300">
              NatureNet
            </button>
            {isNatureNetDropdownOpen && (
              <ul className="absolute rounded-lg right-2 w-40 mt-2 space-y-2 bg-blue-950 border-t border-gray-200">
                {/* Dropdown items for NatureNet */}
                <li>
                  <Link to="/naturenet/item1" className="block px-4 py-2 text-white font-semibold hover:bg-blue-800">
                    Project Details
                  </Link>
                </li>
                <li>
                  <Link to="/naturenet/item2" className="block px-4 py-2 text-white font-semibold hover:bg-blue-800">
                    Project Partners
                  </Link>
                </li>
                <li>
                  <Link to="/naturenet/item3" className="block px-4 py-2 text-white font-semibold hover:bg-blue-800">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link to="/naturenet/item4" className="block px-4 py-2 text-white font-semibold hover:bg-blue-800">
                    Contact Us
                  </Link>
                </li>
                {/* Add more dropdown items as needed */}
              </ul>
            )}
          </li>
          <li
            className=" group"
            onMouseEnter={handleNewMouseEnter}
            onMouseLeave={handleNewMouseLeave}
          >
            <button className="text-white font-extrabold text-xs border-10 border-white focus:outline-none transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {isNewDropdownOpen && (
              <ul className="absolute rounded-lg right-2 mt-2 space-y-2 bg-blue-950 border-t border-gray-200">
                <li>
                  <Link to="/new/item1" className="block px-4 py-2 text-white font-semibold hover:bg-blue-800">
                    Operations
                  </Link>
                </li>
                <li>
                  <Link to="/new/item2" className="block px-4 py-2 text-white font-semibold hover:bg-blue-800">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link to="/new/item2" className="block px-4 py-2 text-white font-semibold hover:bg-blue-800">
                    Investors
                  </Link>
                </li>
                <li>
                  <Link to="/new/item2" className="block px-4 py-2 text-white font-semibold hover:bg-blue-800">
                    Documents and Reports
                  </Link>
                </li>
                <li>
                  <Link to="/new/item2" className="block px-4 py-2 text-white font-semibold hover:bg-blue-800">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/new/item2" className="block px-4 py-2 text-white font-semibold hover:bg-blue-800">
                    Career
                  </Link>
                </li>
                {/* Add more dropdown items as needed */}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

