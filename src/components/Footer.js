import React from "react";

function Footer() {
  return (
    <footer className="footer">
      {/* Logo / imagine stânga */}
      <div className="footer-left">
        <img
          src="/images/logo-footer.jpg"
          alt="Little Lemon Logo"
          className="footer-logo"
        />
      </div>

      {/* Doormat Navigation */}
      <div className="footer-column">
        <h4>Doormat Navigation</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div className="footer-column">
        <h4>Contact</h4>
        <p><i className="fa-solid fa-phone"></i> 123-456-7890</p>
        <p><i className="fa-solid fa-envelope"></i> info@littlelemon.com</p>
        <p><i className="fa-solid fa-location-dot"></i> 123 Main Street, Chicago</p>
      </div>

      {/* Social Media Links */}
      <div className="footer-column">
           <h4>Social Media Links</h4>
           <p><i className="fa-brands fa-facebook"></i> Facebook</p>
           <p><i className="fa-brands fa-instagram"></i> Instagram</p>
           <p><i className="fa-brands fa-twitter"></i> Twitter</p>
      </div>
    </footer>
  );
}

export default Footer;