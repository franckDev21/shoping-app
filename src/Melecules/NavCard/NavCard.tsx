import React, { FC } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import MyIcon from "../../Atoms/MyIcon/MyIcon";
import Text from "../../Atoms/Text/Text";

type NavCardType = {
  className ?: string
}

const NavCard:FC<NavCardType> = ({ className }) => {
  return (
    <Text className={`${className} flex items-center`}>
      <MyIcon
        children={<BiChevronLeft />}
        className="mr-2 hover:bg-red-500 hover:text-white transition ease-in-out duration-300"
        width={27}
        height={27}
      />
      <MyIcon
        children={<BiChevronRight />}
        className="hover:bg-red-500 hover:text-white transition ease-in-out duration-300"
        width={27}
        height={27}
      />
    </Text>
  );
};

export default NavCard;
