import React, { FC, ReactNode } from "react";

import SideBar1 from '../../image/sidebar1.jpg';
import SideBar2 from '../../image/pub2.jpg';
import PubCard from "../../Melecules/PubCard/PubCard";
import OnSaleCard from "../../Melecules/OnSaleCard/OnSaleCard";

type SideBarType = {
  children: ReactNode;
  className?: string;
};

const SideBar: FC<SideBarType> = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      {children}

      <PubCard url={SideBar1} />

      <OnSaleCard className="my-6" />

      <PubCard url={SideBar2} className='mt-6' />


    </div>
  );
};

export default SideBar;
