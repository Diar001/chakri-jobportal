import React, { useState } from "react";


import Button from "../../atoms/button/Button";




import Search from "../../../static/svg/search.svg";
import Pin from "../../../static/svg/pin.png";
import Route from "../../../static/svg/route.png";
import Arrow from "../../../static/svg/arrow.svg";

// Create state for nav selected
// Create Logic for line animation when its clicked

const SearchJob = () => {
  const [searchInputOne, setSearchInputOne] = useState("");
  const [searchInputTwo, setSearchInputTwo] = useState("");
  const [searchInputThree, setSearchInputThree] = useState("");

  return (
    <div className="search-job">
      <div className="search-job--card">
        <img src={Search} class="search-job--card__img" alt="hi"></img>
        <input
          value={searchInputOne}
          onChange={(e) => {
            setSearchInputOne(e.target.value);
          }}
          className="search-job--card__text"
          type="text"
          placeholder={"Job title or keyword"}
        />
      </div>

      <div className="search-job--card">
        <img src={Pin} class="search-job--card__img" alt="hi"></img>
        <input
          value={searchInputTwo}
          onChange={(e) => {
            setSearchInputTwo(e.target.value);
          }}
          className="search-job--card__text"
          type="text"
          placeholder={"New York, USA"}
        />
      </div>

      <div className="search-job--card">
        <img src={Route} class="search-job--card__img" alt="hi"></img>
        <input
          value={searchInputThree}
          onChange={(e) => {
            setSearchInputThree(e.target.value);
          }}
          className="search-job--card__text"
          type="text"
          placeholder={"Up to 15 miles"}
        />
        <img src={Arrow} className="search-job--card__arrow" alt="hi"></img>
      </div>

      <Button btnType="submit" type="rounded">
        Search
      </Button>
      <div class="search-job--view">
        <label class="checkbox-label">
          <input type="checkbox" />
          <span class="checkbox-custom rectangular"></span>
        </label>
        <div class="input-title">View Recent Searches</div>
      </div>
      {/* <div className="search-job--view">
        <input type="checkbox" name="view" />
        <label> View Recent Searches</label>
      </div> */}
    </div>
  );
};

export default SearchJob;
