import React, { FC } from "react";

type PubCardType = {
  className?: string;
  url?: string;
};

const PubCard: FC<PubCardType> = ({ className = "", url }) => {
  return (
    <div className={`relative anim-overlay rounded-md overflow-hidden w-full shadow-md cursor-pointer ${className}`}>
      <img className="w-full inline-block" src={url} alt="img" />
    </div>
  );
};

export default PubCard;
