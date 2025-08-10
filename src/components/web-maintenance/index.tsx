

import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../homes/home/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import ServiceDetailsArea from './WebMaintenance';
import Breacrumbwebmain from '@/common/Breacrumbwebmain';

const WebDevServices = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumbwebmain title="Web Maintenance" subtitle="Web Maintenance" />
      <ServiceDetailsArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default WebDevServices;