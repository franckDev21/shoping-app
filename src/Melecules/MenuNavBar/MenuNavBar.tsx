import React, { useState } from "react";
import Button from "../../Atoms/Button/Button";
import Text from "../../Atoms/Text/Text";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

import { BsFillCaretDownFill } from 'react-icons/bs'
import { Link } from "react-router-dom";

const MenuNavBar = () => {
  const [anim,setAnim] = useState(false);

  return (
    <div className="py-2">
      <div className="container flex items-center">
        <Button
          onHover={() => setAnim(true)}
          onLeave={() => setAnim(false)}
          className={`uppercase rounded-3xl font-semibold flex items-center`}
        >
          <HamburgerMenu parentIsHover={anim} />
          <Text className="ml-4 mr-10">All categories</Text>
          <BsFillCaretDownFill width={5} height={5} />
        </Button>

        <nav className="flex items-center uppercase text-lg ml-8">
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
