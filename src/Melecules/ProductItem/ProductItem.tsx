import React, { FC } from "react";
import MyImage from "../../Atoms/MyImage/MyImage";
import Product from "../../Models/product.model";
import { extraiText, formatCurrency } from "../../Utils/functions";

type ProductItemType = {
  className ?: string,
  reduction ?: boolean,
  product: Product,
  line ?: boolean
}

const ProductItem:FC<ProductItemType> = ({ className='',reduction=false, product, line=true }) => {

  return (
    <div className={`${className} product-card ${line && 'border-b border-gray-100'}`}>
      <div className={`product-card__screen flex items-start justify-start`}>
      <div className="w-[4.4rem] h-[4.4rem] rounded mr-3 relative bg-gray-100 flex-none">
        {product.images.map((image,i) => (
          <MyImage key={i} url={image} className='top-0 bottom-0 right-0 left-0' />
        ))}
      </div>
      <div>
        <h4 className="mb-1 cursor-pointer hover:text-primary transition">{extraiText(product.name,16)}</h4>
        <p className="flex items-center">
          <span className="font-semibold mr-2">{formatCurrency(product.price)}</span>{" "}
          {reduction && <span className="line-through text-sm text-gray-400">$122.00</span>}
        </p>
      </div>
    </div>
    </div>
  );
};

export default ProductItem;
