import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {

  
  return (
    <header>
      <div className="logo-title">
        {/* <img
          src={`https://source.unsplash.com/random/100x100?logo`}
          alt="Random Logo"
          className="logo"
        /> */}
        <h1>Cursor AI Prompt Project</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/reviews" activeClassName="active">
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
