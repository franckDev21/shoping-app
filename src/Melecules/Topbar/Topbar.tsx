import React from "react";
import Separator from "../../Atoms/Separator/Separator";
import Text from "../../Atoms/Text/Text";
import Curency from "../Curency/Curency";
import Lang from "../Lang/Lang";

import { MdEmail } from 'react-icons/md'

const Topbar = () => {
  return (
    <section className="text-sm bg-gray-100 py-2.5 hidden md:block">
      <div className="container flex justify-between items-center">
        <div className="left flex justify-between">
          <span className="mr-3 inline-flex items-center">
            <Text>Get upto 50% discount everyday</Text>
          </span>

          <span className="ml-3 flex items-center justify-start">
            <MdEmail className="mr-1 translate-y-[1px]" />
            <Text className="inline">website@gmail.com</Text>
          </span>
        </div>

        <div className="rigth flex items-center">
          <Curency />
          <Separator />
          <Lang />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
