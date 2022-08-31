import React, { FC, ReactNode } from "react";

interface SelectInputProps {
  className ?: string;
  style ?: any;
  children: ReactNode;
}

const SelectInput:FC<SelectInputProps> = ({ className, style={}, children }) => {
  return (
    <select
      style={style}
      className="w-[34%] rounded-3xl py-2.5 border-none outline-none focus:border-none focus:outline-none pl-3 select-none appearance-none"
    >
      {children}
    </select>
  );
};

export default SelectInput;
