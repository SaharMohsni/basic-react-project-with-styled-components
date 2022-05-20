import { useState, useEffect } from "react";
import { BodyHeightStyled } from "../components/styles/Body.styled";
import SecondsCounterTimer from "../components/timer/secondsCounterTimer/SecondsCounterTimer";
import Footer from "../shared/components/footer/Footer";
import SideBar from "../shared/components/sideBar/SideBar";
import TopBar from "../shared/components/topBar/TopBar";
import { defaultResidualTime, countdownTimestampMs } from "../utils/constants";
import { getResidualTimeUntilMsTimestamp } from "../utils/countDownTimer.helper";


const MainPage = () => {
  const [remainingTime, setRemainingTime] = useState(defaultResidualTime);


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
      <TopBar remainingTime={remainingTime} />
      <BodyHeightStyled>
        <div className="flex-v-center">
          <SideBar />
          <SecondsCounterTimer secondsremainingTime={remainingTime.seconds} />
        </div>
      </BodyHeightStyled>
      <Footer />
    </div>
  );
};

export default MainPage;
