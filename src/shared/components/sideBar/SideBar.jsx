import { useState } from "react";
import { SideBarStyled } from "../../../components/styles/SideBar.styled";
import { sideBarInitialState } from "../../../utils/constants";
import { SideBarButton } from "../IconsComponents";
import OpenedSideBar from "./OpenedSideBar";
import './sideBar.css'


const SideBar = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(sideBarInitialState);

  const openSideBar = () => setIsOpenSideBar(true);
  const closeSideBar = () => setIsOpenSideBar(false);
  return (
    <SideBarStyled>
      {!isOpenSideBar ? (
        <div onClick={openSideBar} className="closed-side-bar">
          <SideBarButton />
        </div>
      ) : (
        <div className="opened-side-bar">
          <OpenedSideBar closeSideBar={closeSideBar} />
        </div>
      )}
    </SideBarStyled>
  );
};

export default SideBar;
