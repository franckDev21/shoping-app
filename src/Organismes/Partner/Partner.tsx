import React, { FC } from "react";
import Part1 from "../../image/part1.png";
import Part2 from "../../image/part2.png";
import Part3 from "../../image/part3.png";
import Part4 from "../../image/part4.png";
import Part5 from "../../image/part5.png";
import Part6 from "../../image/part6.png";
import Part7 from "../../image/part7.png";
import Part8 from "../../image/part8.png";
import Part9 from "../../image/part9.png";
import Part10 from "../../image/part10.png";

import "./style.scss";

type PartnerType = {
  className?: string;
};

const Partner: FC<PartnerType> = ({ className = "" }) => {
  return (
    <div
      className={`${className} carousel flex items-center justify-between overflow-x-scroll`}
    >
      <div className="carousel__img flex-none px-1">
        <img src={Part1} alt="" />
      </div>
      <div className="carousel__img flex-none px-1">
        <img src={Part2} alt="" />
      </div>
      <div className="carousel__img flex-none px-1">
        <img src={Part3} alt="" />
      </div>
      <div className="carousel__img flex-none px-1">
        <img src={Part4} alt="" />
      </div>
      <div className="carousel__img flex-none px-1">
        <img src={Part5} alt="" />
      </div>
      <div className="carousel__img flex-none px-1">
        <img src={Part6} alt="" />
      </div>
      <div className="carousel__img flex-none px-1">
        <img src={Part7} alt="" />
      </div>
      <div className="carousel__img flex-none px-1">
        <img src={Part8} alt="" />
      </div>
      <div className="carousel__img flex-none px-1">
        <img src={Part9} alt="" />
      </div>
      <div className="carousel__img flex-none px-1">
        <img src={Part10} alt="" />
      </div>
    </div>
  );
};

export default Partner;
