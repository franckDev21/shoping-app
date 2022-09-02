import React from "react";
import Banner from "../../Organismes/Banner/Banner";
import HotCategory from "../../Organismes/HotCategory/HotCategory";
import OutService from "../../Organismes/OutService/OutService";
import AuthLayout from "../../Templates/AuthLayout/AuthLayout";
import LatestBlog from "../../Organismes/LatestBlog/LatestBlog";
import Partner from "../../Organismes/Partner/Partner";
import TrendingProduct from "../../Organismes/TrendingProduct/TrendingProduct";

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
    </AuthLayout>
  );
};

export default All;
