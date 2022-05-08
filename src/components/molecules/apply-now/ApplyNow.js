import React from "react";

import Button from "../../atoms/button/Button";


const ApplyNow = () => {
    return (
      <div className="apply">
          
        <div className="apply-content">
          <span className="apply-content--main">Explore a job now!</span>
          <span className="apply-content--sub">
            Upload your CV today to be headhunted by 9,915 companies,<br /> 
            and apply to 201,033 jobs with 1-click apply.
          </span>
        </div>

        <div className="apply-button">
        <Button btnType="submit" type="apply">
          Apply Now
        </Button>
        </div>
      </div>
    );
}

export default ApplyNow;

