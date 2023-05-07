import { useState } from 'react';
import { Close, Menu, Logo } from '../../assets/assets';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavBar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function handleNavbarToggle() {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <nav className="navbar bg-blue">
      <div className="container flex">
        <a href="index.html" className="navbar-brand">
          <img src={Logo} alt="site logo" />
        </a>
        <button
          type="button"
          className="navbar-show-btn"
          onClick={handleNavbarToggle}
        >
          <img src={Menu} alt="menu" />
        </button>

        <div
          className={`navbar-collapse bg-white ${
            isNavbarOpen ? 'navbar-show' : ''
          }`}
        >
          <button
            type="button"
            className="navbar-hide-btn"
            onClick={handleNavbarToggle}
          >
            <img src={Close} alt="close " />
          </button>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <AnchorLink href="#about" className="nav-link">
                About Us
              </AnchorLink>
            </li>
            <li className="nav-item">
              <a href="/why-choose-us" className="nav-link">
                Why Choose Us
              </a>
            </li>
            <li className="nav-item">
              <AnchorLink href="#package-service" className="nav-link">
                Our Services
              </AnchorLink>
            </li>
            <li className="nav-item">
              <a href="/for-vendors" className="nav-link">
                For Vendors
              </a>
            </li>
            <li className="nav-item">
              <a href="/our-team" className="nav-link">
                Our Team
              </a>
            </li>
            <li className="nav-item">
              <a href="/physicians-advisory-board" className="nav-link">
                Physicians' Advisory Board
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact-us" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
