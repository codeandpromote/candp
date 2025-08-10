import ServiceDetails from "@/components/service-details";
import WebMaintenance from "@/components/web-maintenance";
import WebDevServices from "@/components/web-development";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Reliable Website Maintenance & Security Services | Code & Promote",
  description:
    "Keep your site secure, updated, and fast with expert website maintenance services for smooth, uninterrupted performance.",

   keywords: [
    "web development",
    "digital marketing",
    "mobile app development",
    "SEO services",
    "social media marketing",
    "branding",
    "UI/UX design",
    "website design",
    "online advertising",
    "Code and Promote",
    "growth marketing",
    "full stack development",
    "WordPress development",
    "eCommerce solutions",
    "web design agency",
    "software development",
    "custom website development",
    "marketing agency",
    "app design",
    "digital strategy"
  ]
};

const index = () => {
  return (
    <Wrapper>
      <WebMaintenance />
    </Wrapper>
  );
};

export default index;
