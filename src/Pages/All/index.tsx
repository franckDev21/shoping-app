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
          <Banner className="mb-10 " />
          {/* Services */}
          <OutService className="mb-10 bg-white" />

          {/* out categories */}
          <div className="container mb-10">
            <HotCategory className="my-5" />
          </div>
        </>
      }
      Bottomcontent={
        <>
          <div className="container mb-10">
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
      <PubComponent className="mt-20" />

      {/* Deal Of The Day */}
      <DealOfTheDayCard className="mt-14" />

      {/* Categories Products */}
      <CategoriesProduct className="mt-14"   />

      {/* flyer pub */}
      <PubCard url={Flyer} className='mt-20' />

      {/* Deal Of The Day */}
      <SpecialProduct className="mt-14" />

    </AuthLayout>
  );
};

export default All;
