import React from "react";
import { FlexHCenterVCenterStyled } from "../../../components/styles/FlexStyled";
import { FooterStyled } from "../../../components/styles/Footer.styled";
import "./footer.css"


const Footer = () => {
  return (
    <FooterStyled>
        <div className="footer">©2022 Create your Countdown Timer</div>
    </FooterStyled>
  );
};

export default Footer;
