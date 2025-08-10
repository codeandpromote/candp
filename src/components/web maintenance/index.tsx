
import HeaderOne from '@/layouts/headers/HeaderOne';
import Cta2Area from '../homes/home/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import ServiceDetailsArea from './WebMaintenance';
import Breacrumbwebdev from '@/common/Breacrumbwebdev';

const WebDevServices = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumbwebdev title="Web Maintenance" subtitle="Web Maintenance" />
      <ServiceDetailsArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default WebDevServices;