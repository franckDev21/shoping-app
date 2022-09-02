import React, { FC, ReactNode } from "react";

type ContentType = {
  children: ReactNode;
  className?: string;
};

const Content: FC<ContentType> = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

export default Content;
