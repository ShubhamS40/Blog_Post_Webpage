"use client"

import Image from 'next/image';





export default function Page() {
 
    

    return (
        <div>
            <div className="min-h-screen font-sans">
      {/* Main Content */}
      <main className="px-8 py-16">
        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Article Information */}
          <div className="lg:w-3/5">
            <h1 className="text-4xl font-bold mb-6">
              ndjcfedbjcd
            </h1>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={"https://www.skillvertex.com/blog/wp-content/uploads/2023/12/Data-Science-2024-01-03T152151.126-1.png"}
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="text-sm">dfvdf</p>
            </div>
            <p className="text-lg leading-relaxed">
              State management is one of the most important concepts in the [React](https://reactjs.org/) world. As React components render and update, they rely on state to manage and reflect changes in data and UI elements...
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-2/5 flex justify-center">
            <Image
              src="https://media.istockphoto.com/id/1458782106/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-river-in.jpg?s=1024x1024&w=is&k=20&c=iPdhO2H3jeYh4UWmNlrXNmiiK04iaLykIMiD9u1yDq4="
              alt=""
              width={300}
              height={300}
            />
          </div>
        </section>

        {/* Why Zustand Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Why you should learn Zustand?</h2>
          <p className="text-lg leading-relaxed">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non expedita ab minus laudantium dolorum neque quos ipsam doloribus, error animi quaerat officia voluptates vitae cum ipsum rerum aliquam. Eaque nesciunt, laborum deleniti reiciendis molestiae nobis id. Ducimus unde voluptates a est accusamus, inventore non vel! Laborum soluta repudiandae quaerat deserunt velit. Quos voluptate ipsam corporis possimus blanditiis ducimus facilis error et quo ab. Quaerat explicabo labore corrupti pariatur minima aut voluptatum voluptates temporibus unde impedit minus eligendi, nostrum soluta at assumenda dicta, commodi sint facere error consequatur ex beatae dolorem! Harum dignissimos vero recusandae! Consectetur harum suscipit omnis, animi tempore sint sit voluptates neque labore eum et itaque alias repellat debitis hic enim iure, consequatur eius? Molestias doloremque ipsa quasi, quis suscipit aperiam quam velit totam ex excepturi distinctio nostrum illum laudantium labore architecto nemo nam numquam ratione incidunt veritatis a quae, expedita neque harum! Suscipit tenetur id magni molestiae.    </p>
        </section>

        {/* Most Popular Section */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Most Popular</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="p-4 rounded-lg hover:shadow-lg">
              <p className="text-sm">Travel</p>
              <h4 className="font-bold text-lg mt-2">A Journey Through Bohemian Beauty</h4>
              <p className="text-sm mt-1">Exploring the Streets of Prague</p>
            </li>
            <li className="p-4 rounded-lg hover:shadow-lg">
              <p className="text-sm">Culture</p>
              <h4 className="font-bold text-lg mt-2">Navigating First Impressions</h4>
              <p className="text-sm mt-1">Introduce Yourself</p>
            </li>
            <li className="p-4 rounded-lg hover:shadow-lg">
              <p className="text-sm">Food</p>
              <h4 className="font-bold text-lg mt-2">My Favorite Authentic Italian Pasta Dishes</h4>
            </li>
          </ul>
        </section>
      </main>
    </div>
        </div>
    )
  }