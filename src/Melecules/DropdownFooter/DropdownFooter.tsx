import React, { useState } from "react";
import { ImPlus, ImMinus } from "react-icons/im";

import "./style.scss";

type DropdownFooterType = {
  className?: string;
  title?: string;
  showTitle?: boolean;
  children?: React.ReactNode;
};

const DropdownFooter: React.FC<DropdownFooterType> = ({
  className = "",
  title,
  children,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`${className} dorpdown-footer w-full ${show ? "active" : ""}`}
    >
      <h2 className={`uppercase mb-4 font-semibold text-gray-700 flex justify-between items-center`}>
        <span>{title}</span>
        <span onClick={() => setShow(!show)} className='cursor-pointer'>
          {!show ? <ImPlus /> : <ImMinus />}
        </span>
      </h2>

      <div className={`dorpdown-footer__content`}>
        {children}
      </div>
    </div>
  );
};

export default DropdownFooter;
