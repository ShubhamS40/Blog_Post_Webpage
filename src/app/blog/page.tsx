import React from 'react';
import CardBlog from '@/components/self-component/CardBlog'
import Image from 'next/image';

const BlogPage: React.FC = () => {
  return (
    <div className="p-4">
      {/* Centered Blog Heading */}
      <h1 className="text-center text-3xl font-semibold mb-4">Blog</h1>

    
   <div className='flex flex-wrap  justify-around'>
<CardBlog/>
  
   </div>
   
   
    </div>
  );
};

export default BlogPage;
