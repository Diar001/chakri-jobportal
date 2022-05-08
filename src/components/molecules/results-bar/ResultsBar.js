import React, { useState, useEffect, useRef } from "react";
import { TweenLite, Power3, gsap } from "gsap";

import Apartment from "../../../static/svg/apartment-round.svg";
import Location from "../../../static/svg/location-pin.svg";
import JobSeeker from "../../../static/svg/job-seeker.png";
import Company from "../../../static/svg/company.png";
import { useGetJobsQuery } from "../../services/jobApi";


const ResultsBar = () => {

  const {data, isFetching} = useGetJobsQuery();
  // const {jobs, setJobs} =

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
    isActive4: false,
  });

  let line = useRef(null);
  let links = useRef(null);

  let menu1 = useRef(null);
  let menu2 = useRef(null);

  const moove = () => {
    if (links.children[0].classList.contains("active")) {
    setState({ isActive1: false, isActive2: true });
    gsap.to(line.current, { x: 360 });
    gsap.to(menu1.current, { color: "#8D8A99" });
    gsap.to(menu2.current, { color: "#2AB927", duration: 4 });
    }
  };

  return (
    <div className="results">
      <div className="results-category">
        <div ref={(el) => (links = el)} className="results-category--icon">
          <img src={Apartment} alt="apartment icon" />
          <span
            ref={menu1}
            onClick={moove}
            className={state.isActive1 ? "active" : ""}
          >
            Jobs by Industry
          </span>
        </div>

        <div className="results-category--icon" ref={(el) => (links = el)}>
          <img src={Location} alt="location icon" />
          <span
            onClick={moove}
            ref={menu2}
            className={state.isActive2 ? "active" : ""}
          >
            Jobs by Location
          </span>
        </div>

        <div className="results-category--icon" ref={(el) => (links = el)}>
          <img src={JobSeeker} alt="job icon" />
          <span onClick={moove} className={state.isActive3 ? "active" : ""}>
            Popular Jobs
          </span>
        </div>

        <div className="results-category--icon" ref={(el) => (links = el)}>
          <img src={Company} alt="company icon" />
          <span onClick={moove} className={state.isActive4 ? "active" : ""}>
            {" "}
            Jobs by Company{" "}
          </span>
        </div>
      </div>
      <hr className="results-grey" />
      <hr className="results-green" ref={line} />

      <ul className="results-elements">
        <span className="results-elements-type" /*value={globalStats.title}*/></span>
        <li>Aviation</li>
        <li>Aviation</li>
        <li>Aviation</li>
        <li>Aviation</li>

        <li>Aviation</li>
        <li>Aviation</li>
        <li>Aviation</li>
        <li>Aviation</li>
        <li>Aviation</li>

        <li>Aviation</li>
        <li>Aviation</li>
        <li>Aviation</li>
        <li>Aviation</li>
        <li>Aviation</li>

        <li>Aviation</li>
        <li>Aviation</li>
        <li>Aviation</li>
        <li>Aviation</li>
        <li>Aviation</li>

        <li>Aviation</li>
        <li>Aviation</li>
        <li>Aviation</li>
        <li>Aviation</li>
        <li>Aviation</li>
      </ul>
    </div>
  );
};

export default ResultsBar;
