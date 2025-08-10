
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../homes/home/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import ServiceDetailsArea from './MobileAppDevelopment';
import Breacrumbwebdev from '@/common/Breacrumbwebdev';
import Breacrumbmobileapp from '@/common/Breacrumbmobileapp';

const WebDevServices = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumbmobileapp title="Mobile App Development" subtitle="Mobile App Development" />
      <ServiceDetailsArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default WebDevServices;