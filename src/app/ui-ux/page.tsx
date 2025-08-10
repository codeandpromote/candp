 
import ServiceDetails from "@/components/service-details";
import WebMaintenance from "@/components/web-maintenance";
import WebDevServices from "@/components/web-development";
import Wrapper from "@/layouts/Wrapper";
// Update the import path to match the actual file name, e.g.:
import UIUXServices from "@/components/uiux-designing";

export const metadata = {
	title: "Creative Graphic & UI/UX Design Services | Code & Promote",
  description:
    "Engaging graphic and UI/UX design services that deliver beautiful, user-friendly experiences for websites and apps.",
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
			<UIUXServices />
		</Wrapper>
	);
};

export default index;
