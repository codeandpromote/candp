 
import ServiceDetails from "@/components/service-details";
import WebMaintenance from "@/components/web-maintenance";
import WebDevServices from "@/components/web-development";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Web Maintenance || Code & Promote - Best Digital Marketing | Web Development Agency",
  description:
    "Code & Promote - Best Digital Marketing | Web Development Agency",
	 
};

const index = () => {
	return (
		<Wrapper>
			<WebMaintenance />
		</Wrapper>
	);
};

export default index;
