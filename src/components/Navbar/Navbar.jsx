import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const showItems = () => {
    setClick(!click);
  };
  return (
    <div className="navbar">
      <h1>
        <NavLink exact to="/" className="heading-logo"activeClassName="activelogo">
          Covid India
        </NavLink>
      </h1>

      <div className="mobile-menu" onClick={showItems}>
        <i className={click ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"}></i>
      </div>

      <ul className={click ? "menu-active menu" : "menu"}>
        <li>
          <NavLink
            to="/countries"
            className="menu-item"
            activeClassName="activeclass"
            onClick={showItems}
          >
            Countries
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/helpline"
            className="menu-item"
            activeClassName="activeclass"
            onClick={showItems}
          >
            Helpline
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
