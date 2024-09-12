import React from 'react';

interface Category {
  name: string;
  icon: string; // URL or path to the icon image
}

const categories: Category[] = [
  { name: 'Travel', icon: 'path/to/travel-icon.svg' },
  { name: 'Coding', icon: 'path/to/coding-icon.svg' },
  { name: 'Style', icon: 'path/to/style-icon.svg' },
  { name: 'Culture', icon: 'path/to/culture-icon.svg' },
  { name: 'Fashion', icon: 'path/to/fashion-icon.svg' },
];

const PopularCategories: React.FC = () => {
  return (
    <section className="container px-16 py-8 mx-auto border-2 rounded-lg  lg:flex lg:items-center">
      <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
        <h2 className="text-[1.5vw] font-semibold text-gray-800 dark:text-gray-200">
          Popular Categories
        </h2>
      </div>

      <div className="w-full lg:w-3/4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center p-3 bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <img
              src={category.icon}
              alt={`${category.name} icon`}
              className="w-10 h-10 mb-2"
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
