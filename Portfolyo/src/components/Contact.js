import React from 'react';
import Form from './Form';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ data }) => {
  return (
    // Main container for contact section
    <div className="px-8 justify-center items-center h-auto w-full mt-10 mb-10 lg:px-16">
      {/* Title */}
      <div className="mb-8 flex justify-start items-center w-full lg:flex lg:justify-between lg:items-center">
        <h1 className="text-2xl font-bold lg:text-4xl text-purple">Contact me</h1>
      </div>
      <div className="lg:flex md:flex lg:justify-start lg:items-start">
        <div className="md:w-1/2 lg:w-1/2 w-full flex lg:text-xl justify-center mt-10">
          <div className="text-center">
            {/* Quote */}
            <p className="mb-4">{data.about.quote}</p>
            {/* List of contact information */}
            <ul className="list-none pl-0 space-y-2">
              {/* Address */}
              <li className="flex items-center py-3">
                <span className="inline-block rounded-full bg-purple text-white px-2 py-1 mr-2">
                  <FaLocationDot />
                </span>
                <p>{data.about.address}</p>
              </li>
              <hr className="mx-2 h-1 w-full" />
              {/* Email */}
              <li className="flex items-center py-3">
                <span className="inline-block rounded-full bg-purple text-white px-2 py-1 mr-2">
                  <MdEmail />
                </span>
                <p>{data.about.contactEmail}</p>
              </li>
              <hr className="mx-2 h-1 w-full" />
              {/* Phone number */}
              <li className="flex items-center py-3">
                <span className="inline-block rounded-full bg-purple text-white px-2 py-1 mr-2">
                  <FaPhoneAlt />
                </span>
                <p>{data.about.phoneNumber}</p>
              </li>
              <hr className="mx-2 h-1 w-full" />
            </ul>
            {/* Social media links */}
            <div className="flex space-x-2 mt-6">
              {data.social_handles
                .filter((social) => social.enabled)
                .map((social, index) => (
                  <a href={social.url} target="_blank" rel="noopener noreferrer" key={index}>
                    <img className="w-10 mr-2" 
                    src={social.image.url}
                    alt={social.platform}
                    loading="lazy" // lazy loading
                     />
                  </a>
                ))}
            </div>
          </div>
        </div>
        {/* Form component */}
        <div className="md:w-1/2 lg:w-1/2 w-full lg:pr-10">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
