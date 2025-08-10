 
import ServiceDetails from "@/components/service-details";
import WebMaintenance from "@/components/web-maintenance";
import WebDevServices from "@/components/web-development";
import Wrapper from "@/layouts/Wrapper";
// Update the import path to match the actual file name, e.g.:
import UIUXServices from "@/components/uiux-designing";

export const metadata = {
	title: "UI & UX || Code & Promote - Best Digital Marketing | Web Development Agency",
  description:
    "Code & Promote - Best Digital Marketing | Web Development Agency",
	 
};

const index = () => {
	return (
		<Wrapper>
			<UIUXServices />
		</Wrapper>
	);
};

export default index;
