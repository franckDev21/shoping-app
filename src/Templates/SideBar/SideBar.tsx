import React, { FC, ReactNode } from "react";

import SideBar1 from "../../image/sidebar1.jpg";
import SideBar2 from "../../image/pub2.jpg";
import PubCard from "../../Melecules/PubCard/PubCard";
import SideBarCard from "../../Organismes/SideBarCard/SideBarCard";
import { products } from "../../Utils/data";
import ProductItem from "../../Melecules/ProductItem/ProductItem";
import NavCard from "../../Melecules/NavCard/NavCard";
import Product from "../../Models/product.model";

type SideBarType = {
  children: ReactNode;
  className?: string;
};

const SideBar: FC<SideBarType> = ({ children, className }) => {

  let topSellingProducts: Product[] =  JSON.parse(JSON.stringify(products));
  topSellingProducts.splice(0,3)

  return (
    <div className={`${className}`}>
      {children}

      <PubCard url={SideBar1} />

      <SideBarCard name="On Sale" className="my-6">
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
      </SideBarCard>

      <PubCard url={SideBar2} className="mt-6" />

      <SideBarCard name="Top Selling" navigation={<NavCard />} className="my-6">
        <div className="p-3">
          {topSellingProducts.map((product, i) => (
            <ProductItem
              key={product.id}
              product={product}
              reduction={product.reductionPrice ? true : false}
              className="pb-4 mb-4"
              line={i + 1 !== topSellingProducts.length}
            />
          ))}
        </div>
      </SideBarCard>
    </div>
  );
};

export default SideBar;
