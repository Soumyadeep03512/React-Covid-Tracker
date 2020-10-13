import React from "react";
import { NavLink } from "react-router-dom";
import "./navbarhome.css";
const Navbarhome = () => {
  return (
    <div>
      <ul className="navbarul">
        <li>
          <NavLink to="/" className="link" activeClassName="activemenu">
            States
          </NavLink>
        </li>
        <li>
          <NavLink to="/graph" className="link" activeClassName="activemenu">
            graph
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbarhome;
