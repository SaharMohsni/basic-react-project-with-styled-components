import React from "react";
import { CountdownTimerElementStyled } from "../../styles/Timer.styled";
import "./secondsCounterTimer.css";


const SecondsCounterTimer = ({ secondsremainingTime }) => {
  return (
    <div className="countdown-timer seconds-counter-timer">
      <CountdownTimerElementStyled>
        <div className="flex-h-center-v-Center">
          <span className="countdown-timer__element">
            {secondsremainingTime}
          </span>
          <span>seconds</span>
        </div>
      </CountdownTimerElementStyled>
    </div>
  );
};

export default SecondsCounterTimer;
