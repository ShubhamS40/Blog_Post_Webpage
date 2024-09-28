"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

function CardBlog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);  // Use BlogPost interface for type safety
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState<string | null>(null);  // Error state

  interface BlogPost {
    id: number;
    title: string;
    description: string;
    author: string;
    image: string;
  }

  // Fetch blogs data when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/test");
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json(); // Ensure correct data type

        // Check if data is in the correct format
        if (data.blogPosts && Array.isArray(data.blogPosts)) {
          setBlogs(data.blogPosts);  // Store the blogPosts array in blogs
        } else {
          throw new Error('Unexpected data format');
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Display a loading message while fetching
  if (loading) {
    return <p>Loading...</p>;
  }

  // Display an error message if the fetch fails
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-5 ">
      {blogs.map((blog) => (
        <div key={blog.id} className="border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-[30%] overflow-hidden">
          <div className="overflow-hidden">
            <img
              src={blog.image}  // Use 'image' from the API response
              alt={blog.title}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h1 className="text-lg font-semibold mb-2">{blog.title}</h1>
            <p className="text-sm font-bold mb-2">{blog.description.substring(0,150)}...........</p>
            <p className="text-xs mb-2 text-gray-500">{blog.author}</p>
            <Link href={`/blogpost/${blog.id}`}>  {/* Use id for the link */}
              <Button variant="outline">Read More</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardBlog;