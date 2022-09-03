import React from "react";
import Banner from "../../Organismes/Banner/Banner";
import HotCategory from "../../Organismes/HotCategory/HotCategory";
import OutService from "../../Organismes/OutService/OutService";
import AuthLayout from "../../Templates/AuthLayout/AuthLayout";
import LatestBlog from "../../Organismes/LatestBlog/LatestBlog";
import Partner from "../../Organismes/Partner/Partner";
import TrendingProduct from "../../Organismes/TrendingProduct/TrendingProduct";
import PubComponent from "../../Melecules/PubComponent/PubComponent";
import PubCard from "../../Melecules/PubCard/PubCard";

import Flyer from '../../image/flyer.jpg';
import SpecialProduct from "../../Organismes/SpecialProduct/SpecialProduct";
import DealOfTheDayCard from "../../Organismes/DealOfTheDayCard/DealOfTheDayCard";
import CategoriesProduct from "../../Organismes/CategoriesProduct/CategoriesProduct";

const All = () => {
  return (
    <AuthLayout
      Topcontent={
        <>
          {/* banner */}
          <Banner className="mb-2 md:mb-8 lg:mb-10 " />
          {/* Services */}
          <OutService className="mb-2 md:mb-8 lg:mb-10  bg-white" />

          {/* out categories */}
          <div className="container mb-6 md:mb-8 lg:mb-10 ">
            <HotCategory className="" />
          </div>
        </>
      }
      Bottomcontent={
        <>
          <div className="container mb-2 md:mb-8 lg:mb-10 ">
            <LatestBlog />
          </div>

          <div className="container">
            <Partner />
          </div>
        </>
      }
    >
      {/* content  */}
      <TrendingProduct />

      {/* pub row */}
      <PubComponent className="mt-5 md:mt-8 lg:mt-10" />

      {/* Deal Of The Day */}
      <DealOfTheDayCard className="mt-5 md:mt-8 mb-4 md:mb-8 lg:mb-10" />

      {/* Categories Products */}
      <CategoriesProduct className="mt-5 md:mt-8 lg:mt-14"   />

      {/* flyer pub */}
      <PubCard url={Flyer} className='mt-5 md:mt-8 lg:mt-20' />

      {/* Deal Of The Day */}
      <SpecialProduct className="mt-5 md:mt-8 lg:mt-14" />

    </AuthLayout>
  );
};

export default All;
