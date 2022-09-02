import React, { FC, ReactNode } from "react";
import Title from "../../Atoms/Title/Title";
import Card from "../../Melecules/Card/Card";

type SideBarCardType = {
  className?: string;
  children?: ReactNode;
  name ?: string,
  navigation?: ReactNode
};

const SideBarCard: FC<SideBarCardType> = ({ className, children, name, navigation }) => {
  return (
    <Card
      className={`${className} px-1.5 py-1 w-full`}
      style={{ boxShadow: `0px 0px 6px 0px rgb(4 0 0 / 10%)` }}
    >
      <Title className="bg-gradiant flex items-center justify-between px-3 py-2 mb-5 text-base rounded-md">
        <span className="text-white">{name}</span>

        {navigation}
      </Title>

      {children}
    </Card>
  );
};

export default SideBarCard;
