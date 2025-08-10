 
import ServiceDetails from "@/components/service-details";
import WebDevServices from "@/components/web-development";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Custom Website Development for Every Business | Code & Promote",
  description:
    "Professional website development services delivering responsive, SEO-friendly designs that convert visitors into customers.",
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
			<WebDevServices />
		</Wrapper>
	);
};

export default index;
