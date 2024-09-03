import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav>
      <img src={Logo} alt="Little Lemon Logo" />
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/order-online">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
