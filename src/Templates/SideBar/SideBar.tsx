import React, { FC, ReactNode } from "react";

import SideBar1 from "../../image/sidebar1.jpg";
import SideBar2 from "../../image/pub2.jpg";
import profil from "../../image/profil.png";
import PubCard from "../../Melecules/PubCard/PubCard";
import SideBarCard from "../../Organismes/SideBarCard/SideBarCard";
import { products } from "../../Utils/data";
import ProductItem from "../../Melecules/ProductItem/ProductItem";
import NavCard from "../../Melecules/NavCard/NavCard";
import Product from "../../Models/product.model";
import Separator from "../../Atoms/Separator/Separator";
import Quote from "../../Atoms/Quote/Quote";

type SideBarType = {
  children: ReactNode;
  className?: string;
};

const SideBar: FC<SideBarType> = ({ children, className }) => {
  let topSellingProducts: Product[] = JSON.parse(JSON.stringify(products));
  topSellingProducts.splice(0, 3);

  return (
    <div className={`${className}`}>
      {children}

      <PubCard className="hidden md:block" url={SideBar1} />

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

      {/* Pub card */}
      <PubCard url={SideBar2} className="md:mt-6 hidden md:block" />

      {/* Testimonials */}
      <SideBarCard name="Testimonials" className="my-6">
        <div className="flex flex-col justify-center items-center px-3 text-center">
          <div className=" mb-3 flex flex-col justify-center items-center relative">
           <Quote fill="rgb(253,124,80)" className="absolute top-0 right-1 w-10 h-10 z-10" />
            <img src={profil} alt="profil" className="relative z-20" />
            <div className="mt-3">
              <h2 className="uppercase text-primary font-semibold">Mme Claire rither</h2>
              <p>Designer</p>
            </div>
          </div>
          <Separator className="h-8 text-gray-100 bg-opacity-40" />
          <p className="pt-3 pb-2 text-gray-500">
            taciti sociosqu ad litora torquent, adipiscing elit. Ut ad minim veniam, quis nostrud exercitation ullamco laboris aliquip exea commodo consequat. Duis aute irure
          </p>
          <div className="flex justify-center items-center mt-3 mb-5">
            <span className="inline-block h-[.85rem] w-[.85rem] rounded-full bg-primary mr-3"></span>
            <span className="inline-block h-[.85rem] w-[.85rem] rounded-full bg-primary bg-opacity-50 mr-3"></span>
            <span className="inline-block h-[.85rem] w-[.85rem] rounded-full bg-primary bg-opacity-50 mr-3"></span>
          </div>
        </div>
      </SideBarCard>

      {/* Top Selling */}
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
