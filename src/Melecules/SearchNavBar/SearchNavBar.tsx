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
import Text from "../../Atoms/Text/Text";
import { FiSearch } from "react-icons/fi";

interface SearchNavBarProps {
  className?: string;
}

const SearchNavBar: FC<SearchNavBarProps> = ({ className = "" }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className={`${className} border-b`}>
      <div className="container block sm:flex items-center justify-between pt-2 pb-3 md:py-5">
        <Link to="/" className="logo-lg hidden md:block">
          <img src={Logo} alt="logo" />
        </Link>

        <div className="flex items-center pr-0.5 md:-translate-x-2 w-full md:w-[50%] justify-between lg:justify-start lg:w-[55%] border-2 border-gray-100 rounded-3xl">
          <SelectInput
            className="hidden smartphone:inline-block w-[34%] "
            style={{
              backgroundImage: `url(${ImgSeparator})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
            }}
          >
            <option>Categories</option>
          </SelectInput>
          <InputFile className="w-[80%] smartphone:w-[50%] rounded-full py-2.5 bg-white" placeholder="Search" />
          <Button
            onHover={() => setHover(true)}
            onLeave={() => setHover(false)}
            className={` h-10 w-10 flex justify-center items-center lg:inline-block rounded-full  lg:h-auto lg:w-[16%] lg:pt-[.45rem] lg:pb-[.6rem] lg:px-4 lg:rounded-3xl ${
              hover ? "bg-gradiant-reverse" : ""
            }`}
          >
            <Text className="hidden lg:inline-block">search</Text>
            <Text className="lg:hidden">
              <FiSearch className="w-5 h-5" />
            </Text>
          </Button>
        </div>
          
        <div className="flex items-center justify-end md:justify-between pt-3 sm:pt-0 pl-2 lg:pt-3 pr-4 md:pt-0 lg:w-[22%]">
          <HeartIcon />
          <UserIcon />
          <CardIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchNavBar;
