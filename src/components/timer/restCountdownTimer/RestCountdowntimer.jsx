import React from "react";
import "./restCountdowntimer.css"


const RestCountdowntimer = ({ remainingTime }) => {
  return (
    <div className="countdown-timer">
      <span>{remainingTime.days}</span>
      <span>days</span>
      <span className="countdown-timer__element">{remainingTime.hours}</span>
      <span>hours</span>
      <span className="countdown-timer__element">{remainingTime.minutes}</span>
      <span>minutes</span>
    </div>
  );
};

export default RestCountdowntimer;
