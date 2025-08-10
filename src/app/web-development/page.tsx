 
import ServiceDetails from "@/components/service-details";
import WebDevServices from "@/components/web-development";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Web Development || Code & Promote - Best Digital Marketing | Web Development Agency",
  description:
    "Code & Promote - Best Digital Marketing | Web Development Agency",
	 
};

const index = () => {
	return (
		<Wrapper>
			<WebDevServices />
		</Wrapper>
	);
};

export default index;
