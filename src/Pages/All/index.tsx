import React from "react";
import Separator from "../../Atoms/Separator/Separator";
import Text from "../../Atoms/Text/Text";
import Card from "../../Melecules/Card/Card";
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
