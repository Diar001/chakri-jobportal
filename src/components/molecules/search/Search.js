import React from "react";
import One from "../../../static/svg/illustration-one.png";
import Two from "../../../static/svg/illustration-two.png";


const Search = () => {
  return (
    <div className="search">
      <div className="search__container">
        <h1 className="heading-primary">
          <span className="heading-primary--main">It's simple and smart</span>
          <span className="heading-primary--sub">Search, Find& Apply</span>
        </h1>

        <div className="search__form">
          <div className="search__form--illustration">
            <img
              src={Two}
              alt="-"
              class="illu__img"
            ></img>
            <span>200,036 Jobs</span>
          </div>

          <div className="search__form--illustration">
          <img
            src={One}
            alt="-"
            class="illu__img"
          ></img>
          <span>9,914 Companies</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
