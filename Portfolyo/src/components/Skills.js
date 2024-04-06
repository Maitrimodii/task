import React from 'react';

const Skills = ({ data }) => {
  return (
    <div>
      {/* Check if data and skills exist */}
      {data && data.skills && (
        <div className="px-8 flex flex-col justify-center mt-10 items-center w-full mb-10 h-auto lg:px-16 lg:mt-10">
          {/* Section title */}
          <div className="mb-8 flex justify-start items-center w-full lg:h-1/10 lg:w-full lg:flex lg:justify-start lg:items-center">
            <h1 className="text-2xl font-bold lg:text-4xl text-purple lg:px-4 lg:mt-0">My Skills</h1>
          </div>
          {/* Grid for displaying skills */}
          <div className="p-4 m-5 justify-center grid grid-cols-1 gap-16 w-full rounded-lg sm:grid-cols-2 lg:grid-cols-3">
            {/* Map through skills and render each skill */}
            {data.skills
              .filter(skill => skill.enabled) // Filter enabled skills
              .sort((a, b) => a.sequence - b.sequence) // Sort skills by sequence
              .map((skill) => (
                <div key={skill._id}>
                  {/* Individual skill card */}
                  <div className='flex justify-between'>
                      <div className='flex mb-4'>
                          <img 
                          src={skill.image.url} 
                          className="w-20 h-20 shadow-md shadow-slate-500 rounded-full p-2" 
                          alt={skill.name} 
                          loading="lazy" // lazy loading
                          />
                          <h2 className="text-lg py-2 px-4 mt-4">{skill.name}</h2>
                      </div>
                      <p className="font-bold p-2">{skill.percentage}<span className='text-purple'>%</span></p>
                  </div>
                  {/* Skill progress bar */}
                  <div className="w-full bg-slate-300 rounded-full h-2.5 mb-4 dark:bg-slate-400">
                    <div className="bg-purple h-2.5 rounded-full" style={{ width: `${skill.percentage}%` }} />
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
