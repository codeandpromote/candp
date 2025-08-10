import React from "react";
import ServiceArea from "./ServiceArea";
import ServiceAbout from "./ServiceAbout";
import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import PriceArea from "../homes/home-2/PriceArea";
import FooterOne from "@/layouts/footers/FooterOne";
import Cta2Area from "../homes/home/Cta2Area";
import Breacrumbservices from "@/common/Breacrumbservices";

const Service = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumbservices title="Services" subtitle="Services" />
      <ServiceArea />
      <ServiceAbout />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default Service;
