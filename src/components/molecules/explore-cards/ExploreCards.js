import React from 'react';
import Heading from '../../atoms/heading/Heading';
import Button from "../../atoms/button/Button";

import Icon from "../../../static/svg/icon-card.png";


const ExploreCards = () => {
    return (
      <div className="explore">
        <div className="explore-text">
          <Heading type="primary">Explore popular jobs</Heading>
          <Heading type="secondary">
            Check out featured jobs from popular <br /> companies. Start
            applying now.
          </Heading>
        </div>

        <Button btnType="submit" type="cards">
          View all job
        </Button>

        <div className="explore-cards">
          <div className="explore-cards--content">
            <h3 className="explore-cards--content-primary">DevOps Engineer</h3>
            <h3 className="explore-cards--content-secondary">
              We are looking for backend developer
            </h3>

            <p className="explore-cards--content-hour">1 Day ago - Full-time</p>

            <div className="job">
              <img src={Icon} alt="-" className="job-icon"></img>
              <div className="job-position">
                <span className="job-position--main">Notion</span>
                <span className="job-position--sub">Freelancer</span>
              </div>
            </div>
          </div>

          <div className="explore-cards--content">
            <h3 className="explore-cards--content-primary">DevOps Engineer</h3>
            <h3 className="explore-cards--content-secondary">
              We are looking for backend developer
            </h3>

            <p className="explore-cards--content-hour">1 Day ago - Full-time</p>

            <div className="job">
              <img src={Icon} alt="-" className="job-icon"></img>
              <div className="job-position">
                <span className="job-position--main">Notion</span>
                <span className="job-position--sub">Freelancer</span>
              </div>
            </div>
          </div>

          <div className="explore-cards--content">
            <h3 className="explore-cards--content-primary">DevOps Engineer</h3>
            <h3 className="explore-cards--content-secondary">
              We are looking for backend developer
            </h3>

            <p className="explore-cards--content-hour">1 Day ago - Full-time</p>

            <div className="job">
              <img src={Icon} alt="-" className="job-icon"></img>
              <div className="job-position">
                <span className="job-position--main">Notion</span>
                <span className="job-position--sub">Freelancer</span>
              </div>
            </div>
          </div>

          <div className="explore-cards--content">
            <h3 className="explore-cards--content-primary">DevOps Engineer</h3>
            <h3 className="explore-cards--content-secondary">
              We are looking for backend developer
            </h3>

            <p className="explore-cards--content-hour">1 Day ago - Full-time</p>

            <div className="job">
              <img src={Icon} alt="-" className="job-icon"></img>
              <div className="job-position">
                <span className="job-position--main">Notion</span>
                <span className="job-position--sub">Freelancer</span>
              </div>
            </div>
          </div>

          <div className="explore-cards--content">
            <h3 className="explore-cards--content-primary">DevOps Engineer</h3>
            <h3 className="explore-cards--content-secondary">
              We are looking for backend developer
            </h3>

            <p className="explore-cards--content-hour">1 Day ago - Full-time</p>

            <div className="job">
              <img src={Icon} alt="-" className="job-icon"></img>
              <div className="job-position">
                <span className="job-position--main">Notion</span>
                <span className="job-position--sub">Freelancer</span>
              </div>
            </div>
          </div>

          <div className="explore-cards--content">
            <h3 className="explore-cards--content-primary">DevOps Engineer</h3>
            <h3 className="explore-cards--content-secondary">
              We are looking for backend developer
            </h3>

            <p className="explore-cards--content-hour">1 Day ago - Full-time</p>

            <div className="job">
              <img src={Icon} alt="-" className="job-icon"></img>
              <div className="job-position">
                <span className="job-position--main">Notion</span>
                <span className="job-position--sub">Freelancer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ExploreCards;

