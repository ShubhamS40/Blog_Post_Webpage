"use client"

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

function CardBlog() {
  const [blogs, setBlogs] = useState([]);  // Corrected state variable name
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  // Fetch blogs data when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/blogs");
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();  // Corrected .json() call
        setBlogs(data);  // Store the response data in blogs
      } catch (error:any) {
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
    <div className="flex flex-wrap justify-around">
      {blogs.map((blog:any, index) => (  // Corrected to map over blogs
        <div key={index} className="border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto overflow-hidden">
          <div className="overflow-hidden">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-36 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-3">
            <h1 className="text-base font-semibold mb-2">{blog.title}</h1>
            <p className="text-sm mb-2">{blog.description}</p>
            <p className="text-xs mb-2 text-gray-500">{blog.author}</p>
            {/* Corrected slug handling in Link */}
            <Link   href={`/blogpost/${blog.slug}`}>
              <Button  variant="outline">Read More</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardBlog;
