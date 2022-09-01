import React from "react";
import Footer from "../../Organismes/Footer/Footer";
import Banner from "../../Organismes/Banner/Banner";
import Header from "../../Organismes/Header/Header";
import HotCategory from "../../Organismes/HotCategory/HotCategory";
import OutService from "../../Organismes/OutService/OutService";
import AuthLayout from "../../Templates/AuthLayout/AuthLayout";

const All = () => {
  return (
    <AuthLayout>
      {/* Header */}

      <Header className="bg-white" />
      {/* banner */}
      <Banner className="mb-10 " />

      {/* Services */}
      <OutService className="mb-10 bg-white" />

      {/* out categories */}
      <div className="container mb-10">
        <HotCategory className='my-5' />
      </div>

      <Footer className="bg-white" />
    </AuthLayout>
  );
};

export default All;
