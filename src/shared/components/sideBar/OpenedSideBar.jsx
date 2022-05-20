import React from "react";
import { OpenedSideBarStyled } from "../../../components/styles/SideBar.styled";
import { CloseIcon } from "../IconsComponents";
const OpenedSideBar = ({ closeSideBar }) => {
  return (
      <OpenedSideBarStyled>
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
        </ul>
        <div onClick={closeSideBar}>
          <CloseIcon />
        </div>
      </OpenedSideBarStyled>
  );
};

export default OpenedSideBar;
