import React, { FC } from "react";
import Title from "../../Atoms/Title/Title";
import { products } from "../../Utils/data";
import Card from "../Card/Card";
import ProductItem from "../ProductItem/ProductItem";

type OnSaleCardType = {
  className?: string;
};

const OnSaleCard: FC<OnSaleCardType> = ({ className }) => {
  return (
    <Card
      className={`${className} px-1.5 py-1 w-full`}
      style={{ boxShadow: `0px 0px 6px 0px rgb(4 0 0 / 10%)` }}
    >
      <Title className="bg-gradiant px-3 py-2 mb-5 text-base rounded-md">
        <span className="text-white">On Sale</span>
      </Title>

      <div className="p-3">
        {products.map((product, i) => (
          <ProductItem
            key={product.id}
            product={product}
            reduction={product.reductionPrice ? true : false}
            className="pb-4 mb-4"
            line={i + 1 !== products.length}
          />
        ))}
      </div>
    </Card>
  );
};

export default OnSaleCard;
