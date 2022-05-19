import React from "react";
import { FlexHCenterVCenterStyled } from "../../styles/FlexStyled";
import { CountdownTimerElementStyled } from "../../styles/Timer.styled";
import "./secondsCounterTimer.css";


const SecondsCounterTimer = ({ secondsremainingTime }) => {
  return (
    <div className="countdown-timer seconds-counter-timer">
      <CountdownTimerElementStyled>
        <FlexHCenterVCenterStyled>
          <span className="countdown-timer__element">
            {secondsremainingTime}
          </span>
          <span>seconds</span>
        </FlexHCenterVCenterStyled>
      </CountdownTimerElementStyled>
    </div>
  );
};

export default SecondsCounterTimer;
