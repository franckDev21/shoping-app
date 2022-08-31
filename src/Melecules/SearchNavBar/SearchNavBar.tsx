import React, { FC } from "react";
import Logo from "../../image/logo.png";
import HeartIcon from "../HeartIcon/HeartIcon";
import UserIcon from "../UserIcon/UserIcon";
import CardIcon from "../CardIcon/CardIcon";
import Button from "../../Atoms/Button/Button";
import InputFile from "../../Atoms/InputFile/InputFile";
import { Link } from "react-router-dom";

interface SearchNavBarProps {
  className?: string;
}

const SearchNavBar: FC<SearchNavBarProps> = ({ className = "" }) => {
  return (
    <div className={`${className} border-b`}>
      <div className="container flex items-center justify-between py-5">
        <Link to='/'>
          <img src={Logo} alt="logo" />
        </Link>

        <div className="flex items-center pr-0.5 -translate-x-2 w-[55%] border-2 border-gray-100 rounded-3xl">
          <select className="w-[34%] rounded-3xl pl-3">
            <option>Categories</option>
          </select>
          <InputFile className="w-[50%] py-2.5 bg-white" placeholder="Search" />
          <Button className="w-[16%] pt-[.45rem] pb-[.6rem] rounded-3xl ">search</Button>
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
