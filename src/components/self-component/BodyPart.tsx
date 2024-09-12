import React from 'react';

function BodyPart() {
  return (
    <div className="mx-auto flex justify-around">
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
