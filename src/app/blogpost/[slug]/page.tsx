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
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen">Error: {error}</div>;
  }

  if (!data) {
    return <div className="flex items-center justify-center h-screen">No data found</div>;
  }

  return (
    <div className="min-h-screen">
      <main className="px-8 py-16">
        {/* Article Section */}
        <section className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-3/5">
            <h1 className="mb-6 text-2xl font-mono font-bold">TITLE: {data.title}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={data.authorImage || "https://imgs.search.brave.com/B9tDsc8b4pK8dNXxe5X6MY3mUQhJsqjgaYP8vQfLHRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcm9w/LWNpcmNsZS5pbWFn/ZW9ubGluZS5jby9j/cm9wLWNpcmNsZS5w/bmc"}
                alt={data.author}
                width={40}
                height={40}
                className="rounded-full"
              />
              <p className='text-lg  font-bold'>author : {data.author}</p>
            </div>
            <h2 className="mb-4 font-bold">{data.description}</h2>
          </div>

          {/* Image Section */}
          <div className="lg:w-2/5 rounded-2xl flex border-2  p-4  justify-center">
            <Image
              src={data.image || "https://media.istockphoto.com/id/1458782106/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-river-in.jpg?s=1024x1024&w=is&k=20&c=iPdhO2H3jeYh4UWmNlrXNmiiK04iaLykIMiD9u1yDq4="}
              alt={data.title}
              width={600}
              height={400}
              className=" rounded-xl"
            />
          </div>
        </section>

        {/* Most Popular Section */}
        <section className="mt-16">
          <h3 className="mb-4">Most Popular</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example items */}
            <li className="p-6 rounded-lg shadow-lg transition-all duration-300">
              <p>Travel</p>
              <h4 className="mt-2">A Journey Through Bohemian Beauty</h4>
              <p className="mt-1">Exploring the Streets of Prague</p>
            </li>
            <li className="p-6 rounded-lg shadow-lg transition-all duration-300">
              <p>Culture</p>
              <h4 className="mt-2">Navigating First Impressions</h4>
              <p className="mt-1">Introduce Yourself</p>
            </li>
            <li className="p-6 rounded-lg shadow-lg transition-all duration-300">
              <p>Food</p>
              <h4 className="mt-2">My Favorite Authentic Italian Pasta Dishes</h4>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Page;