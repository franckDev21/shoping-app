import React, { FC, ReactNode } from "react";

import SideBar1 from '../../image/sidebar1.jpg';

type SideBarType = {
  children: ReactNode;
  className?: string;
};

const SideBar: FC<SideBarType> = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      {children}

      <div className="relative anim-overlay rounded-md overflow-hidden w-full">
        <img className="w-full inline-block" src={SideBar1} alt="img" />
      </div>
    </div>
  );
};

export default SideBar;
