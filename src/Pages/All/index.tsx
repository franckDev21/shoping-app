import React from "react";
import Banner from "../../Organismes/Banner/Banner";
import Header from "../../Organismes/Header/Header";
import HotCategory from "../../Organismes/HotCategory/HotCategory";
import OutService from "../../Organismes/OutService/OutService";
import AuthLayout from "../../Templates/AuthLayout/AuthLayout";

const All = () => {
  return (
    <AuthLayout>
      {/* Header */}

      <Header />
      {/* banner */}
      <Banner className="mb-10 " />

      {/* Services */}
      <OutService className="mb-10" />

      {/* out categories */}
      <div className="container mb-10">
        <HotCategory className='my-5' />
      </div>
    </AuthLayout>
  );
};

export default All;
