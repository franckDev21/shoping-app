import React, { FC, ReactNode } from "react";
import Text from "../../Atoms/Text/Text";
import Title from "../../Atoms/Title/Title";

type CardType = {
  name?: string;
  children?: ReactNode;
  header?: ReactNode;
  className?: string;
  line?: boolean;
  style?: any;
  classTitle?: string;
  classHeader?: string;
  classBoxHeader?: string;
  typeHeaderIsFlex?: boolean;
};

const Card: FC<CardType> = ({
  name = "",
  children,
  header,
  className,
  line = false,
  style = {},
  classTitle = "",
  classHeader = "",
  classBoxHeader = "",
  typeHeaderIsFlex = true,
}) => {
  return (
    <div
      style={style}
      className={`${className} bg-white py-5 px-5 rounded-md shadow-lg`}
    >
      <div className={`${typeHeaderIsFlex && 'flex justify-between items-center'} ${classBoxHeader} md:text-2xl text-bold text-gray-700`}>
        <Title className={`${classTitle} text-[1.38rem] sm:text-[1.68rem]`}>
          {name}
        </Title>
        <div className={`flex items-center justify-between ${classHeader}`}>{header}</div>
      </div>
      {line && (
        <Text className="block h-[1px] bg-gray-300 bg-opacity-50 w-full my-3"></Text>
      )}
      {children}
    </div>
  );
};

export default Card;
