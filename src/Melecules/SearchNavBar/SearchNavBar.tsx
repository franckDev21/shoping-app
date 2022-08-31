import React, { FC, useState } from "react";
import Logo from "../../image/logo.png";
import HeartIcon from "../HeartIcon/HeartIcon";
import UserIcon from "../UserIcon/UserIcon";
import CardIcon from "../CardIcon/CardIcon";
import Button from "../../Atoms/Button/Button";
import InputFile from "../../Atoms/InputFile/InputFile";
import { Link } from "react-router-dom";

import ImgSeparator from "../../image/separator.png";
import SelectInput from "../../Atoms/SelectIput/SelectInput";

interface SearchNavBarProps {
  className?: string;
}

const SearchNavBar: FC<SearchNavBarProps> = ({ className = "" }) => {

  const [hover,setHover] = useState(false);

  return (
    <div className={`${className} border-b`}>
      <div className="container flex items-center justify-between py-5">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <div className="flex items-center pr-0.5 -translate-x-2 w-[55%] border-2 border-gray-100 rounded-3xl">
          <SelectInput
            style={{
              backgroundImage: `url(${ImgSeparator})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
            }}
          >
            <option>Categories</option>
          </SelectInput>
          <InputFile className="w-[50%] py-2.5 bg-white" placeholder="Search" />
          <Button
            onHover={() => setHover(true)}
            onLeave={() => setHover(false)}
            className={`w-[16%] pt-[.45rem] pb-[.6rem] rounded-3xl ${hover ? 'bg-gradiant-reverse':''}`}>
            search
          </Button>
        </div>

        <div className="flex items-center justify-between w-[22%]">
          <HeartIcon />
          <UserIcon />
          <CardIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchNavBar;
