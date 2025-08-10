
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../homes/home/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import ServiceDetailsArea from './DigitalMarketingServices';
import Breacrumbwebdev from '@/common/Breacrumbwebdev';
import Brecrumbdigital from '@/common/Brecrumbdigital';

const WebDevServices = () => {
  return (
    <>
      <HeaderOne />
      <Brecrumbdigital title="Digital Marketing" subtitle="Digital Marketing" />
      <ServiceDetailsArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default WebDevServices;