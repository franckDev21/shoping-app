import React, { FC } from "react";
import { useSelector } from "react-redux";
import MenuNavBar from "../../Melecules/MenuNavBar/MenuNavBar";
import MobileScreenMenu from "../../Melecules/MobileScreenMenu/MobileScreenMenu";
import MobileTopBar from "../../Melecules/MobileTopBar/MobileTopBar";
import SearchNavBar from "../../Melecules/SearchNavBar/SearchNavBar";
import Topbar from "../../Melecules/Topbar/Topbar";

type HeaderType = {
  className?: string;
};

const Header: FC<HeaderType> = ({ className = "" }) => {
  const showMenu = useSelector((state:any) => state);
  return (
    <header className={`${className}`}>
      <Topbar />
      <MobileTopBar />
      <SearchNavBar />
      <MenuNavBar className="hidden md:block" />

      {/* menu mobile screen */}
      <MobileScreenMenu isVisible={showMenu.notification.showMenu} />
    </header>
  );
};

export default Header;
