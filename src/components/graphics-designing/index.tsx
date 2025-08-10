
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../homes/home/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import ServiceDetailsArea from './GraphicsDesigning';
import Breacrumbwebdev from '@/common/Breacrumbwebdev';
import Breacrumbgraphics from '@/common/Breacrumbgraphics';

const WebDevServices = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumbgraphics title="Graphics Designing" subtitle="Graphics Designing" />
      <ServiceDetailsArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default WebDevServices;