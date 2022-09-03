import React, { FC, ReactNode } from "react";
import Footer from "../../Organismes/Footer/Footer";
import Header from "../../Organismes/Header/Header";
import Content from "../Content/Content";
import SideBar from "../SideBar/SideBar";

type AuthLayoutType = {
  children: ReactNode;
  sideBar?: ReactNode;
  Topcontent?: ReactNode;
  Bottomcontent?: ReactNode;
};

const AuthLayout: FC<AuthLayoutType> = ({
  children,
  sideBar,
  Topcontent,
  Bottomcontent,
}) => {
  return (
    <div className="overflow-hidden bg-gray-100 min-h-screen">
      {/* Header */}
      <Header className="bg-white" />

      {Topcontent}

      <main className="mb-10">
        <div className="container md:flex">
          <SideBar className="md:w-[16.475rem] md:mr-4">{sideBar}</SideBar>
          <Content className="md:w-[calc(100%-16.475rem)] md:ml-4">{children}</Content>
        </div>
      </main>

      {Bottomcontent}

      <Footer className="bg-white" />
    </div>
  );
};

export default AuthLayout;
