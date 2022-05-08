import React from "react";
import Button from "../../atoms/button/Button";

import JobAlerts from "../../../static/image/about-1.png";
import Company from "../../../static/image/about-2.png";
import Career from "../../../static/image/about-3.png";

const AboutCards = () => {
  return (
    <section className="section-about">
      <div className="container">
        <h2>Why people choose Chakri?</h2>
        <h3 className="heading-secondary">
          Chakra is the UK’s largest independent job board, Register your CV to
          start applying today.
          <br />
          With simple search tools and instant job matches delivered to your
          inbox, it’s never been
          <br />
          easier to land a new job with Chakri
        </h3>
      </div>

      <div className="about-grid">
        {/* STEP 01 */}
        <div className="step-img-box">
          <img
            src={JobAlerts}
            className="step-img"
            alt="Job Alerts Notification"
          />
        </div>

        <div className="step-text-box">
          <p className="step-number step-number--right">1</p>
          <h3 className="heading-tertiary">Job Alerts</h3>
          <p className="step-description">
            Chakri’s popular Job Alerts service allows you to stay up-to-date<br />
            with the latest jobs matching your criteria. Set up keywords and<br />
            save your searches to ensure you get the best jobs first, delivered<br />
            by email or straight to your Chakri account.
          </p>

          <Button btnType="submit" type="cards">
            Get Job Alert
          </Button>
        </div>

        {/* STEP 02 */}
        <div className="step-text-box-2">
          <p className="step-number step-number--left">2</p>
          <h3 className="heading-tertiary">Company A-Z</h3>
          <p className="step-description">
            Search our directory of employees and recruitment agencies by<br />
            popularity, sector and location.
          </p>

          <Button btnType="submit" type="cards">
            Search Companies
          </Button>
        </div>
        <div className="step-img-box">
          <img
            src={Company}
            className="step-img-2"
            alt="Search any vendors near where you are"
          />
        </div>

        {/* STEP 03 */}
        <div className="step-img-box">
          <img src={Career} className="step-img" alt="Career tips" />
        </div>
        <div className="step-text-box">
            <p className="step-number step-number--right">3</p>
            <h3 className="heading-tertiary">Career Advice</h3>
          <p className="step-description">
            Career tips, including salary guides, tax calculators snd interview<br/>
            advice, helping you get your next job.
          </p>

          <Button btnType="submit" type="cards">
            Read Our Advice
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
