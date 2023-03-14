import React from "react";
import "./Footer.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="footerC">
      <div className="footerBottom">
        <div className="footerSocial">
          <ul>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=+51931772562&text=Hola%2C%20quiero%20hacer%20una%20consulta"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bynats.bs"
                target="_blank"
                rel="noreferrer"
              >
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
  );
}

export default Footer;
