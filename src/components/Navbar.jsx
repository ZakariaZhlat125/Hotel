import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
// import FaAlignRight from "react-icons/fa";
import {FaAlignRight} from 'react-icons/fa'

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            {/* <FaAlignRight className="nav-icon" /> */}
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={menuIsOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
