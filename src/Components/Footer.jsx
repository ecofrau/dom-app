import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <h1 className="contact">Contact</h1>
        <div className="container">
          <div className="info">
            <p>Phone</p>
            <h2>+49 999 999 99 99</h2>
          </div>
          <div className="info">
            <p>Socials</p>
          </div>
          <div className="info">
            <p>Address</p>
            <h2>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</h2>
          </div>
          <div className="info">
            <p>Working Hours</p>
            <h2>24 hours a day</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;