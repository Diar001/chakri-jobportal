import React from "react";
import Button from "../../atoms/button/Button";
import Chakri from "../../../static/image/logo.png";
import { Link } from "react-router-dom";



const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__logo">
        <img src={Chakri} alt="chakri logo" />
      </div>

<div className="menu__items">
      <li className="menu__item">
        <Link to="/" className="menu__link"> 
        <span>Home</span>
         </Link> 
      </li>

      <li className="menu__item">
        <Link to="/courses" className="menu__link">
        <span>Courses</span>
        </Link>
      </li>

      <li className="menu__item">
        <Link to="/career" className="menu__link"> 
        <span>Career Advice</span>
        </Link>
      </li>

      <li className="menu__item">
        <Link to="/companies" className="menu__link"> 
        <span>Company A-Z</span>
        </Link> 
      </li>

</div>

      {/* <div className="menu__form">
        <li className="menu__login">
          <span>Log in</span>
        </li>
</div> */}
      <div className="menu__btn">
        <li className="menu__btn--login">
          <span>Log in</span>
        </li>
        <Button btnType="submit" type="transparent">
          Register Now
        </Button>
      </div>
    </div>
  );
};

export default Menu;
