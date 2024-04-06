import React, { useState, lazy, Suspense } from 'react';
import TypingComponent from './TypingComponent';
import Loading from './Loading';

// Lazy load the HeroImage component
const LazyHeroImage = lazy(() => import('./HeroImage'));

const Hero = ({ data }) => {
  // State to toggle social handles visibility
  const [showSocialHandles, setShowSocialHandles] = useState(true);

  // Function to toggle social handles visibility
  const toggleSocialHandles = () => {
    setShowSocialHandles(!showSocialHandles);
  };

  return (
    <div>
      {data && data.about && (
        <div className="px-8 flex flex-col-reverse justify-center items-center h-auto mb-10 mt-10 w-full lg:px-16 lg:flex-row lg:flex">
          {/* Content */}
          <div className="p-4 w-full flex justify-center items-start lg:h-full lg:w-7/12 lg:flex lg:justify-start lg:items-center">
            <div className="card w-full p-8 h-full border-2 shadow-slate-500 border-slate-500 rounded-md shadow-md flex flex-col transition-transform duration-300 ease-in-out transform justify-between hover:-translate-y-3 lg:p-8 lg:font-mono lg:h-3/5 lg:flex-col lg:flex lg:justify-between lg:text-2xl">
              <div>
                {/* Greeting */}
                <h1 className="lg:text-3xl text-xl mb-4 text-purple ">
                  Hello, I am {data.about.name}
                </h1>
                {/* Typing effect component */}
                <TypingComponent data={data} />
              </div>
              {/* Social handles */}
              <div className="info flex justify-center lg:flex lg:justify-end lg:text-lg">
                <div className={`flex flex-row mt-10 transition-transform duration-1000 ease-in-out transform ${showSocialHandles ? 'delay-300' : 'delay-100'} ${showSocialHandles ? 'translate-x-0' : 'translate-x-40'}`}>
                  {/* Render social handles if showSocialHandles is true */}
                  {showSocialHandles &&
                    data?.social_handles.filter((social) => social.enabled).map((social, index) => (
                      <a href={social.url} target="_blank" rel="noopener noreferrer" key={index}>
                        <img 
                        className="w-10 mr-2" 
                        src={social.image.url}
                        alt={social.platform}
                        loading="lazy" // lazy loading
                        />
                      </a>
                    ))}
                </div>
                {/* Button to toggle social handles visibility */}
                <button className="bg-purple p-2 rounded-lg border-2 border-purple shadow-md z-20 mt-10 sm:text-sm sm:p-1 hover:bg-light dark:hover:bg-dark" onClick={toggleSocialHandles}>
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
          {/* Lazy loaded HeroImage component */}
          <div className="left w-full h-45vh flex p-0 m-0 mt-2 justify-center items-center lg:h-full lg:max-h-[85%] xl:max-h-[65%] lg:w-3/5 lg:flex lg:justify-center lg:items-center">
            <Suspense fallback={<Loading />}>
              <LazyHeroImage />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
