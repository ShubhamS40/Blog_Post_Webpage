import React from 'react';
import CardBlog from '@/components/self-component/CardBlog'
import Image from 'next/image';

const BlogPage: React.FC = () => {
  return (
    <div className="p-4">
      {/* Centered Blog Heading */}
      <h1 className="text-center text-3xl font-semibold mb-4">Blog</h1>

    
   <div className='flex flex-wrap gap-5 justify-center'>
<CardBlog/>
  
   </div>
   <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        <div className="text-2xl font-bold">lamablog</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300">Homepage</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Login</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-8 py-16">
        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Article Information */}
          <div className="lg:w-3/5">
            <h1 className="text-4xl font-bold mb-6">
              Easiest Way for React State Management
            </h1>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/author-image.jpg" // replace with a real image path
                alt="Author"
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="text-sm">Martin Brewer - 21.08.2023</p>
            </div>
            <p className="text-lg leading-relaxed">
              State management is one of the most important concepts in the React world. As React components render and update, they rely on state to manage and reflect changes in data and UI elements...
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-2/5 flex justify-center">
            <Image
              src="/zustand-logo.png" // replace with a real image path
              alt="Zustand Logo"
              width={300}
              height={300}
            />
          </div>
        </section>

        {/* Why Zustand Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Why you should learn Zustand?</h2>
          <p className="text-lg leading-relaxed">
            One of Zustand’s standout features is its minimalist API, designed to streamline state management in React components...
          </p>
        </section>

        {/* Most Popular Section */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Most Popular</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="bg-gray-800 p-4 rounded-lg hover:shadow-lg">
              <p className="text-sm text-gray-400">Travel</p>
              <h4 className="font-bold text-lg mt-2">A Journey Through Bohemian Beauty</h4>
              <p className="text-sm text-gray-400 mt-1">Exploring the Streets of Prague</p>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg hover:shadow-lg">
              <p className="text-sm text-gray-400">Culture</p>
              <h4 className="font-bold text-lg mt-2">Navigating First Impressions</h4>
              <p className="text-sm text-gray-400 mt-1">Introduce Yourself</p>
            </li>
            <li className="bg-gray-800 p-4 rounded-lg hover:shadow-lg">
              <p className="text-sm text-gray-400">Food</p>
              <h4 className="font-bold text-lg mt-2">My Favorite Authentic Italian Pasta Dishes</h4>
            </li>
          </ul>
        </section>
      </main>
    </div>
   
    </div>
  );
};

export default BlogPage;
