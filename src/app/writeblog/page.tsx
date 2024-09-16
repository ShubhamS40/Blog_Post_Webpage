"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"


const WriteBlog = () => {
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
      setPreviewImage(URL.createObjectURL(selectedImage));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission (e.g., send data to the backend)
    console.log({
      image,
      title,
      description,
      author,
    });

    alert("Blog submitted successfully!");

    // Reset form
    setImage(null);
    setPreviewImage(null);
    setTitle("");
    setDescription("");
    setAuthor("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full border-2  space-y-8 p-10 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-extrabold">Write a New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium">Blog Image</label>
            <div className="mt-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Blog Preview"
                  className="mt-4 rounded-lg shadow-md max-h-64 border border-gray-300"
                />
              )}
            </div>
          </div>

          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter the title"
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Write a short description"
            />
          </div>

          {/* Author Input */}
          <div>
            <label className="block text-sm font-medium">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Enter author name"
            />
          </div>

          {/* Submit Button */}
          <div>
          <Button variant="outline">Submit</Button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteBlog;