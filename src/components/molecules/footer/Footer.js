import React from 'react';
import Chakri from "../../../static/image/logo-2.png";


const list = [
  {
    link: (
      <ul>
        <li>Jobseekers</li>
        <li>Register</li>
        <li>CV Advice</li>
        <li>Job Alerts</li>
        <li>Career</li>
        <li>Salary Guide</li>
      </ul>
    ),
  },

  {
    link: (
      <ul>
        <li>Popular</li>
        <li>Register</li>
        <li>CV Advice</li>
        <li>Job Alerts</li>
        <li>Career</li>
        <li>Salary Guide</li>
      </ul>
    ),
  },

  {
    link: (
      <ul>
        <li>Popular</li>
        <li>Register</li>
        <li>CV Advice</li>
        <li>Job Alerts</li>
        <li>Career</li>
        <li>Salary Guide</li>
      </ul>
    ),
  },

  {
    link: (
      <ul>
        <li>Popular</li>
        <li>Register</li>
        <li>CV Advice</li>
        <li>Job Alerts</li>
        <li>Career</li>
        <li>Salary Guide</li>
      </ul>
    ),
  },

  {
    link: (
      <ul>
        <li>Popular</li>
        <li>Register</li>
        <li>CV Advice</li>
        <li>Job Alerts</li>
        <li>Career</li>
        <li>Salary Guide</li>
      </ul>
    ),
  },
  
];



const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-container__logo">
            <img src={Chakri} alt="airbnb logo" />
          </div>

          <div className="footer-container__content">
              {list.map((link) => (
                 <li>{link.link}</li>
              ))}
          </div>
        </div>
      </div>
    );
}

export default Footer
