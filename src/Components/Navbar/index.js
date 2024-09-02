import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

export const NavBar = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <div className={"nav__menu"} id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/login" className="nav__link nav__cta">
                  Login
                </NavLink>
              </li>
              <li className="nav__item">
                <Link to="/" className="nav__link">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <NavLink to="/members" className="nav__link">
                  Members
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/section" className="nav__link">
                  Section
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/event" className="nav__link">
                  Events
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink to="/other" className="nav__link nav__cta">
                  Other
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

// export default NavBar;
