import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="footer__wrapper">
            <a href="/">
              <figure class="footer__logo">
                <img src="./assets/logo.png" class="footer__logo--img" alt="" />
              </figure>
            </a>
            <div class="footer__list">
              <a href="/" class="footer__link">
                Home
              </a>
              <a class="footer__link no-cursor">Find Your Movie</a>
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
