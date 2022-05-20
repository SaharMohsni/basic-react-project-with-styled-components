import React from "react";
import { TopBarStyled } from "../../../components/styles/TopBar.styled";
import RestCountdowntimer from "../../../components/timer/restCountdownTimer/RestCountdowntimer";



const TopBar = ({ remainingTime }) => {
  return (
    <TopBarStyled>
      <RestCountdowntimer remainingTime={remainingTime} />
    </TopBarStyled>
  );
};

export default TopBar;
