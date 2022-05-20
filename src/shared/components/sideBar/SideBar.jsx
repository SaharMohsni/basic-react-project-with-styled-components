import { useState } from "react";
import { sideBarInitialState } from "../../../utils/constants";
import { SideBarButton } from "../IconsComponents";
import OpenedSideBar from "./OpenedSideBar";
import './sideBar.css'


const SideBar = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(sideBarInitialState);

  const openSideBar = () => setIsOpenSideBar(true);
  const closeSideBar = () => setIsOpenSideBar(false);
  return (
    <div className={`${isOpenSideBar ? "opened" : "closed"} side-bar`}>
      {!isOpenSideBar ? (
        <div onClick={openSideBar} className="closed-side-bar">
          <SideBarButton />
        </div>
      ) : (
        <div className="opened-side-bar">
          <OpenedSideBar closeSideBar={closeSideBar} />
        </div>
      )}
    </div>
  );
};

export default SideBar;
