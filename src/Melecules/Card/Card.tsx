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
};

const Card: FC<CardType> = ({
  name = "",
  children,
  header,
  className,
  line = false,
  style = {},
}) => {
  return (
    <div
      style={style}
      className={`${className} bg-white py-5 px-5 rounded-md shadow-lg`}
    >
      <div className="flex justify-between items-center text-2xl text-bold text-gray-700">
        <Title>{name}</Title>
        <div className="flex items-center">{header}</div>
      </div>
      {line && (
        <Text className="block h-[1px] bg-gray-300 bg-opacity-50 w-full my-3"></Text>
      )}
      {children}
    </div>
  );
};

export default Card;
