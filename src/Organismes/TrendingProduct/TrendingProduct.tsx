import React, { FC, Fragment } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import MyIcon from "../../Atoms/MyIcon/MyIcon";
import Text from "../../Atoms/Text/Text";
import Card from "../../Melecules/Card/Card";
import ProductCard from "../../Melecules/ProductCard/ProductCard";
import { products } from "../../Utils/data";

type TrendingProductType = {
  className?: string;
};

const TrendingProduct: FC<TrendingProductType> = ({ className }) => {

  return (
    <div className={`${className}`}>
      <Card
        name="Trending Product"
        line
        header={
          <>
            <nav className="mr-14 text-lg text-gray-800">
              <Link className="mr-8 text-primary" to="/">
                Featured
              </Link>
              <Link className="mr-8" to="/">
                Bestseller
              </Link>
              <Link to="/">Latest</Link>
            </nav>

            <Text className="flex items-center">
              <MyIcon
                children={<BiChevronLeft />}
                className="mr-2 hover:bg-red-500 hover:text-white transition ease-in-out duration-300"
                width={27}
                height={27}
              />
              <MyIcon
                children={<BiChevronRight />}
                className="hover:bg-red-500 hover:text-white transition ease-in-out duration-300"
                width={27}
                height={27}
              />
            </Text>
          </>
        }
      >
        <div className="grid grid-cols-3 gap-8">
          {products.map((product,i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TrendingProduct;
