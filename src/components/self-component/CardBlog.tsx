import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const blogs = [
  {
    title: "C Programming Tutorial",
    description: "Learn the basics of C programming with this comprehensive tutorial.",
    author: "By Jon Doe",
    imageUrl: "https://www.skillvertex.com/blog/wp-content/uploads/2023/12/Data-Science-2024-01-03T152151.126-1.png",
    slug: "c-programming-tutorial"
  },
  {
    title: "JavaScript Essentials",
    description: "Master the fundamentals of JavaScript with this essential guide.",
    author: "By Jane Smith",
    imageUrl: "https://www.skillvertex.com/blog/wp-content/uploads/2023/12/JavaScript-Essentials.png",
    slug: "javascript-essentials"
  },
  {
    title: "React for Beginners",
    description: "Get started with React and build dynamic web applications.",
    author: "By Alice Johnson",
    imageUrl: "https://www.skillvertex.com/blog/wp-content/uploads/2023/12/React-for-Beginners.png",
    slug: "react-for-beginners"
  },
  {
    title: "C Programming Tutorial",
    description: "Learn the basics of C programming with this comprehensive tutorial.",
    author: "By Jon Doe",
    imageUrl: "https://www.skillvertex.com/blog/wp-content/uploads/2023/12/Data-Science-2024-01-03T152151.126-1.png",
    slug: "c-programming-tutorial"
  },
  {
    title: "JavaScript Essentials",
    description: "Master the fundamentals of JavaScript with this essential guide.",
    author: "By Jane Smith",
    imageUrl: "https://www.skillvertex.com/blog/wp-content/uploads/2023/12/JavaScript-Essentials.png",
    slug: "javascript-essentials"
  },
  {
    title: "React for Beginners",
    description: "Get started with React and build dynamic web applications.",
    author: "By Alice Johnson",
    imageUrl: "https://www.skillvertex.com/blog/wp-content/uploads/2023/12/React-for-Beginners.png",
    slug: "react-for-beginners"
  }
];

function cardBlog() {
  return (
    <div className='flex flex-wrap  justify-around'>
      {blogs.map((blog, index) => (
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
            <Link href={`/${blog.slug}`}><Button variant="outline">Read More</Button></Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default cardBlog;