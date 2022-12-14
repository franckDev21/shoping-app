import React, { FC, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import MyImage from "../../Atoms/MyImage/MyImage";
import Text from "../../Atoms/Text/Text";
import Product from "../../Models/product.model";
import { extraiText, formatCurrency, generateStar } from "../../Utils/functions";
import IconProduct from "../IconProduct/IconProduct";
import './style.scss';

type ProductCardType = {
  className?: string;
  product: Product;
  reduction ?: boolean
};

const ProductCard: FC<ProductCardType> = ({ className = "", product, reduction }) => {
  const navigate = useNavigate();

  const goToPage = (url: string): void => {
    navigate(url);
  };

  return (
    <div
      className={`product-card relative flex-none text-center bg-gray-100 rounded-md py-4 ${className}`}
    >
      {reduction && <span className="absolute z-20 rounded px-2.5 text-xs py-0.5 bg-gray-800 text-white top-2 right-2.5">15%</span>}

      <div className="cursor-pointer product-card__screen ">
        {product.images.map((image,i) => (
          <MyImage key={i} url={image} className='top-0 bottom-0 h-auto w-60 right-0 left-0' />
        ))}
        <IconProduct className="icons absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
      </div>
      <Text className="relative z-20">
        {generateStar(product.countStart).map((star, i) => (
          <Fragment key={i}>{star}</Fragment>
        ))}
      </Text>
      <Text
        onClick={(e) => goToPage(`/product/${product.id}/show`)}
        className="cursor-pointer transition hover:text-red-400 relative z-20"
      >
        {extraiText(product.name)}
      </Text>
      <Text className="mt-2 font-extrabold text-gray-800 relative z-20">
        {formatCurrency(product.price)}
      </Text>
    </div>
  );
};

export default ProductCard;
