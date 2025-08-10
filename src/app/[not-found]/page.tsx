
import ErrorArea from '@/components/error';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
	title: "Web Development & Marketing That Drives Growth | Code & Promote",
  description:
    "Top digital agency offering expert web development, mobile apps, and marketing to build your brand and grow online.",
};



const index = () => {
  return (
    <Wrapper>
      <ErrorArea />      
    </Wrapper>
  );
};

export default index;