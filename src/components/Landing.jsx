import React from "react";
import UndrawMovies from "../assets/undraw_movies.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchBar from './SearchBar'


const Landing = () => {
  return (
    <div>
      <section id="landing">
        <header>
          <div className="header__container">
            <div className="header__description">
              <h1 className="light__gold">Getting ready for a movie night?</h1>
              <h2>
                Find your dream film with <span className="gold">Reelz</span> 🎞️
              </h2>
            </div>
          </div>
          <div class="search__wrapper">
            <SearchBar /> 
            <figure className="header__img--wrapper">
              <img src={UndrawMovies} alt="" />
            </figure>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Landing;
