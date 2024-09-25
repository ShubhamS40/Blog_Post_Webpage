// 'use client';

// import { useState, useEffect } from 'react';
// import { supabase } from '@/lib/supabaseClient'; // Ensure correct path

// export default function BlogPostForm() {
//   const [file, setFile] = useState<File | null>(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [author, setAuthor] = useState('');
//   const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
//   const [images, setImages] = useState<string[]>([]); // State to hold image URLs

//   // Function to fetch images from Supabase bucket
//   const fetchImages = async () => {
//     const { data, error } = await supabase.storage.from('BlogImage').list(); // Ensure 'image' is the correct bucket name
  
//     if (error) {
//       console.error('Error fetching images:', error);
//       return;
//     }
  
//     // Log the fetched files
//     console.log('Fetched files:', data);
  
//     // Construct URLs for the images
//     const imageUrls = data.map((file) => {
//       console.log('Constructing URL for file:', file.name); // Log each file being processed
//       return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/image/${file.name}`; 
//     });
  
//     console.log('Constructed image URLs:', imageUrls); // Log constructed URLs
  
//     setImages(imageUrls); // Set the image URLs in state
//   };
//   // Fetch images from Supabase bucket when component mounts
//   useEffect(() => {
//     fetchImages(); // Call fetchImages to get the images on component mount
//   }, []); // Empty dependency array means this runs once when the component mounts

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const selectedFile = e.target.files[0];
//       setFile(selectedFile);
//       // Create a URL for the selected file to show a preview
//       const fileUrl = URL.createObjectURL(selectedFile);
//       setUploadedImageUrl(fileUrl);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!file) {
//       alert('Please select a file');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('image', file);
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('author', author);

//     const res = await fetch('/api/blogpost', {
//       method: 'POST',
//       body: formData,
//     });

//     if (res.ok) {
//       const data = await res.json();
//       console.log('Blog post created:', data);
//       // Clear the form after successful submission
//       setFile(null);
//       setTitle('');
//       setDescription('');
//       setAuthor('');
//       setUploadedImageUrl(null); // Reset the image preview

//       // Fetch images again to include the newly uploaded image
//       fetchImages(); // Call the fetchImages function directly
//     } else {
//       const error = await res.json();
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         {uploadedImageUrl && (
//           <div>
//             <h4>Image Preview:</h4>
//             <img src={uploadedImageUrl} alt="Uploaded Preview" style={{ maxWidth: '200px', margin: '10px 0' }} />
//           </div>
//         )}
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Title"
//         />
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Description"
//         />
//         <input
//           type="text"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           placeholder="Author"
//         />
//         <button type="submit">Submit</button>
//       </form>

//       <div>
//         <h4>Uploaded Images:</h4>
//         <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//           {images.length === 0 ? (
//             <p>No images found.</p>
//           ) : (
//             images.map((imageUrl, index) => (
//               <img key={index} src={imageUrl} alt={`Image ${index + 1}`} style={{ maxWidth: '200px', margin: '10px' }} />
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



















// components/BlogPosts.tsx
"use client"
import React, { useEffect, useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  author: string;
  image: string;
}

const BlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/test');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setPosts(data.blogPosts);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded shadow">
          <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-bold mt-2">{post.title}</h2>
          <p className="mt-1">{post.description}</p>
          <p className="mt-2 text-gray-600">By {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
