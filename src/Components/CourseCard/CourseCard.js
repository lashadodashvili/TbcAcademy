import React from "react";
import "./Course-Card.css";
const CourseCard = ({ data }) => {
  return (
    <div className="card-container   ">
      <img src={data.imgSmall} alt={data.title} />
      <div className="card-detail-container">
        <div>
          <p className="card-detail-container-title">{data.title}</p>
          {checkRegistrationDate(data.details.registerEndDate) ? (
            ""
          ) : (
            <p className="card-detail-container-status">
              რეგისტრაცია დასრულებულია
            </p>
          )}
        </div>
        <div className="card-button-container">
          <img src="icon/arroRight.svg" alt="logo" />
          <button>კურსის დეტალები</button>
        </div>
      </div>
    </div>
  );
};

const checkRegistrationDate = (date) => {
  const registerEndDate = new Date(date);
  const todayDate = new Date();
  if (registerEndDate >= todayDate) {
    return true;
  } else {
    return false;
  }
};

export default CourseCard;
