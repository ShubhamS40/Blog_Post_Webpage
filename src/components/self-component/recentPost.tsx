"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';


interface Post {
  id:number
  image: string;
  date: string;
  category: string;
  title: string;
  description: string;
}


function RecentPost() {
  const [recentPost, setRecentPost] = useState<Post | null>(null);
  
  useEffect(() => {
    const fetchRecentPost = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/blogs');
        const data = await response.json(); // Expecting an array of posts
        const blogPosts: Post[] = data.blogPosts;
        console.log(blogPosts);
        
        if (blogPosts.length > 0) {
          const lastPost = blogPosts[blogPosts.length - 1]; // Get the last post
          setRecentPost(lastPost); // Set the last post as recent
          console.log('Recent Post:', lastPost);
        } else {
          console.log('No posts found');
        }
      } catch (error) {
        console.error('Error fetching recent post:', error);
      }
    };
    
    fetchRecentPost();
  }, []);
  
  let router=useRouter()
  return (
    <div className="m-auto px-4 lg:px-0">
      {/* Title */}
      <div className="text-2xl font-bold mb-5 text-center lg:text-left">
        <h1>Recent Posts</h1>
      </div>

      {/* Posts Section */}
      <div className="flex flex-col lg:flex-row m-auto p-5 space-y-10 lg:space-x-10 max-w-6xl">
        {/* Recent Post Card */}
        {recentPost && (
          <div className="flex flex-col lg:flex-row space-y-5 lg:space-x-7 p-5 rounded-lg w-full lg:w-[70%] shadow-lg">
            <div className="h-[200px] lg:h-[250px] w-full lg:w-[60%]">
              <img
                src={recentPost.image}
                alt="Recent post"
                className="object-cover h-full w-full rounded-lg shadow-md"
              />
            </div>
            <div className="w-full space-y-4 lg:w-[40%]">
              {/* Post Date and Category */}
              <div>
                <p className="text-sm text-gray-600">{recentPost.date} | {recentPost.category}  {"24-may-2024"}</p>
              </div>
              {/* Post Title */}
              <div>
                <h1 className="text-xl lg:text-2xl font-bold">
                  {recentPost.title}
                </h1>
              </div>
              {/* Post Description */}
              <div>
                <p className="text-gray-700">
                  {recentPost.description.substring(0,150)}
                </p>
              </div>
              {/* Read More Button */}
              <div>
                <button onClick={()=>router.push(`/blogpost/${recentPost.id}`)} className="bg-blue-500 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg">
                  Read more
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Most Popular Section */}
        <div className="w-full lg:w-1/3 p-5 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Most Popular</h1>
          <div className="space-y-4">
            {/* Popular Post Title */}
            <div>
              <h2 className="text-xl font-semibold">Title</h2>
            </div>
            {/* Popular Post Description */}
            <div className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor.
            </div>
            {/* Author and Date */}
            <div className="text-gray-500">
              2024-02-20
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPost;