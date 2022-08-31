import React, { FC, useState } from "react";
import Button from "../../Atoms/Button/Button";
import Text from "../../Atoms/Text/Text";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

import { BsFillCaretDownFill } from 'react-icons/bs'
import { Link } from "react-router-dom";

interface MenuNavBarProps {
  className ?: string
}

const MenuNavBar:FC<MenuNavBarProps> = ({ className='' }) => {
  const [anim,setAnim] = useState(false);

  return (
    <div className={`py-2 ${className}`}>
      <div className="container flex items-center">
        <Button
          onHover={() => setAnim(true)}
          onLeave={() => setAnim(false)}
          className={`uppercase rounded-3xl font-semibold flex items-center py-2 px-5 lg:py-3 lg:px-6`}
        >
          <HamburgerMenu parentIsHover={anim} />
          <Text className=" ml-3 lg:ml-4 mr-5 lg:mr-10">All categories</Text>
          <BsFillCaretDownFill width={5} height={5} />
        </Button>

        <nav className="flex items-center uppercase lg:text-lg ml-4 lg:ml-8">
          <Link className="inline-block mr-6 transition hover:text-primary" to='/'>special</Link>
          <Link className="inline-block mr-6 transition hover:text-primary" to='/'>Brands</Link>
          <Link className="inline-block mr-6 transition hover:text-primary" to='/'>Contact us</Link>
          <Link className="inline-block mr-6 transition hover:text-primary" to='/'>Sitemap</Link>
          <Link className="inline-block mr-6 transition hover:text-primary" to='/'>order</Link>
        </nav>

      </div>
    </div>
  );
};

export default MenuNavBar;
