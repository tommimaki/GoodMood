import React, { useRef } from "react";
import { FaBars, FaTimes, FaReact } from "react-icons/fa";
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

  return (
    <div className="container">
      {/* Renders a react icon with the size of 40px */}
      <h2> Good Mood</h2>
      {/* Sets the navRef as a reference to the nav element */}
      <nav ref={navRef}>
        <Link className="headerLink" to="/" onClick={showNavbar}>
          Home
        </Link>
        <Link className="headerLink" to="/about" onClick={showNavbar}>
          about
        </Link>

        <a href="/#">About</a>
        <a href="/#">Contact</a>
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
