import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  // let btnName = 'Login'
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <a href="">
          <img src={LOGO_URL} />
        </a>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button
              onClick={() =>
                btnNameReact == "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login")
              }
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
