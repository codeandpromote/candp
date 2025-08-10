 
import DigitalMarketing from "@/components/digital-marketing";
import ServiceDetails from "@/components/service-details";
import WebDevServices from "@/components/web-development";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Digital Marketing || Code & Promote - Best Digital Marketing | Web Development Agency",
  description:
    "Code & Promote - Best Digital Marketing | Web Development Agency",
	 
};

const index = () => {
	return (
		<Wrapper>
			<DigitalMarketing />
		</Wrapper>
	);
};

export default index;
