import React from "react";
import { langs } from "../../Utils/data";
import Dropdown from "../Dropdown/Dropdown";

const Lang = () => {
  return (
    <Dropdown dropdownItems={langs}></Dropdown>
  );
};

export default Lang;
