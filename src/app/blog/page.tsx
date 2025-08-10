 
import Blog from "@/components/blog";  
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Latest News || Code & Promote - Best Digital Marketing | Web Development Agency",
  description:
    "Code & Promote - Best Digital Marketing | Web Development Agency",
	
};

const index = () => {
	return (
		<Wrapper>
			<Blog />
		</Wrapper>
	);
};

export default index;
