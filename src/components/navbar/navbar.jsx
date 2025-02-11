import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <h1>Flyox</h1>

      <ul>
        <li>
          <a href=''>Visa</a>
        </li>
        <li>
          <a href=''>Trip Plan</a>
        </li>
        <li>
          <a href=''>AboutUs</a>
        </li>
        <li>
          <a href=''>Blog</a>
        </li>
      </ul>

      <div className="button">
        <button className="signin">Sign In</button>
        <button className="signup">Sign Up </button>
      </div>
    </nav>
  );
};

export default NavBar;
