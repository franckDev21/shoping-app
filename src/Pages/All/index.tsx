import React from "react";
import Banner from "../../Organismes/Banner/Banner";
import Header from "../../Organismes/Header/Header";
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

    </AuthLayout>
  );
};

export default All;
