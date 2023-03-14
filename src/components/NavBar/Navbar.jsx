import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";

function Navbar() {
  /* creates a reference to the nav element in the component. 
    useRef hook is used to create a reference to the element so that it can be accessed and manipulated in the component.*/

  const navRef = useRef();

  /*Below line defines the showNavbar function, which toggles the "responsive" class on the nav element. 
    The classList.toggle method is used to add or remove a class from the element.*/

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive");
  };

  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const [showServiceMenu, setShowServiceMenu] = useState(false);

  const toggleAboutMenu = () => {
    setShowAboutMenu(!showAboutMenu);
  };

  const toggleServiceMenu = () => {
    setShowServiceMenu(!showServiceMenu);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (
      !navRef.current.contains(e.target) &&
      !e.target.classList.contains("buttonLink")
    ) {
      setShowServiceMenu(false);
      setShowAboutMenu(false);
    }
  };

  return (
    <div className="container">
      <Link className="logo-link" to="/">
        <h2 className="title"> Good Mood</h2>
      </Link>
      {/* Sets the navRef as a reference to the nav element */}
      <nav ref={navRef}>
        <Link className="headerLink" to="/" onClick={showNavbar}>
          Home
        </Link>
        {/* <Link className="headerLink" to="/about" onClick={showNavbar}>
          about
        </Link> */}
        <div className="dropdown">
          <button
            type="button"
            className="buttonLink"
            onClick={toggleServiceMenu}
          >
            Services
          </button>
          {showServiceMenu && (
            <div className="dropdown-menu">
              <Link
                onClick={() => {
                  toggleServiceMenu();
                  showNavbar();
                }}
                className="headerLink"
                to="/Eyelashes"
              >
                Eyelashes
              </Link>
              <Link
                className="headerLink"
                onClick={() => {
                  toggleServiceMenu();
                  showNavbar();
                }}
                to="/Microlips"
              >
                Microlips
              </Link>
              <Link
                className="headerLink"
                onClick={() => {
                  toggleServiceMenu();
                  showNavbar();
                }}
                to="/Hydralips"
              >
                Hydralips
              </Link>
              <Link
                className="headerLink"
                onClick={() => {
                  toggleServiceMenu();
                  showNavbar();
                }}
                to="/Microneedling"
              >
                Microneedling
              </Link>
              <Link
                className="headerLink"
                onClick={() => {
                  toggleServiceMenu();
                  showNavbar();
                }}
                to="/BBglow"
              >
                BB Glow
              </Link>

              <button
                className="dropdown-close-btn"
                onClick={toggleServiceMenu}
              >
                <FaTimes />
              </button>
            </div>
          )}
        </div>
        {/* <Link className="headerLink" to="/Services" onClick={showNavbar}>
          Services
        </Link> */}
        <Link className="headerLink" to="/Contact" onClick={showNavbar}>
          Contact
        </Link>
        <div className="dropdown">
          <button
            className="buttonLink"
            onClick={toggleAboutMenu}
            type="button"
            // onMouseEnter={toggleAboutMenu}
            // onMouseLeave={toggleAboutMenu}
          >
            About
          </button>
          {showAboutMenu && (
            <div className="dropdown-menu">
              <Link
                onClick={() => {
                  toggleAboutMenu();
                  showNavbar();
                }}
                className="headerLink"
                to="/Me"
              >
                Me
              </Link>
              <Link
                className="headerLink"
                onClick={() => {
                  toggleAboutMenu();
                  showNavbar();
                }}
                to="/Studio"
              >
                Studio
              </Link>

              <button className="dropdown-close-btn" onClick={toggleAboutMenu}>
                <FaTimes />
              </button>
            </div>
          )}
        </div>
        {/* Renders a button with the class of nav-btn nav-close-btn and an FaTimes icon inside */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      {/* Renders a button with the class of nav-btn and an FaBars icon inside */}
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
