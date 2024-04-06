import React from "react";

const About = ({ data }) => {
  return (
    <div>
      {/* Check if data exists before rendering */}
      {data && data.about && (
        <div className="px-8 flex flex-col mt-10 items-center w-full mb-20 h-auto lg:px-16 lg:mt-10">
          {/* Title */}
          <div className="mb-8 flex justify-start items-center w-full lg:h-1/10 lg:w-full lg:flex lg:justify-start lg:items-center">
            <h1 className="text-2xl font-bold lg:text-4xl text-purple lg:px-4">
              About Me
            </h1>
          </div>
          {/* Main content container */}
          <div className="w-auto h-auto flex flex-col justify-center items-center shadow:lg lg:flex lg:justify-center lg:h-[90%] lg:flex-row mt-10">
            {/* Profile image and details */}
            <div className="w-full h-[60vh] md:w-[60%]  sm:h-[52vh] flex justify-center items-center lg:h-[90%]  lg:w-3/5">
              <div className="rounded-md w-full flex flex-col justify-center items-center border-solid border-2 shadow-slate-500 border-slate-500 shadow-md lg:w-3/5 lg:h-full">
                <div className="flex flex-col justify-center items-center relative lg:flex lg:flex-col lg:justify-evenly lg:items-center lg:h-3/5 lg:w-full p-3">
                  {/* Profile image */}
                  <img
                    className="lg:w-3/5 rounded-md lg:h-3/5 z-20 lg:mt-5"
                    src={
                      data.about.avatar
                        ? data.about.avatar.url
                        : data.about
                            .alternateAvatars.url
                    }
                    width={230}
                    height={300}
                    alt="profile card img"
                    loading="lazy" //lazy loading
                  />
                  {/* Name and title */}
                  <h2 className="mt-4 text-xl lg:text-lg lg:mt-2">
                    {data.about.name}
                  </h2>
                  <h3 className="lg:text-sm z-20 text-slate-500 ">
                    {data.about.title}
                  </h3>
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="flex flex-col  mt-6 items-start h-auto lg:mt-0 lg:w-3/5 lg:flex lg:justify-center lg:items-center lg:flex-col">
              <h2 className="text-sm lg:text-lg lg:w-4/5 ">
                Hey, I&apos;m {data.about.name},
                and {data.about.subTitle}.
              </h2>
              <h2 className="text-sm lg:text-lg lg:w-4/5">
                {data.about.description}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;