import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="shadow-lg rounded-lg max-w-4xl p-8">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our blog! We are passionate about sharing insightful articles, tips, and stories on a variety of topics. Our mission is to provide valuable content that inspires, educates, and entertains our readers.
        </p>
        <p className="text-lg mb-4">
          Our team of dedicated writers and editors work tirelessly to bring you the best content possible. We believe in the power of words and the impact they can have on our lives. Whether you're here to learn something new, find inspiration, or simply enjoy a good read, we hope you find what you're looking for.
        </p>
        <p className="text-lg">
          Thank you for visiting our blog. We appreciate your support and look forward to sharing more amazing content with you!
        </p>
      </div>
    </div>
  );
};

export default About;