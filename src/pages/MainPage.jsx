import { useState, useEffect } from "react";
import { BodyStyled } from "../components/styles/Body.styled";
import { FlexVCenterStyled } from "../components/styles/FlexStyled";
import CountdownTimer from "../components/timer/secondsCounterTimer/SecondsCounterTimer";
import Footer from "../shared/components/footer/Footer";
import TopBar from "../shared/components/topBar/TopBar";
import { defaultResidualTime, countdownTimestampMs, sideBarInitialState } from "../utils/constants";
import { getResidualTimeUntilMsTimestamp } from "../utils/countDownTimer.helper";

const MainPage = () => {
  const [remainingTime, setRemainingTime] = useState(defaultResidualTime);
  const [isOpenSideBar, setIsOpenSideBar] = useState(sideBarInitialState
  );

    useEffect(() => {
      const intervalId = setInterval(() => {
        updateRemainingTime(countdownTimestampMs);
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);

     function updateRemainingTime(countdown) {
       setRemainingTime(getResidualTimeUntilMsTimestamp(countdown));
     }

  return (
    <div className="main-page">
      <TopBar />
      <BodyStyled>
        <FlexVCenterStyled>
          {isOpenSideBar && <div>sideBar</div>}
          <CountdownTimer secondsremainingTime={remainingTime.seconds} />
        </FlexVCenterStyled>
      </BodyStyled>
      <Footer />
    </div>
  );
};

export default MainPage;
