import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="justify-around flex flex-col w-full md:flex-row mx-auto p-8 py-4">
      {/* Left Side */}
      <div className="flex flex-col md:w-1/2 space-y-3 md:space-y-4">
        <div className="flex items-center space-x-3">
          {/* title and user image */}
          <img src="https://imgs.search.brave.com/CDDvhzV6J8VWNYRes5lFasLXiRupzJrN61LK6_B_jHY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9keWwz/NDdoaXd2M2N0LmNs/b3VkZnJvbnQubmV0/L2FwcC91cGxvYWRz/LzIwMjMvMDkvU3Rh/ZGl1bV9WMl8xOTgw/JUUyJTgwJThBJUMz/JTk3JUUyJTgwJThB/MTEyOF9UZXh0LXNj/YWxlZC5qcGc" alt="User Image" className="w-12 h-12 rounded-full" />
          <h1 className="text-xl font-bold">ShubhamBlog</h1>
        </div>

        <div className="w-full">
          {/* description */}
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt excepturi, expedita error odit itaque eaque tempora vel atque nemo, repudiandae consequatur delectus quam natus, obcaecati voluptatem. Facere, illum laboriosam!
          </p>
        </div>

        <div className="flex space-x-3">
          {/* social media icons */}
          <img src="social-icon1-url.jpg" alt="Social Icon 1" className="w-6 h-6" />
          <img src="social-icon2-url.jpg" alt="Social Icon 2" className="w-6 h-6" />
          <img src="social-icon3-url.jpg" alt="Social Icon 3" className="w-6 h-6" />
          <img src="social-icon4-url.jpg" alt="Social Icon 4" className="w-6 h-6" />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex border-2 justify-around flex-col md:flex-row md:w-1/3 space-y-3 md:space-y-0 md:space-x-4 p-3 rounded-lg">
        {/* Links */}
        <div className="flex flex-col space-y-1">
          <h1 className="text-lg font-semibold">Link</h1>
          <a href="/" className="text-base hover:underline">HomePage</a>
          <a href="/blog" className="text-base hover:underline">Blog</a>
          <a href="/about" className="text-base hover:underline">About</a>
          <a href="/contact" className="text-base hover:underline">Contact</a>
        </div>

        {/* Tags */}
        <div className="flex flex-col space-y-1">
          <h1 className="text-lg font-semibold">Tag</h1>
          <span className="text-base">Style</span>
          <span className="text-base">Fashion</span>
          <span className="text-base">Coding</span>
          <span className="text-base">Travel</span>
        </div>

        {/* Social */}
        <div className="flex flex-col space-y-1">
          <h1 className="text-lg font-semibold">Social</h1>
          <a href="https://facebook.com" className="text-base font-bold hover:underline">Facebook</a>
          <a href="https://instagram.com" className="text-base font-bold hover:underline">Instagram</a>
          <a href="https://tiktok.com" className="text-base font-bold hover:underline">Tiktok</a>
          <a href="https://youtube.com" className="text-base font-bold hover:underline">Youtube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;