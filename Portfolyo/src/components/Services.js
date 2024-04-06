import React, { useState } from 'react';

const Services = ({ data }) => {
  // State to track the currently hovered service
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div>
      {/* Check if data and services exist */}
      {data && data.services && (
        <div className="px-8 flex flex-col mt-10 items-center w-full mb-10 h-auto lg:px-16 lg:mt-10">
          {/* Section title */}
          <div className="mb-8 flex justify-start items-center w-full lg:h-1/10 lg:w-full lg:flex lg:justify-start lg:items-center">
            <h1 className="text-2xl font-bold lg:text-4xl text-purple lg:px-4 lg:mt-0">My Services</h1>
          </div>
          {/* Grid for displaying services */}
          <div className="px-4 mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 w-full">
            {/* Map through services and render each service */}
            {data.services
              .filter((service) => service.enabled) // Filter enabled services
              .map((service, index) => (
                <div 
                  key={index} 
                  className="relative"
                  onMouseEnter={() => setHoveredService(service)} // Set hovered service on mouse enter
                  onMouseLeave={() => setHoveredService(null)} // Clear hovered service on mouse leave
                >
                  <div className="flex flex-col justify-start p-6 rounded-xl shadow-md shadow-slate-500 transition-transform duration-300 ease-linear transform hover:translate-y-2">
                    <img 
                    className="h-64 w-full shadow-md mb-4 transition-transform duration-300 ease-in-out transform rounded-md hover:translate-y-2"
                    src={service.image.url} 
                    alt={service.name} 
                    loading="lazy" // lazy loading
                    />
                    <h2 className="text-xl md:text-2xl mb-4 mt-4 text-purple font-bold">{service.name}</h2>
                  </div>
                  {/* Display service details on hover */}
                  {hoveredService === service && (
                    <div className="absolute inset-0 flex flex-col justify-center px-10 rounded-xl shadow-md bg-white dark:bg-dark">
                      <h2 className="text-xl md:text-2xl mb-4 mt-4 text-purple font-bold">{service.name}</h2>
                      <p className="text-lg mb-4">Charge: <span className="text-purple font-bold">{service.charge}</span></p>
                      <p className="text-lg flex-wrap">{service.desc}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
