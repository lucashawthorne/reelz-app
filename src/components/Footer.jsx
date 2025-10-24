import React from "react";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="footer__wrapper">
            <Link to="/reelz-app/">
              <figure class="footer__logo">
                <img src="./assets/logo.png" class="footer__logo--img" alt="" />
              </figure>
            </Link>
            <div class="footer__list">
              <Link to="/reelz-app/" class="footer__link">
                Home
              </Link>
              <Link to="/reelz-app/" class="footer__link">
                Find Your Movie
              </Link>
              <a class="footer__link no-cursor">Contact</a>
            </div>
            <div class="footer__copyright">Copyright &copy; 2025 Reelz</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
