import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.styles.scss";

// NavLinks component
// renders a list of nav links dependent on loggedIn state
const NavLinks = () => {
  const isLoggedIn = true;

  const handleLogout = () => {
    console.log("logging out!");
  };

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">All BUGS</NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to={`/u1/bugs`}>MY BUGS</NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <NavLink to="/bugs/new">ADD BUG</NavLink>
        </li>
      )}
      {!isLoggedIn ? (
        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>
      ) : (
        <li>
          <button to="/" onClick={handleLogout}>
            LOGOUT
          </button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
