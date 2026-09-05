import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>CODE<b style={{ color: '#295dff' }}>XA</b></h2>
          <p>
            Building modern websites, web apps and digital solutions
            for businesses worldwide.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="/project">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Email : info@codexa.com</p>
          <p>Phone : +92 000 000000</p>
          <p>Rawalpindi, Pakistan</p>
        </div>

      </div>

      <hr />

      <div className="copyright">
        <p>© 2026 CODEXA. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;