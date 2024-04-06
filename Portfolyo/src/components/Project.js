import React, { useState } from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import Modal from 'react-modal';

const Project = ({ data }) => {
  // State to manage the selected project and modal visibility
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal and set the selected project
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Function to close the modal and reset the selected project
  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return data && data.projects && (
    <>
      {/* Project list */}
      <div className="px-8 flex flex-col mt-10 items-center w-full mb-10 h-auto lg:px-16 lg:mt-10">
        <div className="mb-8 flex justify-start items-center w-full lg:h-1/10 lg:w-full lg:flex lg:justify-start lg:items-center">
          <h1 className="text-2xl font-bold lg:text-4xl text-purple lg:px-4 lg:mt-0">My Projects</h1>
        </div>
        <div className="px-4 mt-10 mb-10 transition-transform duration-300 ease-in-out grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 w-full">
          {/* Map through projects and render each project */}
          {data.projects
            .filter((project) => project.enabled)
            .sort((a, b) => a.sequence - b.sequence)
            .map((project) => (
              <div key={project._id}>
                <div className="relative">
                  <div className="flex flex-col justify-center shadow-md p-5 shadow-slate-500 rounded-lg">
                    <img
                      className="h-45 shadow-md mb-4 transition-transform duration-300 ease-in-out transform rounded-md hover:translate-y-2 cursor-pointer"
                      src={project.image.url}
                      alt={project.title}
                      loading="lazy" // lazy loading
                      onClick={() => openModal(project)}
                    />
                    <h2 className="text-xl md:text-2xl mb-4 mt-4 text-purple font-bold">{project.title}</h2>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* Modal for displaying project details */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="relative mt-20 bg-white dark:bg-dark rounded-lg border-2 shadow-lg xs:max-w-3xs sm:max-w-xs md:max-w-sm lg:max-w-md border-purple overflow-y-auto"
        overlayClassName="modal-overlay fixed inset-0 flex  items-center mt-10 justify-center overflow-y-auto"
        ariaHideApp={false}
      >
        {/* Close button */}
        <button onClick={closeModal} className='text-lg absolute right-4 hover:text-slate-400 focus:outline-none'>
          X
        </button>
        {/* Render project details */}
        {selectedProject && (
          <div className="flex flex-col justify-center p-6 rounded-xl m-auto shadow-md shadow-slate-500 bg-white dark:bg-dark">
            <img
              className="h-45 shadow-md mb-4 mt-4 transition-transform duration-300 ease-in-out transform rounded-md hover:translate-y-2 cursor-pointer"
              src={selectedProject.image.url}
              alt={selectedProject.title}
              loading="lazy" // lazy loading
            />
            <div className="flex flex-row justify-between">
              {/* Project title */}
              <h2 className="text-xl md:text-2xl mb-4 mt-4 text-purple font-bold">{selectedProject.title}</h2>
              {/* Links to GitHub and live demo */}
              <div className="flex flex-wrap mb-4">
                <a href={selectedProject.githuburl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <FaGithub className="h-6 w-6 mr-4 cursor-pointer text-purple" />
                </a>
                <a href={selectedProject.liveurl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MdOpenInNew className="h-6 w-6 mr-4 cursor-pointer text-purple" />
                </a>
              </div>
            </div>
            {/* Project description */}
            <p className="text-md">{selectedProject.description}</p>
            {/* Tech stack */}
            <div className="flex flex-wrap mt-4 mb-4">
              {selectedProject.techStack.map((tech, index) => (
                <div key={index} className="mr-2 font-bold text-purple">
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Project;
