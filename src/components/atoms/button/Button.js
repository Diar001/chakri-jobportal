import React from "react";

const Button = ({
  type = "squared",
  onClick,
  children,
  btnType = "button",
}) => {
  return (
    <button type={btnType} onClick={onClick} className={`btn btn--${type}`}>
      {children}
    </button>
  );
};

export default Button;
