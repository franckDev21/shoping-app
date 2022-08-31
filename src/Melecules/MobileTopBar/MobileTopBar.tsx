import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Logo from "../../image/logo.png";
import { useDispatch } from "react-redux";
import { toggleValue } from "../../Store/features/notification/notificationSlice";

const MobileTopBar = () => {

  const dispatch = useDispatch();

  return (
    <div className="container md:hidden pb-1 pt-3 flex justify-between">
      <Link to="/" className="logo-sm inline-block">
        <img src={Logo} alt="logo" />
      </Link>

      <HamburgerMenu onClick={() => dispatch(toggleValue())} className="mr-2" isPrincipalMenu />
    </div>
  );
};

export default MobileTopBar;
