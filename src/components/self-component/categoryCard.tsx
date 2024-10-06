import React from 'react';

interface Category {
  name: string;
  icon: string; // URL or path to the icon image
}

const categories: Category[] = [
  { name: 'Travel', icon: 'https://img.freepik.com/free-vector/travel-time-typography-design-with-travelling-objects_1308-89005.jpg?t=st=1728196891~exp=1728200491~hmac=0c54f0d378ceb5322680645138a6feea5ed48d49b384e171d9088a979552d920&w=826' },
  { name: 'Coding', icon: 'https://img.freepik.com/free-vector/young-programmer-working-laptop-computer-cartoon-character_24797-2123.jpg?t=st=1728196838~exp=1728200438~hmac=bc1e7493b879924d91482bdf074dc4145b6bbf522ab6725bbaca4a35ac7956dd&w=826' },
  { name: 'Culture', icon: 'https://img.freepik.com/free-vector/people-dancing-bollywood-illustrated_23-2148473797.jpg?t=st=1728196741~exp=1728200341~hmac=88951cf0e9f266f051a755741022967c49c9739eb3085fc6e35761aaf4279660&w=826' },
  { name: 'Fashion', icon: 'https://img.freepik.com/free-vector/model-girl-sketch_23-2147563559.jpg?t=st=1728196449~exp=1728200049~hmac=d459102be47237bea04cdda2a8e7415d7279acb7a34750d21e870ddbdb143095&w=826' },
  { name: 'Style', icon: 'https://img.freepik.com/free-vector/young-programmer-working-laptop-computer-cartoon-character_24797-2123.jpg?t=st=1728196838~exp=1728200438~hmac=bc1e7493b879924d91482bdf074dc4145b6bbf522ab6725bbaca4a35ac7956dd&w=826' },
];

const PopularCategories: React.FC = () => {
  return (
    <section className="container px-16 py-8 mx-auto border-2 rounded-lg lg:flex lg:items-center">
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
              className="w-10 h-10 mb-2"
            />
            {/* Show category name only once */}
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
