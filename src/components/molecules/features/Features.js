import React from 'react';
import Airbnb from "../../../static/image/airbnb.png";
import ShipBob from "../../../static/image/shipbob.png";
import Discover from "../../../static/image/discover.png";
// import Walmart from "../../../static/image/walmart.png";
// import CapitalOne from "../../../static/image/capitalone.png";
// import Discord from "../../../static/image/discord.png";



const Features = () => {
    return (
      <section className="section-featured">
        <div className="container">
          <h2 className="heading-featured-in">
            Featured recruiters and employers
          </h2>
          <div className="logos">
            <img src={Airbnb} alt="airbnb logo" />
            <img src={ShipBob} alt="shipbob logo" />
            <img src={Discover} alt="airbnb logo" />
            <img src={Airbnb} alt="walmart logo" className="img-lg" />
            <img src={ShipBob} alt="airbnb logo" className="img-lg" />
            <img src={Discover} alt="airbnb logo" />
          </div>
        </div>
      </section>
    );
};

export default Features;
