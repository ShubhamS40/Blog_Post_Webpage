import React from 'react';

function RecentPost() {
  return (
    <div className="m-auto px-4 lg:px-0">
      {/* Title */}
      <div className="text-2xl font-bold mb-5 text-center lg:text-left">
        <h1>Recent Posts</h1>
      </div>

      {/* Posts Section */}
      <div className="flex flex-col lg:flex-row m-auto p-5 space-y-10 lg:space-x-10 max-w-6xl">
        {/* Recent Post Card */}
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-x-7 p-5 rounded-lg w-full lg:w-[70%] shadow-lg">
          <div className="h-[200px] lg:h-[250px] w-full lg:w-[60%]">
            <img
              src="https://imgs.search.brave.com/yMGFR2C_0hcEqaMHsmVw4-suSF1XNjiCQGD-YMmd9_w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92ZWN0/YS5pby9ibG9nL3Jl/c3BvbnNpdmUtaW1h/Z2VzLXdpdGgtc3Zn/LXZzLXNyY3NldC9z/cmNzZXQtd29ya2Zs/b3cuYTg3YjNiNDU4/ZC5zdmc"
              alt="Recent post"
              className="object-cover h-full w-full rounded-lg shadow-md"
            />
          </div>
          <div className="w-full space-y-4 lg:w-[40%]">
            {/* Post Date and Category */}
            <div>
              <p className="text-sm text-gray-600">2023-08-28 | Coding</p>
            </div>
            {/* Post Title */}
            <div>
              <h1 className="text-xl lg:text-2xl font-bold">
                Easiest way for React State
              </h1>
            </div>
            {/* Post Description */}
            <div>
              <p className="text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt at
                quia tempora nemo expedita, totam architecto eaque perspiciatis
                optio quis omnis quidem. Et doloribus iusto esse illo
                perspiciatis, eius nesciunt!
              </p>
            </div>
            {/* Read More Button */}
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg">
                Read more
              </button>
            </div>
          </div>
        </div>

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
