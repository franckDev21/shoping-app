import React, { FC, Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "../../Melecules/Card/Card";
import NavCard from "../../Melecules/NavCard/NavCard";
import ProductCard from "../../Melecules/ProductCard/ProductCard";
import { products } from "../../Utils/data";

type TrendingProductType = {
  className?: string;
};

const TrendingProduct: FC<TrendingProductType> = ({ className }) => {

  return (
    <div className={`${className}`}>
      <Card
        classTitle='hidden lg:block'
        name="Trending Product"
        line
        classHeader="w-full flex  md:w-auto"
        typeHeaderIsFlex={false}
        classBoxHeader='lg:flex lg:items-center lg:justify-between'
        header={
          <>
            <nav className="mr-14 text-lg text-gray-800 w-1/2 ">
              <Link className="mr-4 sm:mr-8 text-primary" to="/">
                Featured
              </Link>
              <Link className="mr-4 sm:mr-8" to="/">
                Bestseller
              </Link>
              <Link to="/">Latest</Link>
            </nav>

            <NavCard />
          </>
        }
      >
        <div className="grid  tablet:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product,i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TrendingProduct;
