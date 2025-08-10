
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../homes/home/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import ServiceDetailsArea from './WebDevServices';
import Breacrumbwebdev from '@/common/Breacrumbwebdev';

const WebDevServices = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumbwebdev title="Web Development" subtitle="Web Development" />
      <ServiceDetailsArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default WebDevServices;