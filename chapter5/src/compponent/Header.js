import React from 'react'
import { LOGO_URL } from '../utils/constant';

const Header = () => {
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header