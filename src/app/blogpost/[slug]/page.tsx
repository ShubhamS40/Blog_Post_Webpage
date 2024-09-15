"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { slug } = params;

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the API
  const getData = async (slug: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/blogpost/${slug}`, { cache: "no-store" });
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const fetchedData = await res.json();
      setData(fetchedData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(slug);
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div className="min-h-screen font-sans">
      <main className="px-8 py-16">
        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Article Information */}
          <div className="lg:w-3/5">
            <h1 className="text-4xl font-bold mb-6">{data.title}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={data.authorImage || "https://www.skillvertex.com/blog/wp-content/uploads/2023/12/Data-Science-2024-01-03T152151.126-1.png"}
                alt={data.author}
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className="text-sm">{data.author}</p>
            </div>
            <p className="text-lg leading-relaxed">{data.content}</p>
          </div>

          {/* Image Section */}
          <div className="lg:w-2/5 flex justify-center">
            <Image
              src={data.imageUrl || "https://media.istockphoto.com/id/1458782106/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-river-in.jpg?s=1024x1024&w=is&k=20&c=iPdhO2H3jeYh4UWmNlrXNmiiK04iaLykIMiD9u1yDq4="}
              alt={data.title}
              width={300}
              height={300}
            />
          </div>
        </section>

        {/* Why Zustand Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">Why you should learn Zustand?</h2>
          <p className="text-lg leading-relaxed">{data.zustandContent}</p>
        </section>

        {/* Most Popular Section */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-4">Most Popular</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example items */}
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
  );
};

export default Page;
