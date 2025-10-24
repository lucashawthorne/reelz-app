import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/reelz-app/">
          <img src={Logo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li>
            <Link to="/reelz-app/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/reelz-app/movies/" className="nav__link">
              Find Your Movie
            </Link>
          </li>
          <li>
            <Link
              to="/reelz-app/"
              className="nav__link nav__link--primary no-cursor"
              onClick={() => alert("Feature not yet implemented 🙂‍↔️")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
