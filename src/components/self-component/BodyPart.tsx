import React from 'react';
import Blogsvg from '@/assets/blog-post-concept-illustration.png'
import Image from 'next/image';
import Typed from 'typed.js';
function BodyPart() {
    
  return (
    <div className="mx-auto flex justify-around">
      <section className="container px-6 py-10 mx-auto lg:h-128 lg:flex lg:items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-gray-800 dark:text-gray-200">
            A <span className="font-bold">free platform</span> for community <br className="hidden lg:block" />
            to <span className="font-bold underline decoration-primary">write and read blogs</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source platform for writing and reading blogs to <br className="hidden lg:block" />
            share your thoughts, ideas, and stories with the world!
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <Image
            src={Blogsvg}
            height={400}
            width={500}
            alt="blog write and read platform"
            className="w-full h-full max-w-md"
          />
        </div>
      </section>
    </div>
  );
}

export default BodyPart;