
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../homes/home/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import ServiceDetailsArea from './Uiux-Services';
import Breacrumbwebdev from '@/common/Breacrumbwebdev';
import Breacrumbui from '@/common/Breacrumbui';

const WebDevServices = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumbui title="Ui & UX Designing" subtitle="Ui & UX Designing" />
      <ServiceDetailsArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default WebDevServices;