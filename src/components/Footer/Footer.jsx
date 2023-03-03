import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footerC">
      <div className="footerContainer">
        <div className="footerTop">
          <div className="footerLogo">
            <h4> Good Mood</h4>
          </div>
          <div className="footerMenu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <div className="footerSocial">
            <ul>
              <li>
                <a href="https://www.instagram.com/bynats.bs" target="_blank">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="footerCopy">
            <p>© 2023 Good Mood. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
