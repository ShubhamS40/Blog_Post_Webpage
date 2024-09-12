"use client"; // Ensure this component is treated as a Client Component

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"; // Ensure Button component exists in your project

const WriteBlog: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file)); // Set image preview
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const blogData = {
      imageUrl: imageUrl,
      title,
      author,
      description,
      content,
    };

    try {
      const formData = new FormData();
      formData.append('image', imageFile as Blob); // Append image file
      formData.append('blogData', JSON.stringify(blogData)); // Append other blog data

      // Replace with your API endpoint
      const res = await fetch('http://localhost:3000/api/blogs', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      alert('Blog submitted successfully!');
      // Reset form fields
      setImageUrl('');
      setImageFile(null);
      setTitle('');
      setAuthor('');
      setDescription('');
      setContent('');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit blog.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-lg w-full p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Write a New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="image" className="block text-lg font-bold">Image Upload</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
            {imageUrl && (
              <div className="mt-2">
                <img src={imageUrl} alt="Preview" className="w-full h-48 object-cover rounded-md shadow-sm" />
              </div>
            )}
          </div>
          <div>
            <label htmlFor="title" className="block text-lg font-bold">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              placeholder="Blog Title"
            />
          </div>
          <div>
            <label htmlFor="author" className="block text-lg font-bold">Author</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              placeholder="Author Name"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-lg font-bold">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              rows={4}
              placeholder="Short description of the blog"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-lg font-bold">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
              rows={8}
              placeholder="Full content of the blog"
            />
          </div>
          <div>
            <Button type="submit" variant="outline">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteBlog;