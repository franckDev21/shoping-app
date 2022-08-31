import React from "react";
import { currencies } from "../../Utils/data";
import Dropdown from "../Dropdown/Dropdown";


const Curency = () => {
  return (
    <Dropdown dropdownItems={currencies}></Dropdown>
  );
};

export default Curency;
