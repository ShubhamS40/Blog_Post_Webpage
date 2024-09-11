import React from 'react';

function BodyPart() {
  return (
    <div className="mx-auto">
      <section className="container px-6 py-10 mx-auto lg:h-128 lg:flex lg:items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-gray-800 dark:text-gray-200">
            A <span className="font-bold">free repository</span> for community <br className="hidden lg:block" />
            components using <span className="font-bold underline decoration-primary">Tailwind CSS</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" />
            bootstrap your new apps, projects, or landing sites!
          </p>

          {/* Search Form */}
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20 lg:w-2/3">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between"
            >
              <input
                type="search"
                name="query"
                placeholder="Search Components"
                required
                className="flex-1 h-10 px-4 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-2 lg:w-12 lg:h-12 lg:p-0 m-1 text-white bg-primary rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md"
          />
        </div>
      </section>
    </div>
  );
}

export default BodyPart;
